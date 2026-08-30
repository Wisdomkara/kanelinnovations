import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, Moon, Sun, X } from 'lucide-react';
import { motion as Motion } from 'framer-motion';

const homeLinks = [
  { name: 'Home', to: '/#home', section: 'home' },
  { name: 'About', to: '/#about', section: 'about' },
  { name: 'Work', to: '/#projects', section: 'projects' },
  { name: 'Process', to: '/#process', section: 'process' },
];

const serviceLinks = [
  { name: 'Website & Web App Development', to: '/services/website-web-app-development' },
  { name: 'Business Automations', to: '/services/business-automations', tone: 'automation' },
  { name: 'SEO & Google Visibility', to: '/services/seo-google-visibility' },
  { name: 'Branding & Digital Design', to: '/services/branding-digital-design' },
  { name: 'Digital Marketing & Lead Generation', to: '/services/digital-marketing-lead-generation' },
  { name: 'Kanel Tech Academy', to: '/services/kanel-tech-academy' },
  { name: 'Website Maintenance', to: '/services/website-maintenance' },
  { name: 'Social Media Design', to: '/services/social-media-design' },
  { name: 'Google Business Profile Setup', to: '/services/google-business-profile-setup' },
  { name: 'E-commerce Development', to: '/services/e-commerce-development' },
];

const resourceLinks = [
  { name: 'Technology News', to: '/blog-news' },
  { name: 'Automation Guide', to: '/business-automations', tone: 'automation' },
];

const navTextClass = {
  dark: 'text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-white',
  light: 'text-white/75 hover:text-white',
};

export default function Navbar({ theme, onToggleTheme }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [openDesktopMenu, setOpenDesktopMenu] = useState(null);
  const [openMobileMenu, setOpenMobileMenu] = useState(null);
  const isHomePage = location.pathname === '/';
  const scrolled = !isHomePage || activeSection !== 'home';

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection('');
      return undefined;
    }

    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentSection = 'home';

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          currentSection = section.getAttribute('id') || currentSection;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    setIsOpen(false);
    setOpenDesktopMenu(null);
    setOpenMobileMenu(null);
  }, [location.pathname, location.hash]);

  const linkClass = (section) => {
    const isActive = isHomePage && activeSection === section;

    return `relative cursor-pointer px-4 py-2 text-sm font-semibold transition-colors ${
      scrolled ? (isActive ? 'text-blue-600 dark:text-white' : navTextClass.dark) : isActive ? 'text-white' : navTextClass.light
    }`;
  };

  const dropdownButtonClass = (isActive) =>
    `inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
      scrolled
        ? isActive
          ? 'text-blue-600 dark:text-white'
          : navTextClass.dark
        : isActive
          ? 'text-white'
          : navTextClass.light
    }`;

  const dropdownShellClass = (id) =>
    `absolute top-full pt-3 ${id === 'services' ? 'left-1/2 w-[42rem] -translate-x-1/2' : 'left-0 w-80'}`;

  const dropdownPanelClass = (id) =>
    `rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-950/15 dark:border-white/10 dark:bg-slate-950 ${
      id === 'services' ? 'grid grid-cols-2 gap-1' : 'grid gap-1'
    }`;

  const renderDesktopDropdown = (id, label, items, isActive) => (
    <div
      className="relative"
      onMouseEnter={() => setOpenDesktopMenu(id)}
      onMouseLeave={() => setOpenDesktopMenu(null)}>
      <button
        type="button"
        className={dropdownButtonClass(isActive)}
        onClick={() => setOpenDesktopMenu((current) => (current === id ? null : id))}
        aria-expanded={openDesktopMenu === id}
        aria-haspopup="true">
        {label}
        <ChevronDown className={`h-4 w-4 transition ${openDesktopMenu === id ? 'rotate-180' : ''}`} />
      </button>

      {openDesktopMenu === id && (
        <div className={dropdownShellClass(id)}>
          <Motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18 }}
            className={dropdownPanelClass(id)}>
            {items.map((item) => {
              const isAutomation = item.tone === 'automation';

              return (
                <RouterLink
                  key={item.to}
                  to={item.to}
                  className={`block rounded-xl px-4 py-3 text-sm font-semibold leading-5 transition ${
                    isAutomation
                      ? 'text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 dark:text-emerald-300 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-200'
                      : 'text-slate-700 hover:bg-blue-50 hover:text-blue-700 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white'
                  }`}>
                  {item.name}
                </RouterLink>
              );
            })}
          </Motion.div>
        </div>
      )}
    </div>
  );

  const renderMobileDropdown = (id, label, items) => (
    <div>
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5"
        onClick={() => setOpenMobileMenu((current) => (current === id ? null : id))}
        aria-expanded={openMobileMenu === id}>
        {label}
        <ChevronDown className={`h-4 w-4 transition ${openMobileMenu === id ? 'rotate-180' : ''}`} />
      </button>
      {openMobileMenu === id && (
        <div className="mt-1 grid gap-1 pl-3">
          {items.map((item) => (
            <RouterLink
              key={item.to}
              to={item.to}
              className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                item.tone === 'automation'
                  ? 'text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 dark:text-emerald-300 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-200'
                  : 'text-slate-600 hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white'
              }`}>
              {item.name}
            </RouterLink>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      {isHomePage && activeSection === 'home' && openDesktopMenu === 'services' && (
        <Motion.div
          className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[100svh] bg-sky-300/15 backdrop-blur-[1px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          aria-hidden="true"
        />
      )}
      <div
        className={`relative z-10 mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-300 ${
          scrolled
            ? 'glass-panel shadow-xl shadow-slate-950/20 dark:shadow-none'
            : 'border-white/25 bg-white/10 shadow-2xl shadow-slate-950/15 backdrop-blur'
        }`}>
        <RouterLink
          to="/#home"
          className={`cursor-pointer text-xl font-black tracking-tight transition md:text-2xl ${
            scrolled ? 'text-slate-900 dark:text-white' : 'text-white'
          }`}>
          Kanel <span className="text-blue-600 dark:text-blue-200">innovations</span>
        </RouterLink>

        <div className="hidden items-center gap-2 lg:flex">
          {homeLinks.map(({ name, to, section }) => {
            const isActive = isHomePage && activeSection === section;
            return (
              <RouterLink key={to} to={to} className={linkClass(section)}>
                {isActive && (
                  <Motion.div
                    layoutId="navbar-active-pill"
                    className={`absolute inset-0 -z-10 rounded-full ${scrolled ? 'bg-blue-100 dark:bg-white/10' : 'bg-white/20'}`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{name}</span>
              </RouterLink>
            );
          })}

          {renderDesktopDropdown(
            'services',
            'Services',
            serviceLinks,
            location.pathname.startsWith('/services') || location.pathname === '/business-automations'
          )}
          {renderDesktopDropdown('resources', 'Resources', resourceLinks, location.pathname === '/blog-news')}

          <RouterLink
            to="/#contact"
            className="ml-4 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-transform hover:scale-105 hover:bg-blue-700">
            Contact
          </RouterLink>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition ${
              scrolled
                ? 'border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-blue-400/30 dark:hover:text-blue-200'
                : 'border-white/25 bg-white text-slate-800 hover:bg-blue-50'
            }`}
            aria-label="Toggle light and dark mode">
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border lg:hidden ${
              scrolled
                ? 'border-slate-200 bg-white text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200'
                : 'border-white/25 bg-white text-slate-800'
            }`}
            aria-label="Toggle menu">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <Motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="mx-auto mt-3 max-w-7xl rounded-[2rem] glass-panel p-5 shadow-2xl dark:shadow-none lg:hidden">
          <div className="flex flex-col gap-2">
            {homeLinks.map(({ name, to, section }) => (
              <RouterLink
                key={to}
                to={to}
                className={`cursor-pointer rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  isHomePage && activeSection === section
                    ? 'bg-blue-100 text-blue-700 dark:bg-white/10 dark:text-white'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5'
                }`}>
                {name}
              </RouterLink>
            ))}

            {renderMobileDropdown('services', 'Services', serviceLinks)}
            {renderMobileDropdown('resources', 'Resources', resourceLinks)}

            <RouterLink to="/#contact" className="mt-2 cursor-pointer rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white">
              Contact
            </RouterLink>
          </div>
        </Motion.div>
      )}
    </nav>
  );
}
