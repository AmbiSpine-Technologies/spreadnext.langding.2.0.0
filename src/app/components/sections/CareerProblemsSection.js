"use client";
import { useState } from "react"; 
import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { fadeIn } from "@/animations/animation"; 

const problemsData = [
  {
    id: 1,
    image: "/problem1.png", // From image_abca94.png (Left top)
    title: "A career platform built for India's next generation",
    description: "Most TPOs manage 500+ students across drives, offers, and follow-ups on Excel. Nothing is connected. Everything is manual.",
  },
  {
    id: 2,
    image: "/problem2.png", // From image_abca94.png (Right top)
    title: "No visibility on skill readiness",
    description: "Colleges send students to drives without knowing who is actually ready. Rejections hurt both the student and the institution's placement record.",
  },
  {
    id: 3,
    image: "/problem3.png", // From image_abca94.jpg (Bottom center)
    title: "Employers don't come back",
    description: "A bad hire from campus means an employer never returns. No feedback loop. No data. No way to improve.",
  },
];

export default function CareerProblemsSection() {
  const [isDone, setIsDone] = useState(false);
  return (
    <section className="bg-[#FAFAFA] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Professional Header */}
        <motion.div 
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl py-6 font-bold text-[#1B1B24] tracking-tight leading-tight">
<Typewriter
        words={["A career platform built for India's next generation"]}
        // loop={1} ensures it stops at the end of the first iteration
        loop={1}
        // Very fast speed as per your requirement
        typeSpeed={40} 
        deleteSpeed={50}
        delaySpeed={1000}
        // Only show cursor if typing is NOT done
        cursor={!isDone}
        cursorStyle="|"
        // triggers when the entire loop (1 time) is finished
        onLoopDone={() => setIsDone(true)}
      />
          </h2>
        </motion.div>

        {/* Top Grid (2 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {problemsData.slice(0, 2).map((item, index) => (
            <ProblemCard key={item.id} data={item} delay={0.3 + index * 0.2} />
          ))}
        </div>

        {/* Bottom Centered Item */}
        <div className="flex justify-center">
          <div className="w-full md:w-1/2">
            <ProblemCard data={problemsData[2]} delay={0.5} />
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-component for better maintenance
function ProblemCard({ data, delay }) {
  return (
    <motion.div
      variants={fadeIn("up", delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative aspect-[16/10] w-full rounded-[2rem] overflow-hidden bg-gray-200 mb-8 shadow-sm transition-shadow duration-300 group-hover:shadow-xl">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-[#1B1B24]">
          {data.title}
        </h3>
        <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium">
          {data.description}
        </p>
      </div>
    </motion.div>
  );
}