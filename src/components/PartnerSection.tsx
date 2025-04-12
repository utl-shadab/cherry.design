// components/PartnerSection.tsx
"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { partnerData, PartnerData } from "@/data/ServiceData";

gsap.registerPlugin(ScrollTrigger);

const PartnerSection = () => {
  const partnerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const leftBubblesRef = useRef<HTMLDivElement>(null);
  const rightBubblesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a GSAP timeline for staggered animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: partnerRef.current,
        start: "top 80%",
      },
    });

    // Animate the entire section (fade in and slide up)
    tl.fromTo(
      partnerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );

    // Animate the heading
    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5"
    );

    // Animate the subtitle
    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.3"
    );

    // Animate the left bubbles
    tl.fromTo(
      leftBubblesRef.current?.children ? Array.from(leftBubblesRef.current.children) : [],
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.2,
        ease: "back.out(1.7)",
      },
      "-=0.5"
    );

    // Animate the right bubbles
    if (rightBubblesRef.current?.children) {
      tl.fromTo(
        Array.from(rightBubblesRef.current.children),
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.2,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      );
    }

    // Clean up on unmount
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={partnerRef} className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6">
          {/* Left Bubbles */}
          <div ref={leftBubblesRef} className="flex flex-col items-center gap-2">
            <span className="w-5 h-5 sm:w-6 sm:h-6 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 sm:w-4 sm:h-4 bg-black rounded-full"></span>
          </div>

          {/* Heading */}
          <h2
            ref={headingRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
          >
            {partnerData.title.split(" ").map((word, index) => (
              <span key={index}>
                {word}
                {index === 3 ? <br /> : " "}
              </span>
            ))}
          </h2>

          {/* Right Bubbles */}
          <div ref={rightBubblesRef} className="flex flex-col items-center gap-2">
            <span className="w-5 h-5 sm:w-6 sm:h-6 bg-black rounded-full"></span>
            <span className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full"></span>
          </div>
        </div>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          {partnerData.subtitle}
        </p>
      </div>
    </section>
  );
};

export default PartnerSection;