"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/animation";
import Image from "next/image";

export default function HiringPlatform() {
  return (
    <section className="py-24 bg-[#f0f4f5] px-6 lg:px-28">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-medium text-black mb-4">
            One platform. Every hiring need
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            From a single job post to a full campus recruitment drive — <span className="text-[#0013E3] font-semibold">Spreadnext</span> handles it all
          </p>
        </motion.div>

        {/* Feature Block */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left: Image Side */}
          <motion.div 
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-sm">
              <Image 
                src="/hero-section.png" // Use your actual image path here
                alt="Candidate Search"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Content Side */}
          <motion.div 
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex-1 max-w-xl"
          >
            <div className="space-y-1">
              <h3 className="text-3xl font-semibold text-black">
                Candidate Search & Database
              </h3>
              <h4 className="text-2xl font-semibold text-[#275e6e]">
                Find talent before they find you
              </h4>
              
              {/* Decorative Underline jaisa screenshot mein hai */}

              <p className="text-gray-600 text-lg leading-relaxed">
                Search <span className="text-[#0013E3] font-semibold">Spreadnext's</span> full candidate database by skill, location, college, experience level, and career readiness score. Reach out directly. No middlemen. No recruitment agency markup.
              </p>
              <div className="w-56 h-[5px] mt-2 bg-[#275e6e] mb-6"></div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}