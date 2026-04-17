"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, scaleIn } from "@/animations/animation";


const features = [
  {
    title: "Don't wait for placement season. Start now.",
    desc: (
      <>
        Build your career profile, take real gigs, and connect with seniors
        who've already cracked the companies you want. When placement season hits — you're ready.
      </>
    ),
  },
  {
    title: "A degree gets you in the room. Your profile gets you the offer.",
    desc: (
      <>
        Stop sending CVs into the void.{" "}
        <span className="text-[#0013E3] font-semibold">Spreadnext</span>{" "}
        matches you to jobs based on your actual skills — not just your college name.
        Apply smarter. Hear back faster.
      </>
    ),
  },
  {
    title: "You've started. Now it's time to level up.",
    desc: (
      <>
        A better role, better money, or a full pivot —{" "}
        <span className="text-[#0013E3] font-semibold">Spreadnext</span>'s AI
        knows where you stand and what move makes sense next. Your network here
        opens doors your current job can't.
      </>
    ),
  },
];

export default function JourneySection() {
  return (
    <section className="py-24 px-6 lg:px-28 bg-white">
      <div className="">
        {/* Section Header */}
               <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-[#1B1B24] mb-16 leading-tight"
        >
          Wherever you are in your journey —{" "}
          <span className="text-[#0013E3] font-bold">
            Spreadnext
          </span>{" "}
          has your next step.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side: Large Image */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative aspect-[4/2.3] rounded-[2.5rem] overflow-hidden shadow-xl"
          >
            <img
              src="/journey-social-hub.png" // image_71ede5.png content
              alt="Students collaborating"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Side: Feature Cards */}
          <div className="space-y-6">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn("up", idx * 0.2, 0.9)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-[#F9F6E9] p-8 rounded-[1.5rem] border border-transparent hover:border-[#0013E3]/10 transition-all cursor-default"
              >
                <h4 className="text-[19px] font-bold text-[#1B1B24] mb-2">
                  {item.title}
                </h4>
               <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
  {item.desc}
</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}