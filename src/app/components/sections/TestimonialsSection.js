"use client";
import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/animation";
import TestimonialCard from "../common/TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "Mayank Shrivasta",
    role: "CMO",
    location: "Rewa",
    avatar: "MS",
    verified: true,
    quote:
      "Spreads helped me craft a true digital identity — where my projects, passions, and personality all helped unlock real job offers. What I loved most? The balance of storytelling and opportunity. I didn't just apply — I was discovered for who I am.",
  },
  {
    id: 2,
    name: "Aditya Shrivasta",
    role: "Director",
    location: "Rewa",
    avatar: "AS",
    verified: true,
    quote:
      "Spreads didn't just match me to a job — it gave me space to express my story, showcase my work, and connect with hiring teams who actually cared. I felt guided at every step, from uploading my resume to final onboarding. It's more than a job portal — it's where my real career chapter began.",
  },
  {
    id: 3,
    name: "Shivanshu Dubey",
    role: "Admin and Sales",
    location: "Rewa",
    avatar: "SD",
    verified: true,
    quote:
      "With Spreads, I built a microblog that reflected who I really am — not just what's on my resume. That personal touch helped me attract recruiters and collaborators who share my vision. This platform celebrates personality, not just polished profiles. I finally felt like I belonged in the professional world.",
  },
  {
    id: 4,
    name: "Rupendra Vishwkarma",
    role: "Software Developer",
    location: "Hyderabad",
    avatar: "RV",
    verified: true,
    quote:
      "From AI-matched job roles to real conversations with hiring teams, Spreads is built for our generation. The resume parser, auto-interview scheduling, and skill testing made the process feel smooth and transparent. I wasn't guessing anymore — I was growing. This isn't just job search. It's a professional journey.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Header - Matches the clean centered style in the image */}
        <div className="text-center mb-20">
          <motion.h2 
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-[#1B1B24] mb-6"
          >
            Find Your Circle
          </motion.h2>
          <motion.p 
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            Real stories from talented individuals who are already part of our
            growing Community. Their success is just the beginning.
          </motion.p>
        </div>

        {/* Static Grid Layout - Exactly like the screenshot */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeIn("up", index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8   flex flex-col h-full shadow-lg "
            >
          
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gray-200 flex-shrink-0" /> 


                <div>
                  <div className="flex items-center gap-1">
                    <h3 className="text-lg font-bold text-[#1B1B24]">{item.name}</h3>
                    {item.verified && (
                      <div className="bg-blue-600 rounded-full p-0.5">
                        <Check className="w-2.5 h-2.5 text-white" />
                      </div>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm font-medium">{item.role},</p>
                  <p className="text-blue-600 text-sm font-semibold">{item.location}</p>
                </div>
              </div>

              
              <p className="text-[#1B1B24] text-[15px] leading-relaxed font-medium">
                "{item.quote}"
              </p>
            </motion.div>
          ))}
        </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <TestimonialCard
      key={item.id}
      item={item}
      index={index}
      fadeIn={fadeIn}
    />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default TestimonialsSection;