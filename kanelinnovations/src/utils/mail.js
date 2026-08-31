export const OWNER_EMAIL = 'support@kanelinnovations.com';
export const COMPANY_NAME = 'Kanel Innovations';
export const MAIL_API_URL = import.meta.env.VITE_MAIL_API_URL || '/api/send-email';

export function openOwnerEmailDraft(subject, lines) {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(lines.join('\n'));

  window.location.href = `mailto:${OWNER_EMAIL}?subject=${encodedSubject}&body=${encodedBody}`;
}

export async function sendOwnerEmail({
  subject,
  lines,
  name = 'Website visitor',
  fromEmail = OWNER_EMAIL,
  service = '',
  message = '',
}) {
  const inquiryMessage = lines.join('\n');

  try {
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
      throw new Error('Mail request failed');
    }

    return 'resend';
  } catch {
    openOwnerEmailDraft(subject, lines);
    return 'mailto';
  }
}
