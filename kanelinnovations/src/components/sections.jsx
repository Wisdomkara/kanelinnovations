import React, { useEffect, useRef, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import {
  ArrowRight,
  BarChart3,
  Bot,
  Building2,
  CheckCircle2,
  Clock3,
  Code2,
  Compass,
  Funnel,
  Gauge,
  Globe2,
  Layers3,
  LockKeyhole,
  MapPin,
  Megaphone,
  MessageSquareMore,
  MonitorSmartphone,
  Newspaper,
  Phone,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Target,
  UsersRound,
  Workflow,
} from 'lucide-react';
import SuccessModal from './SuccessModal.jsx';
import HeroDigitalPresenceImage from '../assets/images/hero-digital-presence.webp';
import TeamImage from '../assets/images/team-digital-project.jpg';
import { blogPosts } from '../data/blogPosts';
import { sendOwnerEmail } from '../utils/mail.js';

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
      className={`${className} scroll-mt-28 transform-gpu transition-all duration-1000 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}>
      {children}
    </section>
  );
};

const sectionSpacing = 'px-5 py-16 sm:px-6 sm:py-20 md:px-10 lg:px-16 lg:py-24';
const containerClass = 'mx-auto max-w-7xl';
const contentGap = 'mt-10 lg:mt-12';

const serviceCards = [
  ['Digital Presence', 'Websites, landing pages, and brand systems that make your business look credible fast.', Globe2, 'blue'],
  ['Product Build', 'Web apps, portals, dashboards, and mobile experiences built around real workflows.', MonitorSmartphone, 'emerald'],
  ['Growth Engine', 'Funnels, SEO, content structure, automation, and analytics connected into one system.', Funnel, 'amber'],
];

const processSteps = [
  ['Audit', 'We review your offer, website, visibility, lead flow, and digital gaps.', Compass],
  ['Blueprint', 'We map pages, content, automations, data capture, and conversion paths.', Layers3],
  ['Build', 'We design and develop the experience with clean UI, speed, and responsive behavior.', Code2],
  ['Grow', 'We improve SEO, campaigns, analytics, and follow-up systems after launch.', Workflow],
];

const showcaseItems = [
  ['Website that sells trust', 'Clear messaging, fast pages, proof, service pages, and mobile-first conversion paths.', Globe2],
  ['Search visibility system', 'Content clusters, technical SEO, schema-ready structure, and AI-search friendly answers.', Search],
  ['Lead capture funnel', 'Landing pages, forms, WhatsApp paths, email follow-up, and tracking for every campaign.', Target],
  ['Business app or portal', 'Dashboards, booking tools, customer portals, and internal workflows that remove manual work.', MonitorSmartphone],
];

const testimonialCards = [
  [
    'Strengthened our digital presence and delivered a web application that made Exploits Energy stand out with a more professional, credible online experience.',
    'CEO / Managing Director',
    'Exploits Energy',
    'Digital presence + web app',
  ],
  [
    'They helped Insight Academy improve its digital visibility by 110% while giving our brand a clearer, stronger, and more trusted online presence.',
    'Victory Idoko',
    'Founder, Insight Academy',
    '110% visibility growth',
  ],
  [
    'Built a web application that helped Amaechi Homes present its property services with better structure, usability, and client confidence.',
    'Leadership Team',
    'Amaechi Homes',
    'Real estate web app',
  ],
  [
    'Built the complete digital healthcare infrastructure and online presence, giving Healinton a stronger foundation for modern healthcare delivery.',
    'CEO / Founder Wisdom Kara',
    'Healinton',
    'Healthcare infrastructure',
  ],
];

const digitalPresenceReasons = [
  ['Be discoverable', 'Customers now find brands through Google, AI answers, maps, social feeds, and referrals. Your content must be ready everywhere.', Bot],
  ['Convert faster', 'A polished website and simple enquiry flow reduce doubt and make it easier for prospects to take action.', Gauge],
  ['Build trust', 'Clear proof, security, speed, and consistent branding help buyers feel confident before they speak to you.', ShieldCheck],
  ['Sell where people are', 'Social commerce, WhatsApp, landing pages, and email follow-up keep your business active beyond a single homepage.', ShoppingBag],
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

const initialInquiryData = {
  name: '',
  email: '',
  service: inquiryServices[0],
  message: '',
};

export const Home = () => (
  <AnimatedSection
    id="home"
    className="relative flex min-h-[100svh] overflow-hidden bg-slate-950 px-5 pb-16 pt-28 text-white sm:px-6 md:px-10 md:pb-20 md:pt-32 lg:px-16">
    <img
      src={HeroDigitalPresenceImage}
      alt=""
      aria-hidden="true"
      className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
    />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.88)_0%,rgba(2,6,23,0.64)_42%,rgba(2,6,23,0.12)_100%)]" />
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.04),rgba(2,6,23,0.45))]" />
    <div className={`${containerClass} relative flex w-full items-center`}>
      <Motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-3xl space-y-7">
        <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100 shadow-sm backdrop-blur">
          <ShieldCheck className="h-4 w-4 shrink-0" />
          <span>Digital service partner for growing brands</span>
        </div>

        <div className="space-y-5">
          <h1 className="max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Your Digital Growth Partner <br />
            Building visible, credible, <br /> and scalable brands.
          </h1>
          <p className="max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
            We design websites, apps, funnels, SEO structures, and automation
            systems that help business owners show up professionally and turn
            online attention into qualified conversations.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-90}
            className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-base font-semibold text-white shadow-[0_20px_50px_-20px_rgba(37,99,235,0.9)] transition hover:bg-blue-700">
            Build My Presence
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-90}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/15">
            View Services
          </ScrollLink>
        </div>
      </Motion.div>
    </div>
  </AnimatedSection>
);

export const About = () => (
  <AnimatedSection id="about" className={`bg-slate-50 dark:bg-slate-900 ${sectionSpacing}`}>
    <div className={containerClass}>
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
        <div>
          <div className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm dark:bg-white/5 dark:text-blue-200">
            Why It Matters
          </div>
          <h2 className="mt-5 text-3xl font-black leading-tight text-slate-950 dark:text-white md:text-5xl">
            A weak online presence now costs businesses trust, visibility, and
            speed.
          </h2>
        </div>
        <p className="text-base leading-8 text-slate-700 dark:text-slate-300 md:text-lg">
          Buyers research before they call. They compare websites, scan reviews,
          ask AI tools, check social pages, and judge credibility quickly. Your
          digital presence needs to answer clearly, load fast, and guide them to
          the next action.
        </p>
      </div>

      <div className={`${contentGap} grid gap-5 md:grid-cols-2 xl:grid-cols-4`}>
        {digitalPresenceReasons.map(([title, detail, Icon]) => (
          <div
            key={title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl hover:shadow-blue-100/50 dark:border-white/10 dark:bg-slate-950 dark:hover:shadow-none">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-200">
              {React.createElement(Icon, { className: 'h-6 w-6' })}
            </div>
            <h3 className="mt-5 text-xl font-black text-slate-950 dark:text-white">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {detail}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950 lg:mt-24">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <img
            src={TeamImage}
            alt="Kanel innovations team planning a digital project"
            className="h-72 w-full object-cover lg:h-full"
          />
          <div className="p-6 sm:p-8 lg:p-10 ">
            <div className="flex items-center gap-3">
              <Building2 className="h-6 w-6 text-blue-700 dark:text-blue-300" />
              <p className="font-semibold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
                Built for business owners
              </p>
            </div>
            <h3 className="mt-5 text-2xl font-black text-slate-950 dark:text-white md:text-4xl">
              Not just a beautiful page. A working business asset.
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                'Clear service positioning',
                'Lead capture and WhatsApp paths',
                'Search-ready page structure',
                'Automation and analytics setup',
              ].map((point) => (
                <div key={point} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-300" />
                  <p className="leading-7 text-slate-700 dark:text-slate-300">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export const Team = () => (
  <AnimatedSection
    id="team"
    className={`bg-white dark:bg-slate-950 ${sectionSpacing}`}>
    <div className={containerClass}>
      <div className="mx-auto max-w-4xl text-center">
        <div className="flex justify-center">
          <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-500/15 dark:text-blue-200">
            What We Do
          </div>
        </div>
        <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
          Three connected services. One stronger digital engine.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8">
          We avoid disconnected deliverables. Your website, product, funnel,
          content, analytics, and follow-up should support the same business
          goal.
        </p>
      </div>

      <div className={`${contentGap} grid gap-5 sm:grid-cols-2 lg:grid-cols-3`}>
        {serviceCards.map((card, index) => {
          const [title, description, Icon, tone] = card;
          const toneClass =
            tone === 'emerald'
              ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300'
              : tone === 'amber'
                ? 'bg-amber-100 text-amber-700 dark:bg-amber-400/15 dark:text-amber-300'
                : 'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-200';

          return (
            <Motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-white hover:shadow-2xl hover:shadow-blue-100/40 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 dark:hover:shadow-none sm:p-6">
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${toneClass}`}>
                {React.createElement(Icon, { className: 'h-7 w-7' })}
              </div>
              <p className="mt-7 text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-xl font-black text-slate-950 dark:text-white sm:text-2xl">
                {title}
              </h3>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                {description}
              </p>
            </Motion.div>
          );
        })}
      </div>

      <div className="mt-8 grid gap-5 rounded-3xl bg-slate-950 p-6 text-white sm:grid-cols-3 sm:p-8 lg:mt-10">
        {[
          ['Website + SEO', 'Get found and trusted'],
          ['Funnel + CRM', 'Capture and follow up'],
          ['Analytics + Growth', 'Measure what works'],
        ].map(([title, detail]) => (
          <div key={title} className="border-white/10 sm:border-l sm:pl-6 first:sm:border-l-0 first:sm:pl-0">
            <p className="font-black">{title}</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export const Projects = () => (
  <AnimatedSection id="projects" className={`bg-slate-50 dark:bg-slate-900 ${sectionSpacing}`}>
    <div className={containerClass}>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-500/15 dark:text-blue-200">
            Build Menu
          </div>
          <h2 className="mt-5 text-3xl font-black leading-tight text-slate-950 dark:text-white md:text-5xl">
            Pick the digital asset your business needs next.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
            We can start small or build the full system. The layout, content,
            forms, and tracking are planned around action, not decoration.
          </p>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-90}
            className="mt-7 inline-flex cursor-pointer items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
            Request a Build Plan
            <ArrowRight className="h-4 w-4" />
          </ScrollLink>
        </div>

        <div className="grid gap-5">
          {showcaseItems.map(([title, detail, Icon], index) => (
            <Motion.div
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-100/45 dark:border-white/10 dark:bg-slate-950 dark:hover:shadow-none sm:grid-cols-[64px_1fr]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-blue-600">
                {React.createElement(Icon, { className: 'h-6 w-6' })}
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-blue-700 dark:text-blue-300">
                    0{index + 1}
                  </span>
                  <span className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
                </div>
                <h3 className="mt-3 text-2xl font-black text-slate-950 dark:text-white">
                  {title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  {detail}
                </p>
              </div>
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
    className={`bg-slate-50 dark:bg-slate-900 ${sectionSpacing}`}>
    <div className={containerClass}>
      <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
            What Our Clients Think
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg">
            We help organizations look more credible online, build usable web
            applications, and turn scattered digital activity into a working
            business infrastructure.
          </p>
        </div>
      </div>

      <div className={`${contentGap} grid gap-6 md:grid-cols-2 xl:grid-cols-4`}>
        {testimonialCards.map(([quote, name, company, result], index) => (
          <Motion.div
            key={`${name}-${company}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="flex min-h-full flex-col rounded-3xl bg-slate-950 p-6 text-white shadow-2xl shadow-slate-900/20 transition duration-300 hover:-translate-y-1 hover:scale-[1.03] dark:bg-blue-950">
            <div className="flex gap-1 text-blue-300">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star key={starIndex} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-5 flex-1 text-sm leading-7 text-slate-100">{quote}</p>
            <div className="mt-7 border-t border-white/10 pt-5">
              <span className="rounded-full bg-blue-400/15 px-3 py-1 text-xs font-semibold text-blue-200">
                {result}
              </span>
              <p className="font-bold">{name}</p>
              <p className="mt-1 text-sm text-blue-200">{company}</p>
            </div>
          </Motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export const Process = () => (
  <AnimatedSection
    id="process"
    className={`bg-white dark:bg-slate-950 ${sectionSpacing}`}>
    <div className={`${containerClass} grid gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-start`}>
      <div>
        <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-500/15 dark:text-blue-200">
          Delivery Process
        </div>
        <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 dark:text-white md:text-5xl">
          Clear stages. No confusing handoff.
        </h2>
        <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
          We start with business clarity, then move into structure, design,
          development, and measurable growth support.
        </p>
      </div>

      <div className="grid gap-4">
        {processSteps.map((step, index) => {
          const [title, description, Icon] = step;

          return (
            <Motion.div
              key={title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-white hover:shadow-xl hover:shadow-blue-100/40 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 dark:hover:shadow-none sm:grid-cols-[56px_1fr_44px] sm:items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm dark:bg-slate-950 dark:text-blue-300">
                {React.createElement(Icon, { className: 'h-6 w-6' })}
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-950 dark:text-white">
                  {title}
                </h3>
                <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">
                  {description}
                </p>
              </div>
              <span className="text-lg font-black text-slate-300 dark:text-white/20">
                0{index + 1}
              </span>
            </Motion.div>
          );
        })}
      </div>
    </div>
  </AnimatedSection>
);

export const Blog = () => (
  <AnimatedSection id="blog" className={`bg-white text-slate-950 dark:bg-slate-950 dark:text-white ${sectionSpacing}`}>
    <div className={containerClass}>
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-white/10 dark:text-blue-200">
            <Newspaper className="h-4 w-4" />
            Technology News For Business Owners
          </div>
          <h2 className="mt-5 text-3xl font-black leading-tight text-slate-950 dark:text-white md:text-5xl">
            Why your digital presence must keep improving.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
            AI search, social commerce, cyber risk, and customer expectations
            are moving quickly. These updates explain what business owners
            should do next.
          </p>
        </div>
        <RouterLink
          to="/blog-news"
          className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50 dark:border-white/10 dark:text-slate-950">
          Open News Room
          <ArrowRight className="h-4 w-4" />
        </RouterLink>
      </div>

      <div className={`${contentGap} grid gap-6 md:grid-cols-3`}>
        {blogPosts.slice(0, 3).map((post, index) => (
          <Motion.article
            key={post.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-white hover:shadow-xl hover:shadow-blue-100/40 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 dark:hover:shadow-none">
            <img src={post.image} alt={post.title} className="h-56 w-full object-cover" />
            <div className="p-7">
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700 dark:bg-blue-400/15 dark:text-blue-200">
                  {post.category}
                </span>
                <span className="text-slate-500 dark:text-slate-400">{post.date}</span>
              </div>
              <h3 className="mt-5 text-2xl font-black text-slate-950 dark:text-white">
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
  const [formData, setFormData] = useState(initialInquiryData);
  const [formStatus, setFormStatus] = useState({
    error: null,
  });
  const [successModal, setSuccessModal] = useState({
    isOpen: false,
    title: '',
    message: '',
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const submittedData = { ...formData };
    const firstName = submittedData.name.trim().split(' ')[0] || 'there';

    setFormStatus({ error: null });
    setSuccessModal({
      isOpen: true,
      title: 'Enquiry received',
      message: `Thanks, ${firstName}. We received your ${submittedData.service.toLowerCase()} enquiry and will contact you shortly.`,
    });
    setFormData(initialInquiryData);

    void sendOwnerEmail({
      subject: `${submittedData.service} enquiry from ${submittedData.name}`,
      lines: [
        `Name: ${submittedData.name}`,
        `Email: ${submittedData.email}`,
        `Service needed: ${submittedData.service}`,
        '',
        `Message: ${submittedData.message || 'No extra message provided.'}`,
      ],
      name: submittedData.name,
      fromEmail: submittedData.email,
      service: submittedData.service,
      message: submittedData.message,
    });
  };

  const contactCards = [
    ['Call', '+2347084153584', Phone],
    ['Location', 'Lagos, Nigeria', MapPin],
    ['Response', 'We reply as soon as possible.', Clock3],
  ];

  return (
  <AnimatedSection
    id="contact"
      className={`bg-slate-50 dark:bg-slate-900 ${sectionSpacing}`}>
      <div className={containerClass}>
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-500/15 dark:text-blue-200">
            Contact
          </div>
          <h2 className="mt-5 text-3xl font-black text-slate-950 dark:text-white md:text-5xl">
            Tell us what you need built.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 md:text-lg">
            Send your name, email, and service choice. We will follow up with
            the next practical step.
          </p>
        </div>

        <div className={`${contentGap} grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start`}>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-blue-100/40 dark:border-white/10 dark:bg-slate-900/85 dark:shadow-none sm:p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  ['name', 'Full Name', 'text', 'Your full name'],
                  ['email', 'Email Address', 'email', 'you@example.com'],
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
                      required
                      autoComplete={id === 'name' ? 'name' : 'email'}
                      placeholder={placeholder}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:bg-white/10 dark:focus:ring-blue-500/20"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="service" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Service Needed
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:bg-white/10 dark:focus:ring-blue-500/20">
                  {inquiryServices.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Message <span className="font-normal text-slate-400">(optional)</span>
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Add a short note if needed."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:bg-white/10 dark:focus:ring-blue-500/20"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-500/20">
                Send Enquiry
                <ArrowRight className="h-4 w-4" />
              </button>

              {formStatus.error && (
                <p className="text-sm font-medium text-amber-700 dark:text-amber-300">
                  {formStatus.error}
                </p>
              )}
            </form>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
            <h3 className="text-xl font-black text-slate-950 dark:text-white">
              Direct contact
            </h3>
            <div className="mt-6 space-y-5">
              {contactCards.map(([title, value, Icon]) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-200">
                    {React.createElement(Icon, { className: 'h-5 w-5' })}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      {title}
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/2347084153584"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-100 focus:outline-none focus:ring-4 focus:ring-blue-100 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-200 dark:hover:bg-blue-500/15 dark:focus:ring-blue-500/20">
              <MessageSquareMore className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <SuccessModal
        isOpen={successModal.isOpen}
        title={successModal.title}
        message={successModal.message}
        onClose={() => setSuccessModal((prev) => ({ ...prev, isOpen: false }))}
      />
    </AnimatedSection>
  );
};
