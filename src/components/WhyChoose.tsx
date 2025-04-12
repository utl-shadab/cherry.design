"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, CheckCircle, MessageSquare, BarChart3, Cpu, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { title: "Valuing your time", icon: <Clock size={60} />, borderClass: "border-r border-b" },
  { title: "Delivering high-quality results", icon: <CheckCircle size={60} />, borderClass: "border-b" },
  { title: "Providing clear communication", icon: <MessageSquare size={60} />, borderClass: "border-l border-b" },
  { title: "Focusing on scalability", icon: <BarChart3 size={60} />, borderClass: "border-r" },
  { title: "Using the latest technology", icon: <Cpu size={60} />, borderClass: "" },
  { title: "Partnering in your success", icon: <Users size={60} />, borderClass: "border-l" },
];

const WhyChoose = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      ".feature-box",
      { borderColor: "rgba(193, 20, 29, 0)" }, // Initially transparent border
      {
        borderColor: "rgba(193, 20, 29, 1)", // Cherry Color
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl w-full mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-2xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          There are thousands of agencies, so why choose us?
        </motion.h2>

        <motion.p
          className="text-gray-400 mt-4 max-w-3xl "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Since day one, aligned with our core principles, we focus on:
        </motion.p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3  border-cherry mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`feature-box text-center p-8 border-cherry ${feature.borderClass}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center text-[#c1141d]">{feature.icon}</div>
              <h3 className="text-lg md:text-2xl font-semibold mt-4">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;



