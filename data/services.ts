import { Service } from "./types";

export const services: Service[] = [
  {
    id: "social-content",
    title: "Content + Social",
    description: "Build a strong presence with data-driven content that resonates and converts.",
    icon: "📱",
    features: [
      "Social Media Management (Instagram)",
      "12-15 posts/month (static, carousel, reels)",
      "Caption writing + hashtag & engagement strategy",
      "Product shoots (up to 12 SKUs)",
      "1 Creative campaign idea/month",
    ],
  },
  {
    id: "performance-ads",
    title: "Performance Ads",
    description: "Drive awareness and conversions with optimized ad campaigns across platforms.",
    icon: "🎯",
    features: [
      "Paid Ad Campaigns (Brand Awareness + Conversions)",
      "Ad budget planning & optimization",
      "A/B testing and performance tracking",
      "Monthly analytics & insights report",
      "Advanced reporting dashboard",
    ],
  },
  {
    id: "web-shopify",
    title: "Shopify / Web Experiences",
    description: "Create high-converting digital experiences that turn visitors into customers.",
    icon: "🛒",
    features: [
      "Shopify Store Setup",
      "Home + 3-5 product pages + checkout",
      "Mobile-optimized design",
      "Payment gateway integration",
      "SEO optimization",
    ],
  },
];

