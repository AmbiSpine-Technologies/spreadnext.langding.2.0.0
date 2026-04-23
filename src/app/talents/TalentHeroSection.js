"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../components/common/button";

const sliderImages = [
  "/India-next-generation.png",
  "/student-group.png",
  "/campus-life.png",
];

// const sliderImages = [
//   "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=800",
//   "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800",
//   "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
//   "https://images.pexels.com/photos/7129007/pexels-photo-7129007.jpeg?auto=compress&cs=tinysrgb&w=800",
//   "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
//   "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
//   // "https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=800",
//   // "https://images.pexels.com/photos/5673502/pexels-photo-5673502.jpeg?auto=compress&cs=tinysrgb&w=800",
//   // "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800",
// ];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Jitter "Pop & Fall" Animation logic
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 } // Teeno images thode gap pe pop hongi
    },
    exit: { opacity: 0 }
  };

  const itemVariants = {
    initial: { scale: 0, opacity: 0, y: 40 },
    animate: { 
      scale: 1, 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 20 } 
    },
    exit: { 
      scale: 0.8, 
      opacity: 0, 
      y: 100, // Downward exit
      transition: { duration: 0.4, ease: "easeInOut" } 
    }
  };

  return (
    <section className="w-full bg-white px-6 lg:px-20 py-16 mt-6 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        
        {/* LEFT CONTENT */}
        <div className="z-20">
          <h1 className="text-4xl lg:text-[44px] font-semibold text-gray-900 leading-tight mb-6">
            A career platform built for India's{" "}
            <span className="text-[#0011D2]">next generation</span>
          </h1>

          <p className="text-gray-500 text-lg mb-8 max-w-lg">
            <span className="text-[#10069F] font-medium">Spreadnext</span> connects colleges, students, and recruiters on a single
            intelligent platform to automate placements.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button className="rounded-full h-11 px-8 font-semibold bg-[#0013E3] text-white hover:bg-blue-800 shadow-lg transition-transform active:scale-95">
              <a 
    href="https://spreadnext.com/signin"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center"
  >
       Build your free career profile

  </a>
            </Button>
            <Button className="!bg-[#e2e8f0] !text-gray-700 h-11 px-8 rounded-full font-semibold">
                           <a 
    href="https://spreadnext.com/signin"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center"
  >
   Explore Jobs
  </a>
           
            </Button>
          </div>
        </div>

        {/* RIGHT SLIDER - 3 IMAGE STACK POPUP */}
        <div className="relative w-full mt-2 flex flex-col items-center justify-center min-h-[550px]">
          
          <div className="relative  w-[420px] h-[400px] mt-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                variants={containerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute inset-0"
              >
                {/* 1. MAIN CENTER IMAGE */}
                <motion.div 
                  variants={itemVariants}
                  className="w-full h-full relative rounded-md"
                >
                  <img src={sliderImages[index]} className="w-full h-full object-cover" alt="Main" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>

                {/* 2. TOP RIGHT SMALL IMAGE */}
                <motion.div 
                  variants={itemVariants}
                  className="absolute -top-10 -left-10 w-20 h-20 md:w-28 md:h-28 rounded-md overflow-hidden  z-20"
                >
                  <img src={sliderImages[(index + 1) % sliderImages.length]} className="w-full h-full object-cover" alt="TopRight" />
                </motion.div>

                {/* 3. BOTTOM LEFT SMALL IMAGE */}
                <motion.div 
                  variants={itemVariants}
                  className="absolute -bottom-10 -right-10 w-20 h-20 md:w-28 md:h-28 rounded-md overflow-hidden  z-20"
                >
                  <img src={sliderImages[(index + 2) % sliderImages.length]} className="w-full h-full object-cover" alt="BottomLeft" />
                </motion.div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* CUSTOM INDICATORS */}
          <div className="flex gap-2 mt-20 bg-white/50 backdrop-blur-sm p-2 rounded-full border border-gray-100 shadow-inner z-30">
            {sliderImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? "w-20 bg-[#0011D2]" : "w-1.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}