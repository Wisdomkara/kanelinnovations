import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, Moon, Sun, X } from 'lucide-react';

const links = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Services', to: 'team' },
  { name: 'Work', to: 'projects' },
  { name: 'Process', to: 'testimonials' },
  { name: 'Insights', to: 'blog' },
  { name: 'Contact', to: 'contact', isButton: true },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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

  const linkClass = (to) =>
    activeSection === to
      ? 'text-blue-700 dark:text-blue-200'
      : 'text-slate-700 hover:text-blue-700 dark:text-slate-200 dark:hover:text-blue-200';

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-300 ${
          scrolled
            ? 'border-white/60 bg-white/88 shadow-xl shadow-blue-100/50 backdrop-blur dark:border-white/10 dark:bg-slate-950/85 dark:shadow-none'
            : 'border-white/60 bg-white/72 backdrop-blur dark:border-white/10 dark:bg-slate-950/70'
        }`}>
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer text-xl font-black tracking-tight text-slate-950 dark:text-white md:text-2xl">
          Kanel <span className="text-blue-600 dark:text-blue-300">Technologies</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map(({ name, to, isButton }) => (
            <Link
              key={to}
              to={to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
              className={`cursor-pointer text-sm font-semibold transition ${
                isButton
                  ? 'rounded-full bg-blue-600 px-5 py-3 text-white hover:bg-blue-700'
                  : linkClass(to)
              }`}>
              {name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-blue-200 hover:text-blue-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-blue-400/30 dark:hover:text-blue-200"
            aria-label="Toggle light and dark mode">
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
            aria-label="Toggle menu">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-white/60 bg-white/95 p-5 shadow-2xl shadow-blue-100/50 backdrop-blur dark:border-white/10 dark:bg-slate-950/95 dark:shadow-none lg:hidden">
          <div className="flex flex-col gap-3">
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
                    ? 'bg-blue-600 text-white'
                    : `${linkClass(to)} bg-slate-50 dark:bg-white/5`
                }`}>
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
