const fs = require('fs');
const path = require('path');
let fetch;
try {
  fetch = global.fetch || require('node-fetch');
} catch (e) {
  // node-fetch v3 is ESM; attempt dynamic import for compatibility
  try {
    const mod = await import('node-fetch');
    fetch = mod.default;
  } catch (err) {
    console.error('Unable to load fetch. Run this script with Node 18+ or install node-fetch.');
    throw err;
  }
}

function loadEnv(file) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);
  const env = {};
  for (const line of lines) {
    const m = line.match(/^([^=]+)=(.*)$/);
    if (m) env[m[1].trim()] = m[2].trim();
  async function getFetch() {
    if (global.fetch) return global.fetch;
    try {
      // try require (works if node-fetch v2 is installed)
      // eslint-disable-next-line global-require
      const nf = require('node-fetch');
      return nf;
    } catch (e) {
      try {
        const mod = await import('node-fetch');
        return mod.default;
      } catch (err) {
        throw new Error('Unable to load fetch. Run this script with Node 18+ or install node-fetch.');
      }
    }
  }

  async function main() {
    try {
      fetch = await getFetch();

      const envPath = path.resolve(__dirname, '..', '.env.local');
      const env = loadEnv(envPath);
      const service_id = env.VITE_EMAILJS_SERVICE_ID;
      const template_id = env.VITE_EMAILJS_TEMPLATE_ID;
      const user_id = env.VITE_EMAILJS_PUBLIC_KEY;

      if (!service_id || !template_id || !user_id) {
        console.error('Missing keys in .env.local');
        process.exit(1);
      }

      const body = {
        lib_version: 'node-test',
        user_id,
        service_id,
        template_id,
        template_params: {
          name: 'Test Sender',
          from_email: 'test@example.com',
          subject: 'Test email from local script',
          message: 'This is a test message from scripts/test-email.js',
        },
      };

      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const text = await res.text();
      console.log('Status:', res.status);
      console.log('Response:', text);
    } catch (err) {
      console.error('Error:', err.stack || err.message || err);
      process.exit(1);
    }
  }

  main();
