"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/animation";
import Image from "next/image";
import Button from "../../common/button";
const STATS_DATA = [
  { target: 5, suffix: "+", label: "Years of combined partner expertise Pan-India" },
  { target: 24, suffix: " hrs", label: "Coverage across all states & UTs" },
  { target: 100, suffix: "%", label: "Response time guaranteed" },
];

export default function HeroSection() {
  return (
    <section className="mt-32 px-6 pt-20 lg:px-28 !bg-white pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative w-full rounded-[2rem] bg-[#B34545] min-h-[420px] flex flex-col md:flex-row items-center"
        >
          {/* Content Side */}
          <div className="flex-[1.2]  p-8 lg:p-16 z-10 text-left">
            <div className="max-w-lg">
             <h1 className="text-2xl   font-bold text-white mb-6 leading-[1.1]">
              Eliminating the complexity of compliance so you can focus on what you do best.
            </h1>
            <p className="text-[#D2FB8FF5] text-base mb-8 max-w-md leading-relaxed">
              Your partner in navigating the complex legal landscape of business registrations and compliance.
            </p>

            </div>
        
            <Button>
 Get free consultation
            </Button>
           
          </div>

          {/* Overlapping Image Side */}
          <div className="flex-1 relative w-full h-[350px] self-stretch">
            <div className="md:absolute md:-top-16 md:right-20 md:bottom-12 w-full h-full md:w-[110%] rounded-2xl overflow-hidden">
              <Image
                src="/hero-section.png" // Apni image path check karein
                alt="Business Discussion"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
          {STATS_DATA.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeIn("up", 0.3 + i * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center space-y-2"
            >
              <h4 className="text-4xl font-medium text-[#10069F]">
                {stat.target}{stat.suffix}
              </h4>
              <p className="text-gray-600 text-sm font-medium leading-snug max-w-[200px] mx-auto">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}