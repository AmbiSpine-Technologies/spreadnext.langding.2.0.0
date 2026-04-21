"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/animation";
import Button from "@/app/components/common/button";
import { useRouter } from "next/navigation";

const FeatureCard = ({ card, index }) => {
const router = useRouter();
  const handleNavigation = () => {
    // Authentication Check Logic
    // Aap yahan localStorage, cookies ya auth-provider (Clerk/NextAuth) ka check laga sakte hain
    const isLoggedIn = typeof window !== "undefined" && localStorage.getItem("token");

    if (isLoggedIn) {
  window.location.href = "https://spreadnext.com/jobs";
} else {
  window.location.href = "https://spreadnext.com/signin";
}
  };


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col items-start text-left max-w-[360px]"
    >
      {/* Image Container */}
      <div className="w-full aspect-[4/4] relative rounded-2xl overflow-hidden mb-8">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Text Content */}
      <h3 className="text-xl font-semibold font-inter text-gray-900 leading-tight mb-2">
        {card.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {card.description}
      </p>

      {/* Action Button - Using your custom Button component */}
       <div className="w-full flex justify-center mt-auto">
        <Button 
          className="bg-[#0663ED] hover:!bg-[#0651c2] rounded-full  font-semibold text-white"
          onClick={handleNavigation}
        >
          {card.buttonText}
        </Button>
      </div>
   
    </motion.div>
  );
};

export default function DigitalHomeSection() {
  const cards = [
    {
      id: 1,
      image: "/Everything-career-needs.png",
      title: "Everything your career needs. In one place",
      description:
        "AI matches your profile to real jobs from companies actively hiring right now not generic listings. Matched opportunities.",
      buttonText: "Browse jobs",
      route: "/jobs",
    },
    {
      id: 2,
      image: "/Your-profile-does-work.png",
      title: "Your profile does the work for you",
      description:
        "Build a career identity beyond a resume — skills, projects, gigs, and achievements that employers actually look for.",
      buttonText: "Build your profile",
      route: "/profile/setup",
    },
  ];

return (
  <section className="bg-white py-24 px-6 md:px-12">
    <div className="max-w-[1400px] mx-auto">
      
      {/* Title */}
      <motion.h2 
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-3xl md:text-4xl lg:text-[60px] py-10 font-semibold text-black leading-tight text-center mb-24"
      >
        Everything your career needs. <br /> In one place
      </motion.h2>

      {/* LAYOUT: 3-column grid to ensure equal spacing.
          Gap is consistent between all elements.
      */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-16 items-center justify-items-center">
        
        {/* Left Side - Mobile Frame (Width increased to max-w-[400px]) */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full max-w-[380px]" // Increased from 320px
        >
          <div className="relative rounded-[3rem] overflow-hidden aspect-[9/18] bg-gray-50">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/story.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

        {/* Middle & Right Side - Map the two cards into the remaining 2 grid columns */}
        {cards.map((feature, idx) => (
          <FeatureCard key={feature.id} card={feature} index={idx} />
        ))}

      </div>
    </div>
  </section>
);
}