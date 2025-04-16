// ServiceData.ts

// import { image } from "framer-motion/client";

// Type for a single service
export type Service = {
  id: number;
  title: string;
  slug: string;
  services: string[];
  description: string;
  src: string;
};

// Type for a stat (What We Have Done section)
export type Stat = {
  id: number;
  value: string;
  label: string;
};

// Type for a logo (Clients and News sections)
export type Logo = {
  id: number;
  name: string;
  src: string;
};

// Type for the Hero section
export type HeroData = {
  title: string;
  subtitle: string;
  buttonText: string;
};

// Type for the Partner section
export type PartnerData = {
  title: string;
  subtitle: string;
};

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Branding",
    slug: "branding",
    services: ["Logo Design", "Brand Identity", "Brand Strategy"],
    src: "/work.mp4",
    description:
    "Build a strong and memorable brand identity with our comprehensive branding services. From logo design to crafting a cohesive brand strategy, we ensure your brand stands out and resonates with your target audience.",
  },
  {
    id: 2,
    title: "Web Design",
    slug: "web-design",
    services: ["UI/UX Design", "Responsive Design", "Website Redesign"],
    src: "/work.mp4",
    description:
    "Create stunning and user-friendly websites that captivate your audience. Our web design services focus on delivering exceptional user experiences and visually appealing designs tailored to your business needs.",
  },
  {
    id: 3,
    title: "App Design",
    slug: "app-design",
    src: "/work.mp4",
    services: ["Mobile App UI/UX", "Prototyping", "Cross-Platform Design"],
    description:
    "Design intuitive and engaging mobile applications that provide seamless user experiences. Our app design services ensure your app stands out in a competitive market with innovative and user-centric designs.",
  },
  {
    id: 4,
    title: "2D Illustration",
    src: "/work.mp4",
    slug: "2d-illustration",
    services: ["Custom Illustrations", "Character Design", "Infographics"],
    description:
    "Bring your ideas to life with our 2D illustration services. From custom illustrations to detailed infographics, we create visuals that effectively communicate your message and captivate your audience.",
  },
  {
    id: 5,
    src: "/work.mp4",
    title: "Motion Graphics",
    slug: "motion-graphics",
    services: ["Animated Videos", "Explainer Videos", "Title Sequences"],
    description:
    "Enhance your storytelling with dynamic motion graphics. Our services include creating animated videos and explainer videos that engage your audience and convey your message effectively.",
  },
  {
    id: 6,
    title: "Graphic Design",
    slug: "graphic-design",
    src: "/work.mp4",
    services: ["Print Design", "Digital Creatives", "Marketing Collaterals"],
    description:
    "Elevate your brand with our graphic design services. From print materials to digital creatives, we design visually compelling assets that align with your brand and marketing goals.",
  },
  {
    id: 7,
    title: "Development",
    slug: "development",
    src: "/work.mp4",
    services: ["Web Development", "App Development", "Custom Solutions"],
    description:
      "Transform your ideas into reality with our development services. We specialize in web and app development, delivering custom solutions that meet your business requirements and drive growth.",
  },
];

// Stats data (for What We Have Done section)
export const statsData: Stat[] = [
  { id: 1, value: "150+", label: "Clients\nFeaturing some of the biggest players in their domain" },
  { id: 2, value: "1000+", label: "Films\nShot across the globe and counting. Includes 2d explainer videos and videos for social media" },
  { id: 3, value: "10000+", label: "Creatives\nAcross website, social media, videos and digital creatives" },
];

// Client logos (for Our Recent Clients section)
export const clientLogos: Logo[] = [
  { id: 1, name: "Dabur", src: "/client-l-1.svg" },
  { id: 2, name: "Aditya Birla", src: "/client-l-1.svg" },
  { id: 3, name: "Solus", src: "/client-l-1.svg" },
  { id: 4, name: "Canadian Solar", src: "/client-l-1.svg" },
  { id: 5, name: "Apex", src: "/client-l-1.svg" },
  { id: 6, name: "CutBrand", src: "/client-l-1.svg" },
  { id: 7, name: "IndusInd Bank", src: "/client-l-1.svg" },
  { id: 8, name: "Jetex", src: "/client-l-1.svg" },
];

// News logos (for We Are in the News section)
export const newsLogos: Logo[] = [
  { id: 1, name: "Media Release", src: "/logos/media-release.png" },
  { id: 2, name: "Business Info", src: "/logos/business-info.png" },
  { id: 3, name: "Startup", src: "/logos/startup.png" },
  { id: 4, name: "Media Brief", src: "/logos/media-brief.png" },
  { id: 5, name: "Social", src: "/logos/social.png" },
  { id: 6, name: "Apex", src: "/logos/apex.png" },
  { id: 7, name: "Flags", src: "/logos/flags.png" },
];

// Hero section data
export const heroData: HeroData = {
  title: "Digital Solutions for Business Success",
  subtitle: "We provide innovative solutions to expand your business. A suite of tools for your business.",
  buttonText: "Watch the Agency Story",
};

// Partner section data
export const partnerData: PartnerData = {
  title: "Partner with Reverse Thought for inspiring design solutions",
  subtitle: "A digital agency that will make you proud",
};