// src/App.jsx
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import BlogNewsPage from './pages/BlogNewsPage.jsx';
import {
  Home,
  About,
  Team,
  Projects,
  Testimonials,
  Blog,
  Contact,
} from './components/sections.jsx';

function HomePage() {
  return (
    <>
      <Navbar />

      <div>
        <Home />
        <About />
        <Team />
        <Projects />
        <Testimonials />
        <Blog />
        <Contact />
      </div>

      <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Kanel Technologies</h3>
              <p className="text-gray-300 mb-4">
                Empowering businesses with innovative IT solutions that drive
                growth and success.
              </p>
              <div className="flex space-x-4">
                {['F', 'T', 'L', 'I'].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition duration-300">
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact'].map(
                  (link, i) => (
                    <li key={i}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        className="text-gray-300 hover:text-blue-300 transition">
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {[
                  'Managed IT',
                  'Cloud Solutions',
                  'Cybersecurity',
                  'Network Infrastructure',
                  'Software Development',
                  'IT Consulting',
                ].map((service, i) => (
                  <li key={i}>
                    <a
                      href="#services"
                      className="text-gray-300 hover:text-blue-300 transition">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">Location:</span>
                  <span className="text-gray-300">Lagos, Nigeria, 101001</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">Phone:</span>
                  <span className="text-gray-300">+2347084153584, 07032591939</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">Email:</span>
                  <span className="text-gray-300">kaneltechnology@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">(c) 2025 Kanel Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading && (
        <div className="fixed inset-0 bg-white z-[999] flex items-center justify-center transition-opacity duration-500">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
            <h2 className="text-2xl font-bold text-blue-600">Kanel Technologies</h2>
            <p className="text-gray-500 mt-2">Loading Innovative Tech Experiences...</p>
          </div>
        </div>
      )}

      <div
        className={`transition-opacity duration-1000 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog-news" element={<BlogNewsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
