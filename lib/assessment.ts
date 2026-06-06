export type DimensionKey =
  | "opportunityRecognition"
  | "creativityProblemSolving"
  | "riskToleranceDecisionMaking"
  | "leadershipCommunication"
  | "financialThinking"
  | "executionResilience";

export type Level = "Emerging" | "Developing" | "Strong Potential" | "Entrepreneurial Ready";

export type RoleKey = "student" | "aspiring-founder" | "early-founder" | "employee" | "educator";
export type GoalKey =
  | "start-business"
  | "validate-readiness"
  | "improve-career"
  | "school-project"
  | "leadership";

export type Question = {
  id: string;
  dimension: DimensionKey;
  text: string;
};

export const dimensions: Record<DimensionKey, { label: string; shortLabel: string; description: string }> = {
  opportunityRecognition: {
    label: "Opportunity Recognition",
    shortLabel: "Opportunity",
    description: "Noticing unmet needs, trends, customer problems, and practical openings."
  },
  creativityProblemSolving: {
    label: "Creativity & Problem Solving",
    shortLabel: "Creativity",
    description: "Generating options, simplifying problems, and improving ideas through feedback."
  },
  riskToleranceDecisionMaking: {
    label: "Risk Tolerance & Decision Making",
    shortLabel: "Risk",
    description: "Making useful decisions under uncertainty without becoming stuck."
  },
  leadershipCommunication: {
    label: "Leadership & Communication",
    shortLabel: "Leadership",
    description: "Explaining, persuading, listening, aligning people, and handling disagreement."
  },
  financialThinking: {
    label: "Financial Thinking",
    shortLabel: "Finance",
    description: "Understanding costs, pricing, cash flow, tradeoffs, and resource constraints."
  },
  executionResilience: {
    label: "Execution & Resilience",
    shortLabel: "Execution",
    description: "Taking action, finishing work, learning from setbacks, and iterating."
  }
};

export const roles: { key: RoleKey; label: string; description: string }[] = [
  { key: "student", label: "Student", description: "Explore strengths for school, projects, and future work." },
  { key: "aspiring-founder", label: "Aspiring Founder", description: "Check readiness before starting a business." },
  { key: "early-founder", label: "Early Founder", description: "Find skill gaps while building something real." },
  { key: "employee", label: "Employee / Intrapreneur", description: "Build innovation, ownership, and leadership skills." },
  { key: "educator", label: "Educator / Coach", description: "Preview a framework for students or clients." }
];

export const goals: { key: GoalKey; label: string }[] = [
  { key: "start-business", label: "Start a business" },
  { key: "validate-readiness", label: "Validate my readiness" },
  { key: "improve-career", label: "Improve my career" },
  { key: "school-project", label: "Complete a school project" },
  { key: "leadership", label: "Build leadership skills" }
];

export const questions: Question[] = [
  { id: "opportunity_1", dimension: "opportunityRecognition", text: "I can identify business opportunities by observing problems people face in daily life." },
  { id: "opportunity_2", dimension: "opportunityRecognition", text: "I often notice unmet needs before others talk about them." },
  { id: "opportunity_3", dimension: "opportunityRecognition", text: "I can turn a customer complaint into a possible product or service idea." },
  { id: "opportunity_4", dimension: "opportunityRecognition", text: "I actively look for trends that may create new business opportunities." },
  { id: "opportunity_5", dimension: "opportunityRecognition", text: "I can explain why a specific problem is worth solving." },
  { id: "creativity_1", dimension: "creativityProblemSolving", text: "I can come up with multiple solutions when facing a difficult problem." },
  { id: "creativity_2", dimension: "creativityProblemSolving", text: "I enjoy testing unusual ideas instead of only following standard methods." },
  { id: "creativity_3", dimension: "creativityProblemSolving", text: "I can combine ideas from different fields to create something useful." },
  { id: "creativity_4", dimension: "creativityProblemSolving", text: "I can simplify a complex problem into smaller solvable parts." },
  { id: "creativity_5", dimension: "creativityProblemSolving", text: "I often improve an idea after receiving feedback." },
  { id: "risk_1", dimension: "riskToleranceDecisionMaking", text: "I can make decisions even when some information is missing." },
  { id: "risk_2", dimension: "riskToleranceDecisionMaking", text: "I am willing to test an idea before I am completely sure it will work." },
  { id: "risk_3", dimension: "riskToleranceDecisionMaking", text: "I can evaluate risks without becoming stuck or avoiding action." },
  { id: "risk_4", dimension: "riskToleranceDecisionMaking", text: "I can change direction when evidence shows that my first plan is weak." },
  { id: "risk_5", dimension: "riskToleranceDecisionMaking", text: "I stay calm when a project has uncertainty." },
  { id: "leadership_1", dimension: "leadershipCommunication", text: "I can explain my ideas clearly to different types of people." },
  { id: "leadership_2", dimension: "leadershipCommunication", text: "I can persuade others to support a useful idea." },
  { id: "leadership_3", dimension: "leadershipCommunication", text: "I listen carefully before trying to convince someone." },
  { id: "leadership_4", dimension: "leadershipCommunication", text: "I can organize people around a shared goal." },
  { id: "leadership_5", dimension: "leadershipCommunication", text: "I can handle disagreement without losing focus." },
  { id: "financial_1", dimension: "financialThinking", text: "I can estimate the basic costs of starting a small project." },
  { id: "financial_2", dimension: "financialThinking", text: "I understand why cash flow matters in a business." },
  { id: "financial_3", dimension: "financialThinking", text: "I can compare expected benefits with possible costs." },
  { id: "financial_4", dimension: "financialThinking", text: "I consider pricing and revenue when thinking about an idea." },
  { id: "financial_5", dimension: "financialThinking", text: "I can make practical decisions with limited resources." },
  { id: "execution_1", dimension: "executionResilience", text: "I take action instead of waiting for perfect conditions." },
  { id: "execution_2", dimension: "executionResilience", text: "I continue working on a goal even when early results are disappointing." },
  { id: "execution_3", dimension: "executionResilience", text: "I can break a large goal into weekly tasks." },
  { id: "execution_4", dimension: "executionResilience", text: "I learn from failed attempts and adjust my plan." },
  { id: "execution_5", dimension: "executionResilience", text: "I can finish projects without needing constant external pressure." }
];

export function getLevel(score: number): Level {
  if (score < 40) return "Emerging";
  if (score < 60) return "Developing";
  if (score < 80) return "Strong Potential";
  return "Entrepreneurial Ready";
}

export function getProfileType(scores: Record<DimensionKey, number>) {
  const entries = Object.entries(scores) as [DimensionKey, number][];
  const highest = entries.reduce((best, item) => (item[1] > best[1] ? item : best), entries[0]);
  const lowest = entries.reduce((weakest, item) => (item[1] < weakest[1] ? item : weakest), entries[0]);
  if (highest[1] - lowest[1] <= 8) return "Balanced Entrepreneur";

  const profileMap: Record<DimensionKey, string> = {
    opportunityRecognition: "Opportunity Builder",
    creativityProblemSolving: "Creative Problem Solver",
    riskToleranceDecisionMaking: "Strategic Risk Taker",
    leadershipCommunication: "Persuasive Leader",
    financialThinking: "Resource Planner",
    executionResilience: "Resilient Executor"
  };

  return profileMap[highest[0]];
}

export function scoreAssessment(answers: Record<string, number>) {
  const scores = Object.keys(dimensions).reduce((acc, key) => {
    const dimension = key as DimensionKey;
    const dimensionQuestions = questions.filter((question) => question.dimension === dimension);
    const raw = dimensionQuestions.reduce((sum, question) => sum + (answers[question.id] || 0), 0);
    acc[dimension] = Math.round(((raw - 5) / 20) * 100);
    return acc;
  }, {} as Record<DimensionKey, number>);

  const overallScore = Math.round(
    Object.values(scores).reduce((sum, value) => sum + value, 0) / Object.values(scores).length
  );
  const entries = Object.entries(scores) as [DimensionKey, number][];
  const strengths = [...entries].sort((a, b) => b[1] - a[1]).slice(0, 3);
  const improvements = [...entries].sort((a, b) => a[1] - b[1]).slice(0, 3);

  return {
    scores,
    overallScore,
    level: getLevel(overallScore),
    profileType: getProfileType(scores),
    strengths,
    improvements
  };
}
