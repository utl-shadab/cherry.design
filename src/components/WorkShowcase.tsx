// WorkShowcase.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/WorkData";

gsap.registerPlugin(ScrollTrigger);

const WorkShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const container = containerRef.current;
    const section = sectionRef.current;

    if (container) {
      gsap.to(container, {
        x: () => -(container.scrollWidth - window.innerWidth + 100),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 2,
          end: () => `+=${container.scrollWidth - window.innerWidth}`,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = cursorRef.current;
      if (!cursor) return;

      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (section) {
        section.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#f5e9d7] py-12 h-screen overflow-hidden mt-16">
      <h2 className="text-3xl md:text-5xl font-bold text-center">Featured Work</h2>
      <p className="text-gray-600 text-lg md:text-xl text-center my-5">Transforming ideas into exceptional digital experiences</p>
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center text-black text-sm pointer-events-none z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {cursorText}
      </motion.div>

      <div
        ref={containerRef}
        className="flex space-x-8 px-6"
        style={{ width: "max-content" }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative w-[90vw] h-[400px] md:w-[48vw] md:h-[450px] rounded-2xl overflow-hidden group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            onMouseEnter={() => {
              setCursorText("(OPEN)");
              gsap.to(cursorRef.current, { scale: 1.5, duration: 0.3 });
            }}
            onMouseLeave={() => {
              setCursorText("");
              gsap.to(cursorRef.current, { scale: 1, duration: 0.3 });
            }}
          >
            <Link href={project.link}>
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />

              <motion.div
                className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ y: 20 }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-3xl font-bold">{project.title}</h3>
                <p className="text-sm mt-2">{project.description}</p>
                <div className="mt-2 text-sm opacity-70">{project.category}</div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkShowcase;