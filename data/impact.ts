export type ImpactMetric = {
  id: string;
  organization: string;
  title: string;
  context: string;
  metric: string;
};

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: "reuters",
    organization: "Reuters",
    title: "AI newsroom velocity",
    context:
      "Built foundations that reduced time-to-publish on breaking stories.",
    metric: "40% faster content velocity",
  },
  {
    id: "bloomberg",
    organization: "Bloomberg",
    title: "Mobile as a revenue pillar",
    context:
      "Transformed mobile from experiment to durable growth driver.",
    metric: "Mobile contribution to digital revenue: 12% \u2192 34%",
  },
  {
    id: "disney",
    organization: "Disney",
    title: "Streamlined content supply chain",
    context: "Reduced friction across platforms and teams.",
    metric: "Reduced content-to-platform cycle time by 60%",
  },
];
