import { createElement } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  CheckCircle2,
  Clock3,
  Funnel,
  Gauge,
  Globe2,
  Layers3,
  MessageSquareMore,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import AutomationHeroImage from '../assets/images/automation-hero.jpg';
import AutomationHeroVideo from '../assets/videos/automation-hero.mp4';

const sectionSpacing = 'px-5 py-16 sm:px-6 sm:py-20 md:px-10 lg:px-16 lg:py-24';
const containerClass = 'mx-auto max-w-7xl';
const contentGap = 'mt-10 lg:mt-12';

const benefits = [
  ['Save operational time', 'Routine enquiries, reminders, status updates, form routing, and reporting can move automatically so teams spend more time on revenue-producing work.', Clock3],
  ['Respond faster', 'A business can acknowledge leads, send next steps, assign owners, and trigger follow-up even when the team is busy or outside office hours.', MessageSquareMore],
  ['Reduce missed opportunities', 'Automation helps prevent leads, bookings, quotes, renewals, invoices, and support requests from getting lost in inboxes or chat threads.', Funnel],
  ['Scale without confusion', 'Clear workflows make it easier to serve customers across time zones, teams, branches, and markets without depending on memory or manual handoffs.', Globe2],
];

const automationAreas = [
  'Website form to CRM and WhatsApp alerts',
  'Lead assignment, tagging, and follow-up reminders',
  'Booking confirmations and appointment reminders',
  'Quote, invoice, and payment status notifications',
  'Customer onboarding and service update sequences',
  'Internal approvals, task routing, and reporting dashboards',
  'AI-assisted replies, summaries, and content drafts',
  'Analytics views that show where leads and delays happen',
];

const globalReasons = [
  ['Customers expect speed', 'Around the world, buyers compare options quickly. Automated first responses and next-step messages keep your business present while interest is still high.'],
  ['Teams are more distributed', 'Businesses now work across cities, countries, remote staff, freelancers, and partners. Shared workflows keep everyone aligned.'],
  ['Manual work limits growth', 'If every lead, reminder, report, and customer update depends on one person, growth becomes fragile. Automation makes the process repeatable.'],
  ['Data needs structure', 'Automation turns scattered messages and forms into records that can be measured, improved, and used for smarter decisions.'],
];

const deliverySteps = [
  ['Map the workflow', 'We identify what happens from enquiry to sale, service delivery, support, renewal, and reporting.', Layers3],
  ['Connect the tools', 'We link the website, forms, CRM, email, WhatsApp paths, spreadsheets, dashboards, and AI support where useful.', Workflow],
  ['Automate the right actions', 'We set triggers for routing, reminders, confirmations, updates, reporting, and team handoffs.', Bot],
  ['Measure and improve', 'We review the data, reduce friction, and adjust the workflow as the business grows.', Gauge],
];

const contactHref = `${import.meta.env.BASE_URL}#contact`;

export default function BusinessAutomationsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className={`relative min-h-[92svh] overflow-hidden bg-slate-950 text-white ${sectionSpacing}`}>
        <video
          className="absolute inset-0 h-full w-full object-cover object-center opacity-75"
          autoPlay
          loop
          muted
          playsInline
          poster={AutomationHeroImage}
          aria-hidden="true"
        >
          <source src={AutomationHeroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.94)_0%,rgba(2,6,23,0.78)_45%,rgba(2,6,23,0.35)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.12)_0%,rgba(2,6,23,0.66)_100%)]" />

        <div className={`${containerClass} relative`}>
          <Link
            to="/"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
            <ArrowLeft className="h-4 w-4" />
            Back Home
          </Link>

          <div className={`${contentGap} grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end`}>
            <div>
              
              <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
                Automations that help businesses operate faster anywhere in the world.
              </h1>
            </div>
            <div>
              <p className="text-base leading-8 text-slate-300 md:text-lg">
                Kanel innovations builds automation systems that connect your
                website, CRM, forms, messages, dashboards, and AI support into
                one practical workflow. The goal is simple: reduce manual work,
                respond faster, track every opportunity, and make growth easier
                to manage.
              </p>
              <a
                href={contactHref}
                className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-400/30">
                Start an Automation Plan
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={`bg-slate-50 dark:bg-slate-900 ${sectionSpacing}`}>
        <div className={containerClass}>
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm dark:bg-white/5 dark:text-blue-200">
              Why It Helps
            </div>
            <h2 className="mt-5 text-3xl font-black leading-tight md:text-5xl">
              Automation gives businesses a stronger operating system, not just another tool.
            </h2>
          </div>

          <div className={`${contentGap} grid gap-5 md:grid-cols-2 xl:grid-cols-4`}>
            {benefits.map(([title, detail, Icon]) => (
              <article
                key={title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-200">
                  {createElement(Icon, { className: 'h-6 w-6' })}
                </div>
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  {detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`bg-white dark:bg-slate-950 ${sectionSpacing}`}>
        <div className={`${containerClass} grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start`}>
          <div className="lg:sticky lg:top-12">
            <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-500/15 dark:text-blue-200">
              What We Automate
            </div>
            <h2 className="mt-5 text-3xl font-black leading-tight md:text-5xl">
              From first enquiry to repeat customer.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
              Automation works best when it is built around the real movement
              of a business: how leads arrive, who follows up, what customers
              need next, what the team must approve, and what owners need to
              measure.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {automationAreas.map((area) => (
              <div
                key={area}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-300" />
                <p className="leading-7 text-slate-700 dark:text-slate-300">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`bg-slate-950 text-white ${sectionSpacing}`}>
        <div className={containerClass}>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100">
                <Globe2 className="h-4 w-4" />
                Global Business Benefit
              </div>
              <h2 className="mt-5 text-3xl font-black leading-tight md:text-5xl">
                Why this matters for businesses around the globe.
              </h2>
            </div>

            <div className="grid gap-5">
              {globalReasons.map(([title, detail]) => (
                <article key={title} className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-3 leading-8 text-slate-300">{detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`bg-slate-50 dark:bg-slate-900 ${sectionSpacing}`}>
        <div className={containerClass}>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm dark:bg-white/5 dark:text-blue-200">
              How Kanel Builds It
            </div>
            <h2 className="mt-5 text-3xl font-black leading-tight md:text-5xl">
              Clear setup, useful automation, measurable improvement.
            </h2>
          </div>

          <div className={`${contentGap} grid gap-5 md:grid-cols-2 xl:grid-cols-4`}>
            {deliverySteps.map(([title, detail, Icon], index) => (
              <article
                key={title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-blue-600">
                    {createElement(Icon, { className: 'h-6 w-6' })}
                  </div>
                  <span className="text-sm font-black text-slate-300 dark:text-white/20">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  {detail}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-slate-950 p-6 text-white sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 text-blue-200" />
                  <p className="font-semibold uppercase tracking-[0.18em] text-blue-200">
                    Built for real business use
                  </p>
                </div>
                <h3 className="mt-4 text-2xl font-black md:text-3xl">
                  The right automation should make your team faster, clearer, and easier to manage.
                </h3>
              </div>
              <a
                href={contactHref}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-400/30">
                Request This Service
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
