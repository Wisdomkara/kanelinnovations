import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import BlogNewsPage from './pages/BlogNewsPage.jsx';
import {
  About,
  Blog,
  Contact,
  Home,
  Projects,
  Team,
  Testimonials,
} from './components/sections.jsx';

function HomePage({ theme, onToggleTheme }) {
  return (
    <>
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <main>
        <Home />
        <About />
        <Team />
        <Projects />
        <Testimonials />
        <Blog />
        <Contact />
      </main>

      <footer className="border-t border-slate-200/80 bg-slate-950 px-6 py-14 text-white dark:border-white/10 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
              Kanel Technologies
            </p>
            <h3 className="mt-4 max-w-xl text-3xl font-black">
              Modern websites, apps, funnels, SEO, and digital growth systems in one team.
            </h3>
            <p className="mt-4 max-w-2xl leading-7 text-slate-300">
              We help businesses look sharper, launch better, and convert more
              of the attention they earn online.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white">Services</h4>
            <ul className="mt-4 space-y-3 text-slate-300">
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
            <h4 className="text-lg font-bold text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>Lagos, Nigeria</li>
              <li>+2347084153584</li>
              <li>kaneltechnology@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-400">
          (c) 2026 Kanel Technologies. All rights reserved.
        </div>
      </footer>
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
              Kanel Technologies
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
