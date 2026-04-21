"use client";
import { motion } from "framer-motion";
import { fadeIn, scaleIn } from "@/animations/animation";
import Image from "next/image";
import Button from "../../common/button";
import { useRouter } from 'next/navigation';

export default function WhyChooseSpreadnext() {
    const router = useRouter();
  
  return (
    <section className=" px-6 lg:px-28 bg-[#180085]">
      <motion.div
        variants={scaleIn("none", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto  p-10 lg:p-20 relative overflow-hidden"
      >
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-medium text-white font-inter inline-block pb-1">
            Why recruiters choose Spreadnext over 
            <br className="hidden md:block" /> Naukri, LinkedIn & Apna
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side: Illustration */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[400px] aspect-square">
              <Image
                src="/Investor-banking..png" // Apni image ka path yahan badlein
                alt="Recruiter benefit illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Side: Features/Content */}
          <div className="flex-1 space-y-8 font-inter">
            <motion.div variants={fadeIn("left", 0.3)} className="space-y-6">
              <p className="text-[#fcf8ffec] text-lg leading-relaxed font-normal">
                Spreadnext gives you job posting, candidate search, and campus 
                hiring tools — at a price that makes sense for every company size.
              </p>

              <div className="space-y-4 font-inter">
                <p className="text-[#fcf8ffec] text-lg leading-relaxed font-normal">
                  <span className="font-bold text-white">Skill-verified candidates.</span> Not just uploaded CVs. Body: Every Spreadnext candidate has a Career Readiness Score built from their skills, projects, certifications, and activity on the platform. You see the signal — not just the noise.
                </p>
                
                <p className="text-[#fcf8ffec] text-lg leading-relaxed font-normal">
                  Every Spreadnext candidate has a Career Readiness Score built from their skills, projects, certifications, and activity on the platform. You see the signal — not just the noise.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Buttons */}
       
         
        <motion.div variants={fadeIn("up", 0.4)}  className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-16">
                 <Button> <a 
          href="https://spreadnext.com/signin"
          target="_blank"
          rel="noopener noreferrer"
        > Try Spreadnext
          </a></Button> {/* Updated text as per design */}
                    <Button   onClick={() => router.push("/contact-us")} className="rounded-full h-12 px-10 font-semibold bg-[#b6d1d6] !text-gray-800 hover:bg-[#a6c5c9] transition-all shadow-sm active:scale-95">
                      Request a hiring demo
                    </Button>
                  </motion.div>

        </motion.div>
    
    </section>
  );
}