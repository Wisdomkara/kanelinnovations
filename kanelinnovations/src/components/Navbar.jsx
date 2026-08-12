import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { motion as Motion } from 'framer-motion';

const links = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Services', to: 'team' },
  { name: 'Work', to: 'projects' },
  { name: 'Process', to: 'process' },
  { name: 'Insights', to: 'blog' },
  { name: 'Contact', to: 'contact', isButton: true },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      const heroBottom = heroSection
        ? heroSection.offsetTop + heroSection.offsetHeight - 120
        : 40;

      setScrolled(window.scrollY > heroBottom);
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-300 ${
          scrolled
            ? 'glass-panel shadow-xl shadow-slate-950/20 dark:shadow-none'
            : 'border-white/25 bg-white/10 shadow-2xl shadow-slate-950/15 backdrop-blur'
        }`}>
        <Link
          to="home"
          smooth={true}
          duration={500}
          className={`cursor-pointer text-xl font-black tracking-tight transition md:text-2xl ${
            scrolled ? 'text-slate-900 dark:text-white' : 'text-white'
          }`}>
          Kanel <span className="text-blue-600 dark:text-blue-200">innovations</span>
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {links.map(({ name, to, isButton }) => {
            const isActive = activeSection === to;
            return (
              <Link
                key={to}
                to={to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-90}
                className={`relative cursor-pointer px-4 py-2 text-sm font-semibold transition-colors ${
                  isButton
                    ? 'rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/30 transition-transform hover:scale-105 hover:bg-blue-700 ml-4'
                    : scrolled
                      ? isActive
                        ? 'text-blue-600 dark:text-white'
                        : 'text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-white'
                      : isActive
                        ? 'text-white'
                        : 'text-white/75 hover:text-white'
                }`}>
                {isActive && !isButton && (
                  <Motion.div
                    layoutId="navbar-active-pill"
                    className={`absolute inset-0 rounded-full -z-10 ${
                      scrolled ? 'bg-blue-100 dark:bg-white/10' : 'bg-white/20'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{name}</span>
              </Link>
            );
          })}
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
            {links.map(({ name, to, isButton }) => (
              <Link
                key={to}
                to={to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-90}
                onClick={() => setIsOpen(false)}
                className={`cursor-pointer rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  isButton
                    ? 'bg-blue-600 text-white mt-2'
                    : `${activeSection === to ? 'bg-blue-100 text-blue-700 dark:bg-white/10 dark:text-white' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5'}`
                }`}>
                {name}
              </Link>
            ))}
          </div>
        </Motion.div>
      )}
    </nav>
  );
}
