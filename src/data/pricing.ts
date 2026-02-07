export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  featured: boolean;
  badge?: string;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Foundation",
    price: "From $18k",
    description: "Launch-ready identity, messaging, and a conversion-first site.",
    features: [
      "Strategic discovery sprint",
      "High-end visual system",
      "5-7 cinematic pages",
      "Launch & analytics setup",
    ],
    cta: "Book a Call",
    featured: false,
  },
  {
    name: "Signature",
    price: "From $45k",
    description: "Our flagship build for ambitious brands ready to scale.",
    features: [
      "Narrative & positioning system",
      "Full site ecosystem (9-12 pages)",
      "Custom motion direction",
      "Conversion architecture",
      "Priority launch support",
    ],
    cta: "Request Proposal",
    featured: true,
    badge: "SIGNATURE",
  },
  {
    name: "Immersive",
    price: "Custom",
    description: "For global teams and venture-backed companies.",
    features: [
      "Multi-market rollout",
      "Product + marketing integration",
      "Enterprise compliance setup",
      "Ongoing optimization",
      "Dedicated strategy team",
    ],
    cta: "Talk to Us",
    featured: false,
  },
];
