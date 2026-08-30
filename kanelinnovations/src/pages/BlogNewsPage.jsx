import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Newspaper } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const sectionSpacing = 'px-5 py-16 sm:px-6 sm:py-20 md:px-10 lg:px-16 lg:py-24';
const containerClass = 'mx-auto max-w-7xl';
const contentGap = 'mt-10 lg:mt-12';

export default function BlogNewsPage() {
  const [featuredPost, ...otherPosts] = blogPosts;

  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className={`border-b border-slate-200 bg-slate-50 text-slate-950 dark:border-white/10 dark:bg-slate-950 dark:text-white ${sectionSpacing} pt-32`}>
        <div className={containerClass}>
          <Link
            to="/"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15">
            <ArrowLeft className="h-4 w-4" />
            Back Home
          </Link>

          <div className={`${contentGap} grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end`}>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-400/15 dark:text-blue-200">
                <Newspaper className="h-4 w-4" />
                Kanel Technology Brief
              </div>
              <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
                Latest technology news for business owners.
              </h1>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
              Practical updates on AI search, digital sales, cybersecurity, and
              why every business owner needs a digital presence that keeps
              improving.
            </p>
          </div>
        </div>
      </section>

      <section className={sectionSpacing}>
        <div className={containerClass}>
          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="h-72 w-full object-cover lg:h-full"
              />
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700 dark:bg-blue-500/15 dark:text-blue-200">
                    Featured
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    {featuredPost.category} / {featuredPost.date}
                  </span>
                </div>
                <h2 className="mt-5 text-3xl font-black leading-tight md:text-5xl">
                  {featuredPost.title}
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-700 dark:text-slate-300">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-7 space-y-4 leading-8 text-slate-700 dark:text-slate-300">
                  {featuredPost.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <a
                  href={featuredPost.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
                  Source: {featuredPost.sourceName}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </article>

          <div className={`${contentGap} grid gap-6 lg:grid-cols-3`}>
            {otherPosts.map((post) => (
              <article
                key={post.id}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200">
                      {post.category}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">
                      {post.date}
                    </span>
                  </div>
                  <h2 className="mt-5 text-2xl font-black leading-tight text-slate-950 dark:text-white">
                    {post.title}
                  </h2>
                  <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {post.content.slice(0, 2).map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <a
                    href={post.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-700 transition hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-100">
                    Source: {post.sourceName}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
