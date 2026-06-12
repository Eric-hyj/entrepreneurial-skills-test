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
    title: "Entrepreneurial Skills Test: Free 30-Question Founder Skills Quiz",
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
    title: "Entrepreneurial Skills Examples for Students and Founders",
    description:
      "Explore practical entrepreneurial skills examples for students, aspiring founders, and early-stage entrepreneurs across six core skill areas.",
    h1: "Entrepreneurial Skills Examples",
    eyebrow: "Practical examples",
    intro:
      "Entrepreneurial skills become easier to understand when you can see them in real situations. These examples show how opportunity recognition, creativity, risk decisions, leadership, financial thinking, and execution appear in school projects, side projects, and early businesses.",
    cta: "Test your entrepreneurial skills",
    sections: [
      {
        heading: "Examples of opportunity recognition",
        body:
          "Opportunity recognition is the habit of seeing useful problems before they are neatly packaged as business ideas. A person with this skill notices repeated friction, asks why it happens, and looks for a simple way to make the situation better.",
        points: [
          "A student notices that classmates keep using messy spreadsheets for the same group-project task and builds a simpler template.",
          "A small shop owner sees repeated customer complaints about pickup times and redesigns the ordering workflow.",
          "An aspiring founder spots a fast-growing search trend before larger competitors create focused tools for that need."
        ]
      },
      {
        heading: "Examples of creative problem solving",
        body:
          "Creative problem solving is not just having unusual ideas. In entrepreneurship, it means testing different ways to solve a real customer problem when the first solution is too expensive, too slow, or too confusing.",
        points: [
          "Turning a complex app idea into a single landing page that validates demand first.",
          "Replacing a custom feature with a manual service for the first ten customers.",
          "Using customer feedback to simplify an offer instead of adding more features."
        ]
      },
      {
        heading: "Examples of risk and decision making",
        body:
          "Entrepreneurial risk skill means taking measured action under uncertainty. It is not reckless confidence. Strong founders reduce risk by running small tests, setting limits, and learning from evidence.",
        points: [
          "Spending one weekend and a small ad budget to test demand before building a full product.",
          "Choosing a narrow target customer instead of trying to serve everyone.",
          "Stopping a weak idea after customer interviews show the problem is not urgent."
        ]
      },
      {
        heading: "Examples of leadership and communication",
        body:
          "Entrepreneurs need to explain ideas clearly, organize people, ask for feedback, and make decisions when resources are limited. Leadership can show up before a company exists.",
        points: [
          "Persuading two classmates or teammates to test a prototype with real users.",
          "Writing a clear one-page pitch so potential users understand the problem and offer.",
          "Turning vague feedback into a prioritized list of next actions."
        ]
      },
      {
        heading: "Examples of financial thinking",
        body:
          "Financial thinking helps entrepreneurs connect ideas to resources. You do not need to be an accountant, but you do need to understand costs, pricing, margins, and whether a project can become sustainable.",
        points: [
          "Estimating whether a small project can cover software, payment, and marketing costs.",
          "Comparing a free plan, a one-time purchase, and a subscription before choosing a pricing model.",
          "Deciding not to build a feature because the expected revenue does not justify the time cost."
        ]
      },
      {
        heading: "Examples of execution and resilience",
        body:
          "Execution turns entrepreneurial intent into evidence. Resilience helps you keep learning when the first version fails, traffic is low, or customers do not respond as expected.",
        points: [
          "Shipping a landing page before the product is perfect so real users can react.",
          "Interviewing users after a weak launch instead of giving up immediately.",
          "Breaking a large goal into weekly experiments with one measurable outcome."
        ]
      },
      {
        heading: "Student entrepreneurial skills examples",
        body:
          "Students often build entrepreneurial skills through projects, competitions, clubs, internships, and small online experiments. The goal is not to look like a polished founder. The goal is to practice noticing problems and turning ideas into evidence.",
        points: [
          "Running a survey before choosing a class project idea.",
          "Building a simple prototype for an entrepreneurship competition.",
          "Testing whether people will sign up for a newsletter, template, or small digital product."
        ]
      },
      {
        heading: "Early founder entrepreneurial skills examples",
        body:
          "For early founders, entrepreneurial skills show up in daily tradeoffs. The most valuable examples are usually small actions that create learning faster than planning alone.",
        points: [
          "Choosing one customer segment and writing landing page copy for that exact audience.",
          "Launching a minimum viable version and watching which features users actually touch.",
          "Using the first ten customer conversations to rewrite the offer, pricing, and onboarding flow."
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
      },
      {
        question: "What is a simple example of entrepreneurship skill in daily life?",
        answer:
          "A simple example is noticing a repeated problem, asking people how painful it is, creating a small solution, and checking whether anyone wants to use or pay for it."
      },
      {
        question: "Are entrepreneurial skills only for startup founders?",
        answer:
          "No. Students, employees, freelancers, creators, and small business owners can use entrepreneurial skills to spot problems, organize resources, make better decisions, and execute projects."
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