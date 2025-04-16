import ContactSection from '@/components/ContactSection'
import Navbar from '@/components/Navbar'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
// import Link from 'next/link'
import AboutHero from '@/components/about/AboutHero'
import Passion from '@/components/about/Passion'
import Values from '@/components/Values'
import Culture from '@/components/about/Culture'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const AboutPage = () => {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const awardsRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    // Text reveal animation on scroll
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { 
          y: 50, 
          opacity: 0,
          clipPath: "inset(0 0 100% 0)" 
        },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0 0 0% 0)",
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: 0.5,
          }
        }
      )
    }

    // Text content reveal animation
    if (textRef.current) {
      const paragraphs = textRef.current.querySelectorAll('p, a')
      gsap.fromTo(
        paragraphs,
        { 
          y: 30, 
          opacity: 0,
          clipPath: "inset(0 0 100% 0)" 
        },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0 0 0% 0)",
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 75%",
            end: "top 25%",
            scrub: 0.5,
          }
        }
      )
    }

    // Awards section animation
    if (awardsRef.current) {
      const awards = awardsRef.current.querySelectorAll('.award-item')
      gsap.fromTo(
        awards,
        { 
          y: 40, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: awardsRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: 0.5,
          }
        }
      )
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div className="bg-white overflow-x-hidden">
      <Navbar/>
      <AboutHero/>
      {/* Main Content Section */}
       <Passion/>
       <Values />
       <Culture/>
      <ContactSection/>
    </div>
  )
}

export default AboutPage