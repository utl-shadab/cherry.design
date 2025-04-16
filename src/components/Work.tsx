"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { name: "Homical", category: "Real Estate", video: "/work.mp4", awards: ["ADG Laus", "FWA"] },
  { name: "Haigeia", category: "Healthcare Tech", video: "/work.mp4", awards: ["Awwwards", "Lovie Awards"] },
  { name: "Hedhog", category: "Food & Beverage", video: "/work.mp4", awards: ["EDAWARDS", "CSSDA"] },
  { name: "PropEase", category: "Property Management", video: "/work.mp4", awards: ["CSS Winner", "Awwwards"] },
  { name: "MediCare", category: "Health & Wellness", video: "/work.mp4", awards: ["FWA", "EDAWARDS"] },
];

const Work = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const totalWidth = cardsRef.current?.scrollWidth || 0;
    const viewportWidth = window.innerWidth;

    gsap.to(cardsRef.current, {
      x: -(totalWidth - viewportWidth),
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 1%",
        end: `+=${totalWidth - viewportWidth}`,
        scrub: 1,
        pin: true,
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-[100vh] bg-white text-black flex flex-col py-5 overflow-hidden">
      <div className="absolute top-0 left-0 w-full px-6 py-8 z-10">
        <h2 className="text-3xl md:text-5xl font-bold">Featured Work</h2>
        <p className="text-gray-600 text-lg md:text-xl">Transforming ideas into exceptional digital experiences</p>
      </div>

      <div className="flex items-center h-full pt-24">
        <div ref={cardsRef} className="flex space-x-6 md:space-x-6 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative min-w-[350px] sm:min-w-[450px] md:min-w-[600px] lg:min-w-[700px] h-[400px] md:h-[500px] p-6 rounded-lg shadow-lg flex flex-col justify-end border border-black transition-transform duration-500  group"
            >
              <video className="w-full h-[70%] object-cover rounded-lg" autoPlay loop muted>
                <source src={project.video} type="video/mp4" />
              </video>
              <div className="flex justify-between ">
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-gray-600">{project.category}</p>
              </div>
              <Link href="/case-study" className="mt-4">
              <motion.div
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className=" flex items-center space-x-2"
              >
                <span className="text-black font-medium">Go to Case Study</span>
                <ArrowRight size={24} className="text-black" />
              </motion.div>
              </Link>
              </div>
              {/* Awards Section Inside Each Card */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.awards.map((award, awardIndex) => (
                  <span
                    key={awardIndex}
                    className="px-3 py-1 rounded-full bg-gray-900 text-white text-sm font-semibold"
                  >
                    {award}
                  </span>
                ))}
              </div>

              {/* Hover Arrow for Case Studies */}


              {/* Bottom Right Arrow */}
              {/* <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRightCircle size={40} className="text-black" />
              </div> */}

              {/* Icon with rotation effect */}


              {/* Text with fade-in effect */}
           
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
