
// Define HeroData interface
interface HeroData {
  heading: string;
  description: string;
  image: string;
}
export type InnerService = {
  id: number;
  title: string;
  slug: string;
  services: string[];
  description: string;
};

export interface ExpertiseItem {
  title: string;
  description?: string;
}
// Update Solution interface to include cards with explicit types
export interface ServiceDetails {
  id: number;
  title: string;
  slug: string;
  heroData: HeroData;
  InnerService?: InnerService[];
  ExpertiseItem?: ExpertiseItem[];
  WhyChooseUsItem?:WhyChooseUsItem[];
}
export type WhyChooseUsItem = {
  title: string;
  paragraph: string;
  points: string[];
};

export const ServiceDetailsData: ServiceDetails[] = [
  {
    id: 1,
    title: "Branding",
    slug: "branding",
    heroData: {
      heading: "Boost your eCommerce sales",
      description: "We help you drive sales with advanced digital solutions for eCommerce businesses.",
      image: "",
    },
    InnerService:[
      {
        id: 1,
        title: "Branding",
        slug: "branding",
        services: ["Logo Design", "Brand Identity", "Brand Strategy"],
        description:
          "Build a strong and memorable brand identity with our comprehensive branding services. From logo design to crafting a cohesive brand strategy, we ensure your brand stands out and resonates with your target audience.",
      },
      {
        id: 2,
        title: "Web Design",
        slug: "web-design",
        services: ["UI/UX Design", "Responsive Design", "Website Redesign"],
        description:
          "Create stunning and user-friendly websites that captivate your audience. Our web design services focus on delivering exceptional user experiences and visually appealing designs tailored to your business needs.",
      },
      {
        id: 3,
        title: "App Design",
        slug: "app-design",
        services: ["Mobile App UI/UX", "Prototyping", "Cross-Platform Design"],
        description:
          "Design intuitive and engaging mobile applications that provide seamless user experiences. Our app design services ensure your app stands out in a competitive market with innovative and user-centric designs.",
      },
      {
        id: 4,
        title: "2D Illustration",
        slug: "2d-illustration",
        services: ["Custom Illustrations", "Character Design", "Infographics"],
        description:
          "Bring your ideas to life with our 2D illustration services. From custom illustrations to detailed infographics, we create visuals that effectively communicate your message and captivate your audience.",
      },
      {
        id: 5,
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
        services: ["Print Design", "Digital Creatives", "Marketing Collaterals"],
        description:
          "Elevate your brand with our graphic design services. From print materials to digital creatives, we design visually compelling assets that align with your brand and marketing goals.",
      },
      {
        id: 7,
        title: "Development",
        slug: "development",
        services: ["Web Development", "App Development", "Custom Solutions"],
        description:
          "Transform your ideas into reality with our development services. We specialize in web and app development, delivering custom solutions that meet your business requirements and drive growth.",
      },
    ],
   
    ExpertiseItem: [
      {
        title: "Infographics sdsdsds",
        description:
          "Visualizing information requires not just creativity, but also a keen understanding of data and analysis.",
      },
      {
        title: "Emailers & Newsletters",
        description:
          "Engaging and well-designed emailers and newsletters that boost audience interaction.",
      },
      {
        title: "GIFs Creatives",
        description:
          "Eye-catching GIF animations to make your content more dynamic and engaging.",
      },
      {
        title: "WhatsApp Creatives",
        description:
          "Custom-designed creatives optimized for WhatsApp sharing and engagement.",
      },
      {
        title: "Logo & Stationery",
        description:
          "Distinctive logos and stationery designs that reflect your brand identity.",
      },
      {
        title: "Brochures & Flyers",
        description:
          "Professionally designed brochures and flyers that communicate your message effectively.",
      },
      {
        title: "Graphic Design",
        description:
          "Creative graphic design solutions for all your branding and marketing needs.",
      },
      {
        title: "Giveaway Kit Design",
        description:
          "Customized giveaway kits that leave a lasting impression on your audience.",
      },
      {
        title: "Outdoor Ads",
        description:
          "Bold and effective outdoor advertising solutions to maximize your brand visibility.",
      },
    ],
  WhyChooseUsItem: [
    {
      title: "Why Choose Us",
      paragraph: `In the realm of creative design, we've consistently shattered conventions and stretched the boundaries of creativity to bridge the gap between your vision and your audience's desires. Our creative design expertise incorporates interactive tools, compelling content, captivating visuals, and user-friendly interfaces, seamlessly fused with cutting-edge technologies such as Web Design and Development Tools, Typography and Font Tools, animation software, Animation Software, to craft immersive and visually stunning experiences that leave a lasting impression.`,
      points: [
        "Digital Illustration Tools",
        "Photography and Image Editing",
        "Project Management and Collaboration Tools",
        "Animation Software",
        "Video Editing Software",
        "Prototyping Tools",
        "Color Management Tools",
      ],
    },
  ]
  },
  {
    id: 2,
    title: "Web Designing",
    slug: "web-design",
    heroData: {
      heading: "Boost your eCommerce sales",
      description: "We help you drive sales with advanced digital solutions for eCommerce businesses.",
      image: "",
    },
    InnerService:[
      {
        id: 1,
        title: "hello",
        slug: "branding",
        services: ["Logo Design", "Brand Identity", "Brand Strategy"],
        description:
          "Build a strong and memorable brand identity with our comprehensive branding services. From logo design to crafting a cohesive brand strategy, we ensure your brand stands out and resonates with your target audience.",
      },
      {
        id: 2,
        title: "Web Design",
        slug: "web-design",
        services: ["UI/UX Design", "Responsive Design", "Website Redesign"],
        description:
          "Create stunning and user-friendly websites that captivate your audience. Our web design services focus on delivering exceptional user experiences and visually appealing designs tailored to your business needs.",
      },
      {
        id: 3,
        title: "App Design",
        slug: "app-design",
        services: ["Mobile App UI/UX", "Prototyping", "Cross-Platform Design"],
        description:
          "Design intuitive and engaging mobile applications that provide seamless user experiences. Our app design services ensure your app stands out in a competitive market with innovative and user-centric designs.",
      },
      {
        id: 4,
        title: "2D Illustration",
        slug: "2d-illustration",
        services: ["Custom Illustrations", "Character Design", "Infographics"],
        description:
          "Bring your ideas to life with our 2D illustration services. From custom illustrations to detailed infographics, we create visuals that effectively communicate your message and captivate your audience.",
      },
      {
        id: 5,
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
        services: ["Print Design", "Digital Creatives", "Marketing Collaterals"],
        description:
          "Elevate your brand with our graphic design services. From print materials to digital creatives, we design visually compelling assets that align with your brand and marketing goals.",
      },
      {
        id: 7,
        title: "Development",
        slug: "development",
        services: ["Web Development", "App Development", "Custom Solutions"],
        description:
          "Transform your ideas into reality with our development services. We specialize in web and app development, delivering custom solutions that meet your business requirements and drive growth.",
      },
    ],
   
    ExpertiseItem: [
      {
        title: "Infographicwjwhj",
        description:
          "Visualizing information requires not just creativity, but also a keen understanding of data and analysis.",
      },
      {
        title: "Emailers & Newsletters",
        description:
          "Engaging and well-designed emailers and newsletters that boost audience interaction.",
      },
      {
        title: "GIFs Creatives",
        description:
          "Eye-catching GIF animations to make your content more dynamic and engaging.",
      },
      {
        title: "WhatsApp Creatives",
        description:
          "Custom-designed creatives optimized for WhatsApp sharing and engagement.",
      },
      {
        title: "Logo & Stationery",
        description:
          "Distinctive logos and stationery designs that reflect your brand identity.",
      },
      {
        title: "Brochures & Flyers",
        description:
          "Professionally designed brochures and flyers that communicate your message effectively.",
      },
      {
        title: "Graphic Design",
        description:
          "Creative graphic design solutions for all your branding and marketing needs.",
      },
      {
        title: "Giveaway Kit Design",
        description:
          "Customized giveaway kits that leave a lasting impression on your audience.",
      },
      {
        title: "Outdoor Ads",
        description:
          "Bold and effective outdoor advertising solutions to maximize your brand visibility.",
      },
    ],
  WhyChooseUsItem: [
    {
      title: "Why Choose Us",
      paragraph: `In the realm of creative design, we've consistently shattered conventions and stretched the boundaries of creativity to bridge the gap between your vision and your audience's desires. Our creative design expertise incorporates interactive tools, compelling content, captivating visuals, and user-friendly interfaces, seamlessly fused with cutting-edge technologies such as Web Design and Development Tools, Typography and Font Tools, animation software, Animation Software, to craft immersive and visually stunning experiences that leave a lasting impression.`,
      points: [
        "Digital  Tools",
        "Photography and Image Editing",
        "Project Management and Collaboration Tools",
        "Animation Software",
        "Video Editing Software",
        "Prototyping Tools",
        "Color Management Tools",
      ],
    },
  ]
  },
  {
    id: 3,
    title: "App Design",
    slug: "app-design",
    heroData: {
      heading: "Boost your eCommerce sales",
      description: "We help you drive sales with advanced digital solutions for eCommerce businesses.",
      image: "",
    },
    InnerService:[
      {
        id: 1,
        title: "Branding",
        slug: "branding",
        services: ["Logo Design", "Brand Identity", "Brand Strategy"],
        description:
          "Build a strong and memorable brand identity with our comprehensive branding services. From logo design to crafting a cohesive brand strategy, we ensure your brand stands out and resonates with your target audience.",
      },
      {
        id: 2,
        title: "Web Design",
        slug: "web-design",
        services: ["UI/UX Design", "Responsive Design", "Website Redesign"],
        description:
          "Create stunning and user-friendly websites that captivate your audience. Our web design services focus on delivering exceptional user experiences and visually appealing designs tailored to your business needs.",
      },
      {
        id: 3,
        title: "App Design",
        slug: "app-design",
        services: ["Mobile App UI/UX", "Prototyping", "Cross-Platform Design"],
        description:
          "Design intuitive and engaging mobile applications that provide seamless user experiences. Our app design services ensure your app stands out in a competitive market with innovative and user-centric designs.",
      },
      {
        id: 4,
        title: "2D Illustration",
        slug: "2d-illustration",
        services: ["Custom Illustrations", "Character Design", "Infographics"],
        description:
          "Bring your ideas to life with our 2D illustration services. From custom illustrations to detailed infographics, we create visuals that effectively communicate your message and captivate your audience.",
      },
      {
        id: 5,
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
        services: ["Print Design", "Digital Creatives", "Marketing Collaterals"],
        description:
          "Elevate your brand with our graphic design services. From print materials to digital creatives, we design visually compelling assets that align with your brand and marketing goals.",
      },
      {
        id: 7,
        title: "Development",
        slug: "development",
        services: ["Web Development", "App Development", "Custom Solutions"],
        description:
          "Transform your ideas into reality with our development services. We specialize in web and app development, delivering custom solutions that meet your business requirements and drive growth.",
      },
    ],
   
    ExpertiseItem: [
      {
        title: "Infographics",
        description:
          "Visualizing information requires not just creativity, but also a keen understanding of data and analysis.",
      },
      {
        title: "Emailers & Newsletters",
        description:
          "Engaging and well-designed emailers and newsletters that boost audience interaction.",
      },
      {
        title: "GIFs Creatives",
        description:
          "Eye-catching GIF animations to make your content more dynamic and engaging.",
      },
      {
        title: "WhatsApp Creatives",
        description:
          "Custom-designed creatives optimized for WhatsApp sharing and engagement.",
      },
      {
        title: "Logo & Stationery",
        description:
          "Distinctive logos and stationery designs that reflect your brand identity.",
      },
      {
        title: "Brochures & Flyers",
        description:
          "Professionally designed brochures and flyers that communicate your message effectively.",
      },
      {
        title: "Graphic Design",
        description:
          "Creative graphic design solutions for all your branding and marketing needs.",
      },
      {
        title: "Giveaway Kit Design",
        description:
          "Customized giveaway kits that leave a lasting impression on your audience.",
      },
      {
        title: "Outdoor Ads",
        description:
          "Bold and effective outdoor advertising solutions to maximize your brand visibility.",
      },
    ],
  WhyChooseUsItem: [
    {
      title: "Why Choose Us",
      paragraph: `In the realm of creative design, we've consistently shattered conventions and stretched the boundaries of creativity to bridge the gap between your vision and your audience's desires. Our creative design expertise incorporates interactive tools, compelling content, captivating visuals, and user-friendly interfaces, seamlessly fused with cutting-edge technologies such as Web Design and Development Tools, Typography and Font Tools, animation software, Animation Software, to craft immersive and visually stunning experiences that leave a lasting impression.`,
      points: [
        "Digital Illustration Tools",
        "Photography and Image Editing",
        "Project Management and Collaboration Tools",
        "Animation Software",
        "Video Editing Software",
        "Prototyping Tools",
        "Color Management Tools",
      ],
    },
  ]
  },
  {
    id: 4,
    title: "2D Illustration",
    slug: "2d-illustration",
    heroData: {
      heading: "Boost your eCommerce sales",
      description: "We help you drive sales with advanced digital solutions for eCommerce businesses.",
      image: "",
    },
    InnerService:[
      {
        id: 1,
        title: "Branding",
        slug: "branding",
        services: ["Logo Design", "Brand Identity", "Brand Strategy"],
        description:
          "Build a strong and memorable brand identity with our comprehensive branding services. From logo design to crafting a cohesive brand strategy, we ensure your brand stands out and resonates with your target audience.",
      },
      {
        id: 2,
        title: "Web Design",
        slug: "web-design",
        services: ["UI/UX Design", "Responsive Design", "Website Redesign"],
        description:
          "Create stunning and user-friendly websites that captivate your audience. Our web design services focus on delivering exceptional user experiences and visually appealing designs tailored to your business needs.",
      },
      {
        id: 3,
        title: "App Design",
        slug: "app-design",
        services: ["Mobile App UI/UX", "Prototyping", "Cross-Platform Design"],
        description:
          "Design intuitive and engaging mobile applications that provide seamless user experiences. Our app design services ensure your app stands out in a competitive market with innovative and user-centric designs.",
      },
      {
        id: 4,
        title: "2D Illustration",
        slug: "2d-illustration",
        services: ["Custom Illustrations", "Character Design", "Infographics"],
        description:
          "Bring your ideas to life with our 2D illustration services. From custom illustrations to detailed infographics, we create visuals that effectively communicate your message and captivate your audience.",
      },
      {
        id: 5,
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
        services: ["Print Design", "Digital Creatives", "Marketing Collaterals"],
        description:
          "Elevate your brand with our graphic design services. From print materials to digital creatives, we design visually compelling assets that align with your brand and marketing goals.",
      },
      {
        id: 7,
        title: "Development",
        slug: "development",
        services: ["Web Development", "App Development", "Custom Solutions"],
        description:
          "Transform your ideas into reality with our development services. We specialize in web and app development, delivering custom solutions that meet your business requirements and drive growth.",
      },
    ],
   
    ExpertiseItem: [
      {
        title: "Infographics",
        description:
          "Visualizing information requires not just creativity, but also a keen understanding of data and analysis.",
      },
      {
        title: "Emailers & Newsletters",
        description:
          "Engaging and well-designed emailers and newsletters that boost audience interaction.",
      },
      {
        title: "GIFs Creatives",
        description:
          "Eye-catching GIF animations to make your content more dynamic and engaging.",
      },
      {
        title: "WhatsApp Creatives",
        description:
          "Custom-designed creatives optimized for WhatsApp sharing and engagement.",
      },
      {
        title: "Logo & Stationery",
        description:
          "Distinctive logos and stationery designs that reflect your brand identity.",
      },
      {
        title: "Brochures & Flyers",
        description:
          "Professionally designed brochures and flyers that communicate your message effectively.",
      },
      {
        title: "Graphic Design",
        description:
          "Creative graphic design solutions for all your branding and marketing needs.",
      },
      {
        title: "Giveaway Kit Design",
        description:
          "Customized giveaway kits that leave a lasting impression on your audience.",
      },
      {
        title: "Outdoor Ads",
        description:
          "Bold and effective outdoor advertising solutions to maximize your brand visibility.",
      },
    ],
  WhyChooseUsItem: [
    {
      title: "Why Choose Us",
      paragraph: `In the realm of creative design, we've consistently shattered conventions and stretched the boundaries of creativity to bridge the gap between your vision and your audience's desires. Our creative design expertise incorporates interactive tools, compelling content, captivating visuals, and user-friendly interfaces, seamlessly fused with cutting-edge technologies such as Web Design and Development Tools, Typography and Font Tools, animation software, Animation Software, to craft immersive and visually stunning experiences that leave a lasting impression.`,
      points: [
        "Digital Illustration Tools",
        "Photography and Image Editing",
        "Project Management and Collaboration Tools",
        "Animation Software",
        "Video Editing Software",
        "Prototyping Tools",
        "Color Management Tools",
      ],
    },
  ]
  },
  {
    id: 5,
    title: "Motion Graphics",
    slug: "motion-graphics",
    heroData: {
      heading: "Boost your eCommerce sales",
      description: "We help you drive sales with advanced digital solutions for eCommerce businesses.",
      image: "",
    },
    InnerService:[
      {
        id: 1,
        title: "Branding",
        slug: "branding",
        services: ["Logo Design", "Brand Identity", "Brand Strategy"],
        description:
          "Build a strong and memorable brand identity with our comprehensive branding services. From logo design to crafting a cohesive brand strategy, we ensure your brand stands out and resonates with your target audience.",
      },
      {
        id: 2,
        title: "Web Design",
        slug: "web-design",
        services: ["UI/UX Design", "Responsive Design", "Website Redesign"],
        description:
          "Create stunning and user-friendly websites that captivate your audience. Our web design services focus on delivering exceptional user experiences and visually appealing designs tailored to your business needs.",
      },
      {
        id: 3,
        title: "App Design",
        slug: "app-design",
        services: ["Mobile App UI/UX", "Prototyping", "Cross-Platform Design"],
        description:
          "Design intuitive and engaging mobile applications that provide seamless user experiences. Our app design services ensure your app stands out in a competitive market with innovative and user-centric designs.",
      },
      {
        id: 4,
        title: "2D Illustration",
        slug: "2d-illustration",
        services: ["Custom Illustrations", "Character Design", "Infographics"],
        description:
          "Bring your ideas to life with our 2D illustration services. From custom illustrations to detailed infographics, we create visuals that effectively communicate your message and captivate your audience.",
      },
      {
        id: 5,
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
        services: ["Print Design", "Digital Creatives", "Marketing Collaterals"],
        description:
          "Elevate your brand with our graphic design services. From print materials to digital creatives, we design visually compelling assets that align with your brand and marketing goals.",
      },
      {
        id: 7,
        title: "Development",
        slug: "development",
        services: ["Web Development", "App Development", "Custom Solutions"],
        description:
          "Transform your ideas into reality with our development services. We specialize in web and app development, delivering custom solutions that meet your business requirements and drive growth.",
      },
    ],
   
    ExpertiseItem: [
      {
        title: "Infographics",
        description:
          "Visualizing information requires not just creativity, but also a keen understanding of data and analysis.",
      },
      {
        title: "Emailers & Newsletters",
        description:
          "Engaging and well-designed emailers and newsletters that boost audience interaction.",
      },
      {
        title: "GIFs Creatives",
        description:
          "Eye-catching GIF animations to make your content more dynamic and engaging.",
      },
      {
        title: "WhatsApp Creatives",
        description:
          "Custom-designed creatives optimized for WhatsApp sharing and engagement.",
      },
      {
        title: "Logo & Stationery",
        description:
          "Distinctive logos and stationery designs that reflect your brand identity.",
      },
      {
        title: "Brochures & Flyers",
        description:
          "Professionally designed brochures and flyers that communicate your message effectively.",
      },
      {
        title: "Graphic Design",
        description:
          "Creative graphic design solutions for all your branding and marketing needs.",
      },
      {
        title: "Giveaway Kit Design",
        description:
          "Customized giveaway kits that leave a lasting impression on your audience.",
      },
      {
        title: "Outdoor Ads",
        description:
          "Bold and effective outdoor advertising solutions to maximize your brand visibility.",
      },
    ],
  WhyChooseUsItem: [
    {
      title: "Why Choose Us",
      paragraph: `In the realm of creative design, we've consistently shattered conventions and stretched the boundaries of creativity to bridge the gap between your vision and your audience's desires. Our creative design expertise incorporates interactive tools, compelling content, captivating visuals, and user-friendly interfaces, seamlessly fused with cutting-edge technologies such as Web Design and Development Tools, Typography and Font Tools, animation software, Animation Software, to craft immersive and visually stunning experiences that leave a lasting impression.`,
      points: [
        "Digital Illustration Tools",
        "Photography and Image Editing",
        "Project Management and Collaboration Tools",
        "Animation Software",
        "Video Editing Software",
        "Prototyping Tools",
        "Color Management Tools",
      ],
    },
  ]
  },
  {
    id: 6,
    title: "Graphic Design",
    slug: "graphic-design",
    heroData: {
      heading: "Boost your eCommerce sales",
      description: "We help you drive sales with advanced digital solutions for eCommerce businesses.",
      image: "",
    },
    InnerService:[
      {
        id: 1,
        title: "Branding",
        slug: "branding",
        services: ["Logo Design", "Brand Identity", "Brand Strategy"],
        description:
          "Build a strong and memorable brand identity with our comprehensive branding services. From logo design to crafting a cohesive brand strategy, we ensure your brand stands out and resonates with your target audience.",
      },
      {
        id: 2,
        title: "Web Design",
        slug: "web-design",
        services: ["UI/UX Design", "Responsive Design", "Website Redesign"],
        description:
          "Create stunning and user-friendly websites that captivate your audience. Our web design services focus on delivering exceptional user experiences and visually appealing designs tailored to your business needs.",
      },
      {
        id: 3,
        title: "App Design",
        slug: "app-design",
        services: ["Mobile App UI/UX", "Prototyping", "Cross-Platform Design"],
        description:
          "Design intuitive and engaging mobile applications that provide seamless user experiences. Our app design services ensure your app stands out in a competitive market with innovative and user-centric designs.",
      },
      {
        id: 4,
        title: "2D Illustration",
        slug: "2d-illustration",
        services: ["Custom Illustrations", "Character Design", "Infographics"],
        description:
          "Bring your ideas to life with our 2D illustration services. From custom illustrations to detailed infographics, we create visuals that effectively communicate your message and captivate your audience.",
      },
      {
        id: 5,
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
        services: ["Print Design", "Digital Creatives", "Marketing Collaterals"],
        description:
          "Elevate your brand with our graphic design services. From print materials to digital creatives, we design visually compelling assets that align with your brand and marketing goals.",
      },
      {
        id: 7,
        title: "Development",
        slug: "development",
        services: ["Web Development", "App Development", "Custom Solutions"],
        description:
          "Transform your ideas into reality with our development services. We specialize in web and app development, delivering custom solutions that meet your business requirements and drive growth.",
      },
    ],
   
    ExpertiseItem: [
      {
        title: "Infographics",
        description:
          "Visualizing information requires not just creativity, but also a keen understanding of data and analysis.",
      },
      {
        title: "Emailers & Newsletters",
        description:
          "Engaging and well-designed emailers and newsletters that boost audience interaction.",
      },
      {
        title: "GIFs Creatives",
        description:
          "Eye-catching GIF animations to make your content more dynamic and engaging.",
      },
      {
        title: "WhatsApp Creatives",
        description:
          "Custom-designed creatives optimized for WhatsApp sharing and engagement.",
      },
      {
        title: "Logo & Stationery",
        description:
          "Distinctive logos and stationery designs that reflect your brand identity.",
      },
      {
        title: "Brochures & Flyers",
        description:
          "Professionally designed brochures and flyers that communicate your message effectively.",
      },
      {
        title: "Graphic Design",
        description:
          "Creative graphic design solutions for all your branding and marketing needs.",
      },
      {
        title: "Giveaway Kit Design",
        description:
          "Customized giveaway kits that leave a lasting impression on your audience.",
      },
      {
        title: "Outdoor Ads",
        description:
          "Bold and effective outdoor advertising solutions to maximize your brand visibility.",
      },
    ],
  WhyChooseUsItem: [
    {
      title: "Why Choose Us",
      paragraph: `In the realm of creative design, we've consistently shattered conventions and stretched the boundaries of creativity to bridge the gap between your vision and your audience's desires. Our creative design expertise incorporates interactive tools, compelling content, captivating visuals, and user-friendly interfaces, seamlessly fused with cutting-edge technologies such as Web Design and Development Tools, Typography and Font Tools, animation software, Animation Software, to craft immersive and visually stunning experiences that leave a lasting impression.`,
      points: [
        "Digital Illustration Tools",
        "Photography and Image Editing",
        "Project Management and Collaboration Tools",
        "Animation Software",
        "Video Editing Software",
        "Prototyping Tools",
        "Color Management Tools",
      ],
    },
  ]
  },
  {
    id: 7,
    title: "Development",
    slug: "development",
    heroData: {
      heading: "Boost your eCommerce sales",
      description: "We help you drive sales with advanced digital solutions for eCommerce businesses.",
      image: "",
    },
    InnerService:[
      {
        id: 1,
        title: "Branding",
        slug: "branding",
        services: ["Logo Design", "Brand Identity", "Brand Strategy"],
        description:
          "Build a strong and memorable brand identity with our comprehensive branding services. From logo design to crafting a cohesive brand strategy, we ensure your brand stands out and resonates with your target audience.",
      },
      {
        id: 2,
        title: "Web Design",
        slug: "web-design",
        services: ["UI/UX Design", "Responsive Design", "Website Redesign"],
        description:
          "Create stunning and user-friendly websites that captivate your audience. Our web design services focus on delivering exceptional user experiences and visually appealing designs tailored to your business needs.",
      },
      {
        id: 3,
        title: "App Design",
        slug: "app-design",
        services: ["Mobile App UI/UX", "Prototyping", "Cross-Platform Design"],
        description:
          "Design intuitive and engaging mobile applications that provide seamless user experiences. Our app design services ensure your app stands out in a competitive market with innovative and user-centric designs.",
      },
      {
        id: 4,
        title: "2D Illustration",
        slug: "2d-illustration",
        services: ["Custom Illustrations", "Character Design", "Infographics"],
        description:
          "Bring your ideas to life with our 2D illustration services. From custom illustrations to detailed infographics, we create visuals that effectively communicate your message and captivate your audience.",
      },
      {
        id: 5,
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
        services: ["Print Design", "Digital Creatives", "Marketing Collaterals"],
        description:
          "Elevate your brand with our graphic design services. From print materials to digital creatives, we design visually compelling assets that align with your brand and marketing goals.",
      },
      {
        id: 7,
        title: "Development",
        slug: "development",
        services: ["Web Development", "App Development", "Custom Solutions"],
        description:
          "Transform your ideas into reality with our development services. We specialize in web and app development, delivering custom solutions that meet your business requirements and drive growth.",
      },
    ],
   
    ExpertiseItem: [
      {
        title: "Infographics",
        description:
          "Visualizing information requires not just creativity, but also a keen understanding of data and analysis.",
      },
      {
        title: "Emailers & Newsletters",
        description:
          "Engaging and well-designed emailers and newsletters that boost audience interaction.",
      },
      {
        title: "GIFs Creatives",
        description:
          "Eye-catching GIF animations to make your content more dynamic and engaging.",
      },
      {
        title: "WhatsApp Creatives",
        description:
          "Custom-designed creatives optimized for WhatsApp sharing and engagement.",
      },
      {
        title: "Logo & Stationery",
        description:
          "Distinctive logos and stationery designs that reflect your brand identity.",
      },
      {
        title: "Brochures & Flyers",
        description:
          "Professionally designed brochures and flyers that communicate your message effectively.",
      },
      {
        title: "Graphic Design",
        description:
          "Creative graphic design solutions for all your branding and marketing needs.",
      },
      {
        title: "Giveaway Kit Design",
        description:
          "Customized giveaway kits that leave a lasting impression on your audience.",
      },
      {
        title: "Outdoor Ads",
        description:
          "Bold and effective outdoor advertising solutions to maximize your brand visibility.",
      },
    ],
  WhyChooseUsItem: [
    {
      title: "Why Choose Us",
      paragraph: `In the realm of creative design, we've consistently shattered conventions and stretched the boundaries of creativity to bridge the gap between your vision and your audience's desires. Our creative design expertise incorporates interactive tools, compelling content, captivating visuals, and user-friendly interfaces, seamlessly fused with cutting-edge technologies such as Web Design and Development Tools, Typography and Font Tools, animation software, Animation Software, to craft immersive and visually stunning experiences that leave a lasting impression.`,
      points: [
        "Digital Illustration Tools",
        "Photography and Image Editing",
        "Project Management and Collaboration Tools",
        "Animation Software",
        "Video Editing Software",
        "Prototyping Tools",
        "Color Management Tools",
      ],
    },
  ]
  },
  
];

export default ServiceDetailsData;
