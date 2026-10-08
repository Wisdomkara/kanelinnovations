import { answerOptions, categories, isApplicable } from './config.js';

export function classifyScore(score) {
  if (score <= 30) return 'Digital Foundation Needed';
  if (score <= 50) return 'Developing';
  if (score <= 70) return 'Growing';
  if (score <= 85) return 'Established';
  return 'Digitally Advanced';
}

export function scoreAssessment(answers) {
  const categoryScores = categories.map((category) => {
    const active = isApplicable(category, answers) && answers[category.id]?.present === 'yes';
    const score = active ? category.questions.reduce((sum, q) => {
      const factor = answerOptions.find((option) => option.value === answers[category.id]?.[q.id])?.factor ?? 0;
      return sum + q.points * factor;
    }, 0) : 0;
    return { id: category.id, name: category.name, score, maximum: category.weight };
  });
  const overallScore = Math.round(categoryScores.reduce((sum, category) => sum + category.score, 0));
  return { categoryScores, overallScore, classification: classifyScore(overallScore) };
}
