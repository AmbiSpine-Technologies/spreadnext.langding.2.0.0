
// src/components/sections/business/HowItWorks.js
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/animations/animation";

const STEPS = [
  {
    id: "-1",
    title: "Step -1",
    desc: "As regulations evolve and businesses go global — compliance gets more complex. Our specialized partners stay ahead of every new requirement so you don't have to.",
    icon: "/logo/Google Ads.svg",
    
  },
  {
    id: "-2",
    title: "Step -2",
    desc: "Expert assigned in 24 hours. A verified CA or advisory expert is assigned to your query — matched to your industry, location, and need.",
    icon: "/logo/Group Task.svg", // SVG from your project root/public
 
  },
  {
    id: "-3",
    title: "Step -3",
    desc: "Free consultation call. Your expert calls to understand your situation fully before any work begins. No commitment needed.",
    icon: "/logo/End Call.svg",
  },
  {
    id: "-4",
    title: "Step -4",
    desc: "Work begins. Once you're satisfied — work starts immediately. You're kept updated at every step. No surprises.",
    icon: "/logo/Phonelink Ring.svg",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#172127] mb-2">How it works</h2>
          <p className="text-[#204156] font-medium text-lg">
            Simple process. Expert outcome.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Horizontal Dashed Line (Desktop Only) */}
          {/* <div className="hidden md:block absolute top-6 left-[10%] right-[10%] border-t-2 border-dashed border-blue-400 z-0" /> */}

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10"
          >
            {STEPS.map((step, i) => (
              <motion.div 
                key={i} 
                variants={fadeIn("up", 0.2 * i)}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 bg-white flex items-center justify-center mb-2 relative">
                   <div className="relative w-12 h-12 transition-transform group-hover:scale-110 duration-300">
                      <Image 
                        src={step.icon} 
                        alt={step.title} 
                        fill 
                        className="object-contain"
                      />
                   </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h1 className="text-xl font-bold text-[#213a49]">{step.title}</h1>
                  <p className="text-[#516169] text-base leading-relaxed px-2">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}