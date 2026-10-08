const { createHash } = require('node:crypto');

const ADMIN_EMAIL = 'admin@kanelinnovations.com';
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const attempts = new Map();

async function sendEmail(payload, key) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json', 'Idempotency-Key': key },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(12000),
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok || !result.id) throw new Error('Email provider did not accept the message.');
  return result.id;
}

module.exports = async function handler(request, response) {
  response.setHeader('Cache-Control', 'no-store');
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed.' });
  }
  if (!request.headers?.['content-type']?.startsWith('application/json')) return response.status(415).json({ error: 'Send JSON.' });
  if (Buffer.byteLength(JSON.stringify(request.body ?? {})) > 20000) return response.status(413).json({ error: 'Assessment is too large.' });
  if (!process.env.RESEND_API_KEY) return response.status(503).json({ error: 'Email delivery is temporarily unavailable. Please try again later.' });

  const [{ validateSubmission }, { scoreAssessment }, { recommend }, { categories }, { scoreServices }] = await Promise.all([
    import('../kanelinnovations/src/digital-score/validation.js'),
    import('../kanelinnovations/src/digital-score/scoring.js'),
    import('../kanelinnovations/src/digital-score/recommendations.js'),
    import('../kanelinnovations/src/digital-score/config.js'),
    import('../kanelinnovations/src/digital-score/services.js'),
  ]);
  let submission;
  try { submission = validateSubmission(request.body); }
  catch (error) { return response.status(400).json({ error: error.message }); }
  if (request.body.companyWebsite) return response.status(400).json({ error: 'Unable to submit this assessment.' });

  // Best-effort per-instance protection; production should also use a platform rate limit.
  const now = Date.now();
  for (const [key, entry] of attempts) if (entry.until <= now) attempts.delete(key);
  const address = request.headers['x-real-ip'] || request.socket?.remoteAddress || 'unknown';
  const attempt = attempts.get(address) || { count: 0, until: now + 600000 };
  if (attempt.count >= 10 || attempts.size >= 10000) {
    response.setHeader('Retry-After', '600');
    return response.status(429).json({ error: 'Too many attempts. Please try again in ten minutes.' });
  }
  attempt.count += 1;
  attempts.set(address, attempt);

  const { contact, answers, submissionId } = submission;
  const result = scoreAssessment(answers);
  const recommendations = recommend(answers, result);
  const site = (process.env.SITE_URL || 'https://kanelinnovations.com').replace(/\/$/, '');
  const from = `Kanel Innovations <${process.env.DIGITAL_SCORE_FROM_EMAIL || 'support@kanelinnovations.com'}>`;
  const scoreLines = result.categoryScores.map((item) => `${item.name}: ${item.score}/${item.maximum}`);
  const reportLines = [
    `Hello ${contact.name},`, '',
    `Your Overall Digital Business Score for ${contact.businessName}: ${result.overallScore}%`, result.classification,
    'This score is based on your answers and is not an independent audit.', '', 'YOUR SCORE BREAKDOWN', ...scoreLines,
    '', 'HOW WE CAN IMPROVE YOUR DIGITAL PRESENCE',
    ...(recommendations.priorities.length ? recommendations.priorities.map((gap) => `${gap.title}: ${gap.why}\nNext step: ${gap.action}\nHow Kanel can help: ${gap.service}`) : ['Your answers indicate strong foundations. We can help you maintain and improve them.']),
    '', 'ALL IDENTIFIED GAPS AND HOW WE CAN HELP',
    ...recommendations.gaps.map((gap) => `${gap.title}\n${gap.action}\nService: ${gap.service}`),
    '', 'YOUR 90-DAY IMPROVEMENT PLAN',
    ...recommendations.roadmap.map((stage) => `Month ${stage.month}: ${stage.title}\n${stage.actions.join('\n')}`),
    '', 'ALL KANEL SERVICES AVAILABLE TO YOU',
    ...scoreServices.map((service) => `${service.name}: ${service.description}\n${site}${service.path}`),
    '', 'Reply to this email to discuss your priorities with our team.',
    `Email: ${ADMIN_EMAIL}`, 'WhatsApp: https://wa.me/2347084153584',
  ];
  const adminLines = ['New Digital Business Score assessment', `Submission: ${submissionId}`,
    ...Object.entries(contact).map(([key, value]) => `${key}: ${value}`), '', ...reportLines,
    '', 'ASSESSMENT ANSWERS', ...categories.flatMap((category) => [
      `${category.name}: ${answers[category.id].present}`,
      ...category.questions.filter((q) => answers[category.id][q.id]).map((q) => `${q.label}: ${answers[category.id][q.id]}`),
    ])];
  const html = (lines) => `<div style="font-family:Arial,sans-serif;line-height:1.7;color:#172554;max-width:640px;margin:auto"><h1>Kanel Innovations</h1>${lines.map((line) => line ? `<p>${escapeHtml(line).replace(/\n/g, '<br>')}</p>` : '<hr>').join('')}</div>`;
  const digest = createHash('sha256').update(JSON.stringify(submission)).digest('hex');
  const key = `digital-score/${submissionId}/${digest}`;
  const delivery = { admin: 'failed', client: 'failed' };
  // Stable content and separate keys let a retry recover either failed message.
  for (const [recipient, payload] of [
    ['admin', { from, to: [ADMIN_EMAIL], reply_to: contact.email, subject: `Digital Business Score: ${contact.businessName} (${result.overallScore}%)`, text: adminLines.join('\n'), html: html(adminLines) }],
    ['client', { from, to: [contact.email], reply_to: ADMIN_EMAIL, subject: `Your Overall Kanel Digital Business Score: ${result.overallScore}%`, text: reportLines.join('\n'), html: html(reportLines) }],
  ]) {
    try { await sendEmail(payload, `${key}/${recipient}`); delivery[recipient] = 'accepted'; }
    catch { /* Do not expose provider errors or customer information. */ }
  }
  const ok = Object.values(delivery).every((status) => status === 'accepted');
  return response.status(ok ? 200 : 207).json({ ok, result, recommendations, delivery });
};
