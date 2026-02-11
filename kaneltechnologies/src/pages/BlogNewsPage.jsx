import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

export default function BlogNewsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              Blog News
            </h1>
            <p className="text-slate-600">
              Full updates and insights from Kanel Technologies.
            </p>
          </div>
          <Link
            to="/"
            className="shrink-0 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            Back Home
          </Link>
        </div>

        <div className="space-y-10">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-sm font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-slate-500">{post.date}</span>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  {post.title}
                </h2>
                <p className="text-slate-700 mb-4">{post.excerpt}</p>

                <div className="space-y-4 text-slate-700 leading-relaxed">
                  {post.content.map((paragraph, index) => (
                    <p key={`${post.id}-paragraph-${index}`}>{paragraph}</p>
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
