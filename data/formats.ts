export type EngagementFormat = {
  id: string;
  name: string;
  duration: string;
  worksWellFor: string;
  bullets: string[];
};

export const FORMATS: EngagementFormat[] = [
  {
    id: "keynote",
    name: "Keynote",
    duration: "30\u201360 minutes + Q&A",
    worksWellFor:
      "Exec offsites \u2022 Enterprise AI events \u2022 Company-wide meetings \u2022 Conferences",
    bullets: [
      "A clear throughline from hype \u2192 intent \u2192 measurable impact (no tool worship).",
      "A practical framework leaders can reuse to align teams and decisions.",
      "A shared language for separating experimentation from enterprise adoption.",
    ],
  },
  {
    id: "fireside-chat",
    name: "Fireside Chat",
    duration: "30\u201345 minutes",
    worksWellFor:
      "Leadership summits \u2022 Investor / board forums \u2022 Innovation events \u2022 Media/partner programs",
    bullets: [
      "A candid, executive-level conversation anchored in real platform shifts and reinvention.",
      "Sharp POV on what fails in transformation when organizations choose slogans over systems.",
      "Audience-driven Q&A that connects the themes to your org\u2019s reality.",
    ],
  },
  {
    id: "workshop",
    name: "Workshop (Interactive)",
    duration: "60\u2013120 minutes",
    worksWellFor:
      "Leadership teams \u2022 Product orgs \u2022 Transformation programs \u2022 People/ops leaders",
    bullets: [
      "A facilitated session to clarify intent, outcomes, and accountability for a real initiative.",
      "A working map of the \u201csystems, not slogans\u201d blockers: operating model, decision rights, incentives.",
      "Team-level clarity: what high performance requires (without burnout) and what changes next week.",
    ],
  },
];
