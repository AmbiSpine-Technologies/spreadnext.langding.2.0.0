"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Counter } from "@/utils/counter";
const stats = [
  { label: "Colleges", value: 1000, suffix: "+" },
  { label: "Expert Hiring", value: 100, suffix: "+" },
  { label: "Cities Presence", value: 50, suffix: "+" },
  { label: "Companies", value: 500, suffix: "+" },
];
// Split your logos into two sets for two rows
const row1 = [
  "Adobe.svg", "Docker.svg", "Dribbble.svg", "Elastic.svg", 
  "Gitlab.svg", "Grammarly.svg", "Microsoft.svg"
];

const row2 = [
  "Monzo.svg", "Opendoor.svg", "Razorpay.svg", "Slack.svg", 
  "Uber.svg", "Webflow.svg", "YouTube.svg"
];

const MarqueeRow = ({ items, direction = "left" }) => {
  const moveLeft = direction === "left";
  
  return (
    <div className="flex overflow-hidden py-4 select-none">
      <motion.div
        className="flex gap-12 md:gap-20 items-center whitespace-nowrap"
        animate={{ x: moveLeft ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ 
          repeat: Infinity, 
          duration: 25, 
          ease: "linear" 
        }}
      >
        {/* We triple the array to ensure no gaps during the loop */}
        {[...items, ...items, ...items].map((logo, idx) => (
          <Link 
            key={idx} 
            href={`/companies/${logo.split('.')[0].toLowerCase()}`}
            className="group relative flex-shrink-0"
          >
            <img
              src={`/logo/${logo}`}
              alt={logo}
              className="h-8 md:h-12 w-auto   transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
            />
            {/* Subtle glow on hover */}
            {/* <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 blur-xl transition-all rounded-full" /> */}
          </Link>
        ))}
      </motion.div>
    </div>
  );
};



const logos = [
  "Adobe.svg", "Docker.svg", "Dribbble.svg", "Elastic.svg", "Gitlab.svg", 
  "Grammarly.svg", "Microsoft.svg", "Monzo.svg", "Opendoor.svg", "Razorpay.svg"
];
export default function TrustedSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="px-8 text-center">
        <div className="mb-16 text-center overflow-hidden">
   
  {/* Title Animation: Slips up from the bottom */}
  <motion.h2 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="text-4xl md:text-5xl text-[#1B1B24] font-bold"
  >
    Trusted across <span className="text-blue-600">India</span>
  </motion.h2>

  {/* Paragraph Animation: Fades in slightly after the title */}
  <motion.p 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    viewport={{ once: true }}
    className="text-[#0663ED] text-2xl mt-4"
  >
    Where top companies hire and top colleges send their best.
  </motion.p>

        </div>
     
        {/* Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 mx-10">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-3xl md:text-4xl font-extrabold text-[#1B1B24]">
                <Counter target={stat.value} suffix={stat.suffix}  />
              </span>
              <span className="text-[#0663ED] font-medium mt-3 text-lg">{stat.label}</span>
            </div>
          ))}
        </div>

     <div className="space-y-4">
        {/* Row 1: Moves Left */}
        <MarqueeRow items={row1} direction="left" />
        
        {/* Row 2: Moves Right */}
        <MarqueeRow items={row2} direction="right" />
      </div>

      </div>
    </section>
  );
}