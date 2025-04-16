// WorkDetails.tsx
"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Project } from "@/data/WorkData";
import {  ArrowUpRight } from "lucide-react";
import ElasticDivider from "@/components/ElasticDivider";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WorkDetails = ({ project }: { project: Project }) => {
  const sectionRefs = useRef<HTMLElement[]>([]);
  const imageRefs = useRef<HTMLImageElement[]>([]);

  // Add section refs for GSAP animations
  const addToSectionRefs = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  // Add image refs for GSAP animations
  const addToImageRefs = (el: HTMLImageElement | null) => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el);
    }
  };

  // GSAP Animations
  useEffect(() => {
    // Text Reveal Animation for Section Titles
    sectionRefs.current.forEach((section) => {
      const title = section.querySelector("h2");
      if (title) {
        gsap.fromTo(
          title,
          { y: 50, opacity: 0, clipPath: "inset(100% 0 0 0)" }, // Start with text hidden
          {
            y: 0,
            opacity: 1,
            clipPath: "inset(0% 0 0 0)", // Reveal text
            duration: 1.8,
            ease: "expo.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "top 15%",
              scrub: 0.5,
              fastScrollEnd: true,
            },
          }
        );
      }

      // Text Reveal Animation for Text Content
      const textElements = section.querySelectorAll("p, a");
      if (textElements.length > 0) {
        gsap.fromTo(
          textElements,
          { y: 40, opacity: 0, clipPath: "inset(100% 0 0 0)" },
          {
            y: 0,
            opacity: 1,
            clipPath: "inset(0% 0 0 0)",
            duration: 2,
            stagger: 0.15,
            ease: "power4.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "top 15%",
              scrub: 0.5,
              fastScrollEnd: true,
            },
          }
        );
      }

      // Parallax Effect for Background (on sections with bg-gray-50)
      if (section.classList.contains("bg-gray-50")) {
        gsap.to(section, {
          backgroundPositionY: "30%",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            fastScrollEnd: true,
          },
        });
      }
    });

    // Image Grid Zoom-In Animation
    imageRefs.current.forEach((image) => {
      gsap.fromTo(
        image,
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: image,
            start: "top 90%",
            end: "top 40%",
            scrub: 0.5,
            fastScrollEnd: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  if (!project || !project.details) {
    return <h1>Project Details Not Found</h1>;
  }

  return (
    <div className="bg-white pt-20">
      {/* Hero Section with Fade and Scale Animation */}
      <section
        ref={addToSectionRefs}
        className="py-8 md:py-16 px-4  md:px-2   max-w-7xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 1.5,
          }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-gray-900 mb-6 leading-tight"
        >
          {project.details.hero.title}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 1.5,
            delay: 0.2,
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 md:mt-40"
        >
          {project.details.hero.tags.map((tag: { label: string; value: string }, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.3 + index * 0.1,
              }}
              className="flex flex-col"
            >
              <span className="text-base md:text-lg font-bold text-gray-600 uppercase tracking-wide">
                {tag.label}
              </span>
              <span className="text-xl md:text-2xl font-bold text-black">{tag.value}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Overview Section */}
      <section
        ref={addToSectionRefs}
        className="py-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-gray-50 max-w-7xl rounded-2xl mx-auto"
        style={{background: "linear-gradient(to bottom, #FFE8D6, #A3BFFA)",}}
      >
        <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-gray-900 mb-4">
          {project.details.overview.title}
        </h2>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mb-6 leading-relaxed">
          {project.details.overview.description}
        </p>
      
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
            duration: 1.8,
          }}
          src={project.details.overview.MainImage}
          alt="Logo"
          className="w-full h-auto object-cover rounded-2xl my-6"
        />
          <Link
          href={project.details.overview.link}
          target="_blank"
          className="inline-flex gap-3 items-center text-white bg-black py-1 px-4 rounded-full  text-base md:text-lg"
        >
          Visit Website
          <ArrowUpRight size={24} />
        </Link>
      </section>

      {/* Branding Section */}
      <section
        ref={addToSectionRefs}
        className="py-16 px-4 sm:px-6 md:px-2 max-w-7xl mx-auto "
      >
          <div>
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 20,
                duration: 1.8,
              }}
              src={project.details.branding.logo}
              alt="Logo"
              className="w-full flex justify-start  h-auto max-h-10 object-contain rounded-2xl "
            />
          </div>
         <ElasticDivider />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  ">
          <div>
            <div className="flex flex-col gap-7">
              {project.details.branding.colors.map((color: { color: string }, index: number) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 20,
                    delay: index * 0.15,
                    duration: 1.2,
                  }}
                >
                  <div
                    className="w-full h-24"
                    style={{ backgroundColor: color.color }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
          <div className="h-auto">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 20,
                duration: 1.8,
              }}
              src={project.details.branding.typography}
              alt="Typography"
              className="max-w-full h-auto object-cover  "
            />
          </div>
        </div>
      </section>

      {/* Project Background Section */}
      <section
        ref={addToSectionRefs}
        className="py-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-gray-50 max-w-7xl mx-auto"
        style={{background: "linear-gradient(to bottom, #FFE8D6, #A3BFFA)", }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-gray-900 mb-4">
          {project.details.projectBackground.title}
        </h2>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed">
          {project.details.projectBackground.description}
        </p>
      </section>

      {/* Images Section with Updated Hover Animation */}
      <section
        ref={addToSectionRefs}
        className="py-16 px-4 md:px-2 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* First Row: 3 images */}
          <div className="md:col-span-2">
            <motion.img
              ref={addToImageRefs}
              src={project.details.images[0]}
              alt={`Project Image 1`}
              className="w-full h-auto object-cover  will-change-transform"
              whileHover={{
                filter: "brightness(1.1)",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.4, ease: "easeOut" },
              }}
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <motion.img
              ref={addToImageRefs}
              src={project.details.images[1]}
              alt={`Project Image 2`}
              className="w-full h-auto object-cover  will-change-transform"
              whileHover={{
                filter: "brightness(1.1)",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.4, ease: "easeOut" },
              }}
            />
            <motion.img
              ref={addToImageRefs}
              src={project.details.images[2]}
              alt={`Project Image 3`}
              className="w-full h-auto object-cover  will-change-transform"
              whileHover={{
                filter: "brightness(1.1)",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.4, ease: "easeOut" },
              }}
            />
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section
        ref={addToSectionRefs}
        className="py-16 px-4 md:px-2 max-w-7xl mx-auto bg-gray-50"
        style={{background: "linear-gradient(to bottom, #FFE8D6, #A3BFFA)",}}
      >
        <div className="p-6">
        <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-gray-900 mb-4">
          {project.details.challenge.title}
        </h2>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed">
          {project.details.challenge.description}
        </p>
        </div>
      </section>

      {/* Solution Section */}
      <section
        ref={addToSectionRefs}
        className="py-16 px-4 md:px-2 max-w-7xl mx-auto bg-gray-50 mt-10 md:mt-15 bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%"
        style={{ background: "linear-gradient(to bottom, #FFE8D6, #A3BFFA)" }}
      >
        <div className="p-6 text-right">
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-gray-900 mb-4">
        {project.details.solution.title}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl rtl:mr-3  pl-2 md:pl-96 leading-relaxed">
        {project.details.solution.description}
          </p>
        </div>
      </section>

      {/* Additional Images Section with Updated Hover Animation */}
      <section
        ref={addToSectionRefs}
        className="py-16 px-4 md:px-2 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* First Row: 2 images */}
          <div className="md:col-span-3">
            <motion.img
              ref={addToImageRefs}
              src={project.details.additionalImages[0]}
              alt={`Additional Image 1`}
              className="w-full h-auto  object-cover  will-change-transform"
              whileHover={{
                filter: "brightness(1.1)",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.4, ease: "easeOut" },
              }}
            />
          </div>
        
        </div>
      </section>
    </div>
  );
};

export default WorkDetails;