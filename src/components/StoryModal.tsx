// components/StoryModal.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { X } from "lucide-react";
import Image from "next/image";

interface Story {
  image: string;
  title: string;
  description: string;
  client: string;
  duration: string;
}

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const stories: Story[] = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: "Zeoliet-Detox",
    description: "Oprachtgever: Shiny things\n+ Branding\n+ Webshop design",
    client: "Shiny things",
    duration: "8 weken",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: "Proren!",
    description: "Beheren de toekomst en bouwen aan",
    client: "Shiny things",
    duration: "8 weken",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: "Jouw online marketeer",
    description: "Oprachtgever: Studio Lens\n+ Design onepager",
    client: "Studio Lens",
    duration: "2 weken",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: "Jouw online marketeer",
    description: "Oprachtgever: Studio Lens\n+ Design onepager",
    client: "Studio Lens",
    duration: "2 weken",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: "Jouw online marketeer",
    description: "Oprachtgever: Studio Lens\n+ Design onepager",
    client: "Studio Lens",
    duration: "2 weken",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: "Jouw online marketeer",
    description: "Oprachtgever: Studio Lens\n+ Design onepager",
    client: "Studio Lens",
    duration: "2 weken",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: "Jouw online marketeer",
    description: "Oprachtgever: Studio Lens\n+ Design onepager",
    client: "Studio Lens",
    duration: "2 weken",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: "Jouw online marketeer",
    description: "Oprachtgever: Studio Lens\n+ Design onepager",
    client: "Studio Lens",
    duration: "2 weken",
  },
];

const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const storyImageRef = useRef<HTMLImageElement>(null);
  const progressBarsRef = useRef<HTMLDivElement[]>([]);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const storyDuration = 5000; // 5 seconds per story
  const progressBarTimelineRef = useRef<GSAPTimeline | null>(null);

  // Reset and animate progress bars
  const resetProgressBars = () => {
    // Kill any existing animations to prevent overlap
    if (progressBarTimelineRef.current) {
      progressBarTimelineRef.current.kill();
    }

    // Create a new timeline for progress bars
    progressBarTimelineRef.current = gsap.timeline();

    progressBarsRef.current.forEach((bar, index) => {
      if (index < currentStoryIndex) {
        // Past stories: fully filled
        gsap.set(bar, { width: "100%" });
      } else if (index > currentStoryIndex) {
        // Future stories: empty
        gsap.set(bar, { width: "0%" });
      } else {
        // Current story: animate from 0% to 100%
        gsap.set(bar, { width: "0%" }); // Reset to 0% before animating
        progressBarTimelineRef.current!.to(bar, {
          width: "100%",
          duration: storyDuration / 1000,
          ease: "linear",
        });
      }
    });
  };

  // Auto-advance to the next story
  useEffect(() => {
    if (!isOpen || isPaused) return;

    const timer = setTimeout(() => {
      if (currentStoryIndex < stories.length - 1) {
        setCurrentStoryIndex(currentStoryIndex + 1);
      } else {
        onClose();
      }
    }, storyDuration);

    return () => clearTimeout(timer);
  }, [currentStoryIndex, isOpen, isPaused, onClose]);

  // Animate modal open/close
  useEffect(() => {
    if (isOpen) {
      gsap.to(modalRef.current, {
        autoAlpha: 1,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(modalRef.current, {
        autoAlpha: 0,
        scale: 0.95,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  // Animate story image transition and manage progress bars
  useEffect(() => {
    if (!isOpen) return;

    // Animate the story image
    gsap.fromTo(
      storyImageRef.current,
      { opacity: 0, x: 20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "power2.out",
      }
    );

    // Reset and animate progress bars
    resetProgressBars();
  }, [currentStoryIndex, isOpen]);

  const handleNext = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
    }
  };

  const handleTap = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.clientX > window.innerWidth / 2) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#C1141D]"
      style={{ visibility: "hidden" }}
    >
      {/* Background Brand Name */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-black text-6xl sm:text-8xl lg:text-9xl font-bold tracking-widest">
          Cherry.Design
        </h1>
      </div>

      {/* Story Content */}
      <div className="relative w-full h-full max-w-md mx-auto flex flex-col items-center justify-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition z-10"
        >
          <X size={24} />
        </button>

        {/* Progress Bars */}
        <div className="absolute top-2 left-0 right-0 flex gap-1 px-4">
          {stories.map((_, index) => (
            <div
              key={index}
              className="flex-1 h-0.5 bg-white bg-opacity-30 rounded-full overflow-hidden"
            >
              <div
                ref={(el) => {
                  if (el) progressBarsRef.current[index] = el;
                }}
                className="h-full bg-white rounded-full"
                style={{ width: "0%" }}
              />
            </div>
          ))}
        </div>

        {/* Story Image */}
        <div
          className="relative w-full h-[80vh] sm:h-[85vh] max-h-[600px] flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onClick={handleTap}
        >
          <Image
            ref={storyImageRef}
            src={stories[currentStoryIndex].image}
            alt={stories[currentStoryIndex].title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Story Info (Glassmorphism Card) */}
        <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 text-left">
          <h2 className="text-white text-lg font-semibold mb-1">
            {stories[currentStoryIndex].title}
          </h2>
          <p className="text-white text-sm opacity-80 whitespace-pre-line">
            {stories[currentStoryIndex].description}
          </p>
          <p className="text-white text-sm opacity-80 mt-2">
            Client: {stories[currentStoryIndex].client} | Duration: {stories[currentStoryIndex].duration}
          </p>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 rounded-full p-2 text-white hover:bg-opacity-30 transition ${
            currentStoryIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentStoryIndex === 0}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 rounded-full p-2 text-white hover:bg-opacity-30 transition ${
            currentStoryIndex === stories.length - 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentStoryIndex === stories.length - 1}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default StoryModal;