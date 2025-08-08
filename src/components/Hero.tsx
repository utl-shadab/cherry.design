import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  // Logo data for infinite scroll
  const logos = [
    { name: 'PAPERZ', subtitle: 'Leading digital magazine' },
    { name: 'Dorfus', subtitle: '' },
    { name: 'Martino', subtitle: 'Cultivate your life' },
    { name: 'square', subtitle: 'Real estate company' },
    { name: 'Gobona', subtitle: 'Your Travel Company' }
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(console.error);
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      const handleEnded = () => setIsPlaying(false);

      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      video.addEventListener('ended', handleEnded);

      return () => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 mt-16 relative overflow-hidden">
      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen">
        
        {/* Header Section */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 pt-16 pb-8">
          
          {/* Top Right CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute top-8 right-8 z-20"
          >
            <Link href="/contact" className='hidden md:block'>
            <button className="flex items-center gap-3 rotate-90 mt-20 bg-white hover:bg-gray-50 px-6 py-3 rounded-full shadow-lg border border-gray-200 transition-all duration-300 group">
              <div className="w-10 h-10 bg-[#c1141d] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[#c1141d] font-medium text-sm tracking-wide">LET'S TALK NOW</span>
            </button>
            </Link>
          </motion.div>

          {/* Left Side Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col items-center gap-4"
          >
            <span className="text-[#c1141d] text-sm font-light tracking-wider transform -rotate-90 origin-center whitespace-nowrap">
              Scroll Down
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-px h-16 bg-[#c1141d] opacity-60"
            />
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.3 }}
            >
              <svg width="16" height="16" className="text-[#c1141d]" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-8xl font-light text-black leading-tight mb-6"
            >
             ✌️ WE COMPLETE
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-4xl md:text-6xl lg:text-8xl font-light text-black leading-tight mb-8"
            >
              YOUR 👌CREATIVE IDEAS
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-12 max-w-2xl mx-auto"
            >
              Cherry is a visionary design agency that breathes life into<br className="hidden md:block" />
              ideas and transforms them into extraordinary realities.
            </motion.p>
          </div>

          {/* Video Player Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
          >
            <div className="relative aspect-video ">
              {/* Video Background */}
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                loop
                muted
                playsInline
                // poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3CradialGradient id='grad' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' style='stop-color:%23ff6b35;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23f7931e;stop-opacity:1' /%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grad)' /%3E%3C/svg%3E"
              >
                <source src="/video/hero.mp4" type="video/mp4" />
                <source src="/video/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
           
              {/* Play/Pause Button */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute inset-0 flex items-center justify-center"
                onClick={togglePlayPause}
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-black/40 transition-all duration-300 border border-white/20 cursor-pointer">
                  {isPlaying ? (
                    <div className="flex gap-1">
                      <div className="w-1.5 h-6 bg-white rounded-sm"></div>
                      <div className="w-1.5 h-6 bg-white rounded-sm"></div>
                    </div>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white ml-1">
                      <path d="M8 5v14l11-7z" fill="currentColor"/>
                    </svg>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="relative py-8 overflow-hidden"
        >
          <div className="flex whitespace-nowrap">
            <motion.div
              animate={{ x: [0, -50 * logos.length + '%'] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex gap-16 items-center"
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 text-center"
                  style={{ minWidth: '200px' }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-black mb-1 tracking-wide">
                    {logo.name}
                  </div>
                  {logo.subtitle && (
                    <div className="text-sm text-gray-500 font-light">
                      {logo.subtitle}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;