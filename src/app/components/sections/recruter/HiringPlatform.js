"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/animation";
import Image from "next/image";
import { useRouter } from 'next/navigation';
const NEEDS_DATA = [
  {
    title: "Candidate Search & Database",
    subtitle: "Find talent before they find you",
    desc: "Search Spreadnext's full candidate database by skill, location, college, experience level, and career readiness score. Reach out directly. No middlemen. No recruitment agency markup.",
    img: "/hero-section.png", 
  },
  {
    title: "Recruiter Dashboard & ATS",
    subtitle: "Never lose track of a hire again.",
    desc: "Spreadnext's built-in ATS tracks every candidate from application to offer to day one. See where candidates drop off, which job posts perform best, and which colleges deliver your best hires.",
    img: "/hero-section.png",
  },
  {
    title: "Job Posting & AI Matching",
    subtitle: "Your job, matched to the candidates who can actually do it",
    desc: "Post a job in under 5 minutes. Spreadnext's AI reads your requirements and matches them against candidate profiles — skills, projects, experience, location, and career goals.",
    img: "/hero-section.png",
  },
  {
    title: "Campus Hiring",
    subtitle: "Your campus recruitment. Centralised",
    desc: "Schedule drives, invite students, collect applications, and manage offer letters — all in one place. Spreadnext's college network means you reach verified, placement-ready students.",
    img: "/hero-section.png",
  },
];

export default function HiringPlatform() {
    const router = useRouter();
  return (
    <section className=" bg-[#f0f4f5] px-6 lg:px-28">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center pt-20 "
        >
          <h2 className="text-4xl md:text-5xl font-medium text-black mb-4 tracking-tight">
            One platform. Every hiring need
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            From a single job post to a full campus recruitment drive —{" "}
            <span className="text-[#0013E3] font-semibold">Spreadnext</span> handles it all
          </p>
        </motion.div>

        {/* Main Content Wrapper */}
        <div className="flex flex-col lg:flex-row gap-16 relative">
          
          {/* Left Side: Sticky Image - Screen ke vertical center mein rahegi */}
          <div className="hidden lg:block lg:flex-1 h-screen sticky top-0">
             <div className="h-full flex items-center justify-center">
                <div className="relative w-full h-[400px] overflow-hidden  rounded-[2.5rem] bg-white border border-gray-100">
                  <Image
                    src="/hero-section.png"
                    alt="Hiring Features"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
             </div>
          </div>

          {/* Right Side: Scrolling Content Blocks */}
          <div className="flex-1 w-full">
            {NEEDS_DATA.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                // min-h-screen ensures each block takes full height so the next one doesn't overlap early
                className="min-h-screen flex flex-col justify-center py-20 first:pt-0 last:pb-40"
              >
                <div className="space-y-4 max-w-xl">
                  <h3 className="text-2xl font-semibold text-black leading-snug">
                    {item.title}
                  </h3>
                  <h4 className="text-xl font-semibold text-[#275e6e]">
                    {item.subtitle}
                  </h4>
                  
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {item.desc}
                  </p>
                  
                  {/* Branding underline */}
                  <div className="w-56 h-[5px] mt-6 bg-[#275e6e] opacity-80"></div>

                  {/* Mobile Image: Only visible on small screens */}
                  <div className="lg:hidden mt-10 relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-lg border border-gray-200">
                    <Image src={item.img} alt={item.title} fill className="object-cover" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}