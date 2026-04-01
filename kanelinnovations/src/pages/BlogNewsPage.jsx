import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export default function BlogNewsPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,var(--bg-primary),var(--bg-secondary))] px-4 py-8 sm:px-6 sm:py-12 md:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 sm:mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-300">
              Kanel Insights
            </p>
            <h1 className="mt-2 sm:mt-3 text-3xl sm:text-4xl font-black text-slate-950 dark:text-white md:text-5xl">
              Digital growth stories, ideas, and updates.
            </h1>
            <p className="mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Full articles and updates from Kanel innovations on websites,
              apps, funnels, visibility, and modern digital delivery.
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm sm:text-base font-semibold text-white transition hover:bg-blue-700">
            <ArrowLeft className="h-4 w-4" />
            Back Home
          </Link>
        </div>

        <div className="space-y-8 sm:space-y-10">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-blue-100/30 dark:border-white/10 dark:bg-white/5 dark:shadow-none">
              <img src={post.image} alt={post.title} className="h-48 sm:h-64 w-full object-cover md:h-80" />
              <div className="p-5 sm:p-6 md:p-8">
                <div className="mb-3 sm:mb-4 flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs sm:text-sm font-semibold text-blue-700 dark:bg-blue-500/15 dark:text-blue-200">
                    {post.category}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">{post.date}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white md:text-3xl">
                  {post.title}
                </h2>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-slate-700 dark:text-slate-300">
                  {post.excerpt}
                </p>

                <div className="mt-5 sm:mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base leading-7 sm:leading-8 text-slate-700 dark:text-slate-300">
                  {post.content.map((paragraph, index) => (
                    <p key={`${post.id}-${index}`}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
