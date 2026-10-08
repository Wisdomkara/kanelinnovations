// Complete catalogue, based on the website's published service pages.
export const scoreServices = [
  ['Website & Web App Development', 'Build or redesign websites, landing pages, portals and dashboards that make your business easy to trust and contact.', 'website-web-app-development'],
  ['Business Automations', 'Reduce repetitive admin, lost enquiries and missed follow-ups with connected forms, CRM workflows, reminders and reporting.', 'business-automations'],
  ['SEO & Google Visibility', 'Improve search visibility, website structure, technical SEO and content so customers can find your services.', 'seo-google-visibility'],
  ['Branding & Digital Design', 'Create a consistent identity, website design system, pitch materials and campaign visuals.', 'branding-digital-design'],
  ['Digital Marketing & Lead Generation', 'Improve campaign pages, paid advertising journeys, lead capture, conversion tracking and follow-up.', 'digital-marketing-lead-generation'],
  ['Kanel Tech Academy', 'Build practical digital, software and automation skills through training and team workshops.', 'kanel-tech-academy'],
  ['Website Maintenance', 'Fix broken pages, update content, improve performance and keep your website useful after launch.', 'website-maintenance'],
  ['Social Media Design', 'Create consistent social templates, launch graphics and campaign creatives.', 'social-media-design'],
  ['Google Business Profile Setup', 'Help eligible local businesses appear with accurate services, contact details and information on Google Search and Maps.', 'google-business-profile-setup'],
  ['E-commerce Development', 'Build mobile-friendly online stores with clear products, shopping journeys, checkout and tracking.', 'e-commerce-development'],
].map(([name, description, slug]) => ({ name, description, path: `/services/${slug}` }));
