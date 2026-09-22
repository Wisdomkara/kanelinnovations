const asset = (name) => `${import.meta.env.BASE_URL}images/journal/${name}`;

// Original editorial articles based on Kanel's supplied campaign artwork.
const entries = [
  {
    id: 'why-ads-fail', category: 'Marketing', image: 'ads-system.jpeg',
    title: 'The ad gets the click. What happens next?',
    excerpt: 'Before increasing your ad budget, take a closer look at the offer, the landing page, and the conversation after the click.',
    takeaway: 'Walk through your own buying journey before paying to send more people through it.',
    sections: [
      ['Start on the other side of the click', 'A customer taps your advert because it promises something specific. If the page opens with a different offer, a long introduction, or no obvious next step, that interest can disappear. An advert for a booking should lead to a booking experience. An advert for a product should make that product easy to find and understand.'],
      ['Make the offer easy to explain', 'Write down what the customer gets, who it is for, what it costs or how to request a quote, and what happens after they enquire. Ask someone outside your business to read the page and repeat the offer back to you. Their hesitation often reveals more than another headline brainstorm.'],
      ['Give people a reason to trust you', 'Use relevant examples of your work, accurate contact details, and customer feedback you have permission to share. Place that proof near the decision it supports. A beautiful page with vague claims still leaves the buyer doing the hard work of deciding whether you can deliver.'],
      ['Own the follow-up', 'An enquiry is the beginning of a conversation. Decide who responds, what information they need, and how the next step is recorded. Test the form and the WhatsApp link on a phone. Then check that the person receiving the message has enough context to help.'],
      ['Measure the whole journey', 'Review visits, enquiries, qualified conversations, and completed sales separately. If clicks arrive but enquiries do not, investigate the page and offer. If enquiries arrive but sales do not, review fit, response time, and the sales conversation. Change one part at a time so you can tell what helped.'],
    ],
  },
  {
    id: 'five-website-essentials', category: 'Websites', image: 'website-essentials.png',
    title: 'Five things your business website needs to get right.',
    excerpt: 'A useful website answers the right questions and makes the next step obvious. Start with these five essentials.',
    takeaway: 'Open your homepage on your phone and try to enquire without relying on anything you already know about the business.',
    sections: [
      ['01 / A clear first impression', 'The first screen should tell visitors what you do, who you help, and how to take the next step. Replace broad promises with a concrete description. “Website design for service businesses” gives a visitor more to work with than “Transforming tomorrow.”'],
      ['02 / A comfortable mobile experience', 'Read the site on a small screen. Can you understand the text without zooming? Can you tap the navigation and complete the form comfortably? Keep the important content visible and avoid making someone dismiss several overlays before they can read.'],
      ['03 / Evidence of real work', 'Show projects with context: the customer problem, your contribution, and what was delivered. Use genuine testimonials with permission. A small, specific example is more useful than a large claim that cannot be checked.'],
      ['04 / A straightforward contact path', 'Choose a primary action that suits the service: request a quote, book a conversation, or send an enquiry. Explain what information you need and what the customer should expect next. Check that every contact link works.'],
      ['05 / Care after launch', 'Keep services and contact details current. Review broken links, loading problems, and forms regularly. A website is a business touchpoint, so give someone responsibility for checking that it still reflects how the business operates.'],
    ],
  },
  {
    id: 'brand-consistency', category: 'Branding', image: 'brand-consistency.png',
    title: 'Different channels. The same unmistakable business.',
    excerpt: 'Your website, social posts, proposals, and business cards should feel like they belong to the same team.',
    takeaway: 'Put your homepage, latest social post, and proposal beside each other. Do they look and sound related?',
    sections: [
      ['Recognition comes from repetition', 'A customer might discover you on Instagram, ask a question on WhatsApp, and visit your website before making a decision. Consistent names, colours, and language help them recognise the business at each step. They should not need to wonder whether they have reached the right company.'],
      ['Build a small set of rules', 'Keep approved logo files, a compact colour palette, and your chosen typefaces in one shared place. Add a few examples of how the business describes its services. This gives everyone a useful starting point when creating a post or sending a proposal.'],
      ['Adapt the format, keep the identity', 'Consistency does not mean squeezing the same layout into every space. A mobile story needs a different composition from a proposal cover. Keep the familiar ingredients while adjusting the scale, spacing, and amount of information to suit the format.'],
      ['Check the details customers actually see', 'Look for outdated logos, different phone numbers, old service descriptions, and inconsistent business names. Fix these before planning a full redesign. The small gaps between channels can make an otherwise thoughtful brand feel unfinished.'],
    ],
  },
  {
    id: 'ui-and-ux', category: 'Design', image: 'ui-ux.png',
    title: 'Looks good. But does it work for your customer?',
    excerpt: 'UI shapes what people see. UX considers the journey they take. Your website needs attention to both.',
    takeaway: 'Give someone one task on your website, then watch without explaining where to click.',
    sections: [
      ['The interface is what people meet', 'User interface design includes typography, colours, buttons, spacing, and visual hierarchy. These choices help visitors understand which information matters and which elements they can interact with. A consistent interface makes the page easier to read and use.'],
      ['The experience is the whole journey', 'User experience includes how someone finds the right service, understands the offer, completes a task, and recovers when something goes wrong. A well-styled form can still be frustrating if it asks unnecessary questions or loses a visitor’s answers.'],
      ['A booking button is a useful example', 'The interface question is whether the button looks clickable and has a clear label. The experience question is whether the visitor knows what they are booking, can choose a suitable time, and receives a useful confirmation. The two questions need to be answered together.'],
      ['Test a task, not a preference', 'Instead of asking whether someone likes the design, ask them to find a service and make an enquiry. Notice where they pause or backtrack. Improve those moments first, then use the visual design to make the corrected journey feel clear and coherent.'],
    ],
  },
  {
    id: 'biggest-digital-challenge', category: 'Marketing', image: 'digital-challenge-dark.png', alternateImage: 'digital-challenge.png',
    title: 'What is actually holding your digital growth back?',
    excerpt: 'Getting found, showing up consistently, and turning interest into enquiries are three different problems.',
    takeaway: 'Choose one bottleneck and one observable improvement to work on this week.',
    sections: [
      ['When people cannot find you', 'Start by checking whether your business name, services, and contact information are clear wherever you appear online. Ask recent customers how they found you. Their answers can help you focus your effort on the places that already bring relevant interest.'],
      ['When content is hard to sustain', 'A publishing routine should fit the time you actually have. Collect common customer questions, examples of finished work, and useful explanations from your everyday conversations. Turn those into a manageable schedule with a clear owner.'],
      ['When followers do not become customers', 'Attention and buying intent are different. Make your offer specific and give interested people a clear route to ask questions or enquire. Review whether the audience you attract matches the people your service is designed to help.'],
      ['Name the problem before choosing the tool', 'Write a sentence that describes the gap: “People visit our service page but rarely enquire,” for example. That is a much stronger starting point than “We need to be on another platform.” Use the problem to decide what to improve and how to judge progress.'],
    ],
  },
  {
    id: 'ai-for-small-business', category: 'Operations', image: 'ai-small-business.png',
    title: 'AI can start with one small, useful job.',
    excerpt: 'You do not need a sweeping transformation plan to try a better way of handling repetitive work.',
    takeaway: 'Pick a repeatable task, define a good result, and review a small trial before expanding it.',
    sections: [
      ['Begin with the work you repeat', 'Drafting routine replies, organising rough notes, and outlining content are examples of tasks worth examining. Choose something you understand well enough to judge the result. A narrow task makes it easier to see both the benefit and the mistakes.'],
      ['Give the task useful context', 'An instruction such as “write a reply” leaves too much open. Describe the audience, the question, the approved facts, and the tone. Keep a reusable brief so the starting information stays consistent each time.'],
      ['Keep a person responsible', 'Treat generated text as a draft. Check names, dates, prices, and promises against your own records before using it. Avoid putting private customer information into a tool without understanding and approving how that information will be handled.'],
      ['Judge the result against the old process', 'Compare the time spent drafting and reviewing with the time the task previously took. Note whether the result is easier to use and where corrections keep recurring. Expand only when the small workflow is useful enough to repeat.'],
    ],
  },
  {
    id: 'choose-a-domain-name', category: 'Websites', image: 'domain-name.png',
    title: 'Choose a domain people can say, spell, and remember.',
    excerpt: 'Your web address should make finding you simpler. Start with the name your customers already know.',
    takeaway: 'Say your shortlisted address aloud and ask someone to type it without seeing it written down.',
    sections: [
      ['Make it easy to pass on', 'A domain often travels by word of mouth, on a receipt, or in a quick message. Avoid a name that needs a long explanation about spelling, punctuation, or numbers. The easier it is to repeat accurately, the less friction it creates.'],
      ['Choose a name you can grow with', 'A very narrow service name may feel restrictive if your business expands. Consider whether the address will still make sense when you add products, work in another area, or change your main offer. Keep the link to your brand clear.'],
      ['Look beyond the first available option', 'Check for confusingly similar business names and addresses. Think about how the name looks in an email address and on printed material. Availability alone does not make a domain a good fit, and the example addresses in our artwork are illustrative.'],
      ['Keep control of the account', 'Make sure the business can access the registrar account and renewal information. Record who manages it, use account security features, and keep recovery details current. The address should remain accessible if a staff member or supplier changes.'],
    ],
  },
  {
    id: 'small-business-toolkit', category: 'Operations', image: 'business-tools.png',
    title: 'A smaller toolkit. A more organised business.',
    excerpt: 'Five familiar tools from our business toolkit artwork, and the practical job each can play in your workflow.',
    takeaway: 'Assign each tool a clear job and an owner before adding another one.',
    sections: [
      ['Google Business Profile / Your public details', 'Use your business listing as a place to keep the information customers need to recognise and contact you consistent. Review the name, service information, and opening hours when the business changes. Check current eligibility and available features before setting it up.'],
      ['Canva / Repeatable visual work', 'Keep your approved brand materials together and create a small set of reusable layouts for recurring communications. Review every exported design for readable text and accurate details rather than assuming a template has done the whole job.'],
      ['Google Analytics / Better questions', 'Start with a question you want measurement to answer, such as which pages lead visitors towards an enquiry. Agree what a useful action means for your business before interpreting a dashboard. Make sure your setup and data handling suit your website.'],
      ['Google Forms / Structured enquiries', 'A short form can organise information that otherwise arrives across scattered messages. Ask only what you need for the next step, explain the purpose, and decide who reviews the responses. Test the complete process from the customer’s perspective.'],
      ['WhatsApp / The customer conversation', 'Make it clear who will respond and what information a customer should send. Keep a process for handing conversations to the right person and recording agreed next steps. The artwork introduces these as free tools; verify current plans, limits, and suitability before relying on a particular feature.'],
    ],
  },
  {
    id: 'show-what-you-have-built', category: 'Branding', image: 'show-your-work.png',
    title: 'Show the work. Tell the story behind it.',
    excerpt: 'A finished project is more than something to post. It is a chance to explain how your business thinks.',
    takeaway: 'Choose one project and write three sentences: the problem, your contribution, and what you delivered.',
    sections: [
      ['Start with the customer’s situation', 'A picture of finished work catches attention, but context makes it meaningful. Explain what the customer needed and why it mattered. Keep the explanation specific enough that someone with a similar problem can recognise themselves.'],
      ['Be clear about your contribution', 'Describe the part you handled, the decisions you made, and any constraints you worked within. Give collaborators credit. You do not need to claim the entire project to demonstrate the value of your work.'],
      ['Show what you can support', 'Use approved images and accurate descriptions. If you have measured results and permission to share them, explain the period and context. If you do not, describe the delivered work without inventing numbers or implying outcomes you have not checked.'],
      ['Invite a useful conversation', 'End by asking readers about a related challenge or directing them to the relevant service. Our “30 Days of Growth” artwork is a prompt to share what you have built. A thoughtful project story gives that invitation substance.'],
    ],
  },
  {
    id: 'close-the-trust-gap', category: 'Websites', image: 'digital-trust.png',
    title: 'Give customers fewer reasons to hesitate.',
    excerpt: 'Digital trust grows through clear information, credible proof, and a buying journey that makes sense.',
    takeaway: 'List the questions a first-time customer asks before buying, then check whether your website answers them.',
    sections: [
      ['Look at the business as a stranger would', 'You know the people behind your business. A new visitor does not. They may need to understand where you operate, what you provide, how to reach you, and what to expect after paying or enquiring. Make those answers easy to find.'],
      ['Make your proof specific', 'Relevant work samples and genuine customer feedback help visitors evaluate your claims. Explain what a project involved rather than relying on a logo or an unexplained screenshot. Avoid treating illustrative growth numbers in promotional artwork as measured business results.'],
      ['Connect social discovery to useful detail', 'Social profiles can introduce your work; a website can organise the information someone needs to make a decision. Keep the offer and contact details consistent between them. Let visitors move from interest to a relevant page without searching again.'],
      ['Trust also depends on follow-through', 'A professional appearance creates expectations. Meet them with working forms, accurate information, and a clear response process. No design can guarantee sales, but it can remove avoidable confusion from the customer’s decision.'],
    ],
  },
  {
    id: 'seo-aeo-and-development', category: 'Search', image: 'seo-aeo.png',
    title: 'Be findable. Be understandable. Be useful.',
    excerpt: 'Our SEO, AEO, and development artwork points to a shared goal: helping people find and understand your business.',
    takeaway: 'Choose one customer question and give it a clear, complete answer on the relevant service page.',
    sections: [
      ['Begin with a real question', 'Customers do not arrive with your internal service descriptions in mind. They have a problem, a location, a budget, or a deadline. Collect the questions your team hears and use that language to organise the information on your website.'],
      ['Give the answer before the sales pitch', 'Explain the service, its scope, the information needed for a quote, and any practical limitations. Clear headings help a reader scan the page. Specific examples help them decide whether the answer applies to their situation.'],
      ['Make the page work as well as it reads', 'Readable text, meaningful links, usable navigation, and a reliable mobile experience support the content. Development and writing belong in the same conversation because a useful explanation loses value if the page is difficult to access or use.'],
      ['Avoid promises about placement', 'SEO concerns search visibility; AEO is a term used for preparing content to answer questions in answer-led experiences. Neither label guarantees a ranking or citation. Focus on information you can substantiate and keep it current as your business changes.'],
    ],
  },
];

export const journalPosts = entries.map((post) => ({
  ...post,
  image: asset(post.image),
  alternateImage: post.alternateImage ? asset(post.alternateImage) : undefined,
  readTime: Math.max(2, Math.ceil((post.excerpt + post.sections.flat().join(' ')).split(/\s+/).length / 200)),
}));
