"use client";

import React from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { Counter } from "@/utils/counter";
import Button from "../common/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/animation"; 

const heroStats = [
  { value: 82, label: "Average placement rate across Spreadnext campuses", suffix: "%" },
  { value: 3.2, label: "More employer connections per student", suffix: "x", isDecimal: true },
  { value: 42, label: "Average time from drive to offer letter", suffix: " hrs" },
  { value: 50, label: "Colleges already on the platform", suffix: "+" },
];

export default function CareerPlatformSection() {
  return (
   <section className="bg-white  px-6 md:px-12 lg:px-20">
      <div className="">
        
        {/* Main Banner Layout */}
        <div className="flex flex-col lg:flex-row items-center  relative">
          
          {/* Left Side: Dark Blue Rounded Banner */}
          <motion.div 
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }} 
            className="bg-[#3D447E]  text-white p-10 md:p-16 lg:px-20  rounded-[2.5rem] mt-24 lg:mt-40 lg:w-[65%] w-full flex-shrink-0 z-10" 
            >
            <div className="max-w-lg ">
          <h2 className="text-2xl lg:text-3xl font-semibold leading-tight mb-6">
              A career platform built for India's <br className="hidden md:block" /> next generation
            </h2>
            <p className="text-gray-200 text-sm md:text-base mb-10 max-w-2xl leading-relaxed">
              Spreadnext helps talent discover jobs, collaborations, and learning
              paths while helping companies source, assess, and grow teams
              through one AI-driven ecosystem.
            </p>
            
           
                <Button 
                            // onClick={handleSignup} 
                            className="!bg-[#0A66C2] !font-semibold py-1" // Cleaned redundant MT here
                          >
                              Request a campus demo  <MoveRight className="w-5 h-5 mx-4" />
                          </Button>
            </div>
         
          </motion.div>

          {/* Right Side: Overlay Image */}
          <motion.div 
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }} 
            className="lg:w-[45%] w-full lg:-ml-[10%] -mt-[70px] lg:mt-8 flex-shrink-0 z-20">
            <div className="relative h-[360px] w-full rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-[6px] border-white lg:border-none">
              <Image
                src="/compus-platform-hero.png" 
                alt="Students collaborating on campus"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Grid - Same as Image Design */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 mt-16 px-4">
          {heroStats.map((stat, i) => (
            <motion.div  key={i} className="flex flex-col justify-start items-center text-center">
              <span className="text-4xl md:text-4xl font-semibold text-[#1B1B24] tracking-tighter">
                <Counter 
                  target={stat.value} 
                  suffix={stat.suffix} 
                  decimals={stat.isDecimal ? 1 : 0} 
                />
              </span>
              <span className="text-[#0663ED] font-medium mt-4 text-sm md:text-[15px] leading-snug max-w-[200px]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
