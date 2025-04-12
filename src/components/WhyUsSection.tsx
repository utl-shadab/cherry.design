"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ServiceDetailsData } from "@/data/ServiceDetailsData";

const WhyUsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const pointsRef = useRef<(HTMLDivElement | null)[]>([]);
  const brandingService = ServiceDetailsData.find((service) => service.slug === "branding");
  const whyChooseUsData = brandingService?.WhyChooseUsItem?.[0];

  useEffect(() => {
    if (!whyChooseUsData) return;

    const tl = gsap.timeline({ delay: 0.3 });

    tl.from(titleRef.current, {
      y: -20,
      duration: 1,
      ease: "power2.out",
    })
      .from(descRef.current, {
        y: 20,
        duration: 1,
        ease: "power2.out",
      })
      .from(
        pointsRef.current,
        {
          y: 20,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.5"
      );
  }, [whyChooseUsData]);

  if (!whyChooseUsData) {
    return <p className="text-center text-gray-400">No data available for "Why Choose Us".</p>;
  }

  return (
    <section ref={sectionRef} className="bg-black text-white px-6 md:px-16 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side: Title and Description */}
        <div>
          <h2 ref={titleRef} className="text-2xl md:text-3xl text-white font-bold border-t-2 pt-4 inline-block">
            {whyChooseUsData.title}
          </h2>
          <p ref={descRef} className="text-gray-300 mt-4 text-sm md:text-base">
            {whyChooseUsData.paragraph}
          </p>
        </div>

        {/* Right Side: Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Array.isArray(whyChooseUsData.points) &&
            whyChooseUsData.points.map((point, index) => (
              <div
                key={index}
                ref={(el) => {
                  pointsRef.current[index] = el;
                }}
                className="border-t-2 pt-2 text-lg font-semibold text-white cursor-pointer hover:text-gray-400 transition"
              >
                {point}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
