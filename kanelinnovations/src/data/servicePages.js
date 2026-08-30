import {
  BadgeCheck,
  Bot,
  Code2,
  GraduationCap,
  MapPinned,
  Megaphone,
  Palette,
  Search,
  ShoppingCart,
  Wrench,
} from 'lucide-react';
import HeroDigitalPresenceImage from '../assets/images/hero-digital-presence.webp';
import TeamImage from '../assets/images/team-digital-project.jpg';
import BusinessGrowthImage from '../assets/images/Business-growth.jpeg';
import CompanyImage from '../assets/images/company.jpg';
import AutomationImage from '../assets/images/automation-hero.jpg';

export const servicePages = {
  'website-web-app-development': {
    title: 'Website & Web App Development',
    headline: 'Websites and web apps built to make your business easier to trust and easier to contact.',
    summary:
      'Kanel innovations designs and develops responsive websites, landing pages, dashboards, portals, and web applications around clear business goals.',
    image: HeroDigitalPresenceImage,
    icon: Code2,
    cta: 'Build My Website',
    capability: 'Websites, portals, dashboards, and responsive web apps.',
    uniqueness: 'Built around trust, speed, conversion paths, and real business workflows.',
    benefits: [
      'Clear service positioning and conversion-focused page structure',
      'Responsive layouts for mobile, tablet, and desktop users',
      'Fast enquiry paths through forms, WhatsApp, and calls',
      'Search-ready pages with practical content hierarchy',
    ],
    deliverables: [
      'Business website design and development',
      'Landing pages for campaigns or offers',
      'Customer portals, dashboards, and workflow tools',
      'Launch support, analytics setup, and handoff',
    ],
  },
  'business-automations': {
    title: 'Business Automations',
    headline: 'Automation systems that reduce manual work and help your team respond faster.',
    summary:
      'We connect forms, CRM stages, WhatsApp paths, booking flows, reports, reminders, and internal handoffs so work moves with less chasing.',
    image: AutomationImage,
    icon: Bot,
    cta: 'Automate My Business',
    capability: 'Lead routing, CRM flows, reminders, reports, and AI-assisted workflows.',
    uniqueness: 'Designed around how your business actually operates from enquiry to delivery.',
    benefits: [
      'Less manual admin and repeated data entry',
      'Faster response to new enquiries and bookings',
      'Clearer visibility across leads, tasks, and team handoffs',
      'More consistent customer follow-up',
    ],
    deliverables: [
      'Workflow mapping',
      'CRM and form integrations',
      'Automated reminders and routing',
      'Reporting dashboards and handoff support',
    ],
  },
  'seo-google-visibility': {
    title: 'SEO & Google Visibility',
    headline: 'Make your business easier to find when people are already searching.',
    summary:
      'We improve the structure, content, local visibility, and technical health of your website so it can perform better across Google search and discovery paths.',
    image: BusinessGrowthImage,
    icon: Search,
    cta: 'Improve My Visibility',
    capability: 'On-page SEO, local visibility, content structure, and technical search health.',
    uniqueness: 'Focused on helping customers find and trust you before they contact you.',
    benefits: [
      'Better service pages for the searches that matter',
      'Improved metadata, headings, internal links, and page structure',
      'Local search support for Google Business Profile visibility',
      'Analytics setup to see where attention and enquiries come from',
    ],
    deliverables: [
      'SEO audit and opportunity map',
      'On-page SEO updates',
      'Search-focused content planning',
      'Performance and visibility recommendations',
    ],
  },
  'branding-digital-design': {
    title: 'Branding & Digital Design',
    headline: 'Give your business a visual identity that feels credible everywhere.',
    summary:
      'We create practical brand and digital design systems for websites, social content, pitch materials, and customer-facing digital experiences.',
    image: CompanyImage,
    icon: Palette,
    cta: 'Refresh My Brand',
    capability: 'Brand identity, digital design systems, pitch assets, and social templates.',
    uniqueness: 'Keeps your business looking consistent from website to marketing material.',
    benefits: [
      'Consistent visual identity across digital channels',
      'Sharper first impression for prospects and partners',
      'Design assets that support marketing and sales',
      'Clearer presentation of your offer, values, and proof',
    ],
    deliverables: [
      'Brand direction and digital art direction',
      'Website design systems',
      'Social media templates',
      'Pitch, launch, and campaign visuals',
    ],
  },
  'digital-marketing-lead-generation': {
    title: 'Digital Marketing & Lead Generation',
    headline: 'Campaigns that guide prospects from attention to enquiry.',
    summary:
      'We help businesses plan campaign pages, creative direction, tracking, forms, and follow-up flows so marketing activity becomes measurable.',
    image: TeamImage,
    icon: Megaphone,
    cta: 'Generate More Leads',
    capability: 'Campaign pages, lead capture, tracking, creative direction, and follow-up paths.',
    uniqueness: 'Connects marketing attention to measurable enquiries and next steps.',
    benefits: [
      'Better campaign pages for offers and promotions',
      'Clearer lead capture across forms, WhatsApp, and calls',
      'Follow-up journeys for new enquiries',
      'Performance tracking for smarter decisions',
    ],
    deliverables: [
      'Landing page strategy and build',
      'Lead generation funnel setup',
      'Campaign creative direction',
      'Reporting and conversion recommendations',
    ],
  },
  'kanel-tech-academy': {
    title: 'Kanel Tech Academy',
    headline: 'Practical tech training for people and teams who want useful digital skills.',
    summary:
      'Kanel Tech Academy supports learners and teams with hands-on training across digital, software, business technology, and automation skills.',
    image: TeamImage,
    icon: GraduationCap,
    cta: 'Ask About Training',
    capability: 'Practical digital, software, and business technology training.',
    uniqueness: 'Project-based learning connected to real digital work and business outcomes.',
    benefits: [
      'Practical learning paths for real-world technology work',
      'Training that connects digital skills to business outcomes',
      'Support for beginners, professionals, and teams',
      'Project-based learning structure',
    ],
    deliverables: [
      'Training consultation',
      'Custom learning tracks',
      'Team workshops',
      'Digital skills project guidance',
    ],
  },
  'website-maintenance': {
    title: 'Website Maintenance',
    headline: 'Keep your website updated, stable, fast, and ready for customers.',
    summary:
      'We support websites after launch with updates, fixes, checks, backups, improvements, and practical care so the site remains useful.',
    image: HeroDigitalPresenceImage,
    icon: Wrench,
    cta: 'Maintain My Website',
    capability: 'Updates, fixes, performance checks, content support, and technical care.',
    uniqueness: 'Keeps your website useful after launch instead of letting it become outdated.',
    benefits: [
      'Reduced downtime and broken website experiences',
      'Regular updates and content support',
      'Performance and usability improvements',
      'A dependable technical partner after launch',
    ],
    deliverables: [
      'Website updates and fixes',
      'Technical checks',
      'Content and page adjustments',
      'Performance improvement support',
    ],
  },
  'social-media-design': {
    title: 'Social Media Design',
    headline: 'Social visuals that keep your brand consistent and professional.',
    summary:
      'We design social templates, campaign creatives, and recurring brand visuals that help your business show up clearly across digital channels.',
    image: CompanyImage,
    icon: BadgeCheck,
    cta: 'Design My Socials',
    capability: 'Social templates, campaign graphics, recurring visuals, and launch assets.',
    uniqueness: 'Makes your brand recognizable across every post, story, and campaign.',
    benefits: [
      'Consistent look across posts, stories, and campaigns',
      'Design support for launches, offers, and announcements',
      'Reusable templates for faster content production',
      'Better alignment between website, brand, and social presence',
    ],
    deliverables: [
      'Social media design templates',
      'Campaign graphics',
      'Brand-aligned content visuals',
      'Launch and promotional assets',
    ],
  },
  'google-business-profile-setup': {
    title: 'Google Business Profile Setup',
    headline: 'Help local customers find and contact your business on Google.',
    summary:
      'We set up and optimize Google Business Profile details so your business is better prepared for Maps, search visibility, calls, and directions.',
    image: BusinessGrowthImage,
    icon: MapPinned,
    cta: 'Set Up My Profile',
    capability: 'Google Business Profile setup, categories, services, and local visibility basics.',
    uniqueness: 'Helps nearby customers find the correct details and contact you faster.',
    benefits: [
      'Cleaner local search presence',
      'Better business details for calls, directions, and enquiries',
      'Profile structure that supports trust',
      'Guidance for ongoing profile improvement',
    ],
    deliverables: [
      'Google Business Profile setup',
      'Business information optimization',
      'Category and service guidance',
      'Profile improvement recommendations',
    ],
  },
  'e-commerce-development': {
    title: 'E-commerce Development',
    headline: 'Online stores planned around product discovery, checkout, and repeat sales.',
    summary:
      'We build e-commerce experiences that help customers browse, understand products, make purchases, and contact your team when needed.',
    image: HeroDigitalPresenceImage,
    icon: ShoppingCart,
    cta: 'Build My Store',
    capability: 'Product structure, e-commerce pages, checkout planning, and store launch support.',
    uniqueness: 'Plans the store around browsing clarity, buyer confidence, and conversion flow.',
    benefits: [
      'Product pages structured for clarity and confidence',
      'Mobile-friendly shopping experience',
      'Checkout planning and enquiry paths',
      'Support for campaigns, analytics, and store improvements',
    ],
    deliverables: [
      'E-commerce website setup',
      'Product and category structure',
      'Checkout and contact flow planning',
      'Launch support and optimization guidance',
    ],
  },
};

export const servicePageList = Object.entries(servicePages).map(([slug, page]) => ({
  slug,
  ...page,
}));
