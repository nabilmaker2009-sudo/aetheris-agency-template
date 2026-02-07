export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    slug: "digital-strategy",
    title: "Brand & Narrative Strategy",
    description: "We position you so the market understands your premium value in seconds.",
    icon: "Navigation",
    features: [
      "Positioning & market mapping",
      "Category story architecture",
      "Offer and pricing clarity",
      "Strategic launch messaging",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "Cinematic UI/UX",
    description: "Visual systems engineered to feel luxurious, clear, and conversion-ready.",
    icon: "LayoutDashboard",
    features: [
      "Art direction & concepting",
      "Experience architecture",
      "Interaction + motion design",
      "Design systems at scale",
    ],
  },
  {
    slug: "full-stack-development",
    title: "Engineering & Build",
    description: "Launch-ready Next.js builds with performance, accessibility, and polish.",
    icon: "Terminal",
    features: [
      "Next.js architecture",
      "Component systems",
      "CMS or API integration",
      "Vercel-ready deployment",
    ],
  },
  {
    slug: "performance-optimization",
    title: "Performance & Scale",
    description: "High-performance delivery that keeps your brand feeling instant.",
    icon: "Rocket",
    features: [
      "Core Web Vitals tuning",
      "Asset optimization",
      "Global delivery strategy",
      "Continuous monitoring",
    ],
  },
  {
    slug: "ai-integration",
    title: "AI-Ready Experiences",
    description: "Integrate intelligence where it elevates outcomes, not noise.",
    icon: "Cpu",
    features: [
      "AI product strategy",
      "Personalization frameworks",
      "Workflow automation",
      "Responsible integration",
    ],
  },
  {
    slug: "cyber-security",
    title: "Security & Compliance",
    description: "Safeguards that protect trust while enabling growth.",
    icon: "ShieldPlus",
    features: [
      "Security audits",
      "Access governance",
      "Compliance guidance",
      "Incident readiness",
    ],
  },
];
