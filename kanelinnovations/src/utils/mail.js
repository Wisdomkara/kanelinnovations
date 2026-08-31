export const OWNER_EMAIL = 'support@kanelinnovations.com';
export const COMPANY_NAME = 'Kanel Innovations';
export const MAIL_API_URL = import.meta.env.VITE_MAIL_API_URL || '/api/send-email';

export async function sendOwnerEmail({
  subject,
  lines,
  name = 'Website visitor',
  fromEmail = OWNER_EMAIL,
  service = '',
  message = '',
}) {
  const inquiryMessage = lines.join('\n');

  const response = await fetch(MAIL_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email: fromEmail,
      subject,
      message: message || inquiryMessage,
      inquiryMessage,
      service,
    }),
  });

  if (!response.ok) {
    const result = await response.json().catch(() => ({}));
    throw new Error(result.error || 'Unable to send your enquiry. Please try again.');
  }

  return 'resend';
}
