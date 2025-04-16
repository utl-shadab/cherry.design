// components/OurWorkSection.tsx
"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const OurWorkSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    tl.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      }
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const projects = [
    { title: "Bizden", image: "/images/bizden.jpg" },
    { title: "Mallik Architecture", image: "/images/mallik.jpg" },
    { title: "Notandas", image: "/images/notandas.jpg" },
  ];

  return (
    <section ref={sectionRef} className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-500 mb-4">
          Our Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el!;
              }}
              className="relative"
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold text-black mt-2">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
        <a href="#" className="block text-red-500 text-sm font-semibold mt-6">
          View Our Projects →
        </a>
      </div>
    </section>
  );
};

export default OurWorkSection;