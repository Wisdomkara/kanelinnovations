import React, { useEffect, useRef, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  Code2,
  Compass,
  Funnel,
  Globe2,
  Layers3,
  MapPin,
  Megaphone,
  MessageSquareMore,
  MonitorSmartphone,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Workflow,
} from 'lucide-react';
import HeroCom from '../assets/images/company.jpg';
import TeamImage from '../assets/images/team.jpeg';
import { blogPosts } from '../data/blogPosts';

const AnimatedSection = ({ children, className = '', id }) => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`${className} scroll-mt-28 transition-all duration-700 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
      {children}
    </section>
  );
};

const serviceCards = [
  ['Website Design & Development', 'Premium business websites and landing pages built for trust and conversion.', Globe2],
  ['Web & Mobile App Products', 'Scalable digital products, dashboards, portals, and service platforms.', MonitorSmartphone],
  ['Funnels & Automation', 'Lead funnels, CRM flows, onboarding journeys, and smart automations.', Funnel],
  ['SEO & Digital Awareness', 'Search visibility, content structure, and awareness campaigns that build demand.', Search],
  ['Brand Systems & Creative', 'Digital brand direction, UI systems, and campaign-ready creative assets.', Sparkles],
  ['Growth Strategy & Analytics', 'Reporting, optimisation, CRO thinking, and better decision-making from data.', BarChart3],
];

const processSteps = [
  ['Discovery', 'We unpack your offer, audience, and growth goals before design or code begins.', Compass],
  ['System Design', 'We shape the journey, structure, content flow, and conversion points into one system.', Layers3],
  ['Build & Launch', 'We develop the website, app, funnel, and integrations with polish and clarity.', Code2],
  ['Scale & Improve', 'We refine with SEO, analytics, and iterative growth improvements after launch.', Workflow],
];

const showcaseItems = [
  ['Launch-ready business websites', 'High-trust websites built to explain, persuade, and convert.'],
  ['Digital products that feel premium', 'Apps, dashboards, client portals, and service platforms with clean UX.'],
  ['Funnels that turn traffic into inquiries', 'Lead magnets, sales pages, booking flows, and follow-up automation.'],
  ['SEO and awareness systems', 'Search-first structure, content planning, and digital visibility strategy.'],
];

const testimonialCards = [
  ['They made our online presence feel like a real company, not just a page on the internet. The inquiries became much more serious.', 'Growth Lead', 'Retail Expansion Brand'],
  ['Our funnel, website, and SEO finally started working together. The whole experience now looks and performs like a premium service.', 'Founder', 'Coaching & Consulting Business'],
  ['They moved us from scattered digital efforts to one clear growth engine. The messaging, design, and build quality stood out immediately.', 'Operations Director', 'Professional Services Firm'],
];

const inquiryServices = [
  'Website Design',
  'Web App Development',
  'Mobile App Development',
  'Sales Funnel Creation',
  'SEO & Awareness Campaign',
  'Branding & Creative',
  'Automation & CRM Setup',
  'Full Digital Growth Partner',
];

export const Home = () => (
  <AnimatedSection
    id="home"
    className="relative overflow-hidden px-6 pt-20 pb-12 md:px-12 lg:px-16 lg:pt-24 lg:pb-16 min-h-[calc(100vh-6rem)]">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(147,197,253,0.32),_transparent_30%),linear-gradient(180deg,var(--bg-primary),var(--bg-secondary))]" />
    <div className="absolute right-[-8rem] top-24 -z-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
    <div className="absolute left-[-6rem] bottom-6 -z-10 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />

    <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
      <Motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/70 px-3 py-2 text-sm font-semibold text-blue-800 shadow-lg shadow-blue-200/30 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-blue-100 ">
          <ShieldCheck className="h-4 w-4" />
          Modern digital services provider for ambitious brands
        </div>

        <div className="space-y-5">
          <h1 className="max-w-3xl text-4xl font-black leading-[1.02] text-slate-950 dark:text-white md:text-5xl lg:text-6xl">
            We build the websites, apps, funnels, and digital growth systems
            that make brands impossible to ignore.
          </h1>
          <p className="max-w-2xl text-base md:text-lg leading-7 text-slate-700 dark:text-slate-300">
            Kanel innovations combines design, development, funnel strategy,
            SEO, awareness campaigns, and optimisation into one brilliant
            delivery team. We help businesses launch sharper, look more
            premium, and turn attention into real inquiries.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-90}
            className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-base font-semibold text-white shadow-[0_20px_50px_-20px_rgba(37,99,235,0.9)] transition hover:bg-blue-700">
            Start Your Project
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-90}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-blue-200 bg-white px-7 py-4 text-base font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10">
            Explore Our Services
          </ScrollLink>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            ['360+', 'Digital services under one roof'],
            ['High', 'Conversion-minded experiences'],
            ['End-to-end', 'Support for launch and growth'],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-white/60 bg-white/75 p-5 shadow-lg shadow-blue-100/50 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:shadow-none">
              <p className="text-2xl font-black text-blue-700 dark:text-blue-300">
                {value}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {label}
              </p>
            </div>
          ))}
        </div>
      </Motion.div>

      <Motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
        className="relative">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white p-4 shadow-[0_40px_120px_-40px_rgba(37,99,235,0.65)] dark:border-white/10 dark:bg-slate-900/80">
          <img
            src={HeroCom}
            alt="Kanel innovations digital services"
            className="w-full rounded-[1.5rem] object-cover h-[420px] sm:h-[520px] md:h-[640px] lg:h-[calc(100vh-6rem)]"
          />
          <div className="absolute inset-x-8 bottom-8 rounded-[1.75rem] border border-white/60 bg-slate-950/85 p-6 text-white shadow-xl backdrop-blur">
            <div className="flex items-center justify-between gap-4">
              <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-blue-200">
                      Delivery Stack
                    </p>
                <h3 className="mt-2 text-2xl font-bold">
                  Design. Build. Funnel. Rank. Scale.
                </h3>
              </div>
              <div className="rounded-2xl bg-blue-500/20 p-3 text-blue-100">
                <Sparkles className="h-8 w-8" />
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-blue-50/90">
              {[
                'Web & mobile products',
                'Sales funnels & automations',
                'SEO & digital awareness',
                'Ongoing optimisation',
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 px-4 py-3">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute -left-6 top-8 hidden rounded-3xl border border-white/60 bg-white/85 px-5 py-4 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-900/85 lg:block">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-300">
            Active focus
          </p>
          <p className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
            Better visibility + better conversion
          </p>
        </div>
      </Motion.div>
    </div>
  </AnimatedSection>
);

export const About = () => (
  <AnimatedSection id="about" className="px-6 py-24 md:px-12 lg:px-16">
    <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div className="relative">
        <div className="absolute -left-4 -top-4 h-40 w-40 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-500/20" />
        <div className="relative overflow-hidden rounded-[2rem] border border-white/50 bg-white p-4 shadow-2xl shadow-blue-100/60 dark:border-white/10 dark:bg-slate-900">
          <img
            src={TeamImage}
            alt="Kanel innovations team"
            className="w-full rounded-[1.5rem] object-cover h-[360px] sm:h-[420px] md:h-[520px] lg:h-[480px]"
          />
        </div>
      </div>

      <div className="space-y-8">
        <div className="space-y-4">
          <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-500/15 dark:text-blue-200">
            About Our Studio
          </div>
          <h2 className="text-4xl font-black text-slate-950 dark:text-white md:text-5xl">
            A sharper digital presence starts with one connected team.
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            We are not just a web team or a marketing team. Kanel innovations
            delivers digital experiences that connect strategy, product design,
            software delivery, funnel creation, content direction, SEO, and
            brand awareness so each part of your online presence reinforces the
            next.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {[
            'Position your business like a premium modern brand',
            'Collect more qualified inquiries through thoughtful journeys',
            'Launch fast without losing polish or performance',
            'Grow with systems built for visibility and conversion',
          ].map((point) => (
            <div
              key={point}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
              <CheckCircle2 className="h-6 w-6 text-blue-600 dark:text-blue-300" />
              <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-300">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export const Team = () => (
  <AnimatedSection
    id="team"
    className="bg-[linear-gradient(180deg,var(--bg-secondary),var(--bg-primary))] px-6 py-24 md:px-12 lg:px-16">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-500/15 dark:text-blue-200">
          Core Capabilities
        </div>
        <h2 className="mt-5 text-4xl font-black text-slate-950 dark:text-white md:text-5xl">
          Everything your digital service brand needs to launch and grow.
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          We help businesses present better, perform better, and get found
          faster with a tightly connected mix of product, marketing, and growth
          services.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {serviceCards.map((card, index) => {
          const [title, description, Icon] = card;

          return (
          <Motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/50 dark:border-white/10 dark:bg-white/5 dark:hover:border-blue-400/30 dark:hover:shadow-none">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-200">
              {React.createElement(Icon, { className: 'h-7 w-7' })}
            </div>
            <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
              {title}
            </h3>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
              {description}
            </p>
          </Motion.div>
          );
        })}
      </div>
    </div>
  </AnimatedSection>
);

export const Projects = () => (
  <AnimatedSection id="projects" className="px-6 py-24 md:px-12 lg:px-16">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="space-y-6">
          <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-500/15 dark:text-blue-200">
            What We Build
          </div>
          <h2 className="text-4xl font-black text-slate-950 dark:text-white md:text-5xl">
            Designed to look premium. Structured to win attention and inquiries.
          </h2>
          <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
            Whether you need a high-performing company website, an app-based
            service, a funnel for lead generation, or stronger search presence,
            we shape each project around clarity, trust, and measurable
            business movement.
          </p>
          <div className="rounded-[2rem] border border-blue-200 bg-blue-600 p-8 text-white shadow-2xl shadow-blue-600/20 dark:border-blue-400/20">
            <div className="flex items-center gap-3">
              <Megaphone className="h-6 w-6" />
              <p className="font-semibold uppercase tracking-[0.2em] text-blue-100">
                Digital Awareness Layer
              </p>
            </div>
            <p className="mt-4 text-lg leading-8 text-blue-50">
              We connect content direction, SEO structure, campaign messaging,
              and funnel journeys so your business does not just exist online,
              it gets noticed.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {showcaseItems.map(([title, detail], index) => (
            <Motion.div
              key={title}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-200">
                0{index + 1}
              </div>
              <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
                {title}
              </h3>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                {detail}
              </p>
            </Motion.div>
          ))}
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export const Testimonials = () => (
  <AnimatedSection
    id="testimonials"
    className="bg-[linear-gradient(180deg,var(--bg-primary),var(--bg-secondary))] px-6 py-24 md:px-12 lg:px-16">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-500/15 dark:text-blue-200">
          Delivery Process
        </div>
        <h2 className="mt-5 text-4xl font-black text-slate-950 dark:text-white md:text-5xl">
          We make modern digital delivery feel clear, focused, and high-touch.
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          Strategy first, then design, then implementation, then growth. That
          order is how we build digital products and service experiences that
          still make sense months after launch.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-4">
        {processSteps.map((step, index) => {
          const [title, description, Icon] = step;

          return (
          <Motion.div
            key={title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-200">
                {React.createElement(Icon, { className: 'h-7 w-7' })}
              </div>
              <span className="text-sm font-bold text-slate-400">0{index + 1}</span>
            </div>
            <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
              {title}
            </h3>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
              {description}
            </p>
          </Motion.div>
          );
        })}
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {testimonialCards.map(([quote, name, company], index) => (
          <Motion.div
            key={`${name}-${company}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-900/20 dark:bg-blue-950">
            <div className="flex gap-1 text-blue-300">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star key={starIndex} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-5 text-lg leading-8 text-slate-100">{quote}</p>
            <div className="mt-8 border-t border-white/10 pt-5">
              <p className="font-bold">{name}</p>
              <p className="text-sm text-blue-200">{company}</p>
            </div>
          </Motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export const Blog = () => (
  <AnimatedSection id="blog" className="px-6 py-24 md:px-12 lg:px-16">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-500/15 dark:text-blue-200">
            Insights & News
          </div>
          <h2 className="mt-5 text-4xl font-black text-slate-950 dark:text-white md:text-5xl">
            Smart digital ideas for brands that want better reach and stronger systems.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Explore articles, updates, and strategy notes from our world of web
            products, digital visibility, and modern service delivery.
          </p>
        </div>
        <RouterLink
          to="/blog-news"
          className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10">
          Browse All Articles
          <ArrowRight className="h-4 w-4" />
        </RouterLink>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {blogPosts.slice(0, 3).map((post, index) => (
          <Motion.article
            key={post.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-100/40 dark:border-white/10 dark:bg-white/5 dark:hover:shadow-none">
            <img src={post.image} alt={post.title} className="h-56 w-full object-cover" />
            <div className="p-7">
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700 dark:bg-blue-500/15 dark:text-blue-200">
                  {post.category}
                </span>
                <span className="text-slate-500 dark:text-slate-400">{post.date}</span>
              </div>
              <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">
                {post.title}
              </h3>
              <p className="mt-4 line-clamp-3 leading-7 text-slate-600 dark:text-slate-300">
                {post.excerpt}
              </p>
              <RouterLink
                to="/blog-news"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-700 dark:text-blue-200">
                Read Article
                <ArrowRight className="h-4 w-4" />
              </RouterLink>
            </div>
          </Motion.article>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: inquiryServices[0],
    timeline: 'Within 30 days',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
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

    const inquiryMessage = [
      `Company/Brand: ${formData.company || 'Not provided'}`,
      `Requested service: ${formData.service}`,
      `Preferred timeline: ${formData.timeline}`,
      '',
      formData.message,
    ].join('\n');

    try {
      const timestamp = new Date().toLocaleString();

      await emailjs.send(
        serviceId,
        templateId,
        {
          // Match template variable names used in EmailJS
          name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          company: formData.company,
          service: formData.service,
          timeline: formData.timeline,
          time: timestamp,
          // keep a plain-text summary if your template uses it
          inquiry_message: inquiryMessage,
        },
        { publicKey }
      );

      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: null,
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        service: inquiryServices[0],
        timeline: 'Within 30 days',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setFormStatus((prev) => ({ ...prev, isSubmitted: false, error: null }));
      }, 4000);
    } catch {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error:
          'Message failed to send. Please check your EmailJS template settings and try again.',
      });
    }
  };

  const contactCards = [
    ['Call', ['+2347084153584', '08152282324'], Phone],
    ['Office', ['Lagos, Nigeria'], MapPin],
    ['Response Window', ['We typically reply quickly to serious project inquiries.'], Clock3],
    ['Best Fit', ['Websites, apps, funnels, SEO, automation, and digital growth.'], MessageSquareMore],
  ];

  return (
    <AnimatedSection id="contact" className="px-6 py-24 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-500/15 dark:text-blue-200">
            Inquiry Form
          </div>
          <h2 className="mt-5 text-4xl font-black text-slate-950 dark:text-white md:text-5xl">
            Let&apos;s turn your next digital idea into a polished growth asset.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Tell us what you want to build, improve, or launch. This form is
            already wired to collect inquiries through your existing EmailJS
            setup.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl shadow-blue-100/40 dark:border-white/10 dark:bg-slate-900/85 dark:shadow-none">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  ['name', 'Full Name', 'text', 'Your full name'],
                  ['email', 'Email Address', 'email', 'you@example.com'],
                  ['company', 'Company or Brand', 'text', 'Your brand or company'],
                  ['subject', 'Project Title', 'text', 'Brief title for your project'],
                ].map(([id, label, type, placeholder]) => (
                  <div key={id}>
                    <label htmlFor={id} className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                      {label}
                    </label>
                    <input
                      id={id}
                      type={type}
                      value={formData[id]}
                      onChange={handleChange}
                      required={id !== 'company'}
                      placeholder={placeholder}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:bg-white/10 dark:focus:ring-blue-500/20"
                    />
                  </div>
                ))}
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:bg-white/10 dark:focus:ring-blue-500/20">
                    {inquiryServices.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Preferred Timeline
                  </label>
                  <select
                    id="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:bg-white/10 dark:focus:ring-blue-500/20">
                    {['ASAP', 'Within 30 days', '1 to 3 months', 'Just exploring options'].map((timeline) => (
                      <option key={timeline} value={timeline}>
                        {timeline}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us what you want to build, your goals, and what success should look like."
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:bg-white/10 dark:focus:ring-blue-500/20"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus.isSubmitting || formStatus.isSubmitted}
                className={`inline-flex w-full items-center justify-center rounded-2xl px-6 py-4 text-base font-semibold text-white transition ${
                  formStatus.isSubmitted ? 'bg-emerald-600' : 'bg-blue-600 hover:bg-blue-700'
                } disabled:cursor-not-allowed disabled:opacity-80`}>
                {formStatus.isSubmitting
                  ? 'Sending inquiry...'
                  : formStatus.isSubmitted
                    ? 'Inquiry Sent Successfully'
                    : 'Send Inquiry'}
              </button>

              {formStatus.error && (
                <p className="text-sm font-medium text-red-600 dark:text-red-300">
                  {formStatus.error}
                </p>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] bg-blue-600 p-8 text-white shadow-2xl shadow-blue-600/20">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">
                Why clients reach out
              </p>
              <h3 className="mt-4 text-3xl font-black">
                They want more than a nice-looking page.
              </h3>
              <p className="mt-5 leading-8 text-blue-50">
                They want a digital system that explains the offer clearly,
                looks credible instantly, captures attention, and turns visits
                into project conversations.
              </p>
            </div>

            {contactCards.map((card) => {
              const [title, lines, Icon] = card;

              return (
              <div
                key={title}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-200">
                  {React.createElement(Icon, { className: 'h-6 w-6' })}
                </div>
                <h4 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
                  {title}
                </h4>
                {lines.map((line) => (
                  <p key={line} className="mt-2 leading-7 text-slate-600 dark:text-slate-300">
                    {line}
                  </p>
                ))}
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
