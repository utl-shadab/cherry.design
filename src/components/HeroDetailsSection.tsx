"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ServiceDetails } from "@/data/ServiceDetailsData";
import { backgroundColors } from "@/utils/backgroundColors";

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  service: ServiceDetails;
}

const HeroDetailsSection = ({ service }: HeroSectionProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  const bgColor = backgroundColors[service.slug] || "bg-gradient-to-r from-gray-400 to-gray-500";

  return (
    <section
      ref={heroRef}
      className={`relative ${bgColor} text-black py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[60vh]`}
    >
      {/* Decorative Element (Abstract Shape) */}
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 opacity-50">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            fill="#A78BFA"
            d="M60,-60C80,-40,100,-20,100,0C100,20,80,40,60,60C40,80,20,100,0,100C-20,100,-40,80,-60,60C-80,40,-100,20,-100,0C-100,-20,-80,-40,-60,-60C-40,-80,-20,-100,0,-100C20,-100,40,-80,60,-60Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div ref={textRef} className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Result-Driven Custom <br />
          {service.title}. <br />
          <span className="text-red-500">Launch.</span>
        </h1>
        {service.heroData?.description && (
          <p className="text-base sm:text-lg lg:text-xl text-gray-800">
            {service.heroData.description}
          </p>
        )}
      </div>
    </section>
  );
};

export default HeroDetailsSection;
