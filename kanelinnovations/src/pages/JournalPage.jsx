import { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, Search } from 'lucide-react';
import { journalPosts } from '../data/journalPosts';
import './journal.css';

const categories = ['All stories', ...new Set(journalPosts.map((post) => post.category))];

function usePageTitle(title) {
  useEffect(() => {
    const previous = document.title;
    document.title = `${title} | Kanel Innovations`;
    return () => { document.title = previous; };
  }, [title]);
}

function Artwork({ post, eager = false }) {
  return <img src={post.image} alt={post.title} loading={eager ? 'eager' : 'lazy'} decoding="async" />;
}

function Meta({ post }) {
  return <div className="journal-meta"><span>{post.category}</span><span>{post.readTime} min read</span></div>;
}

function Story({ post, index }) {
  return (
    <article className="journal-story">
      <Link to={`/blog/${post.id}`} className="journal-story-image" aria-label={`Read: ${post.title}`}><Artwork post={post} /><span className="journal-image-arrow"><ArrowUpRight size={23} /></span></Link>
      <div className="journal-story-top"><Meta post={post} /><span className="journal-number">{String(index + 1).padStart(2, '0')}</span></div>
      <h3><Link to={`/blog/${post.id}`}>{post.title}</Link></h3>
      <p>{post.excerpt}</p>
      <Link className="journal-text-link" to={`/blog/${post.id}`}>Read the story <ArrowRight size={17} /></Link>
    </article>
  );
}

export default function JournalPage() {
  const [params, setParams] = useSearchParams();
  const selected = categories.includes(params.get('topic')) ? params.get('topic') : 'All stories';
  const query = params.get('q') || '';
  usePageTitle('The Kanel Journal');
  const featured = journalPosts[0];
  const filtered = journalPosts.filter((post) => (selected === 'All stories' || post.category === selected) && `${post.title} ${post.excerpt} ${post.category}`.toLowerCase().includes(query.toLowerCase().trim()));
  const setFilter = (key, value) => {
    const next = new URLSearchParams(params);
    if (!value || value === 'All stories') next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: true, preventScrollReset: true });
  };

  return (
    <main className="journal">
      <div className="journal-wrap">
        <header className="journal-masthead">
          <div className="journal-kicker"><span>Ideas from Kanel Innovations</span><span>Lagos, Nigeria · Built for business</span></div>
          <h1>The Kanel<span>Journal<span className="journal-period">.</span></span></h1>
          <div className="journal-deck"><span className="journal-label">GOOD THINKING. PRACTICAL GROWTH.</span><p>Notes on making your business<br className="hidden sm:block" /> work better online.</p></div>
        </header>

        <section className="journal-feature" aria-labelledby="featured-title">
          <div className="journal-feature-copy">
            <span className="journal-label">THE EDITOR’S PICK / 01</span>
            <Meta post={featured} />
            <h2 id="featured-title"><Link to={`/blog/${featured.id}`}>{featured.title}</Link></h2>
            <p>{featured.excerpt}</p>
            <Link className="journal-button" to={`/blog/${featured.id}`}>Read the story <ArrowUpRight size={21} /></Link>
          </div>
          <Link className="journal-feature-image" to={`/blog/${featured.id}`} aria-label={`Read: ${featured.title}`}><Artwork post={featured} eager /><span>FIELD NOTES / MARKETING & GROWTH <ArrowUpRight size={20} /></span></Link>
        </section>

        <section className="journal-library" aria-labelledby="stories-heading">
          <div className="journal-library-heading"><h2 id="stories-heading">The reading room<span> / {String(journalPosts.length).padStart(2, '0')}</span></h2><p>A little clarity for your next move.</p></div>
          <div className="journal-toolbar">
            <div className="journal-topics" role="group" aria-label="Filter stories by topic">{categories.map((category) => <button key={category} type="button" aria-pressed={selected === category} onClick={() => setFilter('topic', category)}>{category}</button>)}</div>
            <label className="journal-search"><Search size={18} aria-hidden="true" /><span className="sr-only">Search stories</span><input type="search" placeholder="Find a story" value={query} onChange={(event) => setFilter('q', event.target.value)} /></label>
          </div>
          <p className="journal-results" role="status">{filtered.length} {filtered.length === 1 ? 'story' : 'stories'}{selected !== 'All stories' ? ` in ${selected}` : ' to explore'}</p>
          {filtered.length ? <div className="journal-grid">{filtered.map((post) => <Story key={post.id} post={post} index={journalPosts.indexOf(post)} />)}</div> : <div className="journal-empty"><h3>No stories found.</h3><p>Try a different topic or a shorter search.</p><button className="journal-text-link" onClick={() => setParams({})}>Show all stories <ArrowRight size={18} /></button></div>}
        </section>

        <aside className="journal-note"><span className="journal-label">FROM READING TO DOING</span><h2>Your next chapter<br />starts with a conversation.</h2><Link to="/#contact" className="journal-button">Tell us what you’re building <ArrowUpRight size={21} /></Link></aside>
      </div>
    </main>
  );
}

export function JournalArticlePage() {
  const { slug } = useParams();
  const post = journalPosts.find((item) => item.id === slug);
  const [copyState, setCopyState] = useState('Copy article link');
  usePageTitle(post?.title || 'Story not found');
  useEffect(() => { setCopyState('Copy article link'); }, [slug]);

  if (!post) return <main className="journal"><div className="journal-wrap journal-empty"><span className="journal-label">404 / STORY NOT FOUND</span><h1>This page is not in the journal.</h1><Link className="journal-button" to="/blog">Back to the journal <ArrowLeft size={20} /></Link></div></main>;
  const related = journalPosts.filter((item) => item.id !== post.id).sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category)).slice(0, 3);
  const copyLink = async () => {
    try { await navigator.clipboard.writeText(window.location.href); setCopyState('Link copied'); }
    catch { setCopyState('Copy the URL from your address bar'); }
  };

  return (
    <main className="journal journal-article">
      <div className="journal-wrap">
        <Link className="journal-text-link journal-back" to="/blog"><ArrowLeft size={18} /> The Kanel Journal</Link>
        <article>
          <header className="journal-article-header"><Meta post={post} /><h1>{post.title}</h1><p>{post.excerpt}</p><div className="journal-byline"><span>Words & artwork by <strong>Kanel Innovations</strong></span><button onClick={copyLink} aria-live="polite">{copyState} <ArrowUpRight size={16} /></button></div></header>
          <figure className="journal-article-art"><Artwork post={post} eager /><figcaption>Kanel field notes / {post.category}</figcaption></figure>
          <div className="journal-reading-layout">
            <aside className="journal-contents"><span className="journal-label">IN THIS STORY</span><nav aria-label="Article contents">{post.sections.map(([heading], index) => <a href={`#section-${index + 1}`} key={heading}><span>{String(index + 1).padStart(2, '0')}</span>{heading}</a>)}</nav></aside>
            <div className="journal-prose"><p className="journal-intro">{post.excerpt}</p>{post.sections.map(([heading, body], index) => <section id={`section-${index + 1}`} key={heading}><h2>{heading}</h2><p>{body}</p></section>)}
              <aside className="journal-takeaway"><span className="journal-label">ONE THING TO TRY</span><p>{post.takeaway}</p></aside>
              {post.alternateImage && <figure className="journal-alternate"><img src={post.alternateImage} alt="The light edition of Kanel’s biggest digital challenge artwork" loading="lazy" /><figcaption>From the campaign: another take on the same question.</figcaption></figure>}
              <div className="journal-article-end"><span className="journal-label">LET’S PUT IT INTO PRACTICE</span><p>Working through a similar challenge?</p><Link className="journal-text-link" to="/#contact">Talk to the Kanel team <ArrowUpRight size={20} /></Link></div>
            </div>
          </div>
        </article>
        <section className="journal-related" aria-labelledby="related-heading"><div className="journal-library-heading"><h2 id="related-heading">Keep exploring.</h2><Link className="journal-text-link" to="/blog">All stories <ArrowRight size={18} /></Link></div><div className="journal-grid">{related.map((item) => <Story key={item.id} post={item} index={journalPosts.indexOf(item)} />)}</div></section>
      </div>
    </main>
  );
}
