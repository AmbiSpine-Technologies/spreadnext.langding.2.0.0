"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, scaleIn } from "@/animations/animation"; // Path check kar lein

const resumeFeatures = [
  { text: "Multi-page resume templates built for Indian job market" },
  { text: "Live ATS score — see your shortlisting likelihood instantly" },
  { text: "One-click resume tailored per job you apply to" },
  { text: "Skills gap flagged before you apply" },
];

// Stagger logic for features grid
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function ResumeFilteringSection() {
  return (
    <section className="bg-[#A66565] text-white px-6 py-24 sm:px-12 md:px-20 lg:px-32 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24">
        
        {/* LEFT SECTION - Using fadeIn("right") */}
        <motion.div 
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:w-[45%] w-full flex flex-col items-start"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10 leading-[1.15] tracking-tight max-w-lg">
            Your resume is being filtered out before a human even reads it
          </h2>
          
          <motion.a
            href="/templates"
            variants={scaleIn("none", 0.3)} // Button scales in with a slight delay
            initial="hidden"
            whileInView="show"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 border-2 border-white/80 px-10 py-4 rounded-full font-bold text-lg hover:border-white transition-all duration-300"
          >
            Explore Templates <span className="text-xl">→</span>
          </motion.a>
        </motion.div>

        {/* RIGHT SECTION */}
        <div className="lg:w-[55%] w-full">
          {/* Paragraph using fadeIn("up") */}
          <motion.p 
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[17px] leading-[1.7] mb-12 opacity-95 font-medium"
          >
            Most companies use automated systems to screen resumes before they reach a recruiter. If
            your resume isn't built right — you're invisible. Spreadnext's Resume Builder creates a profile-
            matched, ATS-optimised resume with a live score that shows you exactly how likely you are
            to get shortlisted — before you hit send.
          </motion.p>

          {/* Cards Grid with Staggered fadeIn */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5"
          >
            {resumeFeatures.map((item, index) => (
              <motion.div
                key={index}
                // Item variants use the same logic as fadeIn
                variants={fadeIn("up", 0)} 
                className="bg-[#D48B8B8C] p-6 rounded-xl flex items-center justify-center min-h-[110px] text-center backdrop-blur-sm cursor-default"
              >
                <p className="text-[15px] leading-snug font-semibold opacity-90 px-2">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}