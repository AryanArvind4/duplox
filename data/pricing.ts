import { PricingPlan } from "./types";

export const pricingPlans: PricingPlan[] = [
  {
    id: "launch-x",
    name: "LAUNCH X",
    price: 36999,
    currency: "₹",
    goal: "Build a strong online presence & brand trust",
    features: [
      "Social Media Management (Instagram)",
      "12–15 posts/month (static, carousel, reels)",
      "Caption writing + hashtag & engagement strategy",
      "Basic Product Shoot (up to 12 SKUs – studio shots)",
      "1 Paid Ad Campaign (Brand Awareness or Traffic)",
      "Ad budget planning & optimization",
      "1 Creative campaign idea/month",
    ],
  },
  {
    id: "scale-x",
    name: "SCALE X",
    price: 59999,
    currency: "₹",
    goal: "Drive awareness + conversions through content & performance",
    highlighted: true,
    features: [
      "Everything in Launch X",
      "Shopify Store Setup (home + 3–5 product pages + checkout)",
      "2 Ad Campaigns/month (Awareness + Conversions)",
      "Additional marketing add-ons (1 or 2)",
      "Monthly analytics & insights report",
      "Advanced reporting & monthly performance dashboard",
      "Priority creative support",
    ],
  },
];

