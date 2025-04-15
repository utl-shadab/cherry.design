import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function AboutHero() {
  const textRef = useRef(null);

  useEffect(() => {
    const lines = gsap.utils.toArray(".line");
    gsap.fromTo(
      lines,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <Image
        src="/background.avif"
        alt="Background"
        fill
        className="object-cover object-center opacity-80"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-10 md:px-20 lg:px-32 py-16 md:py-24 lg:py-32">
        <div
          ref={textRef}
          className="max-w-7xl text-white font-semibold text-3xl sm:text-4xl md:text-3xl leading-tight"
        >
          <p className="line">At cherry.design, we partner with ambitious startups,</p>
          <p className="line">creatives, and forward-thinking brands to craft</p>
          <p className="line">visually striking, highly functional digital experiences.</p>
          <p className="line">We go beyond pixels and code — we build immersive</p>
          <p className="line">stories that connect, engage, and leave a lasting impression.</p>
          <p className="line">From strategic design thinking to seamless development,</p>
          <p className="line">we help shape identities that thrive in the digital space.</p>

        </div>
        
      </div>
    </section>
  );
}
