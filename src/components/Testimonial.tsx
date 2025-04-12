import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Testimonial: React.FC = () => {
    const testimonials = [
        { name: "Lindsay", title: "Head of Marketing at Aero Interactive", quote: "Bloomr has truly been a game-changer..." },
        { name: "Mark", title: "Head of Marketing at Travly", quote: "Our sales have increased by 120%, and user engagement skyrocketed." },
        { name: "Nathan", title: "Owner of Villa Otis", quote: "A very skilled team, they're knowledgeable..." },
        { name: "Edoardo", quote: "We've worked with several design agencies..." },
        { name: "Sophia", title: "Creative Director at PixelForge", quote: "Their design expertise has elevated our brand presence..." },
        { name: "Alex", title: "CTO at CloudSync", quote: "What sets them apart is their ability to seamlessly merge creativity..." },
        { name: "James", title: "CEO at TechNova", quote: "I was amazed by the level of dedication..." },
        { name: "Elena", title: "HR Manager at BrightPath", quote: "They transformed our employee portal..." },
        { name: "David", title: "Head of Sales at AutoX", quote: "Sales conversions have increased by 150%..." }
    ];

    const leftGridRef = useRef<HTMLDivElement>(null);
    const centerGridRef = useRef<HTMLDivElement>(null);
    const rightGridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const animateCards = (gridRef: React.RefObject<HTMLDivElement | null>, speed: number, scrubSpeed: number, stagger: number) => {
            if (!gridRef.current) return;
            const cards = gridRef.current.children;
            gsap.fromTo(
                cards,
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: speed,
                    stagger: stagger,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top center",
                        end: "bottom center",
                        scrub: scrubSpeed,
                        toggleActions: "play none none reverse",
                    },
                }
            );
        };

        // Left & Right Grids ko pin karo
        ScrollTrigger.create({
            trigger: leftGridRef.current,
            start: "top center",
            end: "+=5%",
            pin: true,
            scrub: 3,
            pinSpacing: false,
            toggleActions: "play none none reverse",
        });

        ScrollTrigger.create({
            trigger: rightGridRef.current,
            start: "top center",
            end: "+=5%",
            pin: true,
            scrub: 3,
            pinSpacing: false,
            toggleActions: "play none none reverse",
        });

        // Center cards should move faster
        animateCards(leftGridRef, 5, 5, 0.8);
        animateCards(centerGridRef, 1.8, 1.5, 0.15);
        animateCards(rightGridRef, 5, 5, 0.8);
    }, []);

    return (
        <motion.section className="py-16  bg-black relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className="container bg-black max-w-7xl w-full mx-auto px-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h3 className="text-sm uppercase text-gray-500 tracking-wider mb-2">Testimonials</h3>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Don't take our word for it. <br /> Read about our happy clients
                    </h2>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                    {/* Left Grid (Pinned) */}
                    <div ref={leftGridRef} className="space-y-6">
                        {testimonials.slice(0, 3).map((testimonial, index) => (
                            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                                <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                                {testimonial.title && <p className="text-gray-500 text-sm">{testimonial.title}</p>}
                            </div>
                        ))}
                    </div>

                    {/* Center Grid (Moves Faster) */}
                    <div ref={centerGridRef} className="space-y-6 md:mt-12 ">
                        {testimonials.slice(3, 6).map((testimonial, index) => (
                            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                                <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                                {testimonial.title && <p className="text-gray-500 text-sm">{testimonial.title}</p>}
                            </div>
                        ))}
                    </div>

                    {/* Right Grid (Pinned) */}
                    <div ref={rightGridRef} className="space-y-6 ">
                        {testimonials.slice(6, 9).map((testimonial, index) => (
                            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                                <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                                {testimonial.title && <p className="text-gray-500 text-sm">{testimonial.title}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Testimonial;
