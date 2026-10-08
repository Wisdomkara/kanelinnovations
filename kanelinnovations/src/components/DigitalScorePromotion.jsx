import { useEffect, useId, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart3, ArrowRight } from 'lucide-react';
import Dialog from './Dialog.jsx';
import { markScoreSession, shouldPromote } from '../digital-score/session.js';

export default function DigitalScorePromotion() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const descriptionId = useId();
  useEffect(() => {
    if (!shouldPromote(pathname)) return undefined;
    let timer;
    const showWhenAvailable = () => {
      if (!shouldPromote(pathname)) return;
      const editing = ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName);
      if (document.hidden || editing || document.querySelector('[role="dialog"], dialog[open]')) {
        timer = setTimeout(showWhenAvailable, 1500);
        return;
      }
      markScoreSession('shown');
      setOpen(true);
    };
    timer = setTimeout(showWhenAvailable, 6500);
    return () => clearTimeout(timer);
  }, [pathname]);
  const close = () => { markScoreSession('dismissed'); setOpen(false); };
  return <Dialog isOpen={open && !pathname.startsWith('/digital-score')} onClose={close} titleId={titleId} descriptionId={descriptionId}>
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-200"><BarChart3 aria-hidden="true" /></div>
    <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">Kanel Digital Business Score · Free</p>
    <h2 id={titleId} className="mt-3 text-3xl font-black leading-tight">How Strong Is Your Business Online?</h2>
    <p id={descriptionId} className="mt-4 leading-7 text-slate-600 dark:text-slate-300">Take our FREE Digital Business Score assessment and discover how well your business is performing across website, Google visibility, social media, SEO, advertising, automation and analytics.</p>
    <p className="mt-4 rounded-xl bg-blue-50 p-4 text-sm leading-6 text-blue-900 dark:bg-blue-500/10 dark:text-blue-200">Get your score, discover what&apos;s missing, and receive personalized recommendations on what to improve next.</p>
    <Link to="/digital-score" onClick={() => { markScoreSession('started'); setOpen(false); }} className="mt-6 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-bold text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">Check My Digital Score <ArrowRight className="h-4 w-4" /></Link>
    <button type="button" onClick={close} className="mt-2 min-h-11 w-full rounded-xl text-sm font-semibold text-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 dark:text-slate-300">Maybe Later</button>
  </Dialog>;
}
