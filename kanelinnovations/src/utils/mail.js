import emailjs from '@emailjs/browser';

export const OWNER_EMAIL = 'wiskara1@gmail.com';

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
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const inquiryMessage = lines.join('\n');

  if (serviceId && templateId && publicKey) {
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name,
          to_email: OWNER_EMAIL,
          from_email: fromEmail,
          subject,
          message: message || inquiryMessage,
          company: '',
          service,
          timeline: '',
          time: new Date().toLocaleString(),
          inquiry_message: inquiryMessage,
        },
        publicKey
      );
      return 'emailjs';
    } catch {
      openOwnerEmailDraft(subject, lines);
      return 'mailto';
    }
  }

  openOwnerEmailDraft(subject, lines);
  return 'mailto';
}
