import { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [
  {
    id: "kicks-social",
    title: "Performance Marketing for Kicks and Co",
    client: "Kicks and Co",
    category: "Ads",
    description: "Drove conversions and brand awareness through strategic performance marketing campaigns.",
    metrics: [
      { label: "Reach", value: "+250%" },
      { label: "Engagement", value: "+180%" },
    ],
    tags: ["Performance Marketing", "Paid Ads", "Brand Building"],
  },
  {
    id: "korean-table-ads",
    title: "Creative Shoot for The Korean Table",
    client: "The Korean Table",
    category: "Shoots",
    description: "Captured stunning food photography that elevated brand perception and drove engagement.",
    metrics: [
      { label: "Content Pieces", value: "50+" },
      { label: "Social Shares", value: "+200%" },
    ],
    tags: ["Photography", "Creative Shoot", "Food & Beverage"],
  },
  {
    id: "baozi-shoot",
    title: "Social Media Management for Baozi Momos",
    client: "Baozi Momos",
    category: "Social",
    description: "Built a consistent social media presence that grew followers and drove customer engagement.",
    metrics: [
      { label: "Followers", value: "+320%" },
      { label: "Engagement", value: "+180%" },
    ],
    tags: ["Social Media", "Content Creation", "Community Building"],
  },
  {
    id: "spice-tribe-shopify",
    title: "End-to-End Branding for The Spice Tribe",
    client: "The Spice Tribe",
    category: "Shopify",
    description: "Created a complete brand identity and e-commerce experience from scratch.",
    metrics: [
      { label: "Conversion Rate", value: "3.8%" },
      { label: "Revenue", value: "+400%" },
    ],
    tags: ["Branding", "E-commerce", "Shopify"],
  },
];
