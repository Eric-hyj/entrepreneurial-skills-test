export type MarketingPage = {
  slug: string;
  path: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string;
  cta: string;
  sections: {
    heading: string;
    body: string;
    points: string[];
  }[];
  faqs: { question: string; answer: string }[];
  related: { href: string; label: string }[];
};

export const homeFaqs = [
  {
    question: "What are entrepreneurial skills?",
    answer:
      "Entrepreneurial skills are the practical abilities that help someone notice opportunities, solve problems, make decisions, communicate clearly, manage resources, and keep executing under uncertainty."
  },
  {
    question: "Is this entrepreneurial skills test free?",
    answer:
      "Yes. The basic entrepreneurial skills test is free and gives you an instant score, dimension breakdown, strengths, improvement areas, and next-step suggestions."
  },
  {
    question: "How accurate is the assessment?",
    answer:
      "This assessment is designed for educational self-reflection. It is inspired by entrepreneurship competence frameworks, but it is not an official diagnostic, certification, or psychological test."
  },
  {
    question: "Can students use this entrepreneurial skills test?",
    answer:
      "Yes. Students can use the test to understand strengths for class projects, entrepreneurship programs, career planning, and early business ideas."
  },
  {
    question: "What happens after I complete the test?",
    answer:
      "You will see your overall entrepreneurial skills score, six dimension scores, a profile type, strengths, improvement areas, and a preview of a deeper AI-powered report."
  }
];

export const pages: Record<string, MarketingPage> = {
  "entrepreneurial-skills-test": {
    slug: "entrepreneurial-skills-test",
    path: "/entrepreneurial-skills-test",
    title: "Entrepreneurial Skills Test: Free 30-Question Assessment",
    description:
      "Take a free entrepreneurial skills test with 30 questions covering opportunity recognition, creativity, risk, leadership, financial thinking, and execution.",
    h1: "Entrepreneurial Skills Test",
    eyebrow: "Free entrepreneurship quiz",
    intro:
      "Use this entrepreneurial skills test to quickly understand where your founder strengths are strongest and which skill gaps deserve attention before you start or grow a business.",
    cta: "Start the free entrepreneurial skills test",
    sections: [
      {
        heading: "What this test measures",
        body:
          "The test looks at six practical skill areas that show up repeatedly in real entrepreneurial work. It is built for reflection, planning, and better next decisions.",
        points: [
          "Opportunity recognition and customer problem awareness",
          "Creativity, problem solving, and feedback loops",
          "Risk tolerance, decision making, leadership, finance, and execution"
        ]
      },
      {
        heading: "Who should take it",
        body:
          "The test is most useful for students, aspiring founders, early founders, and employees who want to build stronger innovation and ownership habits.",
        points: [
          "Students preparing entrepreneurship coursework or projects",
          "Aspiring founders checking readiness before committing time and money",
          "Early founders looking for personal bottlenecks"
        ]
      },
      {
        heading: "How to use your score",
        body:
          "A score is not a label. Treat it as a map. Strong dimensions show where you can move faster, while weaker dimensions show what to practice or partner around.",
        points: [
          "Use your top strengths to choose realistic first actions",
          "Turn low dimensions into 30-day practice goals",
          "Retake the test after real experiments to see what changed"
        ]
      }
    ],
    faqs: homeFaqs,
    related: [
      { href: "/entrepreneurial-skills-assessment", label: "Compare the assessment format" },
      { href: "/entrepreneurial-skills-examples", label: "See entrepreneurial skills examples" },
      { href: "/how-to-build-entrepreneurial-skills", label: "Build entrepreneurial skills" }
    ]
  },
  "entrepreneurial-skills-assessment": {
    slug: "entrepreneurial-skills-assessment",
    path: "/entrepreneurial-skills-assessment",
    title: "Entrepreneurial Skills Assessment for Students and Founders",
    description:
      "Assess your entrepreneurial skills with a practical six-dimension framework and get an instant profile of strengths, blind spots, and next steps.",
    h1: "Entrepreneurial Skills Assessment",
    eyebrow: "Six-dimension skill profile",
    intro:
      "This entrepreneurial skills assessment gives you a structured way to reflect on readiness, not just a personality-style quiz result.",
    cta: "Assess your entrepreneurial skills",
    sections: [
      {
        heading: "Assessment framework",
        body:
          "The MVP assessment uses six dimensions inspired by entrepreneurship competence frameworks, rewritten into practical self-reflection questions.",
        points: [
          "Ideas and opportunities: opportunity recognition and creativity",
          "Resources: communication, leadership, and financial thinking",
          "Into action: risk decisions, execution, resilience, and iteration"
        ]
      },
      {
        heading: "What makes it useful",
        body:
          "A useful assessment should connect scores to action. This tool highlights your strongest areas, your lowest dimensions, and practical next steps.",
        points: [
          "Instant score and profile type",
          "Dimension-by-dimension breakdown",
          "Preview of a personalized improvement plan"
        ]
      },
      {
        heading: "Important limitations",
        body:
          "This is not a certified diagnostic. It should support reflection, coaching conversations, class discussions, and early planning.",
        points: [
          "No guarantee of business success",
          "No legal, financial, or investment advice",
          "Best used alongside real customer discovery and small experiments"
        ]
      }
    ],
    faqs: [
      {
        question: "Is this an official entrepreneurship assessment?",
        answer:
          "No. It is inspired by public entrepreneurship competence ideas, but it is not an official EntreComp assessment, certification, or formal diagnostic."
      },
      {
        question: "How long does the assessment take?",
        answer: "Most users can complete the 30-question assessment in about five minutes."
      },
      {
        question: "What do I get after the assessment?",
        answer:
          "You get an overall score, six skill scores, a profile type, strengths, improvement areas, and a preview of a deeper report."
      }
    ],
    related: [
      { href: "/entrepreneurial-skills-test", label: "Take the entrepreneurial skills test" },
      { href: "/sample-report", label: "View a sample report" },
      { href: "/entrepreneurial-skills-examples", label: "Explore examples" }
    ]
  },
  "entrepreneurial-skills-examples": {
    slug: "entrepreneurial-skills-examples",
    path: "/entrepreneurial-skills-examples",
    title: "Entrepreneurial Skills Examples: 6 Practical Skill Areas",
    description:
      "Explore entrepreneurial skills examples across opportunity recognition, creativity, risk, leadership, financial thinking, and execution.",
    h1: "Entrepreneurial Skills Examples",
    eyebrow: "Practical examples",
    intro:
      "Entrepreneurial skills become easier to understand when you can see them in real situations. These examples map directly to the six dimensions used in the free test.",
    cta: "Test your entrepreneurial skills",
    sections: [
      {
        heading: "Opportunity recognition examples",
        body:
          "Opportunity recognition is the habit of seeing useful problems before they are neatly packaged as business ideas.",
        points: [
          "Noticing that students keep using messy spreadsheets for a recurring task",
          "Turning repeated customer complaints into a better service workflow",
          "Spotting a trend before competitors create focused tools for it"
        ]
      },
      {
        heading: "Leadership and financial thinking examples",
        body:
          "Entrepreneurs need more than ideas. They need to explain, organize, price, budget, and choose tradeoffs under constraints.",
        points: [
          "Persuading two classmates or teammates to test a prototype",
          "Estimating whether a small project can cover software and marketing costs",
          "Choosing a simple paid plan instead of building too many free features"
        ]
      },
      {
        heading: "Execution and resilience examples",
        body:
          "Execution turns entrepreneurial intent into evidence. Resilience helps you keep learning when the first version fails.",
        points: [
          "Shipping a landing page before the product is perfect",
          "Interviewing users after a weak launch instead of giving up",
          "Breaking a large goal into weekly experiments"
        ]
      }
    ],
    faqs: [
      {
        question: "What are the most important entrepreneurial skills?",
        answer:
          "The most useful skills usually include opportunity recognition, creative problem solving, decision making under uncertainty, communication, financial thinking, and execution."
      },
      {
        question: "Can entrepreneurial skills be learned?",
        answer:
          "Yes. Many entrepreneurial skills improve through customer conversations, small experiments, budgeting practice, teamwork, and repeated execution."
      },
      {
        question: "How do I know which skill to improve first?",
        answer:
          "Start with a structured assessment, then focus on the lowest dimension that most affects your current goal."
      }
    ],
    related: [
      { href: "/how-to-build-entrepreneurial-skills", label: "Learn how to build these skills" },
      { href: "/entrepreneurial-skills-test", label: "Take the free skills test" },
      { href: "/entrepreneurial-skills-assessment", label: "Use the assessment" }
    ]
  },
  "how-to-build-entrepreneurial-skills": {
    slug: "how-to-build-entrepreneurial-skills",
    path: "/how-to-build-entrepreneurial-skills",
    title: "How to Build Entrepreneurial Skills: A Practical 30-Day Plan",
    description:
      "Learn how to build entrepreneurial skills with a practical plan for opportunity recognition, creativity, risk decisions, leadership, finance, and execution.",
    h1: "How to Build Entrepreneurial Skills",
    eyebrow: "Action plan",
    intro:
      "The best way to build entrepreneurial skills is to practice with small real-world experiments, not just read definitions. Start by identifying your current gaps.",
    cta: "Find your entrepreneurial skill gaps",
    sections: [
      {
        heading: "Start with a baseline",
        body:
          "Before making a plan, take a short entrepreneurial skills assessment. A baseline helps you avoid generic advice and focus on the dimension that matters now.",
        points: [
          "Measure six skill areas instead of guessing",
          "Choose one strength to use more deliberately",
          "Choose one weak area to practice for 30 days"
        ]
      },
      {
        heading: "Practice with small experiments",
        body:
          "Entrepreneurial skills grow through evidence. Replace abstract goals with small tests that produce feedback from users, classmates, customers, or teammates.",
        points: [
          "Interview five people about one problem",
          "Write a one-page offer and ask for feedback",
          "Estimate costs, pricing, and one simple revenue path"
        ]
      },
      {
        heading: "Review and repeat",
        body:
          "At the end of each week, review what you learned. The goal is not to prove you were right. The goal is to improve your judgment and execution speed.",
        points: [
          "Document what surprised you",
          "Adjust the next experiment based on evidence",
          "Retake the assessment after a month of practice"
        ]
      }
    ],
    faqs: [
      {
        question: "How long does it take to build entrepreneurial skills?",
        answer:
          "You can improve specific habits in weeks, but stronger entrepreneurial judgment usually develops through repeated projects, feedback, and decision making."
      },
      {
        question: "What should beginners practice first?",
        answer:
          "Beginners should usually practice opportunity recognition, customer conversations, simple budgeting, and consistent execution."
      },
      {
        question: "Do I need a business idea before building these skills?",
        answer:
          "No. You can build many entrepreneurial skills through class projects, side projects, workplace initiatives, and small experiments."
      }
    ],
    related: [
      { href: "/entrepreneurial-skills-test", label: "Take the free test first" },
      { href: "/entrepreneurial-skills-examples", label: "Review examples" },
      { href: "/sample-report", label: "See a sample improvement report" }
    ]
  }
};
