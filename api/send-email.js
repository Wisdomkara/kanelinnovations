const OWNER_EMAIL = 'support@kanelinnovations.com';
const COMPANY_NAME = 'Kanel Innovations';
const RESEND_ENDPOINT = 'https://api.resend.com/emails';

function sanitizeText(value, fallback = '') {
  if (typeof value !== 'string') return fallback;
  return value.replace(/\0/g, '').trim().slice(0, 5000);
}

function escapeHtml(value) {
  return sanitizeText(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/\n/g, '<br />');
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function sendResendEmail(payload) {
  const response = await fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const responseBody = await response.json().catch(() => ({}));

  if (!response.ok) {
    const errorMessage = responseBody?.message || responseBody?.error || 'Resend request failed';
    throw new Error(errorMessage);
  }

  return responseBody;
}

module.exports = async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.RESEND_API_KEY) {
    return response.status(500).json({ error: 'Missing RESEND_API_KEY' });
  }

  const body = request.body || {};
  const name = sanitizeText(body.name, 'Website visitor');
  const email = sanitizeText(body.email);
  const service = sanitizeText(body.service, 'General enquiry');
  const subject = sanitizeText(body.subject, `${service} enquiry from ${name}`);
  const message = sanitizeText(body.message || body.inquiryMessage, 'No extra message provided.');
  const inquiryMessage = sanitizeText(body.inquiryMessage, message);

  if (!isEmail(email)) {
    return response.status(400).json({ error: 'A valid email address is required' });
  }

  const submittedAt = new Date().toLocaleString('en', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Africa/Lagos',
  });

  try {
    await sendResendEmail({
      from: `${COMPANY_NAME} Website <support@kanelinnovations.com>`,
      to: [OWNER_EMAIL],
      reply_to: email,
      subject,
      html: `
        <h2>New website enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Service:</strong> ${escapeHtml(service)}</p>
        <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
        <hr />
        <p>${escapeHtml(inquiryMessage)}</p>
      `,
      text: [
        'New website enquiry',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Service: ${service}`,
        `Submitted: ${submittedAt}`,
        '',
        inquiryMessage,
      ].join('\n'),
    });

    await sendResendEmail({
      from: `${COMPANY_NAME} <support@kanelinnovations.com>`,
      to: [email],
      reply_to: OWNER_EMAIL,
      subject: `We received your ${service.toLowerCase()} enquiry`,
      html: `
        <p>Hello ${escapeHtml(name.split(' ')[0] || name)},</p>
        <p>Thank you for contacting ${COMPANY_NAME}.</p>
        <p>We have received your enquiry about <strong>${escapeHtml(service)}</strong>. Our team will review it and get back to you as soon as possible.</p>
        <p>If your request is urgent, reply to this email or contact us on WhatsApp.</p>
        <p>Best regards,<br />${COMPANY_NAME}<br />${OWNER_EMAIL}</p>
      `,
      text: [
        `Hello ${name.split(' ')[0] || name},`,
        '',
        `Thank you for contacting ${COMPANY_NAME}.`,
        '',
        `We have received your enquiry about ${service}. Our team will review it and get back to you as soon as possible.`,
        '',
        'If your request is urgent, reply to this email or contact us on WhatsApp.',
        '',
        'Best regards,',
        COMPANY_NAME,
        OWNER_EMAIL,
      ].join('\n'),
    });

    return response.status(200).json({ ok: true });
  } catch (error) {
    return response.status(502).json({ error: error.message || 'Unable to send email' });
  }
};
