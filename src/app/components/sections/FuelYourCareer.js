"use client";
import React from "react";
import { Brain, Activity, UserCog } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const skillData = [
  {
    icon: <Brain size={32} />,
    title: "Skill Carousel",
    description: "Explore top skills in tech, product, design, business, and marketing — rotating based on market data",
  },
  {
    icon: <Activity size={32} />,
    title: "Skill Demand Heatmap",
    description: "Explore top skills in tech, product, design, business, and marketing — rotating based on market data",
  },
  {
    icon: <UserCog size={32} />,
    title: "Role-to-Skill Clustering",
    description: "Explore top skills in tech, product, design, business, and marketing — rotating based on market data",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // This creates the "one after another" effect
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export default function FuelYourCareer() {
  return (
    <section className="bg-[#A66565] text-white px-6 py-16 sm:px-12 md:px-20 lg:px-32 overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
        
        {/* Left Section - Fades in from left */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-[40%] w-full"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Fuel Your Career with <br /> Skills That Matter
          </h2>
          <p className="mb-8 text-lg opacity-90">
            Don’t just learn more — learn right.
          </p>
          <Link
            href="/skills"
            className="inline-block border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#A66565] transition-all duration-300"
          >
            Start Your Skill Journey
          </Link>
        </motion.div>

        {/* Right Section */}
        <div className="lg:w-[60%] w-full">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-xl leading-relaxed mb-10 opacity-90"
          >
            At Spreads, our AI-powered system helps you discover the perfect
            skill combination for your next career move. Whether you're diving
            into design, jumping into AI, or growing in product management — we
            match real-time hiring data with your interests.
          </motion.p>

          {/* Animated Cards Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {skillData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, backgroundColor: "rgba(212, 139, 139, 0.7)" }}
                className="bg-[#D48B8B8C] p-6 rounded-2xl shadow-lg backdrop-blur-sm transition-colors cursor-default"
              >
                <div className="mb-4 flex justify-start items-center text-white">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed opacity-80">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}