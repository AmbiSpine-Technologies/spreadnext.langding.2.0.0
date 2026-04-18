// src/components/sections/business/WhySpreadnext.js
"use client";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/animations/animation";
import Image from "next/image";

const WHY_DATA = [
  {
    title: "Verified expert partners only",
    desc: "Every CA firm and advisory partner on Spreadnext is verified, licensed, and experienced. You're never handed to a junior or a generalist.",
    icon: "/logo/Account security, Antivirus protection, Shield with checkmark badge.svg", 
  },
  {
    title: "Response in 24 hours. Always",
    desc: "Submit your query today. A dedicated expert picks it up within 24 hours — no waiting, no follow-up calls needed.",
    icon: "/logo/clock.svg",
  },
  {
    title: "Your data stays yours.",
    desc: "All financial and business information shared on Spreadnext is fully encrypted and confidential. We never share your data with third parties.",
    icon: "/logo/map.svg",
  },
  {
    title: "Pan-India coverage.",
    desc: "Whether you're in Mumbai, Rewa, or a Tier 3 city — our partner network covers every state and union territory across India.",
    icon: "/logo/lock.svg",
  },
];


export default function WhySpreadnext() {
          
  return (
    <section className="py-24 bg-white px-6 lg:px-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-medium text-[#172127]">
            Why <span className="text-[#0013E3]">spreadnext</span> for your business
          </h2>
          <p className="text-[#516169] text-lg">Not just a platform. A compliance partner.</p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-10 lg:pb-20"
        >
          {WHY_DATA.map((item, i) => (
            <motion.div variants={fadeIn("up", 0.1 * i)} key={i} className="space-y-6">
              <div className="relative w-32 h-32 mx-auto md:mx-0">
                <Image src={item.icon} alt={item.title} fill className="object-contain" />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-[#172127] leading-tight">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}