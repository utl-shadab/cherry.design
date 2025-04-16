// components/HeroSection.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play } from "lucide-react";
import { heroData, HeroData } from "@/data/ServiceData";
import StoryModal from "./StoryModal";
import Image from "next/image";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Create a GSAP Timeline for orchestrated animations
    const tl = gsap.timeline();

    // Animate the title words with a built-in ease
    const titleWords = titleRef.current?.querySelectorAll("span");
    if (titleWords) {
      tl.fromTo(
        titleWords,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "back.out(1.2)",
        },
        0
      );
    }

    // Animate the subtitle with a built-in ease
    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.in",
      },
      "-=0.8"
    );

    // Animate the button with a built-in ease
    tl.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
      },
      "-=0.5"
    );

    // Animate the image (fade in and scale up)
    tl.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power4.out",
      },
      "-=1"
    );

    // Infinite spinning animation for the image
    gsap.to(imageRef.current, {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: "none",
    });

    // Scroll-triggered rotation speed increase
    gsap.to(imageRef.current, {
      rotation: 360,
      duration: 5,
      repeat: -1,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Clean up animations on unmount
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent the Link from navigating
    setIsModalOpen(true);
  };

  return (
    <section
      ref={heroRef}
      className="relative bg-black text-white mt-10 md:mt-2 py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen overflow-hidden"
    >
      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div ref={textRef} className=" text-start md:text-center lg:text-left lg:w-1/2">
          <h1 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {heroData.title}
          </h1>
          <p ref={subtitleRef} className="text-lg sm:text-xl text-gray-300 mb-8">
            {heroData.subtitle}
          </p>
        
            <button
              ref={buttonRef}
              onClick={handleOpenModal}
              className="flex items-center gap-2 bg-transparent border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
            >
              <Play size={16} className="fill-current" />
              {heroData.buttonText}
            </button>
        </div>

        {/* Spinning Image */}
        <div className="relative lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            ref={imageRef}
            src="/service.png"
            alt="Spinning Image"
            className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-full"
          />
        </div>
      </div>

      {/* Story Modal */}
      <StoryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default HeroSection;