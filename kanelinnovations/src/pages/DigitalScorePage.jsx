import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ASSESSMENT_VERSION, answerOptions, categories, isApplicable } from '../digital-score/config.js';
import { normalizeAnswers, validateContact } from '../digital-score/validation.js';
import { markScoreSession } from '../digital-score/session.js';
import { scoreServices } from '../digital-score/services.js';

const inputClass = 'mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-950 focus:border-blue-500 focus:outline focus:outline-2 focus:outline-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white';
const buttonClass = 'min-h-12 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700 disabled:opacity-50';
const fields = [
  ['name', 'Full name', 'text', 120], ['businessName', 'Business name', 'text', 160],
  ['email', 'Email address', 'email', 254], ['phone', 'Phone / WhatsApp number', 'tel', 32],
  ['industry', 'Industry', 'text', 100], ['website', 'Website URL (optional)', 'url', 500],
];

export default function DigitalScorePage() {
  const [contact, setContact] = useState({});
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState({});
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [report, setReport] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [companyWebsite, setCompanyWebsite] = useState('');
  const pending = useRef(null);
  const heading = useRef(null);
  const inFlight = useRef(false);
  const activeCategories = categories.filter((category) => isApplicable(category, answers));
  const category = activeCategories[step - 1];
  const showAnalysis = analyzing || (busy && !report);
  const analysisMessage = analysisProgress < 30 ? 'Checking your business based on your answers…'
    : analysisProgress < 60 ? 'Identifying gaps in your digital presence…'
      : analysisProgress < 85 ? 'Finding opportunities for improvement…'
        : 'Preparing your score and personalized recommendations…';

  useEffect(() => { markScoreSession('started'); }, []);
  useEffect(() => { heading.current?.focus(); }, [step, report, showAnalysis]);
  useEffect(() => {
    if (!analyzing) return undefined;
    const started = Date.now();
    const interval = setInterval(() => setAnalysisProgress(Math.min(95, Math.floor((Date.now() - started) / 100))), 100);
    const timer = setTimeout(() => { setAnalysisProgress(100); setAnalyzing(false); }, 10000);
    return () => { clearInterval(interval); clearTimeout(timer); };
  }, [analyzing]);

  function next(event) {
    event.preventDefault();
    setError('');
    if (step === 0) {
      const validation = validateContact(contact);
      setErrors(validation.errors);
      if (Object.keys(validation.errors).length) return;
      setContact(validation.contact);
    } else {
      const supplied = answers[category.id] || {};
      if (!supplied.present || (supplied.present === 'yes' && category.questions.some((q) => !supplied[q.id]))) {
        setError('Please answer each question before continuing.');
        return;
      }
    }
    if (step === activeCategories.length) submit();
    else setStep((value) => value + 1);
  }

  async function submit() {
    if (inFlight.current) return;
    if (!pending.current) {
      const normalized = normalizeAnswers(answers);
      if (normalized.errors.length) { setError(normalized.errors[0]); return; }
      pending.current = { version: ASSESSMENT_VERSION, submissionId: crypto.randomUUID(), contact, answers: normalized.answers, companyWebsite };
    }
    inFlight.current = true;
    if (!report) { setAnalysisProgress(0); setAnalyzing(true); }
    setBusy(true);
    setError('');
    try {
      const response = await fetch(import.meta.env.VITE_DIGITAL_SCORE_API_URL || '/api/digital-score', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pending.current), signal: AbortSignal.timeout(35000),
      });
      const data = await response.json();
      if (!response.ok || !data.result) throw new Error(data.error || 'Unable to submit your assessment. Please try again.');
      setReport(data);
      if (data.ok) markScoreSession('completed');
    } catch (failure) {
      setAnalyzing(false);
      setError(failure.name === 'TimeoutError' ? 'Submission took too long. Please retry.' : failure.message || 'Unable to submit. Please try again.');
    } finally { setBusy(false); inFlight.current = false; }
  }

  function updateAnswer(key, value) {
    pending.current = null;
    setAnswers((current) => ({ ...current, [category.id]: { ...current[category.id], [key]: value } }));
  }

  return (
    <main className="mx-auto max-w-4xl px-5 pb-20 pt-32 sm:px-8">
      <p className="font-bold uppercase tracking-widest text-blue-600 dark:text-blue-300">Free Digital Business Score</p>
      <h1 ref={heading} tabIndex={-1} className="mt-3 text-3xl font-black sm:text-5xl">{showAnalysis ? 'Preparing your Digital Business Score' : report ? `Your Overall Digital Business Score: ${report.result.overallScore}%` : 'How strong is your business online?'}</h1>
      {showAnalysis ? <div aria-busy="true" className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6 text-center dark:border-blue-800 dark:bg-blue-950/40 sm:p-10">
        <div aria-hidden="true" className="mx-auto h-14 w-14 rounded-full border-4 border-blue-200 border-t-blue-600 motion-safe:animate-spin dark:border-blue-900 dark:border-t-blue-400" />
        <progress aria-label="Preparing your assessment results" value={Math.min(analysisProgress, busy ? 95 : 100)} max={100} className="mt-8 h-3 w-full accent-blue-600" />
        <p role="status" aria-live="polite" className="mt-5 text-lg font-semibold">{analysisMessage}</p>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">We’re reviewing your responses to prepare your score and improvement plan.</p>
      </div> : report ? <>
        <p className="mt-4 text-xl font-semibold">{report.result.classification}</p>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Based on your answers; this is not an independent audit.</p>
        <div role="status" className="mt-6 rounded-xl bg-blue-50 p-5 text-blue-950 dark:bg-blue-950 dark:text-blue-100">
          {report.ok ? `Your assessment has been submitted to our team and your score email has been queued for ${contact.email}. Please check your inbox and spam folder.` : <>
            <p>{report.delivery.client === 'accepted' ? 'Your score email has been queued. Our team notification needs another attempt.' : report.delivery.admin === 'accepted' ? 'Our team received your assessment. Your score email needs another attempt.' : 'Your score is ready, but the emails could not be sent yet.'}</p>
            <button type="button" onClick={submit} disabled={busy} className={`${buttonClass} mt-4`}>{busy ? 'Retrying…' : 'Retry email delivery'}</button>
          </>}
        </div>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">{report.result.categoryScores.map((item) => <li key={item.id} className="rounded-xl border border-slate-200 p-4 dark:border-slate-700"><span>{item.name}</span><strong className="float-right">{item.score}/{item.maximum}</strong></li>)}</ul>
        <h2 className="mt-10 text-2xl font-bold">How We Can Improve Your Digital Presence</h2>
        {report.recommendations.priorities.length ? report.recommendations.priorities.map((gap) => <article key={gap.category} className="mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-700"><h3 className="text-lg font-bold">{gap.title}</h3><p className="mt-2">{gap.why}</p><p className="mt-2">{gap.action}</p><p className="mt-3 font-semibold">We can help with {gap.service}.</p></article>) : <p className="mt-4">Your answers indicate strong foundations. We can help you maintain and improve them.</p>}
        <h2 className="mt-10 text-2xl font-bold">Services available from Kanel</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">{scoreServices.map((service) => <Link key={service.path} to={service.path} className="rounded-xl border border-slate-200 p-5 hover:border-blue-500 dark:border-slate-700"><h3 className="font-bold">{service.name}</h3><p className="mt-2 text-sm leading-6">{service.description}</p></Link>)}</div>
        <a href="mailto:admin@kanelinnovations.com" className={`${buttonClass} mt-8 inline-block`}>Discuss my improvement plan</a>
      </> : <>
        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">Answer a few questions to get your score and a personalized improvement plan by email.</p>
        <p className="mt-6 text-sm font-semibold">Step {step + 1} of {activeCategories.length + 1}: {step === 0 ? 'Your business details' : category.name}</p>
        <progress aria-label="Assessment progress" value={step} max={activeCategories.length} className="mt-3 h-2 w-full accent-blue-600" />
        <form onSubmit={next} className="mt-6 space-y-6">
          {step === 0 ? <>
            <div className="grid gap-5 sm:grid-cols-2">{fields.map(([key, label, type, max]) => <label key={key} className="block font-semibold">{label}<input type={type} required={key !== 'website'} maxLength={max} value={contact[key] || ''} onChange={(event) => { pending.current = null; setContact((current) => ({ ...current, [key]: event.target.value })); }} aria-invalid={Boolean(errors[key])} aria-describedby={errors[key] ? `${key}-error` : undefined} className={inputClass} placeholder={key === 'website' ? 'https://example.com' : undefined} />{errors[key] && <span id={`${key}-error`} className="mt-2 block text-sm text-red-600">{errors[key]}</span>}</label>)}</div>
            <p className="text-sm leading-6">Submitting sends your details and assessment to Kanel Innovations at admin@kanelinnovations.com and sends your results to your email address.</p>
            <label className="flex items-start gap-3 text-sm"><input type="checkbox" checked={contact.followUpConsent || false} onChange={(event) => setContact((current) => ({ ...current, followUpConsent: event.target.checked }))} className="mt-1 h-4 w-4" />You may also contact me about services relevant to my assessment (optional).</label>
            <div className="hidden" aria-hidden="true"><label>Leave blank<input tabIndex={-1} autoComplete="off" value={companyWebsite} onChange={(event) => setCompanyWebsite(event.target.value)} /></label></div>
          </> : <>
            <fieldset><legend className="text-xl font-bold">{category.gate}</legend><div className="mt-3 flex flex-wrap gap-3">{[['yes', 'Yes'], ['no', 'No'], ['unknown', 'Not sure']].map(([value, label]) => <label key={value} className="flex min-h-12 items-center gap-2 rounded-xl border border-slate-300 px-4 dark:border-slate-600"><input required type="radio" name={`${category.id}-presence`} value={value} checked={answers[category.id]?.present === value} onChange={() => updateAnswer('present', value)} />{label}</label>)}</div></fieldset>
            {answers[category.id]?.present === 'yes' && category.questions.map((question) => <label key={question.id} className="block font-semibold">{question.label}<select required value={answers[category.id]?.[question.id] || ''} onChange={(event) => updateAnswer(question.id, event.target.value)} className={inputClass}><option value="">Choose an answer</option>{answerOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label>)}
          </>}
          <div className="flex justify-between gap-4">{step > 0 && <button type="button" disabled={busy} onClick={() => { pending.current = null; setError(''); setStep((value) => value - 1); }} className="min-h-12 rounded-xl border border-slate-300 px-6 py-3 font-bold">Back</button>}<button disabled={busy} className={`${buttonClass} ml-auto`}>{busy ? 'Sending your score…' : step === activeCategories.length ? 'Get my score & email report' : 'Continue'}</button></div>
        </form>
      </>}
      {error && <p role="alert" className="mt-4 rounded-xl bg-red-50 p-4 text-red-800">{error}</p>}
    </main>
  );
}
