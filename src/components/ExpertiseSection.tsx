"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ServiceDetailsData } from "@/data/ServiceDetailsData";

const ExpertiseSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  // Find the relevant service (assuming you want "Branding")
  const brandingService = ServiceDetailsData.find(service => service.slug === "branding");

  useEffect(() => {
    if (openIndex !== null && refs.current[openIndex]) {
      gsap.fromTo(
        refs.current[openIndex],
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [openIndex]);

  return (
    <section className="bg-black text-white py-16 px-4 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 border-t-2 border-white pt-4">
          Our Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {brandingService?.ExpertiseItem?.map((item, index) => (
            <div key={index} className="border-b border-white">
              <button
                className="w-full text-left py-4 flex justify-between items-center font-semibold text-lg"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span
                  className={`${
                    openIndex === index ? "text-red-500" : "text-white"
                  }`}
                >
                  {item.title}
                </span>
                <span className="text-white">{openIndex === index ? "-" : "+"}</span>
              </button>

              <div
                ref={(el) => {
                  refs.current[index] = el;
                }}
                className={`overflow-hidden transition-all ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                <p className="text-gray-400 pb-4">{item.description}</p>
              </div>
            </div>
          )) || <p className="text-gray-400 text-center">No expertise data available.</p>}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
