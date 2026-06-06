import { dimensions, questions, type DimensionKey } from "@/lib/assessment";

const profileTypes = [
  {
    name: "Opportunity Builder",
    text: "Usually strongest at noticing unmet needs, trends, and customer problems that could become useful offers."
  },
  {
    name: "Creative Problem Solver",
    text: "Usually strongest at creating options, simplifying messy problems, and improving ideas through feedback."
  },
  {
    name: "Strategic Risk Taker",
    text: "Usually strongest at making decisions under uncertainty and testing ideas before every detail is certain."
  },
  {
    name: "Persuasive Leader",
    text: "Usually strongest at explaining ideas, listening well, persuading others, and aligning people around a goal."
  },
  {
    name: "Resource Planner",
    text: "Usually strongest at thinking through costs, pricing, cash flow, limited resources, and practical tradeoffs."
  },
  {
    name: "Resilient Executor",
    text: "Usually strongest at taking action, finishing work, learning from setbacks, and iterating after weak results."
  },
  {
    name: "Balanced Entrepreneur",
    text: "Usually shows a relatively even skill profile across the six entrepreneurial skills dimensions."
  }
];

const levels = [
  {
    name: "Emerging",
    range: "0-39",
    text: "You are at an early stage and need to build core entrepreneurial habits."
  },
  {
    name: "Developing",
    range: "40-59",
    text: "You have some useful foundations but need a clearer improvement plan."
  },
  {
    name: "Strong Potential",
    range: "60-79",
    text: "You show strong entrepreneurial potential with a few important gaps."
  },
  {
    name: "Entrepreneurial Ready",
    range: "80-100",
    text: "You have a strong entrepreneurial skill profile and should focus on execution."
  }
];

export function AssessmentSeoContent() {
  const groupedQuestions = questions.reduce((acc, question) => {
    if (!acc[question.dimension]) acc[question.dimension] = [];
    acc[question.dimension].push(question.text);
    return acc;
  }, {} as Record<DimensionKey, string[]>);

  return (
    <section className="content-section assessment-seo">
      <div className="section-heading">
        <p className="eyebrow">Assessment framework</p>
        <h2>All 30 entrepreneurial skills test questions</h2>
        <p>
          The interactive test above is powered by these six entrepreneurial skills dimensions and 30 self-reflection
          questions. This content is rendered in the page HTML so search engines can understand what the tool actually
          measures.
        </p>
      </div>

      <div className="question-bank">
        {(Object.keys(dimensions) as DimensionKey[]).map((dimension) => (
          <article key={dimension}>
            <h3>{dimensions[dimension].label}</h3>
            <p>{dimensions[dimension].description}</p>
            <ol>
              {groupedQuestions[dimension].map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ol>
          </article>
        ))}
      </div>

      <div className="scoring-grid">
        <article>
          <h3>Scoring method</h3>
          <p>
            Each dimension has five questions scored from 1 to 5. The raw dimension score is converted to a 0-100
            score using this formula:
          </p>
          <code>dimensionScore = round((rawScore - 5) / 20 * 100)</code>
          <p>
            The overall entrepreneurial skills score is the average of the six dimension scores. The test then shows
            your strongest dimensions, improvement areas, level, and profile type.
          </p>
        </article>

        <article>
          <h3>Score levels</h3>
          <div className="mini-list">
            {levels.map((level) => (
              <p key={level.name}>
                <strong>
                  {level.name} ({level.range})
                </strong>
                <span>{level.text}</span>
              </p>
            ))}
          </div>
        </article>
      </div>

      <div className="profile-type-grid">
        <div className="section-heading compact">
          <p className="eyebrow">Profile types</p>
          <h2>Possible entrepreneurial skills profiles</h2>
          <p>
            Profile types are based on the strongest dimension in your score pattern. Balanced scores produce the
            Balanced Entrepreneur profile.
          </p>
        </div>
        <div className="profile-cards">
          {profileTypes.map((profile) => (
            <article key={profile.name}>
              <h3>{profile.name}</h3>
              <p>{profile.text}</p>
            </article>
          ))}
        </div>
      </div>

      <p className="framework-note">
        This entrepreneurial skills assessment is for educational self-reflection only. It is inspired by
        entrepreneurship competence frameworks such as EntreComp, but it is not an official diagnostic, certification,
        psychological assessment, legal assessment, financial assessment, or career diagnostic.
      </p>
    </section>
  );
}