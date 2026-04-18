
"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, scaleIn } from "@/animations/animation"; // Ajusta la ruta según tu proyecto
import { Counter } from "@/utils/counter"; // Ajusta la ruta
import Button from "../components/common/button";
export default function ScoreSection() {
  const skillsData = [
    { label: "Skills Completeness", value: 70, color: "#FF6A3D", position: "top-[-0px] left-[-30px]" },
    { label: "Job market alignment", value: 66, color: "#27C4C9", position: "bottom-[20px] left-[-80px]" },
    { label: "Profile Strength", value: 50, color: "#F4A300", position: "bottom-[-40px] left-[60px]" },
  ];

  return (
    <section className="w-full bg-[#EEF0F3] py-24 px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 px-6">
        
        {/* LEFT SIDE (ILLUSTRATION + ANIMATED BARS) */}
        <div className="relative w-full lg:w-[45%] flex justify-center items-center min-h-[400px]">
          
          {/* Illustration Container */}
          <motion.div
            variants={scaleIn("none", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative z-10"
          >
            <img
              src="/employer2.png"
              alt="illustration"
              className="w-[300px] md:w-[350px] object-contain"
            />
          </motion.div>

          {/* Floating Progress Bars */}
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.4 + index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`absolute ${skill.position} z-20 w-[240px] md:w-[280px] bg-transparent`}
            >
              <div className="flex justify-between items-center text-[14px] font-medium text-gray-600 mb-2">
                <span className="whitespace-nowrap">{skill.label}</span>
                <span className="font-bold text-gray-800">
                  <Counter target={skill.value} suffix="%" duration={2000} />
                </span>
              </div>
              
              {/* Outer Bar */}
              <div className="h-[10px] w-full bg-white/50 backdrop-blur-sm border border-gray-200 rounded-full overflow-hidden shadow-sm">
                {/* Inner Animated Bar */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                  style={{ backgroundColor: skill.color }}
                  className="h-full rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT SIDE CONTENT */}
        <motion.div 
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full lg:w-[50%] max-w-2xl"
        >
          <h2 className="text-[36px] md:text-3xl font-medium text-[#1B1B24] leading-[1.1] mb-6">
            Know exactly where you stand — before employers do
          </h2>

          <p className="text-gray-600 text-[18px] leading-relaxed mb-8">
            Most job seekers apply blind. They don't know why they're getting
            rejected. The{" "}
            <span className="text-[#0013E3] font-bold">
              Spreadnext Career Readiness Score
            </span>{" "}
            changes that. It analyses your profile across skills, projects,
            experience, and goals — and tells you exactly what to fix before your
            next application.
          </p>

          <button className="bg-[#C9D6E4] text-[#1B1B24] px-6 py-2.5 rounded-full font-medium text-lg  hover:bg-[#b8c7d8] hover:cursor-pointer transition-all transform  ">
            See Your Score
          </button>
        </motion.div>
      </div>
    </section>
  );
}