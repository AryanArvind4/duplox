export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image?: string;
}

export interface Client {
  id: string;
  name: string;
  logo?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  goal: string;
  features: string[];
  highlighted?: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: "Social" | "Ads" | "Shoots" | "Shopify";
  description: string;
  image?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  tags?: string[];
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
}

