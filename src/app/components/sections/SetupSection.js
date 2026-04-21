
"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/animation";

export default function CareerSetupSection() {
  const steps = [
    "Onboard your institution. Add your college profile, departments, and batch details. Takes under an hour.",
    "Invite your students. Students join Spreadnext and build their career profiles. You see readiness scores in real-time.",
    "Connect with employers. Spreadnext matches your students to companies hiring from your location, department, and skill profile.",
    "Track outcomes. Every offer, every placement, every rejection — tracked and reported back to your dashboard automatically."
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        
        {/* Left Side: Larger Image & Main Text (60% Width) */}
        <motion.div 
          variants={fadeIn("right", 0.2)} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true }}
          className="w-full lg:w-[50%] flex-shrink-0"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden  group">
            <img 
              src="/setup.png" 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
              alt="Spreadnext Digital Campus Setup" 
            />
          </div>
          
          <div className="mt-6 space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold font-inter text-[#1B1B24] tracking-tight">
              Set up in days. Not months.
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl leading-relaxed font-inter">
              The faster your placement cell runs on real data, the better your outcomes. 
              We built <span className="text-[#0013E3] font-semibold">Spreadnext</span> to go live in 48 hours — so you spend less time setting up 
              and more time placing students.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Step Cards (40% Width) */}
        <div className="w-full lg:w-[50%] space-y-5 mt-4 lg:mt-2">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              variants={fadeIn("left", 0.1 * i + 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-[#F1F3F9] p-8 rounded-[1.5rem] font-inter text-[#3D447E] font-medium text-base  "
            >
              {step}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}