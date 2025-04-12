// WorkData.ts
export interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    link: string;
    details: {
      hero: {
        title: string;
        tags: { label: string; value: string }[];
      };
      overview: {
        title: string;
        description: string;
        link: string;
        MainImage: string;
      };
      branding: {
        logo: string;
        colors: {  color: string }[];
        typography: string;
      };
      projectBackground: {
        title: string;
        description: string;
      };
      images: string[];
      challenge: {
        title: string;
        description: string;
      };
      solution: {
        title: string;
        description: string;
      };
      additionalImages: string[];
    };
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "Hvoigeia",
      description: "Transforming the future of medicine with personalized, precise, and accessible healthcare solutions.",
      category: "Health Technology",
      image: "https://cdn.sanity.io/images/60a2bs0u/production/c73f7b5c9c68ab66c7742d22bca82da058cf2dc7-4000x2445.png?w=1920&q=100&fit=clip&auto=format",
      link: "/projects/hvoigeia",
      details: {
        hero: {
          title: "Personalized, precise, and accessible future of medicine",
          tags: [
            { label: "Type", value: "Collective Project" },
            { label: "Sector", value: "Health Technology" },
            { label: "Timeline", value: "5 Month" },
            { label: "Service", value: "Branding, Web Design, Product Design" },
          ],
        },
        overview: {
          title: "Transforming Healthcare",
          description:
            "Hvoigeia holds the potential to revolutionize healthcare delivery, making it more personalized, precise, collaborative, and accessible with an application that redefines the way users manage their health, ensuring a seamless and efficient experience.",
          link: "https://hvoigeia.com",
          MainImage: "/sample.avif",
        },
        branding: {
          logo: "/rt-logo.svg",
          colors: [
            {  color: "#2E5E4E" },
            {  color: "#4A8A7B" },
            {  color: "#66B6A2" },
          ],
          typography: "/sample.avif",
        },
        projectBackground: {
          title: "Project Background",
          description:
            "Many health-tech platforms struggle with overcomplicated personalization features, often leaving users feeling overwhelmed or underinformed. Hvoigeia aims to simplify this process by offering a user-friendly platform that integrates health data, provides personalized insights, and fosters collaboration between patients and healthcare providers.",
        },
        images: [
          "/sample.avif",
          "/sample.avif",
          "/sample.avif",
        ],
        challenge: {
          title: "The Challenge",
          description:
            "Hvoigeia needed to create a platform that caters to diverse user needs while maintaining simplicity. Balancing complex health data with an intuitive user experience was a key challenge, alongside ensuring accessibility for users with varying health literacy levels.",
        },
        solution: {
          title: "The Solution",
          description:
            "We designed a clean, user-centric platform that integrates health data seamlessly, offers personalized recommendations, and ensures accessibility through intuitive design principles. The platform empowers users to manage their health effectively while fostering collaboration with healthcare providers.",
        },
        additionalImages: [
          "/sample.avif",
        ],
      },
    },
    {
      id: 2,
      title: "Tequila 125",
      description: "Creating an homage to the agave tequila heritage and those who are dedicated to producing one of the world’s most unique spirits.",
      category: "Branding",
      image: "https://cdn.sanity.io/images/60a2bs0u/production/c73f7b5c9c68ab66c7742d22bca82da058cf2dc7-4000x2445.png?w=1920&q=100&fit=clip&auto=format",
      link: "/projects/tequila-125",
      details: {
        hero: {
          title: "Celebrating Tequila Heritage",
          tags: [
            { label: "Type", value: "Branding Project" },
            { label: "Sector", value: "Beverages" },
            { label: "Timeline", value: "3 Month" },
            { label: "Service", value: "Branding, Packaging Design" },
          ],
        },
        overview: {
          title: "Honoring Tradition",
          description: "The future of medicine holds the potential to revolutionize healthcare delivery, making it more personalized, precise, and accessible. With this philosophy in mind, our team collaborating to craft an application that redefines the way users manage their health, ensuring a seamless and efficient experience.",
          link: "https://tequila125.com",
          MainImage: "/sample.avif",
        },
        branding: {
            logo: "/rt-logo.svg",
          colors: [
            {  color: "#D4AF37" },
            {  color: "#000000" },
            {  color: "#BC2938" },
          ],
          typography: "/sample.avif",
        },
        projectBackground: {
          title: "Project Background",
          description: "Many existing health management platforms struggle with integrating advanced personalization features without overwhelming users. Users often face difficulty in understanding complex health data or receiving actionable insights that cater specifically to their unique needs. This creates a gap between the availability of medical advancements and their effective utilization in daily health management. Heigeia’s application has set a new standard in personalized healthcare, enabling users to take charge of their health with confidence. By addressing individual needs and preferences, the platform promotes a more holistic approach to wellness. Early user feedback highlights increased engagement, improved health outcomes, and a sense of empowerment among users.",
        },
        images: [
          "/sample.avif",
          "/sample.avif",
          "/sample.avif",
        ],
        challenge: {
          title: "The Challenge",
          description: "The healthcare industry faces a significant challenge in delivering personalized care that caters to the diverse needs of individuals. Existing solutions often lack the precision and adaptability needed to address unique genetic, environmental, and lifestyle factors. Heigeia’s vision was to bridge this gap, creating a platform that empowers users with tailored health insights while maintaining user-friendliness and accessibility.",
        },
        solution: {
          title: "The Solution",
          description: "Hatypo Studio worked closely with Heigeia to design an application that addresses these challenges head-on. By leveraging state-of-the-art algorithms and user-friendly design principles, we developed a platform that seamlessly combines advanced personalization with accessibility. The solution includes tailored health recommendations, an intuitive interface, and actionable insights to help users make informed decisions about their well-being.",
        },
        additionalImages: [
          "/sample.avif",
        ],
      },
    },
    {
      id: 3,
      title: "Havaianas",
      description: "Taking the free-spirited essence of Havaianas worldwide.",
      category: "Campaigns",
      image: "https://cdn.sanity.io/images/60a2bs0u/production/c73f7b5c9c68ab66c7742d22bca82da058cf2dc7-4000x2445.png?w=1920&q=100&fit=clip&auto=format",
      link: "/projects/havaianas",
      details: {
        hero: {
          title: "Global Campaign for Havaianas",
          tags: [
            { label: "Type", value: "Marketing Campaign" },
            { label: "Sector", value: "Fashion" },
            { label: "Timeline", value: "4 Month" },
            { label: "Service", value: "Campaign Design, Digital Marketing" },
          ],
        },
        overview: {
          title: "Spreading Joy Worldwide",
          description: "A global campaign to bring the vibrant spirit of Havaianas to the world.",
          link: "https://havaianas.com",
          MainImage: "/sample.avif",
        },
        branding: {
          logo: "/rt-logo.svg",
          colors: [
            {  color: "#FFC107" },
            {  color: "#0288D1" },
          ],
          typography: "/sample.avif",
        },
        projectBackground: {
          title: "Project Background",
          description: "Havaianas wanted to expand its global presence with a vibrant campaign.",
        },
        images: [
          "/sample.avif",
          "/sample.avif",
          "/sample.avif",
        ],
        challenge: {
          title: "The Challenge",
          description: "Creating a campaign that resonates with a global audience.",
        },
        solution: {
          title: "The Solution",
          description: "We designed a colorful and engaging campaign for Havaianas.",
        },
        additionalImages: [
            "/sample.avif",
          ],
      },
    },
    {
      id: 4,
      title: "TechNova",
      description: "Innovating the future with cutting-edge technology.",
      category: "Technology",
      image: "https://cdn.sanity.io/images/60a2bs0u/production/c73f7b5c9c68ab66c7742d22bca82da058cf2dc7-4000x2445.png?w=1920&q=100&fit=clip&auto=format",
      link: "/projects/technova",
      details: {
        hero: {
          title: "Innovating the Future",
          tags: [
            { label: "Type", value: "Tech Project" },
            { label: "Sector", value: "Technology" },
            { label: "Timeline", value: "6 Month" },
            { label: "Service", value: "Product Design, Development" },
          ],
        },
        overview: {
          title: "Advancing Technology",
          description: "TechNova aims to push the boundaries of innovation.",
          link: "https://technova.com",
          MainImage: "/sample.avif",
        },
        branding: {
          logo: "/rt-logo.svg",
          colors: [
            {  color: "#0288D1" },
            {  color: "#000000" },
          ],
          typography: "/sample.avif",
        },
        projectBackground: {
          title: "Project Background",
          description: "TechNova focused on creating cutting-edge tech solutions.",
        },
        images: [
          "/sample.avif",
          "/sample.avif",
          "/sample.avif",
        ],
        challenge: {
          title: "The Challenge",
          description: "Developing innovative technology that is user-friendly.",
        },
        solution: {
          title: "The Solution",
          description: "We created a user-centric tech solution for TechNova.",
        },
        additionalImages: [
          "/sample.avif",
        ],
      },
    },
    {
      id: 5,
      title: "EcoVision",
      description: "Sustainable solutions for a greener tomorrow.",
      category: "Environment",
      image: "https://cdn.sanity.io/images/60a2bs0u/production/c73f7b5c9c68ab66c7742d22bca82da058cf2dc7-4000x2445.png?w=1920&q=100&fit=clip&auto=format",
      link: "/projects/ecovision",
      details: {
        hero: {
          title: "Sustainable Future",
          tags: [
            { label: "Type", value: "Environmental Project" },
            { label: "Sector", value: "Sustainability" },
            { label: "Timeline", value: "5 Month" },
            { label: "Service", value: "Branding, Web Design" },
          ],
        },
        overview: {
          title: "Green Solutions",
          description: "EcoVision focuses on sustainable practices for a better planet.",
          link: "https://ecovision.com",
          MainImage: "/sample.avif",
        },
        branding: {
          logo: "/rt-logo.svg",
          colors: [
            {  color: "#4CAF50" },
            { color: "#FFFFFF" },
          ],
          typography: "/sample.avif",
        },
        projectBackground: {
          title: "Project Background",
          description: "EcoVision aimed to promote sustainability through design.",
        },
        images: [
          "/sample.avif",
          "/sample.avif",
          "/sample.avif",
        ],
        challenge: {
          title: "The Challenge",
          description: "Creating a brand that promotes sustainability effectively.",
        },
        solution: {
          title: "The Solution",
          description: "We designed a sustainable brand identity for EcoVision.",
        },
        additionalImages: [
          "/sample.avif",
        ],
      },
    },
  ];