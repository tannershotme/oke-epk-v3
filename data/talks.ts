export type Talk = {
  id: string;
  title: string;
  microLine: string;
  description: string;
  formats: string[];
  audience: string;
  outcome: string;
  outcomes?: string[];
  featured?: boolean;
};

export const SIGNATURE_KEYNOTE: Talk = {
  id: "ai-with-intent",
  title: "AI With Intent: Turning Hype Into Measurable Business Impact",
  microLine: "AI realism, not AI enthusiasm",
  description:
    "A practical keynote for leaders who want impact\u2014not noise. Clarifies what must be true (intent, outcomes, readiness) for AI to improve performance without breaking trust or workflows.",
  formats: ["Keynote", "Fireside Chat"],
  audience:
    "Exec teams, boards/investors, and transformation leaders moving from pilots to adoption.",
  outcome: "",
  outcomes: [
    "A clean distinction between experimentation and impact (and how to lead each).",
    "How to set measurable outcomes + accountability so initiatives don\u2019t drift.",
    "The readiness leaders need to avoid chaos, rework, and trust loss as AI scales.",
  ],
  featured: true,
};

export const TALKS: Talk[] = [
  {
    id: "product-mindset",
    title: "The Product Mindset: Why Strategy Fails Without It",
    microLine: "Close the strategy \u2192 execution gap",
    description:
      "Why strategies collapse without a real product mindset\u2014and what leaders can change to create clarity, ownership, and momentum that delivers.",
    formats: ["Keynote", "Workshop"],
    audience:
      "Boards, CEOs, investors, and exec teams responsible for turning strategy into execution.",
    outcome:
      "A practical model to align vision, decisions, and delivery around outcomes.",
  },
  {
    id: "clarity-is-kindness",
    title:
      "Clarity Is Kindness: Building High-Performance Teams Without Burnout",
    microLine: "Performance through clarity, not pressure",
    description:
      "How leaders create high accountability and fast execution without turning intensity into attrition\u2014by making expectations, decisions, and purpose unmistakably clear.",
    formats: ["Workshop", "Keynote"],
    audience:
      "People leaders and operators scaling teams who want performance without attrition.",
    outcome:
      "A clear leadership approach for high standards, low ambiguity, and sustainable execution.",
  },
  {
    id: "systems-not-slogans",
    title: "Systems, Not Slogans: Why Digital Transformation Actually Fails",
    microLine: "Transformation realism",
    description:
      "Transformation fails when leaders rely on slogans instead of systems\u2014operating models, incentives, decision rights, and execution design that drive outcomes.",
    formats: ["Keynote", "Fireside Chat"],
    audience:
      "Transformation leaders and operators (plus investor audiences) who want execution that sticks.",
    outcome:
      "A systems-first lens to diagnose why change stalls\u2014and what to fix first.",
  },
  {
    id: "leading-through-change",
    title: "Leading Through Change: A 29-Year Journey of Reinvention",
    microLine: "Lessons from reinvention at scale",
    description:
      "A candid leadership talk on staying relevant through repeated platform shifts\u2014what to do when markets move, organizations resist, and change becomes the job.",
    formats: ["Fireside Chat", "Keynote"],
    audience:
      "Leadership events and orgs navigating constant change who want practical, lived lessons\u2014not platitudes.",
    outcome:
      "A grounded set of principles for reinvention, influence, and resilience through change.",
  },
  {
    id: "re-architecting-orgs",
    title: "Re-Architecting Organizations for the AI Era",
    microLine: "Architecture and services gaps in the AI shift",
    description:
      "Why org architecture\u2014not ambition\u2014is the limiter, and why a new category of managed services/platform providers is emerging to help companies modernize and scale.",
    formats: ["Keynote", "Fireside Chat"],
    audience:
      "Enterprise leaders, private-company execs, and investor/PE audiences thinking about AI-era scale.",
    outcome:
      "A clear map of what must change in org design\u2014and what new support layers are filling the gap.",
  },
];
