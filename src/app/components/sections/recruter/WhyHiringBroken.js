// src/components/sections/talents/WhyHiringBroken.js
"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/animation";
import Image from "next/image";

const problems = [
  {
    title: "Volume without quality",
    subTitle: "500 applications. 3 worth calling.",
    desc: "Job boards flood your inbox with unqualified applicants. You spend more time filtering than hiring. There's no skill verification. No readiness signal. Just CVs.",
    img: "/hero-section.png"
  },
  {
    title: "Campus hiring is chaos",
    subTitle: "Drive day shouldn't feel like a fire drill.",
    desc: "Coordinating with 10 colleges, managing student lists on Excel, chasing offer letters over WhatsApp — campus hiring is operationally broken for every recruiter who's tried it.",
    img: "/hero-section.png"
  },
  {
    title: "No post-hire visibility",
    subTitle: "You hire them. Then what?",
    desc: "Most platforms stop at the offer letter. No one tracks whether the hire actually worked out. No feedback loop. No data to improve your next campus visit.",
    img: "/hero-section.png"
  }
];
export default function WhyHiringBroken() {
  return (
    <section className="py-24 bg-white px-6 lg:px-28">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-32 text-black">
          Why hiring in India is still broken
        </h2>

        <div className="space-y-32">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              // Design mein alternating layout hai isliye flex-row-reverse logic
              // className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
              //   i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              // }`}
                 className={`flex flex-col lg:flex-row items-start gap-12 lg:gap-24 `}
            >
              {/* Text Side */}
              <motion.div 
                variants={fadeIn(i % 2 === 0 ? "right" : "left", 0.2)}
                initial="hidden" 
                whileInView="show" 
                viewport={{ once: true }}
                className="flex-1"
              >
                <h3 className="text-3xl font-bold text-black mb-2">
                  {item.title}
                </h3>
                <h4 className="text-xl font-bold text-[#4F46E5] mb-4">
                  {item.subTitle}
                </h4>
                <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
                  {item.desc}
                </p>
              </motion.div>

              {/* Image Side */}
              <motion.div 
                variants={fadeIn(i % 2 === 0 ? "left" : "right", 0.3)}
                initial="hidden" 
                whileInView="show" 
                viewport={{ once: true }}
                className="flex-1 w-full"
              >
                <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-sm border border-gray-100">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom Button like in design */}
        <div className="flex justify-center mt-20">
            <button className="bg-[#2563EB] text-white px-10 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all">
                Try Spreadnext
            </button>
        </div>
      </div>
    </section>
  );
}