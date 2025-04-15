"use client"
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from "framer-motion";
import { Pause, Play } from "lucide-react";

const Passion: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);

  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraph1Ref = useRef<HTMLParagraphElement>(null);
  const paragraph2Ref = useRef<HTMLParagraphElement>(null);
  const contactRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayback = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const elements = [
      headingRef.current,
      paragraph1Ref.current,
      paragraph2Ref.current,
      contactRef.current,
    ];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    elements.forEach((element, index) => {
      if (element) {
        tl.fromTo(
          element,
          {
            autoAlpha: 0,
            y: 50
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
          },
          index * 0.3
        );
      }
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
   <section className='bg-black text-white py-16 px-6 md:px-12' >
       <div className="max-w-7xl w-full mx-auto ">
    <div ref={containerRef} className="flex flex-col lg:flex-row justify-between w-full bg-black text-white px-4 md:px-8 lg:px-3 py-12 md:py-16 lg:py-24">
      <div className="flex flex-col max-w-2xl mr-0 lg:mr-10">
        <h1 ref={headingRef} className="text-5xl md:text-6xl font-light mb-8">
          Our Passion.
        </h1>

        <p ref={paragraph1Ref} className="text-base md:text-lg font-light text-gray-300 mb-6">
          At cherry.design, we’re driven by the art of digital storytelling. We craft bold, intuitive websites that go beyond aesthetics—designed to elevate your brand and forge genuine connections with your audience. Every pixel is placed with purpose, every interaction engineered for impact.
        </p>

        <p ref={paragraph2Ref} className="text-base md:text-lg font-light text-gray-300 mb-10">
          As a forward-thinking digital agency, we specialize in tailor-made web experiences that reflect your brand’s essence. Whether you’re launching something new or evolving an existing presence, we’re here to ensure your vision shines online—with creativity, strategy, and precision. Your growth is our mission, and your success is our passion.
        </p>

        <motion.button
          ref={contactRef}
          className="flex items-center justify-between text-white border border-white rounded-full px-6 py-3 w-44"
          whileHover={{
            backgroundColor: "#ffffff",
            color: "#000000",
            scale: 1.05,
            transition: { duration: 0.3, ease: "easeInOut" }
          }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Contact us</span>
          <svg
            className="w-5 h-5 ml-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      </div>

      <div className="mt-12 lg:mt-0 w-full lg:w-1/2 relative">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto rounded-xl object-cover"
        >
          <source src="/showreel.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button
          onClick={togglePlayback}
          className="absolute bottom-12 left-4 bg-white text-black rounded-full p-2 shadow-md transition-all duration-300 hover:scale-105"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>
      </div>
    </div>
    </div>
    </section>
  );
};

export default Passion;