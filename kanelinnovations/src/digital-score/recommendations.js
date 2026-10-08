import { categories, isApplicable } from './config.js';

export function recommend(answers, result) {
  const gaps = categories.map((category) => {
    const score = result.categoryScores.find((item) => item.id === category.id).score;
    const missing = category.weight - score;
    if (!missing) return null;
    const active = isApplicable(category, answers) && answers[category.id]?.present === 'yes';
    const weakest = active ? category.questions
      .filter((q) => answers[category.id]?.[q.id] !== 'yes')
      .sort((a, b) => b.points - a.points)[0] : null;
    return {
      category: category.id, missing,
      title: weakest?.action ?? category.foundation[0],
      why: weakest?.why ?? category.foundation[2],
      action: weakest ? `${weakest.action}. Check the current setup, make the improvement and review the outcome.` : category.foundation[1],
      impact: missing >= 8 ? 'High' : missing >= 3 ? 'Medium' : 'Low',
      service: category.service, path: category.path, month: category.month,
    };
  }).filter(Boolean).sort((a, b) => b.missing - a.missing);

  const roadmap = [
    { month: 1, title: 'Digital foundation improvements' },
    { month: 2, title: 'Visibility and conversion improvements' },
    { month: 3, title: 'Growth, advertising and automation' },
  ].map((stage) => {
    const actions = gaps.filter((gap) => gap.month === stage.month).map((gap) => gap.action);
    if (!actions.length) {
      const strengths = categories.filter((c) => c.month === stage.month).map((c) => c.name).join(', ');
      actions.push(`Your answers indicate strong ${strengths} foundations. Verify these with current performance data and maintain what is working.`);
    }
    return { ...stage, actions };
  });
  return { priorities: gaps.slice(0, 3), gaps, roadmap, recommendedServices: [...new Set(gaps.map((gap) => gap.service))] };
}
