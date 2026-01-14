import { ProcessStep } from "./types";

export const processSteps: ProcessStep[] = [
  {
    id: "discover",
    title: "Discover Needs",
    description: "We research, listen, and analyze to define your core challenges and align on goals.",
    deliverables: [
      "Brand audit",
      "Competitor analysis",
      "Target audience insights",
      "Strategy document",
    ],
  },
  {
    id: "design",
    title: "Design Experience",
    description: "We craft intentional user journeys with emotional impact to build genuine connection.",
    deliverables: [
      "Content calendar",
      "Creative concepts",
      "Ad campaign strategy",
      "Design mockups",
    ],
  },
  {
    id: "build",
    title: "Build Smart",
    description: "Technically sound builds optimized for performance, scalability, and future-proofing.",
    deliverables: [
      "Content production",
      "Product shoots",
      "Ad creatives",
      "Web/Shopify development",
    ],
  },
  {
    id: "launch",
    title: "Launch & Learn",
    description: "We deploy, analyze, and iterate, refining continuously with feedback and market needs.",
    deliverables: [
      "Campaign launch",
      "Performance tracking",
      "Monthly reports",
      "Optimization insights",
    ],
  },
];

