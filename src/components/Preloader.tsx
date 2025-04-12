"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface PreLoaderProps {
  onFinish: () => void;
}

const PreLoader: React.FC<PreLoaderProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    if (typeof window === "undefined") return; 

    const progressInterval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setLoading(false);
            onFinish();
          }, 500); 
          return 100;
        }
        return oldProgress + 5;
      });
    }, 40);

    return () => clearInterval(progressInterval);
  }, [onFinish]);

  if (!loading) return null; 

  return (
    <motion.div
      initial={{ y: 0 }} 
      animate={{ y: "-100%", opacity: 1 }} 
      transition={{ duration: 1.5, ease: "easeInOut" }} 
      className="fixed inset-0 flex items-center justify-center bg-black text-white z-50"
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-8xl font-bold">🍒 CHERRY® DESIGN</h1>
        <div className="absolute bottom-4 left-4 text-lg">{progress}%</div>
      </div>
    </motion.div>
  );
};

export default PreLoader;
