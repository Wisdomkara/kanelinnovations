import { createElement } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { servicePages } from '../data/servicePages.js';

const sectionSpacing = 'px-5 py-16 sm:px-6 sm:py-20 md:px-10 lg:px-16 lg:py-24';
const containerClass = 'mx-auto max-w-7xl';
const contentGap = 'mt-10 lg:mt-12';

const contactPath = '/#contact';

function ServiceNotFound() {
  return (
    <main className="min-h-screen bg-white px-5 py-32 text-slate-950 dark:bg-slate-950 dark:text-white sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-black leading-tight md:text-5xl">Service page not found.</h1>
        <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
          The service page you opened does not exist or may have moved.
        </p>
        <Link
          to="/#services"
          className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
          View Services
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = servicePages[slug];

  if (!service) return <ServiceNotFound />;

  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className={`relative overflow-hidden bg-slate-950 pt-32 text-white ${sectionSpacing}`}>
        <img
          src={service.image}
          alt={`${service.title} visual`}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.94)_0%,rgba(2,6,23,0.78)_48%,rgba(2,6,23,0.4)_100%)]" />
        <div className={`${containerClass} relative`}>
          <Link
            to="/#services"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>

          <div className={`${contentGap} max-w-4xl`}>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100">
              {createElement(Icon, { className: 'h-4 w-4' })}
              {service.title}
            </div>
            <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
              {service.headline}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 md:text-lg">
              {service.summary}
            </p>
            <Link
              to={contactPath}
              className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-400/30">
              {service.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className={`bg-slate-50 dark:bg-slate-900 ${sectionSpacing}`}>
        <div className={`${containerClass} grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start`}>
          <div>
            <div className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm dark:bg-white/5 dark:text-blue-200">
              What This Solves
            </div>
            <h2 className="mt-5 text-3xl font-black leading-tight md:text-5xl">
              Built around the practical result your business needs.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <article
                key={benefit}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-300" />
                <p className="leading-7 text-slate-700 dark:text-slate-300">{benefit}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`bg-white dark:bg-slate-950 ${sectionSpacing}`}>
        <div className={containerClass}>
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-500/15 dark:text-blue-200">
              Deliverables
            </div>
            <h2 className="mt-5 text-3xl font-black leading-tight md:text-5xl">
              What we can build or improve.
            </h2>
          </div>

          <div className={`${contentGap} grid gap-5 md:grid-cols-2 xl:grid-cols-4`}>
            {service.deliverables.map((deliverable, index) => (
              <article
                key={deliverable}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
                <span className="text-sm font-black text-blue-700 dark:text-blue-200">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-xl font-black">{deliverable}</h3>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-slate-950 p-6 text-white sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="font-semibold uppercase tracking-[0.18em] text-blue-200">
                  Start with clarity
                </p>
                <h3 className="mt-4 text-2xl font-black md:text-3xl">
                  Tell us what you want this service to achieve for your business.
                </h3>
              </div>
              <Link
                to={contactPath}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-400/30">
                Request This Service
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
