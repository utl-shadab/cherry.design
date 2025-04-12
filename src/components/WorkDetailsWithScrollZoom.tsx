"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATIC_VIDEO_URL = "https://res.cloudinary.com/durcylpvn/video/upload/s--6D0aAOl0--/v1743027515/cherry/cherry.mp4";

const WorkDetailsWithScrollZoom = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const videoContainer = videoContainerRef.current;
    const video = videoRef.current;
    const section = sectionRef.current;

    if (videoContainer && video && section) {
      gsap.set(video, { scale: 1, opacity: 1 });

      const initialWidth = 20;
      const initialHeight = 20;

      gsap.set(videoContainer, { width: initialWidth, height: initialHeight });

      gsap.to(videoContainer, {
        width: "90vw",
        height: "90vh",
        maxHeight: "600px",
        ease: "expo.out",
        scrollTrigger: {
          trigger: section,
          start: "top 10%",
          end: "bottom 20%",
          scrub: 1.5,
          pin: true,
          pinSpacing: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const targetWidth = window.innerWidth * 0.9;
            const targetHeight = Math.min(window.innerHeight * 0.9, 600);
            const newWidth = gsap.utils.interpolate(initialWidth, targetWidth, progress);
            const newHeight = gsap.utils.interpolate(initialHeight, targetHeight, progress);
            videoContainer.style.width = `${Math.max(initialWidth, newWidth)}px`;
            videoContainer.style.height = `${Math.max(initialHeight, newHeight)}px`;
            if (progress === 1) {
              const trigger = self.trigger as ScrollTrigger | undefined;
              if (trigger && "id" in trigger) {
                const scrollTrigger = ScrollTrigger.getById(trigger.id as string);
                if (scrollTrigger && typeof scrollTrigger.pin === "function") {
                  scrollTrigger.kill(true);
                }
              }
            }
          },
        },
      });

      gsap.to(video, {
        scale: 1,
        opacity: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: section,
          start: "top 10%",
          end: "bottom 20%",
          scrub: 1.5,
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative bg-black min-h-screen zoomed flex items-center justify-center overflow-hidden"
    >
      <div ref={videoContainerRef} className="relative rounded">
        <video
          ref={videoRef}
          src={STATIC_VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover will-change-transform"
        />
      </div>
    </div>
  );
};

export default WorkDetailsWithScrollZoom;