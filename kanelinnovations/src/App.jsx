import React, { useEffect, useState } from 'react';
import { ArrowRight, LoaderCircle, Mail } from 'lucide-react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import SuccessModal from './components/SuccessModal.jsx';
import TimedInquiryModal from './components/TimedInquiryModal.jsx';
import BlogNewsPage from './pages/BlogNewsPage.jsx';
import BusinessAutomationsPage from './pages/BusinessAutomationsPage.jsx';
import ServiceDetailPage from './pages/ServiceDetailPage.jsx';
import { sendOwnerEmail } from './utils/mail.js';
import {
  About,
  Blog,
  BusinessDominanceMarquee,
  ClientLogoMarquee,
  Contact,
  GrowthPositioning,
  Home,
  Process,
  Projects,
  Team,
  Testimonials,
} from './components/sections.jsx';

const sectionSpacing = 'px-5 py-16 sm:px-6 sm:py-20 md:px-10 lg:px-16 lg:py-24';
const containerClass = 'mx-auto max-w-7xl';
const contentGap = 'mt-10 lg:mt-12';

function WireframeLoader() {
  const navItems = ['w-12', 'w-16', 'w-14', 'w-20'];
  const serviceCards = ['w-2/3', 'w-1/2', 'w-3/5'];

  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.45 }}
      className="fixed inset-0 z-[999] overflow-hidden bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white"
      role="status"
      aria-live="polite"
      aria-label="Loading Kanel innovations">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400">
        <Motion.div
          className="h-full w-1/3 bg-white/70"
          animate={{ x: ['-100%', '320%'] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
        />
      </div>

      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm dark:border-white/10 dark:bg-white/5">
          <div className="h-4 w-36 rounded-full bg-slate-300 dark:bg-white/20" />
          <div className="hidden items-center gap-3 md:flex">
            {navItems.map((widthClass, index) => (
              <div
                key={`${widthClass}-${index}`}
                className={`h-3 rounded-full bg-slate-200 dark:bg-white/15 ${widthClass}`}
              />
            ))}
          </div>
          <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-500/20" />
        </div>

        <div className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[0.92fr_1.08fr] lg:py-14">
          <Motion.div
            className="space-y-6"
            animate={{ opacity: [0.65, 1, 0.65] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}>
            <div className="h-8 w-40 rounded-full bg-blue-100 dark:bg-blue-500/20" />
            <div className="space-y-4">
              <div className="h-10 w-full max-w-xl rounded-xl bg-slate-300 dark:bg-white/20 sm:h-12" />
              <div className="h-10 w-11/12 max-w-lg rounded-xl bg-slate-300 dark:bg-white/20 sm:h-12" />
              <div className="h-10 w-3/4 max-w-md rounded-xl bg-slate-300 dark:bg-white/20 sm:h-12" />
            </div>
            <div className="space-y-3">
              <div className="h-4 w-full max-w-lg rounded-full bg-slate-200 dark:bg-white/15" />
              <div className="h-4 w-5/6 max-w-md rounded-full bg-slate-200 dark:bg-white/15" />
              <div className="h-4 w-2/3 max-w-sm rounded-full bg-slate-200 dark:bg-white/15" />
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="h-12 w-40 rounded-full bg-blue-600" />
              <div className="h-12 w-36 rounded-full border border-slate-200 bg-white dark:border-white/10 dark:bg-white/10" />
            </div>
          </Motion.div>

          <Motion.div
            className="rounded-3xl border border-slate-200 bg-white p-4 shadow-xl shadow-blue-100/50 dark:border-white/10 dark:bg-white/5 dark:shadow-none sm:p-5"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}>
            <div className="aspect-[4/3] rounded-2xl bg-slate-100 p-4 dark:bg-slate-900 sm:p-5">
              <div className="grid h-full grid-rows-[0.7fr_1fr_0.8fr] gap-4">
                <div className="rounded-2xl bg-slate-300 dark:bg-white/15" />
                <div className="grid grid-cols-3 gap-4">
                  {serviceCards.map((widthClass, index) => (
                    <div key={`${widthClass}-${index}`} className="rounded-2xl bg-white p-3 shadow-sm dark:bg-white/10">
                      <div className="h-8 w-8 rounded-xl bg-blue-100 dark:bg-blue-500/25" />
                      <div className={`mt-5 h-3 rounded-full bg-slate-200 dark:bg-white/15 ${widthClass}`} />
                      <div className="mt-3 h-3 w-full rounded-full bg-slate-100 dark:bg-white/10" />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-[1fr_0.72fr] gap-4">
                  <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-white/10">
                    <div className="h-3 w-20 rounded-full bg-slate-200 dark:bg-white/15" />
                    <div className="mt-4 h-20 rounded-xl bg-slate-200 dark:bg-white/15" />
                  </div>
                  <div className="rounded-2xl bg-blue-600/90 p-4">
                    <div className="h-3 w-16 rounded-full bg-white/45" />
                    <div className="mt-4 h-8 w-20 rounded-xl bg-white/65" />
                    <div className="mt-4 h-3 w-full rounded-full bg-white/35" />
                  </div>
                </div>
              </div>
            </div>
          </Motion.div>
        </div>

        <div className="flex justify-center pb-5">
          <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-slate-300">
            <Motion.span
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              className="inline-flex text-blue-600 dark:text-blue-300">
              <LoaderCircle className="h-5 w-5" />
            </Motion.span>
            <span>Kanel innovations is preparing your digital experience...</span>
          </div>
        </div>
      </div>
    </Motion.div>
  );
}

function HomePage() {
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
      <main>
        <Home />
        <ClientLogoMarquee />
        <GrowthPositioning />
        <BusinessDominanceMarquee />
        <Team />
        <About />
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
              Modern websites, apps, funnels, SEO, automations, and digital growth systems in one team.
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              We help businesses look sharper, launch better, and convert more
              of the attention they earn online while automating repetitive
              follow-up, CRM, reporting, and admin workflows.
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
                'Business automations',
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
              <li className="break-all">wiskara1@gmail.com</li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-base font-bold text-white sm:text-lg">Email updates</h4>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Get short notes on websites, funnels, SEO, automation, and digital growth.
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

        <div className={`${containerClass} ${contentGap} flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:text-sm`}>
          <p>&copy; 2026 Kanel innovations. All rights reserved.</p>
          <a
            href="/privacy-policy.html"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-slate-300 transition hover:text-white">
            Privacy Policy
          </a>
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

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    window.requestAnimationFrame(() => {
      const target = document.getElementById(location.hash.slice(1));
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [location.pathname, location.hash]);

  return null;
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
      <ScrollToHash />
      <Navbar theme={theme} onToggleTheme={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))} />
      <AnimatePresence>
        {loading && <WireframeLoader />}
      </AnimatePresence>

      <div className={`transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog-news" element={<BlogNewsPage />} />
          <Route path="/business-automations" element={<BusinessAutomationsPage />} />
          <Route path="/services/business-automations" element={<BusinessAutomationsPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
