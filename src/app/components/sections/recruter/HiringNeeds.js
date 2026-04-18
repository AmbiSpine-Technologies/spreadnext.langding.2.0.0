// src/components/sections/talents/HiringNeeds.js
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/animations/animation";

const NEEDS_DATA = [
  {
    title: "Recruiter Dashboard & ATS",
    subtitle: "Never lose track of a hire again.",
    desc: "Spreadnext's built-in ATS tracks every candidate from application to offer to day one. See where candidates drop off, which job posts perform best, and which colleges deliver your best hires.",
    img: "/images/dashboard-preview.png", // Design image_56cac6 content
  },
  {
    title: "Job Posting & AI Matching",
    subtitle: "Your job, matched to the candidates who can actually do it",
    desc: "Post a job in under 5 minutes. Spreadnext's AI reads your requirements and matches them against candidate profiles — skills, projects, experience, location, and career goals. You see your best-fit candidates first.",
  },
  {
    title: "Campus Hiring",
    subtitle: "Your campus recruitment. Centralised",
    desc: "Schedule drives, invite students, collect applications, and manage offer letters — all in one place. Spreadnext's college network means you reach verified, placement-ready students without the coordination chaos.",
  },
];

export default function HiringNeeds() {
  return (
    <section className="py-24 bg-white px-6 lg:px-28">
      <div className="max-w-7xl mx-auto">
        {/* <div className="mb-16">
          <h2 className="text-4xl font-bold text-[#172127]">
            One platform. Every hiring need
          </h2>
          <p className="text-blue-600 font-medium mt-2">
            The only tools you need to build a world-class team.
          </p>
        </div> */}

        <div className="flex flex-col lg:flex-row gap-16 items-start">
  
          {/* Left Side: Illustration/Image (Sticky on Desktop) */}
          <motion.div 
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            className="flex-1 sticky top-32"
          >
            <div className="relative aspect-square w-full rounded-[2.5rem] overflow-hidden bg-gray-50 shadow-inner">
              <Image 
                src="/images/hiring-illustration.png" 
                alt="Hiring Tools"
                fill
                className="object-contain p-8"
              />
            </div>
          </motion.div>

          {/* Right Side: Information Stack */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            className="flex-1 space-y-3"
          >
            {NEEDS_DATA.map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeIn("up", 0.2)}
                className="group border-b border-gray-100 pb-12 last:border-0"
              >
                <h3 className="text-2xl font-semibold text-[#172127] mb-1">
                  {item.title}
                </h3>
                <h4 className="text-lg font-semibold text-slate-500 mb-4 leading-snug">
                  {item.subtitle}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                  {item.desc}
                </p>
                {/* Underline decorative bar as seen in design */}
                <div className="h-1 w-32 bg-slate-800 mt-6 transition-all group-hover:w-44" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}