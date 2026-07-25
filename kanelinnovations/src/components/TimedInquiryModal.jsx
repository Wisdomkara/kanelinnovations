import { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { ArrowRight, Mail, X } from 'lucide-react';

const services = [
  'Website Design',
  'Web App Development',
  'Mobile App Development',
  'Sales Funnel Creation',
  'SEO & Digital Presence',
  'Automation & CRM Setup',
];

const initialForm = {
  name: '',
  email: '',
  service: services[0],
  message: '',
};

export default function TimedInquiryModal({ isOpen, onClose, onSubmitted }) {
  const [formData, setFormData] = useState(initialForm);
  const titleId = useId();
  const messageId = useId();
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Website enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Service needed: ${formData.service}`,
        '',
        `Message: ${formData.message || 'No extra message provided.'}`,
      ].join('\n')
    );

    window.location.href = `mailto:wiskara1@gmail.com?subject=${subject}&body=${body}`;
    setFormData(initialForm);
    onSubmitted();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center overflow-y-auto bg-slate-950/70 px-4 py-8 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}>
          <Motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={messageId}
            className="relative my-auto max-h-[calc(100svh-4rem)] w-full max-w-lg overflow-y-auto rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-950/25 dark:border-white/10 dark:bg-slate-950 sm:p-6"
            initial={{ opacity: 0, y: 40, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 26, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-blue-200 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white dark:focus:ring-blue-500/20"
              aria-label="Close enquiry popup">
              <X className="h-5 w-5" />
            </button>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-200">
              <Mail className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 id={titleId} className="mt-4 text-2xl font-black text-slate-950 dark:text-white">
              Tell us how we can help
            </h2>
            <p id={messageId} className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Share your details and the service you need. Your email app will open
              with the enquiry addressed to us.
            </p>

            <form className="mt-5 space-y-3" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="timed-inquiry-name" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Name
                  </label>
                  <input
                    id="timed-inquiry-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:ring-blue-500/20"
                  />
                </div>
                <div>
                  <label htmlFor="timed-inquiry-email" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Email
                  </label>
                  <input
                    id="timed-inquiry-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:ring-blue-500/20"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="timed-inquiry-service" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  How can we be of service?
                </label>
                <select
                  id="timed-inquiry-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:ring-blue-500/20">
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="timed-inquiry-message" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Short message <span className="font-normal text-slate-400">(optional)</span>
                </label>
                <textarea
                  id="timed-inquiry-message"
                  name="message"
                  rows="2"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:ring-blue-500/20"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-500/20">
                Send Enquiry
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
}
