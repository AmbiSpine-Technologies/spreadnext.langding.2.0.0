"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, scaleIn } from "@/animations/animation";
import Button from "@/app/components/common/button";
import { useRouter } from "next/navigation";

const services = [
  { 
    icon: "logo/Taxation-Services.svg", 
    title: "Taxation Services", 
    description: "Income tax, GST, TDS compliance & representation", 
    bgColor: "bg-red-50" 
  },
  { 
    icon: "logo/Accounting-Book-Keeping.svg", 
    title: "Accounting & Book-Keeping", 
    description: "Cloud accounting, payroll, financial statements", 
    bgColor: "bg-blue-50" 
  },
  { 
    icon: "logo/Business-Advisory-Virtual-CFO.svg", 
    title: "Business Advisory & Virtual CFO", 
    description: "Startup advisory, M&A, due diligence, valuation", 
    bgColor: "bg-green-50" 
  },
  { 
    icon: "logo/Corporat-Law-ROC-Compliance.svg", 
    title: "Corporate Law & ROC Compliance", 
    description: "Company incorporation, ROC filing, secretarial work", 
    bgColor: "bg-emerald-50" 
  },
];

export default function ServicesSection() {
  const router = useRouter();
  return (
    <section className="py-24 px-6 bg-[#EEF2FF] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-[#1B1B24] mb-4"
          >
            Discover business & compliance services
          </motion.h2>
          <motion.p 
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-gray-500 text-lg"
          >
            Everything your business needs to stay compliant. <span className="text-blue-600 font-semibold">Stay focused.</span>
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4">
          
          {/* Left: Illustration */}
          <motion.div 
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:w-[45%] w-full"
          >
            <div className="relative w-full aspect-square max-w-[550px] mx-auto">
              <Image 
                 src="/Professionals-shaking-hands-event-Business-networking-partnership.png" // Replace with your image path
                alt="Business Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Right: Service Cards Grid */}
          <div className="lg:w-[55%] w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, idx) => (
                <motion.div 
                  key={idx}
                  variants={scaleIn("none", idx * 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-white/50 flex items-start gap-4 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`p-1 rounded-2x flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Image 
                      src={service.icon} 
                      alt={service.title} 
                      width={32} 
                      height={32} 
                      className="w-10 h-10"
                    />
                  </div>
                  <div>
                    <h6 className="font-bold text-base text-[#1B1B24] text-lg mb-1">{service.title}</h6>
                    <p className="text-gray-500 text-xs leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              ))}
              
              {/* Bottom Special Card */}
              <motion.div 
                variants={scaleIn("up", 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="md:col-span-2 bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4 max-w-md mx-auto md:ml-24 mt-4"
              >
                <div className="p-1 rounded- flex-shrink-0">
                  <Image 
                    src="logo/Specialized-Emerging-Services.svg" 
                    alt="Specialized Services" 
                    width={32} 
                    height={32} 
                  />
                </div>
                <div>
                  <h3 className="font-bold text-[#1B1B24] text-lg mb-1">Specialized & Emerging Services</h3>
                  <p className="text-gray-500 text-xs">NRI taxation, ESG reporting, FSSAI, IEC, NGO registration</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-20">
          <Button className="bg-[#0663ED] hover:!bg-[#0663ED]  text-white rounded-full px-14 h-16 text-lg !font-semibold">
            Explore Business Services
          </Button>
          <Button onClick={() => router.push("/contact-us")} className="bg-[#B5C1D3] hover:bg-[#c4d0e2] !text-[#000000] rounded-full px-14 h-16 text-lg !font-semibold">
            Talk to expert
          </Button>
        </div>
      </div>
    </section>
  );
}