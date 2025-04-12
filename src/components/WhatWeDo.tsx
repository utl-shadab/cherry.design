'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { title: 'Kickoff Meeting', description: 'We initiate the process with a call to understand your business goals, target audience, and the specific outcomes you aim to achieve. You will join our slack channel, fill out a quick onboarding form and we are ready to start.', img: '/step.webp' },
  { title: 'Discovery Phase & Wireframing', description: 'We will collect initial ideas and concepts. This research forms the foundation to create a design that speaks directly to your audience, setting up the stage for high-conversions.', img: '/step.webp' },
  { title: 'Design', description: 'We design a visually stunning, professional and user-friendly site that captures attention and keeps your visitors engaged.', img: '/step.webp' },
  { title: 'Development', description: 'We build your site using Webflow or Wix, ensuring fast load times, seamless functionality, SEO-friendly and third-party integrations.', img: '/step.webp' },
  { title: 'Launch', description: 'Launch fast, grow faster. In 4-8 weeks you will be ready to launch your brand new website. We will hand off designs to your team and provide you with support after the launch.', img: '/step.webp' }
];

const WhatWeDo = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stepsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>('.step-card');

      sections.forEach((section) => {
        gsap.to(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=200%',
            pin: true,
            pinSpacing: false,
            scrub: 1,
          },
        });
      });
    }, containerRef);

    return () => context.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      
      {/* Title, Subtitle & Tagline */}
      <div className="text-center pt-16 px-6 md:px-10 lg:px-20">
        <span className="text-sm font-semibold uppercase tracking-widest text-gray-500">How we work</span>
        <h1 className="text-4xl md:text-5xl font-bold mt-2 text-gray-500">What happens when you come onboard</h1>
        <p className="text-lg md:text-xl text-gray-600 mt-3">Our web design process when we start working together</p>
      </div>

      <div ref={stepsContainerRef} className="steps-container">
        {steps.map((step, index) => (
          <section key={index} className="step-card relative flex items-center justify-center h-screen">
            <div className="w-[90%] md:w-[70%] bg-[#111] p-10 rounded-2xl border border-white shadow-lg relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Left Text Content */}
                <div>
                  {/* Step Number */}
                  <span className="text-sm text-gray-400 uppercase tracking-wide">Step {index + 1}</span>
                  <h2 className="text-3xl font-bold mb-4">{step.title}</h2>
                  <p className="text-lg opacity-80">{step.description}</p>
                </div>

                {/* Right Image */}
                <motion.img
                  src={step.img}
                  alt={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="w-full h-80 rounded-lg object-contain"
                />
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
