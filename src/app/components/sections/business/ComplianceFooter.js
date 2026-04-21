"use client";
import { motion } from "framer-motion";
import { fadeIn, scaleIn } from "@/animations/animation"; // Path check kar lena
import Image from "next/image";
import Button from "../../common/button";
import { useRouter } from 'next/navigation';

export default function ComplianceFooter() {
      const router = useRouter();
  return (
    <div className="w-full">
      {/* 1. Testimonial / Quote Section */}
      <section className="bg-[#EAEAEA] py-16 px-6 lg:px-28">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          
          {/* Left Side: Image with ScaleIn Animation */}
          <motion.div 
            variants={scaleIn("none", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative w-full md:w-[450px] h-[280px] rounded-3xl overflow-hidden shadow-xl"
          >
            <Image 
              src="/person-image.png" // Apni image ka sahi path yahan dalein
              alt="Expert Partner"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right Side: Quote with FadeIn Animation */}
          <motion.div 
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            {/* Quote Icon */}
            <span className="text-[#8e0dd9] text-[120px] font-serif absolute -top-20 -left-4 opacity-50">
              “
            </span>
            <p className="text-[#275e6e] text-lg lg:text-xl font-medium leading-relaxed relative z-10 pl-6">
              As regulations evolve and businesses go global — compliance gets more complex. 
              Our specialized partners stay ahead of every new requirement so you don't have to.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Final CTA Section */}
      <section className="bg-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-2">
              Let's handle the compliance. <span className="text-[#0211bb]">You focus on the business.</span>
            </h2>
            
            <p className="text-[#204156] text-lg md:text-xl font-medium flex flex-wrap justify-center gap-2 md:gap-4">
              <span>Free first consultation</span>
              <span className="hidden md:inline">•</span>
              <span>24-hour response</span>
              <span className="hidden md:inline">•</span>
              <span>Expert partners across India</span>
            </p>
              <motion.div
            variants={scaleIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="pt-6 flex justify-center"
          >
            <Button  onClick={() => router.push("/contact-us")}  className="bg-[#0013E3] text-white hover:bg-blue-800">
              Enquire about specialized services <span className="ms-2"> →</span>
            </Button>
          </motion.div>
          </motion.div>

          
        </div>
      </section>
    </div>
  );
}