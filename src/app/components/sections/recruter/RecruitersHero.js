
// src/components/sections/home/RecruitersHero.js
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/animations/animation";
import Button from "../../common/button";
import { useRouter } from 'next/navigation';


export default function RecruitersHero() {
  const router = useRouter();
  

  return (
    <section className="relative pt-32 pb-20 mt-10 bg-white px-6 lg:px-28">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex-1 space-y-8"
        >
          {/* Text matches exactly with design image */}
          <motion.h1 variants={fadeIn("up", 0.2)} className="text-4xl lg:text-5xl font-bold text-[#172127] leading-[1.1]">
            Hire better candidates. Faster. 
            For less.
          </motion.h1>
          
          <motion.p variants={fadeIn("up", 0.3)} className="text-lg text-gray-500 max-w-lg leading-relaxed">
            <strong className="text-[#0013E3]">Spreadnext</strong> gives every recruiter — from a 5-person startup to a 5,000-person enterprise — one platform to post jobs, find skill-verified talent, run campus drives, and track every hire to completion.
          </motion.p>

          <motion.div variants={fadeIn("up", 0.4)} className="flex gap-4">
            <Button> <a 
  href="https://spreadnext.com/signin"
  target="_blank"
  rel="noopener noreferrer"
> Try Spreadnext
  </a></Button> {/* Updated text as per design */}
            <button   onClick={() => router.push("/contact-us")}  className="rounded-full hover:cursor-pointer h-12 px-10 font-semibold bg-[#E2E8F0] text-[#0b171f] hover:bg-gray-200 transition-all">
              Request a hiring demo
            </button>
          </motion.div>
        </motion.div>

        {/* Right Image Container - Optimized Aspect Ratio */}
        <motion.div 
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          animate="show"
          className="flex-1 relative w-full aspect-[16/10] md:aspect-[1.5/1] rounded-[2rem] overflow-hidden shadow-2xl"
        >
          <Image 
            src="/hero-section.png" 
            alt="Recruiters Hero"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}