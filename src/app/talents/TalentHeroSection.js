
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../components/common/button";
const sliderImages = [
  "/India-next-generation.png",
  "/student-group.png",
  "/campus-life.png",
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white px-6 lg:px-20 py-16">

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            A career platform built for India's{" "}
            <span className="text-blue-600">next generation</span>
          </h1>

          <p className="text-gray-500 text-lg mb-8 max-w-lg">
            Spreadnext connects colleges, students, and recruiters on a single
            intelligent platform to automate placements and track career readiness.
          </p>

          <div className="flex gap-4">
          
   <Button 
        className="!bg-[#0A66C2] hover:!bg-[#0554a3] h-14"
        
        >
          Build your free career profile
        </Button>
           <Button 
                className="!bg-[#a0bfdb7f] hover:!bg-gray-300 !text-gray-700  h-14"
                
                >
                  Explore Job
                </Button>
          
          </div>
        </div>

        {/* RIGHT SLIDER CARD */}
        <div className="
        relative 
       w-full max-w-[650px] h-[350px] sm:h-[450px] md:h-[500px] lg:h-[700px] mt-10
      ">

        {sliderImages.map((img, i) => {
          const total = sliderImages.length;
          const offset = (i - index + total) % total;

          let x = 0;
          let scale = 0.7;
          let zIndex = 0;

          // RESPONSIVE POSITION VALUES
          const baseX =
            window.innerWidth < 640
              ? 120
              : window.innerWidth < 1024
              ? 160
              : 200;

          if (offset === 0) {
            // RIGHT (ACTIVE)
            x = baseX;
            scale = 1;
            zIndex = 3;
          } else if (offset === total - 1) {
            // MID LEFT
            x = 0;
            scale = 0.85;
            zIndex = 2;
          } else if (offset === total - 2) {
            // FAR LEFT
            x = -baseX;
            scale = 0.7;
            zIndex = 1;
          } else {
            return null;
          }

          return (
            <motion.img
              key={i}
              src={img}
              className="absolute w-full h-full object-cover rounded-2xl shadow-xl"
              animate={{ x, scale, zIndex }}
              transition={{ duration: 0.5 }}
            />
          );
        })}

        <div>
           <div className="absolute bottom-[-25px] left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 mt-6">
        {sliderImages.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-[3px] sm:h-[4px] rounded-full cursor-pointer transition-all duration-300 ${
              i === index
                ? "w-10 sm:w-16 bg-blue-600"
                : "w-6 sm:w-10 bg-gray-300"
            }`}
          />
        ))}
      </div>
        </div>
      </div>

      {/* INDICATORS */}
     
      </div>
    </section>
  );
}

