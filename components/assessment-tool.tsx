"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  dimensions,
  goals,
  questions,
  roles,
  scoreAssessment,
  type DimensionKey,
  type GoalKey,
  type RoleKey
} from "@/lib/assessment";
import { trackEvent } from "@/lib/analytics";

const scale = [
  { value: 1, label: "Strongly disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Neutral" },
  { value: 4, label: "Agree" },
  { value: 5, label: "Strongly agree" }
];

export function AssessmentTool() {
  const [role, setRole] = useState<RoleKey>("aspiring-founder");
  const [goal, setGoal] = useState<GoalKey>("start-business");
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [warning, setWarning] = useState("");

  const current = questions[index];
  const answeredCount = Object.keys(answers).length;
  const progress = Math.round((answeredCount / questions.length) * 100);
  const result = useMemo(() => scoreAssessment(answers), [answers]);

  function startTest() {
    setStarted(true);
    setShowResults(false);
    trackEvent("start_test_clicked", { role, goal });
  }

  function chooseRole(nextRole: RoleKey) {
    setRole(nextRole);
    trackEvent("role_selected", { role: nextRole });
  }

  function chooseGoal(nextGoal: GoalKey) {
    setGoal(nextGoal);
    trackEvent("goal_selected", { goal: nextGoal });
  }

  function answerQuestion(score: number) {
    setWarning("");
    setAnswers((previous) => ({ ...previous, [current.id]: score }));
    trackEvent("question_answered", { questionId: current.id, score, dimension: current.dimension });
  }

  function goNext() {
    if (!answers[current.id]) {
      setWarning("Choose the option that feels closest before moving on.");
      return;
    }
    if (index === questions.length - 1) {
      setShowResults(true);
      setStarted(false);
      trackEvent("assessment_completed", { overallScore: result.overallScore });
      trackEvent("result_viewed", { level: result.level });
      if (typeof window !== "undefined") {
        window.localStorage.setItem("skillsignal_latest_result", JSON.stringify({ role, goal, answers, result }));
      }
      return;
    }
    setIndex((value) => value + 1);
  }

  function restart() {
    setStarted(false);
    setShowResults(false);
    setIndex(0);
    setAnswers({});
    setWarning("");
  }

  return (
    <section id="test" className="assessment-shell" aria-label="Free entrepreneurial skills test">
      {!started && !showResults ? (
        <div className="assessment-start">
          <div className="panel-heading">
            <p className="eyebrow">Free 5-minute test</p>
            <h2>Start with your role and goal</h2>
            <p>
              Your basic score is instant. The full report preview adapts to what you want to do next.
            </p>
          </div>

          <div className="choice-block">
            <h3>Role</h3>
            <div className="choice-grid role-grid">
              {roles.map((item) => (
                <button
                  className={role === item.key ? "choice-card selected" : "choice-card"}
                  key={item.key}
                  onClick={() => chooseRole(item.key)}
                  type="button"
                >
                  <strong>{item.label}</strong>
                  <span>{item.description}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="choice-block">
            <h3>Goal</h3>
            <div className="chip-row">
              {goals.map((item) => (
                <button
                  className={goal === item.key ? "chip selected" : "chip"}
                  key={item.key}
                  onClick={() => chooseGoal(item.key)}
                  type="button"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <button className="button primary wide" onClick={startTest} type="button">
            Start test
          </button>
        </div>
      ) : null}

      {started ? (
        <div className="question-panel">
          <div className="progress-row">
            <span>
              Question {index + 1} of {questions.length}
            </span>
            <span>{progress}% complete</span>
          </div>
          <div className="progress-track">
            <div style={{ width: `${Math.max(progress, 4)}%` }} />
          </div>

          <p className="dimension-pill">{dimensions[current.dimension].label}</p>
          <h2>{current.text}</h2>
          <div className="scale-grid">
            {scale.map((option) => (
              <button
                className={answers[current.id] === option.value ? "scale-option selected" : "scale-option"}
                key={option.value}
                onClick={() => answerQuestion(option.value)}
                type="button"
              >
                <span>{option.value}</span>
                {option.label}
              </button>
            ))}
          </div>
          {warning ? <p className="warning">{warning}</p> : null}
          <div className="question-actions">
            <button className="button secondary" disabled={index === 0} onClick={() => setIndex((value) => value - 1)} type="button">
              Previous
            </button>
            <button className="button primary" onClick={goNext} type="button">
              {index === questions.length - 1 ? "View my result" : "Next"}
            </button>
          </div>
        </div>
      ) : null}

      {showResults ? <ResultReport result={result} restart={restart} /> : null}
    </section>
  );
}

function ResultReport({
  result,
  restart
}: {
  result: ReturnType<typeof scoreAssessment>;
  restart: () => void;
}) {
  const maxDimension = result.strengths[0][0];
  const lowDimension = result.improvements[0][0];

  function handleUnlock() {
    trackEvent("unlock_report_clicked", { overallScore: result.overallScore, level: result.level });
  }

  return (
    <div className="result-panel">
      <div className="result-hero">
        <div>
          <p className="eyebrow">Your free result</p>
          <h2>{result.profileType}</h2>
          <p>
            Your strongest current signal is {dimensions[maxDimension].label.toLowerCase()}. Your most useful next
            practice area is {dimensions[lowDimension].label.toLowerCase()}.
          </p>
        </div>
        <div className="score-dial" aria-label={`Overall score ${result.overallScore} out of 100`}>
          <strong>{result.overallScore}</strong>
          <span>{result.level}</span>
        </div>
      </div>

      <div className="bar-list">
        {(Object.entries(result.scores) as [DimensionKey, number][]).map(([key, score]) => (
          <div className="bar-row" key={key}>
            <div>
              <strong>{dimensions[key].label}</strong>
              <span>{dimensions[key].description}</span>
            </div>
            <div className="bar-meter">
              <i style={{ width: `${score}%` }} />
            </div>
            <b>{score}</b>
          </div>
        ))}
      </div>

      <div className="insight-grid">
        <div className="insight-card">
          <h3>Top strengths</h3>
          {result.strengths.map(([key, score]) => (
            <p key={key}>
              <strong>{dimensions[key].shortLabel}</strong> gives you leverage now. Score: {score}.
            </p>
          ))}
        </div>
        <div className="insight-card">
          <h3>Improvement areas</h3>
          {result.improvements.map(([key, score]) => (
            <p key={key}>
              <strong>{dimensions[key].shortLabel}</strong> is worth practicing next. Score: {score}.
            </p>
          ))}
        </div>
      </div>

      <div className="locked-report">
        <div>
          <p className="eyebrow">Full AI report preview</p>
          <h3>Unlock a personalized improvement plan</h3>
          <p>
            The full report will expand this result into deep strength analysis, risk profile, recommended business
            areas, and a 30-day practice plan.
          </p>
        </div>
        <ul>
          <li>Deep strength analysis</li>
          <li>Hidden risk factors</li>
          <li>Best-fit business areas</li>
          <li>30-day personalized plan</li>
        </ul>
        <Link className="button primary" href="/sample-report" onClick={handleUnlock}>
          Unlock full AI report
        </Link>
      </div>

      <button className="button secondary" onClick={restart} type="button">
        Retake the test
      </button>
    </div>
  );
}
