// Versioned, shared by the browser and server. Presence gates carry no points.
export const ASSESSMENT_VERSION = 1;

const question = (id, label, points, action, why) => ({ id, label, points, action, why });

export const categories = [
  {
    id: 'website', name: 'Website', weight: 20, gate: 'Do you have a business website?',
    service: 'Website Development / Redesign', path: '/services/website-web-app-development', month: 1,
    foundation: ['Build a business website', 'Create a mobile-friendly, secure website with clear services and an enquiry route.', 'A website gives potential customers a reliable place to understand and contact your business.'],
    questions: [
      question('mobile', 'Does your website work well on mobile phones?', 4, 'Improve your mobile website experience', 'Customers need to read, navigate and enquire easily on a phone.'),
      question('https', 'Does every page use HTTPS without security warnings?', 2, 'Secure your website with HTTPS', 'Secure connections help protect visitors and build trust.'),
      question('speed', 'Does your website load quickly on a mobile connection?', 4, 'Improve website loading speed', 'Slow pages can cause visitors to leave before they see your offer.'),
      question('cta', 'Does each key page have a clear enquiry or purchase action?', 4, 'Make your website calls-to-action clear', 'Clear next steps help visitors turn interest into enquiries.'),
      question('current', 'Are your services, contact details and examples up to date?', 3, 'Update your website content', 'Accurate information helps customers make confident decisions.'),
      question('leads', 'Has the website generated relevant enquiries in the last 90 days?', 3, 'Improve the website enquiry journey', 'A useful business website should support measurable customer enquiries.'),
    ],
  },
  {
    id: 'google', name: 'Google Presence', weight: 15, gate: 'Does your business have a Google presence you manage (a Business Profile or website appearing in Search)?',
    service: 'SEO / Google Business Optimization', path: '/services/seo-google-visibility', month: 2,
    foundation: ['Establish your Google presence', 'Check eligibility for a Google Business Profile; otherwise build an indexable website and set up Search Console.', 'A managed Google presence helps customers discover accurate information about your business.'],
    questions: [
      question('managed', 'Have you verified your Business Profile or website ownership in Search Console?', 3, 'Verify your Google presence', 'Verified ownership lets you manage your business information or search performance.'),
      question('accurate', 'Are your business name, services and contact details accurate in Google results?', 3, 'Correct your business information on Google', 'Consistent information makes it easier for customers to reach you.'),
      question('visible', 'Can customers find you using relevant service and location searches?', 5, 'Improve visibility for service searches', 'Being visible for relevant searches puts your offer in front of people looking for it.'),
      question('maintained', 'Do you review and improve your Google presence at least monthly?', 4, 'Review your Google presence monthly', 'Regular reviews reveal outdated information and missed discovery opportunities.'),
    ],
  },
  {
    id: 'social', name: 'Social Media', weight: 15, gate: 'Does your business actively use at least one social media account?',
    service: 'Social Media Marketing', path: '/#contact', month: 2,
    foundation: ['Build a focused social presence', 'Choose a platform your customers use and publish a useful, consistent content plan.', 'Relevant social content helps people understand your work and start conversations.'],
    questions: [
      question('profile', 'Do your profiles clearly explain your offer and how to contact you?', 3, 'Complete your social profiles', 'A clear profile helps visitors understand your offer and take the next step.'),
      question('consistent', 'Have you published useful content consistently during the last month?', 4, 'Create a consistent content plan', 'Useful, regular content gives customers reasons to remember your business.'),
      question('response', 'Do you respond to enquiries and comments within one business day?', 4, 'Improve your social enquiry response', 'Timely replies help prevent interested customers from going elsewhere.'),
      question('results', 'Do you track which social posts generate enquiries or sales?', 4, 'Track social media business outcomes', 'Enquiry and sales data help you focus on content that works.'),
    ],
  },
  {
    id: 'seo', name: 'SEO', weight: 15, requiresWebsite: true, gate: 'Do you actively optimize your website for search engines?',
    service: 'SEO / Google Business Optimization', path: '/services/seo-google-visibility', month: 2,
    foundation: ['Build your search foundations', 'After your website is ready, make pages indexable and create content for relevant customer searches.', 'Search-ready content helps potential customers discover your services.'],
    questions: [
      question('index', 'Are your important pages indexed, with no known indexing errors?', 4, 'Resolve search indexing gaps', 'Search engines need access to your pages before they can show them.'),
      question('titles', 'Does each key page have a useful, distinct title and description?', 3, 'Improve page titles and descriptions', 'Clear search listings help people understand what each page offers.'),
      question('content', 'Do you publish content that answers your customers’ search questions?', 4, 'Create search-focused service content', 'Relevant answers connect your services with customer intent.'),
      question('measure', 'Do you review organic search enquiries and improve pages using that data?', 4, 'Measure and improve organic search results', 'Search data helps you prioritize changes with a business outcome.'),
    ],
  },
  {
    id: 'ads', name: 'Digital Advertising', weight: 10, gate: 'Have you run paid digital advertising in the last 90 days?',
    service: 'Meta Ads / Google Ads', path: '/#contact', month: 3,
    foundation: ['Assess whether paid advertising fits', 'Once your offer, enquiry journey and tracking are ready, test a small campaign if it fits your goals and budget.', 'A controlled test can reveal whether paid traffic is a useful growth channel; not every business needs ads.'],
    questions: [
      question('audience', 'Do your campaigns use a defined audience and a relevant offer?', 2, 'Align your advertising audience and offer', 'Relevant targeting helps reduce wasted advertising spend.'),
      question('conversion', 'Do you track qualified enquiries or purchases from your ads?', 3, 'Track advertising conversions', 'Conversion tracking shows which campaigns produce useful outcomes.'),
      question('testing', 'Do you test creative or landing-page variations?', 2, 'Test your advertising messages', 'Small controlled tests help identify what resonates with customers.'),
      question('return', 'Do you review acquisition costs against the value of customers won?', 3, 'Review advertising acquisition costs', 'Understanding cost and customer value helps guide sustainable budgets.'),
    ],
  },
  {
    id: 'automation', name: 'Business Automation', weight: 10, gate: 'Do you use automated workflows for routine business tasks?',
    service: 'Business Automation', path: '/business-automations', month: 3,
    foundation: ['Identify a useful first automation', 'Map repetitive work and automate one frequent, predictable task with a human fallback.', 'Suitable automation reduces repeated admin and missed follow-ups.'],
    questions: [
      question('capture', 'Are new enquiries automatically recorded in a central system?', 3, 'Automate enquiry capture', 'Central capture helps prevent leads from being lost across channels.'),
      question('followup', 'Are reminders or follow-ups automated where appropriate?', 3, 'Set up reliable follow-up reminders', 'Timely reminders help your team respond consistently.'),
      question('integration', 'Do your tools share information without repeated manual entry?', 2, 'Connect your business tools', 'Connected tools reduce duplicated work and copying errors.'),
      question('monitor', 'Do you monitor workflow failures and have a manual fallback?', 2, 'Monitor your automated workflows', 'Monitoring and a fallback keep automation failures from going unnoticed.'),
    ],
  },
  {
    id: 'conversion', name: 'Lead Generation / Conversion', weight: 10, gate: 'Do you have a defined way to capture and follow up with potential customers?',
    service: 'Sales Funnel / Conversion Optimization', path: '/#contact', month: 2,
    foundation: ['Create a clear enquiry and follow-up process', 'Give customers a simple contact route, record each enquiry and assign a follow-up owner.', 'A clear process helps turn interest into conversations and sales.'],
    questions: [
      question('route', 'Can customers easily enquire through a form, phone, booking or WhatsApp?', 3, 'Simplify your customer contact route', 'Low-friction contact routes make it easier for customers to act.'),
      question('response', 'Does each enquiry have an owner and a response within one business day?', 3, 'Assign and respond to every enquiry', 'Consistent ownership reduces missed sales conversations.'),
      question('pipeline', 'Do you track enquiries through to a won or lost outcome?', 2, 'Track your enquiry pipeline', 'Outcome tracking reveals where potential customers drop out.'),
      question('improve', 'Do you regularly improve your enquiry process using conversion data?', 2, 'Improve conversion using outcome data', 'Small evidence-based changes can help more enquiries become customers.'),
    ],
  },
  {
    id: 'analytics', name: 'Analytics & Tracking', weight: 5, gate: 'Do you use analytics to measure your digital business activity?',
    service: 'Analytics & Conversion Tracking', path: '/#contact', month: 1,
    foundation: ['Set up useful business measurement', 'Choose key outcomes and configure appropriate analytics and conversion tracking for your channels.', 'Measurement helps you understand which digital activities contribute to your business.'],
    questions: [
      question('installed', 'Is analytics installed and working on your website or main digital channels?', 1, 'Check that analytics collects useful data', 'Reliable collection is the starting point for meaningful reporting.'),
      question('events', 'Are important enquiries, bookings or purchases tracked as outcomes?', 2, 'Measure enquiries and sales', 'Outcome measurement connects visitor activity with business value.'),
      question('sources', 'Can you identify which channels bring valuable enquiries?', 1, 'Track the source of your enquiries', 'Source data helps you focus effort on useful channels.'),
      question('review', 'Do you review a dashboard at least monthly and act on the findings?', 1, 'Use a monthly performance review', 'Regular reviews turn measurement into practical improvements.'),
    ],
  },
];

export function isApplicable(category, answers) {
  return !category.requiresWebsite || answers.website?.present === 'yes';
}

export const answerOptions = [
  { value: 'yes', label: 'Yes', factor: 1 },
  { value: 'partial', label: 'Partly / in progress', factor: 0.5 },
  { value: 'no', label: 'No', factor: 0 },
  { value: 'unknown', label: 'Not sure', factor: 0 },
];
