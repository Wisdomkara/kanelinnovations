import { categories, isApplicable, answerOptions, ASSESSMENT_VERSION } from './config.js';

export function validateContact(input = {}) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) input = {};
  const errors = {};
  const contact = {};
  for (const [key, label, max] of [['name', 'Full name', 120], ['businessName', 'Business name', 160], ['email', 'Email address', 254], ['phone', 'Phone/WhatsApp number', 32], ['industry', 'Industry', 100], ['website', 'Website URL', 500]]) {
    const value = typeof input[key] === 'string' ? input[key].trim() : '';
    contact[key] = value;
    if ((key !== 'website' && value.length < 2) || value.length > max || /[<>]/.test(value) || [...value].some((char) => char.charCodeAt(0) < 32)) {
      errors[key] = `${label} must contain ${key === 'website' ? '0' : '2'}–${max} valid characters.`;
    }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) errors.email = 'Enter a valid email address.';
  if (!/^\+?[\d\s().-]+$/.test(contact.phone) || contact.phone.replace(/\D/g, '').length < 7 || contact.phone.replace(/\D/g, '').length > 15) errors.phone = 'Enter a valid phone number with 7–15 digits, including your country code.';
  if (contact.website) {
    try {
      const url = new URL(contact.website);
      if (!['https:', 'http:'].includes(url.protocol) || !url.hostname.includes('.') || url.username || url.password) throw new Error();
      contact.website = url.href;
    } catch { errors.website = 'Enter a full website address, such as https://example.com.'; }
  }
  contact.followUpConsent = input.followUpConsent === true;
  return { contact, errors };
}

export function normalizeAnswers(input = {}) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) input = {};
  const answers = {};
  const errors = [];
  for (const category of categories) {
    if (!isApplicable(category, answers)) {
      answers[category.id] = { present: 'no' };
      continue;
    }
    const supplied = input[category.id] || {};
    if (!['yes', 'no', 'unknown'].includes(supplied.present)) errors.push(`Answer the ${category.name} presence question.`);
    answers[category.id] = { present: supplied.present };
    if (supplied.present === 'yes') {
      for (const q of category.questions) {
        if (!answerOptions.some((option) => option.value === supplied[q.id])) errors.push(`Answer: ${q.label}`);
        answers[category.id][q.id] = supplied[q.id];
      }
    }
  }
  return { answers, errors };
}

export function validateSubmission(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) throw new Error('Invalid assessment.');
  if (body.version !== ASSESSMENT_VERSION) throw new Error('This assessment has changed. Refresh and try again.');
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(body.submissionId || '')) throw new Error('Invalid submission identifier.');
  const { contact, errors } = validateContact(body.contact);
  const { answers, errors: answerErrors } = normalizeAnswers(body.answers);
  const allErrors = [...Object.values(errors), ...answerErrors];
  if (allErrors.length) throw new Error(allErrors[0]);
  return { contact, answers, submissionId: body.submissionId, version: ASSESSMENT_VERSION };
}
