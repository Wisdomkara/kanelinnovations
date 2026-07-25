import React, { useEffect, useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import SuccessModal from './components/SuccessModal.jsx';
import TimedInquiryModal from './components/TimedInquiryModal.jsx';
import BlogNewsPage from './pages/BlogNewsPage.jsx';
import { sendOwnerEmail } from './utils/mail.js';
import {
  About,
  Blog,
  Contact,
  Home,
  Process,
  Projects,
  Team,
  Testimonials,
} from './components/sections.jsx';

const sectionSpacing = 'px-5 py-16 sm:px-6 sm:py-20 md:px-10 lg:px-16 lg:py-24';
const containerClass = 'mx-auto max-w-7xl';
const contentGap = 'mt-10 lg:mt-12';

function HomePage({ theme, onToggleTheme }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [footerModal, setFooterModal] = useState({
    isOpen: false,
    title: '',
    message: '',
  });
  const [timedInquiryOpen, setTimedInquiryOpen] = useState(false);
  const [timedInquiryDismissed, setTimedInquiryDismissed] = useState(false);

  useEffect(() => {
    if (timedInquiryDismissed) return undefined;

    const timer = setTimeout(() => {
      setTimedInquiryOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, [timedInquiryDismissed]);

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
    void sendOwnerEmail({
      subject: 'Newsletter subscription request',
      lines: [
        'A visitor subscribed to email updates.',
        '',
        `Email: ${newsletterEmail}`,
      ],
      name: 'Newsletter subscriber',
      fromEmail: newsletterEmail,
      service: 'Newsletter',
    });
    setFooterModal({
      isOpen: true,
      title: 'You are on the list',
      message: 'Thanks for subscribing. We will send practical digital growth updates to your inbox.',
    });
    setNewsletterEmail('');
  };

  return (
    <>
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <main>
        <Home />
        <About />
        <Team />
        <Testimonials />
        <Projects />
        <Process />
        <Blog />
        <Contact />
      </main>

      <footer className={`border-t border-slate-200/80 bg-slate-950 text-white dark:border-white/10 ${sectionSpacing}`}>
        <div className={`${containerClass} grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-[1.2fr_0.7fr_0.7fr_1fr]`}>
          <div className="sm:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300 sm:text-sm">
              Kanel innovations
            </p>
            <h3 className="mt-4 max-w-xl text-2xl font-black sm:text-3xl">
              Modern websites, apps, funnels, SEO, and digital growth systems in one team.
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              We help businesses look sharper, launch better, and convert more
              of the attention they earn online.
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold text-white sm:text-lg">Services</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300 sm:text-base">
              {[
                'Website design',
                'App development',
                'Funnel creation',
                'SEO and awareness',
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold text-white sm:text-lg">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300 sm:text-base">
              <li>Lagos, Nigeria</li>
              <li>+2347084153584</li>
              <li className="break-all">kaneltechnology@gmail.com</li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-base font-bold text-white sm:text-lg">Email updates</h4>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Get short notes on websites, funnels, SEO, and digital growth.
            </p>
            <form className="mt-4 space-y-3" onSubmit={handleNewsletterSubmit}>
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    id="footer-email"
                    type="email"
                    value={newsletterEmail}
                    onChange={(event) => setNewsletterEmail(event.target.value)}
                    required
                    autoComplete="email"
                    placeholder="Email address"
                    className="min-h-11 w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:ring-4 focus:ring-blue-500/20"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex min-h-11 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                  aria-label="Subscribe to email updates">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className={`${containerClass} ${contentGap} border-t border-white/10 pt-6 text-xs text-slate-400 sm:text-sm`}>
          &copy; 2026 Kanel innovations. All rights reserved.
        </div>
      </footer>

      <SuccessModal
        isOpen={footerModal.isOpen}
        title={footerModal.title}
        message={footerModal.message}
        onClose={() => setFooterModal((prev) => ({ ...prev, isOpen: false }))}
      />
      <TimedInquiryModal
        isOpen={timedInquiryOpen}
        onClose={() => {
          setTimedInquiryOpen(false);
          setTimedInquiryDismissed(true);
        }}
        onSubmitted={() => {
          setTimedInquiryOpen(false);
          setTimedInquiryDismissed(true);
          setFooterModal({
            isOpen: true,
            title: 'Enquiry ready',
            message: 'Your enquiry has been prepared for delivery to Kanel innovations.',
          });
        }}
      />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-500">
      {loading && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[var(--bg-primary)] transition-opacity duration-500">
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />
            <h2 className="mt-5 text-2xl font-black text-blue-700 dark:text-blue-300">
              Kanel innovations
            </h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Building premium digital experiences...
            </p>
          </div>
        </div>
      )}

      <div className={`transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Routes>
          <Route
            path="/"
            element={<HomePage theme={theme} onToggleTheme={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))} />}
          />
          <Route path="/blog-news" element={<BlogNewsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
