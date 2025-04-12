// components/StatsSection.tsx
"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { statsData, Stat } from "@/data/ServiceData";

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      statsRef.current?.querySelectorAll(".stat-item") || [],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section ref={statsRef} className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-300 flex items-center gap-2">
            <span className="w-8 h-0.5 bg-white"></span> What we have done
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {statsData.map((stat: Stat) => (
            <div key={stat.id} className="stat-item">
              <h3 className="text-4xl font-bold mb-4">{stat.value}</h3>
              <p className="text-gray-300 whitespace-pre-line">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;