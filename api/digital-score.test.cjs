const { test, afterEach } = require('node:test');
const assert = require('node:assert/strict');
const handler = require('./digital-score.js');
const originalFetch = global.fetch;
const originalKey = process.env.RESEND_API_KEY;
afterEach(() => { global.fetch = originalFetch; if (originalKey === undefined) delete process.env.RESEND_API_KEY; else process.env.RESEND_API_KEY = originalKey; });

async function fixture() {
  const { categories, ASSESSMENT_VERSION } = await import('../kanelinnovations/src/digital-score/config.js');
  return {
    version: ASSESSMENT_VERSION, submissionId: 'a7e587e0-916c-43d1-a51a-096743af8aaa',
    contact: { name: 'Sample Client', businessName: 'Sample Business', email: 'client@example.com', phone: '+2348000000000', industry: 'Retail', website: '', followUpConsent: false },
    answers: Object.fromEntries(categories.map((category) => [category.id, { present: 'yes', ...Object.fromEntries(category.questions.map((q) => [q.id, 'yes'])) }])),
  };
}
async function invoke(body, method = 'POST') {
  let status; let result;
  await handler({ method, body, headers: { 'content-type': 'application/json' }, socket: { remoteAddress: '127.0.0.1' } }, {
    setHeader() {}, status(value) { status = value; return this; }, json(value) { result = value; return this; },
  });
  return { status, result };
}
test('server recomputes score and sends complete reports to fixed admin and client', async () => {
  process.env.RESEND_API_KEY = 'synthetic-test-key';
  const sent = [];
  global.fetch = async (url, options) => { sent.push({ payload: JSON.parse(options.body), key: options.headers['Idempotency-Key'] }); return { ok: true, json: async () => ({ id: 'synthetic-email-id' }) }; };
  const body = await fixture(); body.overallScore = 0; body.to = 'attacker@example.com';
  const response = await invoke(body);
  assert.equal(response.status, 200);
  assert.equal(response.result.result.overallScore, 100);
  assert.deepEqual(sent[0].payload.to, ['admin@kanelinnovations.com']);
  assert.deepEqual(sent[1].payload.to, ['client@example.com']);
  assert.equal(sent[0].payload.reply_to, 'client@example.com');
  assert.equal(sent[1].payload.reply_to, 'admin@kanelinnovations.com');
  assert.match(sent[0].payload.text, /followUpConsent: false/);
  const { scoreServices } = await import('../kanelinnovations/src/digital-score/services.js');
  for (const service of scoreServices) assert.ok(sent[1].payload.text.includes(service.name));
  assert.match(sent[1].payload.text, /100\/100/);
  await invoke(body);
  assert.deepEqual(sent.slice(0, 2), sent.slice(2));
});
test('reports partial delivery and still attempts client after admin fails', async () => {
  process.env.RESEND_API_KEY = 'synthetic-test-key';
  let calls = 0;
  global.fetch = async () => { calls++; if (calls === 1) throw new Error('secret provider details'); return { ok: true, json: async () => ({ id: 'client-id' }) }; };
  const response = await invoke(await fixture());
  assert.equal(response.status, 207);
  assert.equal(response.result.ok, false);
  assert.deepEqual(response.result.delivery, { admin: 'failed', client: 'accepted' });
  assert.ok(!JSON.stringify(response.result).includes('secret'));
});
test('rejects missing answers and malformed contact without sending', async () => {
  process.env.RESEND_API_KEY = 'synthetic-test-key';
  global.fetch = async () => { throw new Error('Must not send'); };
  const body = await fixture(); body.answers = null;
  assert.equal((await invoke(body)).status, 400);
  body.contact = null;
  assert.equal((await invoke(body)).status, 400);
  assert.equal((await invoke(body, 'GET')).status, 405);
});
test('absent foundations produce zero and useful service recommendations', async () => {
  process.env.RESEND_API_KEY = 'synthetic-test-key';
  const sent = [];
  global.fetch = async (_, options) => { sent.push(JSON.parse(options.body)); return { ok: true, json: async () => ({ id: 'id' }) }; };
  const body = await fixture();
  for (const category of Object.values(body.answers)) category.present = 'no';
  const response = await invoke(body);
  assert.equal(response.result.result.overallScore, 0);
  assert.equal(response.result.recommendations.gaps.length, 8);
  assert.match(sent[1].text, /Build a business website/);
  assert.match(sent[1].text, /Month 3/);
});
