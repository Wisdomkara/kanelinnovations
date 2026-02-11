import React, { useState, useEffect } from 'react';
import HeroImage from '../assets/images/Business-growth.jpeg';
import US from '../assets/images/team.jpeg';
import HeroCom from '../assets/images/company.jpg';
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import emailjs from '@emailjs/browser';
import { blogPosts } from '../data/blogPosts';

// Helper component for animation when scrolling
const AnimatedSection = ({ children, className, id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // If the element is visible
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        // No need to observe once it's visible
        observer.unobserve(domRef.current);
      }
    });

    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={domRef}
      className={`${className} transition-opacity duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
      {children}
    </section>
  );
};

export const Home = () => (
  <AnimatedSection
    id="home"
    className="bg-gradient-to-b from-blue-600 via-blue-50 to-gray-50 py-16 px-9 md:px-12 pt-36 pb-28">
    <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-12">
      {/* Text Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-gray-900 leading-tight font-lato  m-10">
          Comprehensive Managed IT Services
          <br className="hidden sm:block" />{' '}
          <span className="text-blue-700 font-lato">
            for the Modern{' '}
            <span className="text-blue-500 font-lato">Business Landscape</span>
          </span>
        </h1>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-lato">
          At{' '}
          <span className="font-semibold text-blue-600 font-lato ">
            Kanel Technologies
          </span>
          , we do more than deliver IT services — we empower your business to
          grow, innovate, and scale with technology built around your goals.
          With solutions designed for today's challenges and tomorrow's
          opportunities.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-base font-semibold rounded-2xl shadow-lg transform hover:scale-105 hover:bg-blue-700 transition-all duration-300 ease-in-out">
            Our Services
          </button>
          <button className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 bg-white text-base font-semibold rounded-2xl transform hover:scale-105 hover:bg-blue-100 transition-all duration-300 ease-in-out">
            Reach Out
          </button>
        </div>
      </div>

      {/* Image Content */}
      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src={HeroCom}
          alt="Business growth illustration"
          className="w-full md:w-3/4 max-w-lg object-cover rounded-2xl shadow-xl transition-all duration-500 ease-in-out hover:scale-105 h-65"
        />
      </div>
    </div>
  </AnimatedSection>
);

// about section
export const About = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const tabContent = {
    mission: {
      title: 'Our Mission',
      content:
        'To empower businesses with technology solutions that drive growth, efficiency, and competitive advantage in an ever-evolving digital landscape.',
    },
    vision: {
      title: 'Our Vision',
      content:
        'To be the premier technology partner for businesses seeking innovative IT solutions that transform operations and enable sustainable success.',
    },
    values: {
      title: 'Our Values',
      content:
        'Excellence, Integrity, Innovation, Partnership, and Customer-Centricity guide everything we do at Kanel Technologies.',
    },
  };

  return (
    <AnimatedSection id="about" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 font-lato">
            About Kanel Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-lato">
            A team of dedicated IT professionals committed to delivering
            exceptional managed services tailored to your business requirements.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 p-6">
            <div className="aspect-w-16 aspect-h-9 mb-6 overflow-hidden rounded-xl bg-blue-200">
              {/* Placeholder for about image */}
              <div className="w-full h-64 bg-blue-200 rounded-xl flex items-center justify-center">
                <span className="text-blue-600 font-semibold">
                  <div>
                    <img
                      src={US}
                      alt=" team working together"
                      className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                    />
                  </div>
                </span>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Your Trusted IT Partner
            </h3>
            <p className="text-gray-600 mb-6 font-lato text-base font-bold">
              Since our founding, Kanel Technologies has been at the forefront
              of IT innovation, helping businesses leverage technology to
              achieve their goals. Our experienced team brings expertise across
              multiple domains to ensure your IT infrastructure operates at peak
              efficiency.
            </p>

            <div className="flex justify-between items-center text-gray-800">
              <div className="text-center">
                <p className="text-3xl font-lato font-bold text-blue-600">
                  10+
                </p>
                <p className="text-sm font-lato font-bold">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">500+</p>
                <p className="text-sm font-lato">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">24/7</p>
                <p className="text-sm font-lato font-bold">Support</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            {/* Tabs navigation */}
            <div className="flex border-b border-gray-200 mb-6">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 px-6 font-medium  font-lato text-sm transition-all duration-200 ${
                    activeTab === tab
                      ? 'text-blue-600 border-b-2 border-blue-600 font-lato'
                      : 'text-gray-500 hover:text-blue-500 font-lato'
                  }`}>
                  {tabContent[tab].title}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="py-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {tabContent[activeTab].title}
              </h3>
              <p className="text-gray-600 mb-6">
                {tabContent[activeTab].content}
              </p>

              <ul className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <li key={item} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-600 font-lato">
                      Key point about{' '}
                      {tabContent[activeTab].title.toLowerCase()} at Kanel
                      Technologies. We prioritize excellence in every aspect of
                      our operations.
                    </p>
                  </li>
                ))}
              </ul>

              <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors duration-300 font-serif">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export const Team = () => {
  const teamMembers = [
    {
      name: 'Wisdom Kara',
      position: 'IT Consultant',
      image: '/kaneltechnologies/wizzyaspect.jpg',
      bio: 'Expert in IT infrastructure and cloud solutions with over 8 years of experience.',
      social: {
        facebook: 'https://www.facebook.com/profile.php?id=61557241627798',
        twitter: 'https://twitter.com/wisdomkara',
        email: 'mailto:kaneltechnology@gmail.com',
        linkedin: 'https://linkedin.com/in/wisdomkara',
      },
    },
    {
      name: 'Nelson John',
      position: 'Data Analyst',
      image: '/kaneltechnologies/nelson.jpg',
      bio: 'Data visualization specialist focused on transforming complex datasets into actionable insights.',
      social: {
        facebook: 'https://facebook.com/nelsonjohn',
        twitter: 'https://twitter.com/nelsonjohn',
        email: 'mailto:nelson@example.com',
        linkedin: 'https://linkedin.com/in/nelsonjohn',
      },
    },
    {
      name: 'Precious Emeruwa',
      position: 'Networking Manager',
      image: '/kaneltechnologies/precious.jpeg',
      bio: 'Network security professional with expertise in designing robust network architectures.',
      social: {
        facebook: 'https://facebook.com/preciousemeruwa',
        twitter: 'https://twitter.com/preciousemeruwa',
        email: 'mailto:precious@example.com',
        linkedin: 'https://linkedin.com/in/preciousemeruwa',
      },
    },
    {
      name: 'James Okorie',
      position: 'System Engineer',
      image: '20.jpg',
      bio: 'System optimization specialist with a passion for automating complex IT operations.',
      social: {
        facebook: 'https://facebook.com/jamesokorie',
        twitter: 'https://twitter.com/jamesokorie',
        email: 'mailto:james@example.com',
        linkedin: 'https://linkedin.com/in/jamesokorie',
      },
    },
  ];

  return (
    <section
      id="team"
      className="py-32 px-8 md:px-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto text-center mb-24">
        <motion.div
          initial={{ y: 90 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative inline-block mb-6">
          <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 opacity-30 blur-lg"></span>
          <span className="relative text-sm uppercase tracking-widest font-bold text-blue-600 px-4 py-2 bg-white rounded-full shadow-sm">
            Our Professionals
          </span>
        </motion.div>

        <motion.h2
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 font-lato">
          Meet Our{' '}
          <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Expert Team
          </span>
        </motion.h2>

        <motion.p
          initial={{ y: 85 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ delay: 0.1, duration: 0.75, ease: 'easeOut' }}
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Our talented professionals bring years of industry experience and a
          passion for technology-driven solutions that transform businesses.
        </motion.p>

        <motion.div
          initial={{ y: 80, width: 0 }}
          whileInView={{ y: 0, width: '80px' }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8 rounded-full"></motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {teamMembers.map((member, i) => (
          <motion.div
            key={i}
            className="group perspective-[1000px] bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer border border-gray-100"
            initial={{ y: 100, scale: 0.98 }}
            whileInView={{ y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            whileHover={{
              scale: 1.03,
              rotateY: 5,
              boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
            }}
            transition={{
              duration: 0.7,
              ease: 'easeOut',
              delay: i * 0.15,
            }}>
            {/* Image with overlay */}
            <div className="relative h-64 w-full overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 opacity-0 transition-all duration-500 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4">
                <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium shadow-lg">
                  {member.position}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {member.name}
              </h3>
              <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                {member.bio}
              </p>

              <div className="flex space-x-4 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                <a
                  href={member.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name}'s Facebook`}
                  className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shadow-md hover:bg-blue-50 transition-colors duration-300"
                  style={{ color: '#1877F2' }}>
                  <FaFacebook className="text-lg" />
                </a>
                <a
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name}'s Twitter`}
                  className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shadow-md hover:bg-blue-50 transition-colors duration-300"
                  style={{ color: '#1DA1F2' }}>
                  <FaTwitter className="text-lg" />
                </a>
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name}'s LinkedIn`}
                  className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shadow-md hover:bg-blue-50 transition-colors duration-300"
                  style={{ color: '#0A66C2' }}>
                  <FaLinkedin className="text-lg" />
                </a>
                <a
                  href={member.social.email}
                  aria-label={`Email ${member.name}`}
                  className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shadow-md hover:bg-red-50 transition-colors duration-300"
                  style={{ color: '#EA4335' }}>
                  <FaEnvelope className="text-lg" />
                </a>
              </div>

              <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-purple-400 mt-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ y: 90 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        className="text-center mt-20 max-w-3xl mx-auto">
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          offset={-90}
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          Connect With Our Team
        </ScrollLink>
        <p className="text-gray-500 mt-4">
          Ready to transform your business with our expertise?
        </p>
      </motion.div>
    </section>
  );
};

import { FaGlobe, FaLock, FaNetworkWired, FaLaptopCode } from 'react-icons/fa';

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: 'Web Application Development',
      category: 'Web Services',
      description:
        'Completed the building of a web application for the organisation.',
      color: 'blue',
      icon: FaGlobe,
    },
    {
      title: 'Cybersecurity Enhancement',
      category: 'Security',
      description:
        'Implementation of comprehensive security protocols for a financial institution.',
      color: 'red',
      icon: FaLock,
    },
    {
      title: 'Network Infrastructure Upgrade',
      category: 'Networking',
      description:
        'Complete overhaul of networking systems for improved performance and reliability.',
      color: 'green',
      icon: FaNetworkWired,
    },
    {
      title: 'Custom Software Development',
      category: 'Development',
      description:
        'Custom application designed to streamline business operations and increase efficiency.',
      color: 'purple',
      icon: FaLaptopCode,
    },
  ];

  // Map color names to actual tailwind classes
  const colorMap = {
    blue: {
      bg: 'bg-blue-200',
      text: 'text-blue-600',
      badge: 'bg-blue-100',
      hover: 'hover:text-blue-800',
      gradient: 'from-white to-blue-50',
    },
    red: {
      bg: 'bg-red-200',
      text: 'text-red-600',
      badge: 'bg-red-100',
      hover: 'hover:text-red-800',
      gradient: 'from-white to-red-50',
    },
    green: {
      bg: 'bg-green-200',
      text: 'text-green-600',
      badge: 'bg-green-100',
      hover: 'hover:text-green-800',
      gradient: 'from-white to-green-50',
    },
    purple: {
      bg: 'bg-purple-200',
      text: 'text-purple-600',
      badge: 'bg-purple-100',
      hover: 'hover:text-purple-800',
      gradient: 'from-white to-purple-50',
    },
  };

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 95 },
    visible: {
      y: 0,
      transition: {
        duration: 0.75,
        ease: 'easeOut',
      },
    },
  };

  const headerVariants = {
    hidden: { y: 90 },
    visible: {
      y: 0,
      transition: {
        duration: 0.75,
        ease: 'easeOut',
      },
    },
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.45 }}
          variants={containerVariants}>
          <motion.span
            variants={headerVariants}
            className="inline-block px-4 py-2 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-4">
            Our Portfolio
          </motion.span>

          <motion.h2
            variants={headerVariants}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 font-lato">
            Our Recent{' '}
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Projects
            </span>
          </motion.h2>

          <motion.p
            variants={headerVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto font-lato">
            Explore some of our recent work delivering innovative IT solutions
            for businesses across industries.
          </motion.p>

          <motion.div
            variants={headerVariants}
            className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8 rounded-full"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={containerVariants}>
          {projects.map((project, index) => {
            const colors = colorMap[project.color];

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bg-gradient-to-br ${colors.gradient} rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}>
                <div
                  className={`relative h-48 ${colors.bg} flex items-center justify-center overflow-hidden`}>
                  <motion.div
                    initial={{ y: 80 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      delay: 0.1 + index * 0.1,
                      duration: 0.7,
                      ease: 'easeOut',
                    }}
                    className={`${colors.text} ${
                      hoveredIndex === index ? 'scale-125' : 'scale-100'
                    } transition-transform duration-500`}>
                    <project.icon size={64} />
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                <div className="p-6">
                  <motion.span
                    className={`inline-block px-3 py-1 ${colors.badge} ${colors.text} text-sm font-medium rounded-full mb-4`}
                    initial={{ y: 55 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      delay: 0.15 + index * 0.08,
                      duration: 0.65,
                      ease: 'easeOut',
                    }}>
                    {project.category}
                  </motion.span>

                  <h3
                    className={`text-xl font-bold text-gray-800 mb-2 ${
                      hoveredIndex === index ? colors.text : ''
                    } transition-colors duration-300`}>
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <motion.button
                    className={`${colors.text} font-medium flex items-center space-x-1 ${colors.hover} transition-colors`}
                    variants={buttonVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap">
                    <span>View Case Study</span>
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: hoveredIndex === index ? 5 : 0 }}
                      transition={{ duration: 0.3 }}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </motion.svg>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ y: 90 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.2, duration: 0.75, ease: 'easeOut' }}>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)',
            }}
            whileTap={{ scale: 0.98 }}>
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'AG Grace Chapel',
      company: 'AG Grace Chapel',
      quote:
        "Kanel Technologies Gave our organization the exposure it deserve with their web solution and SEO optimization.",
    },
    {
      name: 'Emily Wilson',
      company: 'Solo Enterprise',
      quote:
        'Working with Kanel has been a game-changer for our business. Their proactive approach to IT management has prevented numerous issues and their support team is always responsive.',
    },
    {
      name: 'David Lee',
      company: 'The Right Way Transport',
      quote:
        'Kanel Tech gave us an edge in the road transport by introducing us to the world of buusiness with web solution.',
    },
  ];

  return (
    <AnimatedSection
      id="testimonials"
      className="py-24 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it — hear from the businesses we've
            helped succeed with our IT solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="mb-6">
                {/* Quote icon */}
                <svg
                  className="w-10 h-10 text-blue-200"
                  fill="currentColor"
                  viewBox="0 0 32 32">
                  <path d="M10 8v6c0 2.2-1.8 4-4 4H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2c4.4 0 8-3.6 8-8v-8c0-1.1-.9-2-2-2zm18 0v6c0 2.2-1.8 4-4 4h-2c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2c4.4 0 8-3.6 8-8v-8c0-1.1-.9-2-2-2z" />
                </svg>
              </div>
              <p className="text-gray-600 italic mb-6 flex-grow">
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors duration-300">
            Read More Testimonials
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export const Blog = () => {
  return (
    <AnimatedSection id="blog" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest insights, trends, and news in IT and
            technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-blue-600 font-medium">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <RouterLink
                  to="/blog-news"
                  className="text-blue-600 font-medium flex items-center space-x-1 hover:text-blue-800 transition-colors">
                  <span>View Article</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </RouterLink>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <RouterLink
            to="/blog-news"
            className="inline-flex px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-colors duration-300">
            View All Articles
          </RouterLink>
        </div>
      </div>
    </AnimatedSection>
  );
};

import { FaInstagram, FaPhone, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error:
          'Email service is not configured yet. Add EmailJS keys to your .env file.',
      });
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        {
          publicKey,
        }
      );

      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: null,
      });
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setFormStatus((prev) => ({ ...prev, isSubmitted: false, error: null }));
      }, 3000);
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error:
          'Message failed to send. Please check your EmailJS template settings and try again.',
      });
    }
  };

  // Social media data with actual links
  const socialLinks = [
    {
      name: 'Facebook',
      icon: FaFacebook,
      color: '#1877F2',
      url: 'https://www.facebook.com/profile.php?id=61557241627798',
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      color: '#1DA1F2',
      url: 'https://twitter.com/wisdomkara',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      color: '#0A66C2',
      url: 'https://linkedin.com/company/kaneltechnology',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      color: '#E4405F',
      url: 'https://instagram.com/kaneltechnology',
    },
  ];

  // Contact info cards
  const contactInfo = [
    {
      title: 'Phone',
      icon: FaPhone,
      content: ['+2347084153584', '08152282324'],
      color: 'blue',
    },
    {
      title: 'Email',
      icon: FaEnvelope,
      content: ['kaneltechnology@gmail.com'],
      color: 'green',
    },
    {
      title: 'Availability',
      icon: FaClock,
      content: ['24/7 Support'],
      color: 'purple',
    },
    {
      title: 'Office',
      icon: FaMapMarkerAlt,
      content: ['Lagos, Nigeria'],
      color: 'blue',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: i * 0.1 + 0.3,
      },
    }),
  };

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: i * 0.1 + 0.8, type: 'spring', stiffness: 200 },
    }),
    hover: {
      scale: 1.15,
      boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
      transition: { type: 'spring', stiffness: 300, damping: 10 },
    },
    tap: { scale: 0.95 },
  };

  // Color variants
  const colorMap = {
    blue: {
      bg: 'bg-blue-100',
      text: 'text-blue-600',
      gradient: 'from-blue-500 to-blue-600',
    },
    green: {
      bg: 'bg-green-100',
      text: 'text-green-600',
      gradient: 'from-green-500 to-green-600',
    },
    purple: {
      bg: 'bg-purple-100',
      text: 'text-purple-600',
      gradient: 'from-purple-500 to-purple-600',
    },
    red: {
      bg: 'bg-red-100',
      text: 'text-red-600',
      gradient: 'from-red-500 to-red-600',
    },
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 bg-gradient-to-b from-gray-100 to-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-4">
            Contact Us
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In{' '}
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Touch
            </span>
          </h2>

          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}>
            Have questions about our IT services or want to discuss your
            project? Reach out to us today and one of our experts will get back
            to you promptly.
          </motion.p>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: '80px', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <motion.div
            className="w-full lg:w-2/3 bg-white p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 50, damping: 15 }}
            whileHover={{
              boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)',
            }}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mr-2">
                Send Us a Message
              </span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, ease: 'linear', repeat: Infinity }}
                className="w-5 h-5 rounded-full border-2 border-transparent border-t-blue-600 border-l-blue-600"
              />
            </h3>

            <motion.form
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                    placeholder="Your Name"
                    required
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                    placeholder="Your Email"
                    required
                  />
                </motion.div>
              </div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                  placeholder="Message Subject"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                  placeholder="Your Message"
                  required></textarea>
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  disabled={formStatus.isSubmitting || formStatus.isSubmitted}
                  className={`relative w-full px-6 py-4 text-white font-medium rounded-xl transition-all duration-300 overflow-hidden ${
                    formStatus.isSubmitted
                      ? 'bg-green-600'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}>
                  {formStatus.isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <motion.span
                        className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                      Sending...
                    </span>
                  ) : formStatus.isSubmitted ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Message Sent!
                    </span>
                  ) : (
                    <span className="relative z-10">Send Message</span>
                  )}

                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-white/30"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.button>
                {formStatus.error && (
                  <p className="mt-3 text-sm text-red-600">{formStatus.error}</p>
                )}
              </motion.div>
            </motion.form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="w-full lg:w-1/3 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              type: 'spring',
              stiffness: 50,
              damping: 15,
              delay: 0.2,
            }}>
            {contactInfo.map((info, index) => {
              const colors = colorMap[info.color];

              return (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{
                    y: -5,
                    boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                  }}
                  className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 transform">
                  <div
                    className={`w-14 h-14 rounded-full ${colors.bg} flex items-center justify-center mb-4`}>
                    <info.icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">
                    {info.title}
                  </h4>
                  {info.content.map((line, i) => (
                    <p key={i} className="text-gray-600">
                      {line}
                    </p>
                  ))}
                  <motion.div
                    className={`h-1 w-12 rounded-full mt-4 bg-gradient-to-r ${colors.gradient}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: '3rem' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  />
                </motion.div>
              );
            })}

            {/* Social Media Links */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-lg font-bold text-gray-800 mb-4">
                Connect With Us
              </h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    custom={index}
                    variants={socialVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover="hover"
                    whileTap="tap"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow transition-all duration-300"
                    style={{ backgroundColor: `${social.color}15` }}
                    aria-label={`Connect on ${social.name}`}>
                    <social.icon
                      className="w-5 h-5"
                      style={{ color: social.color }}
                    />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-4">
                Follow us on social media for updates and tech tips
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
