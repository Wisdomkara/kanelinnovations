import React, { useEffect, useRef, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import * as THREE from 'three';
import {
  ArrowRight,
  BarChart3,
  Bot,
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
  ['Growth Engine', 'Funnels, SEO, content structure, automations, and analytics connected into one system.', Funnel, 'amber'],
  ['AI & Business Automations', 'CRM flows, lead follow-up, reporting, and AI-assisted workflows that reduce manual admin work.', Sparkles, 'blue'],
];

const processSteps = [
  ['Audit', 'We review your offer, website, visibility, lead flow, admin tasks, and digital gaps.', Compass],
  ['Blueprint', 'We map pages, content, automations, CRM stages, data capture, and conversion paths.', Layers3],
  ['Build', 'We design and develop the experience with clean UI, speed, and responsive behavior.', Code2],
  ['Grow', 'We improve SEO, campaigns, analytics, automations, and follow-up systems after launch.', Workflow],
];

const showcaseItems = [
  ['Website that sells trust', 'Clear messaging, fast pages, proof, service pages, and mobile-first conversion paths.', Globe2],
  ['Search visibility system', 'Content clusters, technical SEO, schema-ready structure, and AI-search friendly answers.', Search],
  ['Lead capture funnel', 'Landing pages, forms, WhatsApp paths, email follow-up, and tracking for every campaign.', Target],
  ['Business automation system', 'CRM setup, booking flows, dashboards, reminders, customer portals, and internal workflows that remove manual work.', MonitorSmartphone],
];

const automationHighlights = [
  ['Lead routing', 'Send enquiries from your website, ads, or WhatsApp into the right follow-up flow.', Funnel],
  ['CRM and reminders', 'Track prospects, automate next steps, and reduce missed calls, quotes, and check-ins.', MessageSquareMore],
  ['Operations workflows', 'Connect forms, approvals, bookings, reports, and internal handoffs around how your team works.', Workflow],
  ['AI support systems', 'Use AI for first responses, content drafts, summaries, and routine customer or admin tasks.', Bot],
];

const testimonialCards = [
  [
    'Strengthened our digital presence and delivered a web application that made Exploits Energy stand out with a more professional, credible online experience.',
    'CEO / Managing Director Kingsley Kalu',
    'Exploits Energy',
    '',
  ],
  [
    'They helped Insight Academy improve its digital visibility by 110% while giving our brand a clearer, stronger, and more trusted online presence.',
    'Victory Idoko',
    'Founder, Insight Academy',
    '',
  ],
  [
    'Built a web application that helped Amaechi Homes present its property services with better structure, usability, and client confidence.',
    'Leadership Team',
    'Amaechi Homes',
    '',
  ],
  [
    'Built the complete digital healthcare infrastructure and online presence, giving Healinton a stronger foundation for modern healthcare delivery.',
    'CEO / Founder Wisdom Kara',
    'Healinton',
    '',
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
  'AI & Automation Systems',
  'Automation & CRM Setup',
  'Full Digital Growth Partner',
];

const initialInquiryData = {
  name: '',
  email: '',
  service: inquiryServices[0],
  message: '',
};

const clientLogos = [
  {
    name: 'Healinton',
    type: 'image',
    src: `${import.meta.env.BASE_URL}client-logos/healinton-logo.png`,
    className: 'h-12 w-auto sm:h-14',
  },
  {
    name: 'Exploits Energy',
    type: 'text',
    className: 'text-xl font-black uppercase tracking-[0.08em] text-white sm:text-2xl',
  },
  {
    name: 'AmaechiHomes',
    type: 'text',
    className: 'text-xl font-black tracking-tight text-white sm:text-2xl',
  },
  {
    name: 'Belfon',
    type: 'image',
    src: `${import.meta.env.BASE_URL}client-logos/belfon-logo.jpg`,
    className: 'h-14 w-14 rounded-xl object-cover sm:h-16 sm:w-16',
  },
];

const HeroThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true,
      powerPreference: 'high-performance',
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    Object.assign(renderer.domElement.style, {
      display: 'block',
      height: '100%',
      width: '100%',
    });
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);
    const pointer = new THREE.Vector2(0, 0);
    const targetPointer = new THREE.Vector2(0, 0);

    const particleCount = 150;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const palette = [
      new THREE.Color('#60a5fa'),
      new THREE.Color('#22d3ee'),
      new THREE.Color('#34d399'),
      new THREE.Color('#ffffff'),
    ];

    for (let index = 0; index < particleCount; index += 1) {
      const offset = index * 3;
      positions[offset] = THREE.MathUtils.randFloatSpread(12);
      positions[offset + 1] = THREE.MathUtils.randFloatSpread(7);
      positions[offset + 2] = THREE.MathUtils.randFloat(-4, 4);

      const color = palette[index % palette.length];
      colors[offset] = color.r;
      colors[offset + 1] = color.g;
      colors[offset + 2] = color.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        size: 0.055,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        depthWrite: false,
      })
    );
    group.add(particles);

    const linePositions = [];
    for (let index = 0; index < particleCount; index += 1) {
      for (let next = index + 1; next < particleCount; next += 1) {
        const first = index * 3;
        const second = next * 3;
        const dx = positions[first] - positions[second];
        const dy = positions[first + 1] - positions[second + 1];
        const dz = positions[first + 2] - positions[second + 2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (distance < 1.45 && linePositions.length < 1260) {
          linePositions.push(
            positions[first],
            positions[first + 1],
            positions[first + 2],
            positions[second],
            positions[second + 1],
            positions[second + 2]
          );
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(
      lineGeometry,
      new THREE.LineBasicMaterial({
        color: '#7dd3fc',
        transparent: true,
        opacity: 0.18,
        depthWrite: false,
      })
    );
    group.add(lines);

    const wireMaterial = new THREE.MeshBasicMaterial({
      color: '#38bdf8',
      transparent: true,
      opacity: 0.22,
      wireframe: true,
      depthWrite: false,
    });
    const accentMaterial = new THREE.MeshBasicMaterial({
      color: '#34d399',
      transparent: true,
      opacity: 0.18,
      wireframe: true,
      depthWrite: false,
    });

    const torus = new THREE.Mesh(new THREE.TorusKnotGeometry(1.15, 0.22, 120, 12), wireMaterial);
    torus.position.set(1.6, 0.65, -0.5);
    torus.rotation.set(0.7, 0.2, 0.1);
    group.add(torus);

    const sphere = new THREE.Mesh(new THREE.IcosahedronGeometry(1.2, 2), accentMaterial);
    sphere.position.set(3.1, -1.7, -1.7);
    sphere.rotation.set(0.2, 0.6, 0.1);
    group.add(sphere);

    const grid = new THREE.GridHelper(11, 18, '#38bdf8', '#1d4ed8');
    grid.material.transparent = true;
    grid.material.opacity = 0.14;
    grid.position.set(2.4, -3.1, -1.7);
    grid.rotation.x = Math.PI * 0.34;
    group.add(grid);

    const resize = () => {
      const { clientWidth, clientHeight } = mount;
      camera.aspect = clientWidth / Math.max(clientHeight, 1);
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight, false);
    };

    const handlePointerMove = (event) => {
      const rect = mount.getBoundingClientRect();
      targetPointer.x = ((event.clientX - rect.left) / Math.max(rect.width, 1) - 0.5) * 2;
      targetPointer.y = -(((event.clientY - rect.top) / Math.max(rect.height, 1) - 0.5) * 2);
    };

    const handlePointerLeave = () => {
      targetPointer.set(0, 0);
    };

    const renderScene = (elapsed = 0) => {
      pointer.lerp(targetPointer, 0.08);
      group.rotation.x = pointer.y * 0.1;
      group.rotation.y = elapsed * 0.035 + pointer.x * 0.18;
      particles.rotation.y = elapsed * 0.025 + pointer.x * 0.06;
      lines.rotation.y = elapsed * 0.025 + pointer.x * 0.06;
      torus.position.x = 1.6 + pointer.x * 0.35;
      torus.position.y = 0.65 + pointer.y * 0.2;
      torus.rotation.x = 0.7 + elapsed * 0.16 + pointer.y * 0.2;
      torus.rotation.y = 0.2 + elapsed * 0.24 + pointer.x * 0.35;
      sphere.position.x = 3.1 - pointer.x * 0.28;
      sphere.position.y = -1.7 - pointer.y * 0.18;
      sphere.rotation.y = elapsed * 0.18 + pointer.x * 0.24;
      sphere.scale.setScalar(1 + Math.sin(elapsed * 1.4) * 0.035);
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.55, 0.06);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.32, 0.06);
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };

    let animationFrame = null;
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsed = clock.getElapsedTime();
      renderScene(elapsed);
      animationFrame = window.requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    mount.addEventListener('pointermove', handlePointerMove);
    mount.addEventListener('pointerleave', handlePointerLeave);

    if (prefersReducedMotion) {
      renderScene(0);
    } else {
      animate();
    }

    return () => {
      window.removeEventListener('resize', resize);
      mount.removeEventListener('pointermove', handlePointerMove);
      mount.removeEventListener('pointerleave', handlePointerLeave);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      particleGeometry.dispose();
      lineGeometry.dispose();
      wireMaterial.dispose();
      accentMaterial.dispose();
      particles.material.dispose();
      lines.material.dispose();
      torus.geometry.dispose();
      sphere.geometry.dispose();
      grid.geometry.dispose();
      grid.material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="pointer-events-auto absolute inset-y-0 right-0 z-[1] w-[95%] translate-x-[32%] opacity-60 mix-blend-screen [mask-image:linear-gradient(90deg,transparent_0%,black_28%,black_100%)] sm:w-[64%] sm:translate-x-0 sm:opacity-85 lg:w-[58%]"
      aria-hidden="true"
    />
  );
};

export const Home = () => (
  <AnimatedSection
    id="home"
    className="relative flex min-h-[100svh] overflow-hidden bg-slate-950 px-5 pb-14 pt-24 text-white sm:px-6 md:px-10 md:pb-20 md:pt-32 lg:px-16">
    <img
      src={HeroDigitalPresenceImage}
      alt=""
      aria-hidden="true"
      className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
    />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.88)_0%,rgba(2,6,23,0.64)_42%,rgba(2,6,23,0.12)_100%)]" />
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.04),rgba(2,6,23,0.45))]" />
    <HeroThreeScene />

    {/* Animated Blobs */}
    <div className="absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/30 mix-blend-screen filter blur-[100px] animate-blob" />
    <div className="absolute right-1/4 top-1/3 h-96 w-96 -translate-y-1/2 rounded-full bg-purple-600/20 mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
    <div className="absolute left-1/2 bottom-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-600/20 mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" />

    <div className={`${containerClass} relative z-10 flex w-full flex-col items-center justify-center text-center sm:flex-row sm:items-center sm:justify-start sm:text-left`}>
      <Motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mx-auto max-w-2xl space-y-7 text-center sm:mx-0 sm:max-w-3xl sm:text-left">


        <div className="space-y-5">
          <h1 className="max-w-xl text-xl font-black leading-tight text-white sm:max-w-full sm:text-3xl lg:text-4xl">
            Your <span className="text-gradient-primary">Digital Growth</span> Partner <br />
            Building visible, credible, <br /> and scalable brands.
          </h1>
          <p className="max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
            We design websites, apps, funnels, SEO structures, and business
            automation systems that help owners show up professionally, reduce
            repetitive work, and turn online attention into qualified
            conversations.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-90}
            className="group inline-flex min-w-[11rem] items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_50px_-20px_rgba(37,99,235,0.9)] transition hover:bg-blue-700 sm:px-7 sm:py-4 sm:text-base">
            Build My Presence
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-90}
            className="inline-flex min-w-[11rem] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15 sm:px-7 sm:py-4 sm:text-base">
            View Services
          </ScrollLink>
        </div>
      </Motion.div>
    </div>
  </AnimatedSection>
);

export const ClientLogoMarquee = () => {
  const marqueeItems = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <AnimatedSection className="relative z-10 bg-slate-50 px-5 py-8 dark:bg-slate-900 sm:px-6 md:px-10 lg:px-16">
      <div className={containerClass}>
        <div className="overflow-hidden rounded-3xl border border-blue-400/20 bg-[#03152f] px-5 py-8 shadow-2xl shadow-blue-950/25 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
              Trusted by growing businesses
            </p>
          </div>

          <div className="relative mt-8 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#03152f] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#03152f] to-transparent" />

            <div className="client-logo-marquee flex w-max items-center gap-5">
              {marqueeItems.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex h-24 min-w-[190px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] px-6 backdrop-blur transition hover:border-cyan-300/50 hover:bg-white/[0.12] sm:min-w-[230px]">
                  {logo.type === 'image' ? (
                    <img src={logo.src} alt={`${logo.name} logo`} className={logo.className} />
                  ) : (
                    <span className={logo.className}>{logo.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export const GrowthPositioning = () => (
  <AnimatedSection className={`bg-[#fff8df] dark:bg-slate-950 ${sectionSpacing}`}>
    <div className={`${containerClass} grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center`}>
      <Motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
        className="max-w-2xl">
        <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-500/15 dark:text-blue-200">
          What We Help You Solve
        </div>
        <div className="mt-6 space-y-5 text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg">
          <p>
            At Kanel Innovations, we help businesses overcome the barriers that keep them small,
            invisible, and disconnected in today's digital economy.
          </p>
          <p>
            Many great businesses struggle to reach the right customers, manage growing demands, or
            compete beyond their immediate location. We turn those challenges into practical digital
            systems that make your business easier to find, easier to trust, and easier to grow.
          </p>
          <p>
            From building a strong online presence to improving how your business connects with
            customers and operates behind the scenes, we create solutions designed around your goals,
            not generic templates. Our focus is to help you scale with confidence, increase your
            visibility, and position your brand to compete locally and globally.
          </p>
          <p className="font-black text-slate-950 dark:text-white">
            Kanel Innovations exists to help ambitious businesses move from where they are today to
            where they deserve to be.
          </p>
        </div>
      </Motion.div>

      <Motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, delay: 0.08 }}
        className="relative">
        <div className="absolute -inset-4 rounded-[2rem] bg-blue-600/10 blur-2xl dark:bg-cyan-400/10" />
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-2xl shadow-blue-100/50 dark:border-white/10 dark:bg-white/5 dark:shadow-none">
          <img
            src={TeamImage}
            alt="Kanel Innovations team planning a digital project"
            className="h-[28rem] w-full object-cover"
          />
        </div>
      </Motion.div>
    </div>
  </AnimatedSection>
);

export const BusinessDominanceMarquee = () => (
  <AnimatedSection className="overflow-hidden bg-[#fff1b8] py-8 dark:bg-slate-950">
    <div className="relative border-y border-blue-900/10 bg-[#081f4d] py-7 text-white shadow-2xl shadow-blue-950/20">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#081f4d] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#081f4d] to-transparent" />
      <div className="business-dominance-marquee flex w-max items-center gap-10">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="flex items-center gap-10">
            <span className="text-3xl font-black uppercase tracking-wide text-white sm:text-5xl lg:text-6xl">
              Join the thousand of business dominating the world today using digital means.
            </span>
            <span className="h-4 w-4 rounded-full bg-cyan-300 shadow-[0_0_30px_rgba(125,211,252,0.8)]" />
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export const About = () => (
  <AnimatedSection id="about" className={`bg-slate-50 dark:bg-slate-900 ${sectionSpacing}`}>
    <div className={containerClass}>
      <div className="max-w-3xl">
        
        <h2 className="mt-5 text-3xl font-black leading-tight text-slate-950 dark:text-white md:text-5xl">
          A weak online presence now costs businesses trust, visibility, and
          speed.
        </h2>
      </div>

      <div className={`${contentGap} grid gap-6 lg:grid-cols-2`}>
        {digitalPresenceReasons.map(([title, detail, Icon]) => (
          <div
            key={title}
            className="glass-shine-sweep group flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/50 dark:glass-panel dark:hover:shadow-blue-500/10 sm:flex-row sm:items-start">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-white/5 dark:text-blue-300 dark:group-hover:bg-blue-500 dark:group-hover:text-white">
              {React.createElement(Icon, { className: 'h-8 w-8' })}
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-950 dark:text-white">
                {title}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                {detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export const Team = () => (
  <AnimatedSection
    id="team"
    className={`bg-[#fff4c8] dark:bg-slate-950 ${sectionSpacing}`}>
    <div className={containerClass}>
      <div className="mx-auto max-w-4xl text-center">
        <div className="flex justify-center">
          <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-500/15 dark:text-blue-200">
            Services
          </div>
        </div>
        <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
          Choose the digital service your business needs next.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8">
          Every card shows the service capability, what makes it unique, and a clear path to learn more or submit an enquiry.
        </p>
      </div>

      <div className={`${contentGap} grid gap-5 md:grid-cols-2 xl:grid-cols-3`}>
        {servicePageList.map((service, index) => {
          const Icon = service.icon;
          const isAutomation = service.slug === 'business-automations';

          return (
            <Motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 34, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className={`group flex min-h-full flex-col rounded-3xl border p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                isAutomation
                  ? 'border-emerald-200 bg-emerald-50 hover:shadow-emerald-100/70 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:hover:shadow-none'
                  : 'border-blue-100 bg-white/80 hover:bg-white hover:shadow-blue-100/70 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 dark:hover:shadow-none'
              }`}>
              <div className="flex items-start justify-between gap-4">
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                    isAutomation
                      ? 'bg-emerald-600 text-white'
                      : 'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-200'
                  }`}>
                  {React.createElement(Icon, { className: 'h-7 w-7' })}
                </div>
                <span className="text-sm font-black text-slate-300 dark:text-white/20">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-7 text-xl font-black text-slate-950 dark:text-white sm:text-2xl">
                {service.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                {service.summary}
              </p>
              <div className="mt-5 grid gap-3">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-700 dark:text-blue-200">
                    Capability
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                    {service.capability}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-700 dark:text-blue-200">
                    Uniqueness
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                    {service.uniqueness}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-1 items-end">
                <RouterLink
                  to={`/services/${service.slug}`}
                  className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition focus:outline-none focus:ring-4 ${
                    isAutomation
                      ? 'bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-100 dark:focus:ring-emerald-400/20'
                      : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-100 dark:focus:ring-blue-500/20'
                  }`}>
                  View More Details
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </RouterLink>
              </div>
            </Motion.div>
          );
        })}
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
            forms, automations, CRM setup, and tracking are planned around
            action, not decoration.
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
              className="group grid gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-100/45 dark:glass-panel dark:hover:shadow-blue-500/20 sm:grid-cols-[64px_1fr]">
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
            className="glass-shine-sweep group flex min-h-full flex-col rounded-3xl bg-slate-950 p-6 text-white shadow-2xl shadow-slate-900/20 transition duration-300 hover:-translate-y-1 hover:scale-[1.03] dark:glass-panel dark:hover:shadow-blue-500/20">
            <div className="flex gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star key={starIndex} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-5 flex-1 text-sm leading-7 text-slate-100">{quote}</p>
            <div className="mt-7 border-t border-white/10 pt-5">
              {result && (
                <div className="mb-3">
                  <span className="rounded-full bg-blue-400/15 px-3 py-1 text-xs font-semibold text-blue-200">
                    {result}
                  </span>
                </div>
              )}
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
          development, automation setup, and measurable growth support.
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
              className="group grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-white hover:shadow-xl hover:shadow-blue-100/40 dark:glass-panel dark:hover:bg-white/5 dark:hover:shadow-blue-500/20 sm:grid-cols-[56px_1fr_44px] sm:items-center">
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
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-white hover:shadow-xl hover:shadow-blue-100/40 dark:glass-panel dark:hover:shadow-blue-500/20">
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
