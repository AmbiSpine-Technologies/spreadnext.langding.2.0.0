// src/components/sections/talents/PricingSection.js
"use client";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/animations/animation";
import Image from "next/image";

const PRICING_DATA = [
  {
    plan: "Free",
    price: "₹0",
    period: "/ forever",
    badge: "STARTER",
    description: "If you need to fill 1-2 open roles and are hiring fewer than 3 people a year — start here with zero commitment.",
    features: [
      "2 active job posts at a time",
      "AI-matched candidate recommendations",
      "50 candidate profile views/month",
      "Basic job board listing",
      "10 direct messages/month",
    ],
    buttonText: "Post a Job",
    isPopular: false,
    illustration: "/pricing-1.png", // Image from image_565ae4.png
    bgColor: "bg-[#FFF9E5]",
  },
  {
    plan: "Pro",
    price: "₹2,999",
    period: "/ month",
    badge: "GROWTH",
    description: "If you aren't getting enough quality candidates through job posting alone and are hiring 3-10 people a year.",
    features: [
      "Unlimited active job posts",
      "Full candidate database access",
      "Advanced AI matching & 20+ filters",
      "Recruiter dashboard & built-in ATS",
      "Unlimited direct messaging",
      "Priority listing on job board",
      "Career readiness score per candidate",
    ],
    buttonText: "Get started",
    isPopular: true,
    illustration: "/pricing-2.png",
    bgColor: "bg-[#E6FBFF]",
  },
  {
    plan: "Scale",
    price: "Custom pricing",
    period: "",
    badge: "ENTERPRISE",
    description: "If your roles are hard to fill, you're running campus drives, or hiring more than 10 people a year at scale.",
    features: [
      "Everything in Pro",
      "Campus hiring suite — 800+ colleges",
      "Dedicated account manager",
      "Custom ATS integrations",
      "Post-hire retention tracking",
      "Hiring analytics & reports",
      "Bulk hiring campaigns",
    ],
    buttonText: "Contact us",
    isPopular: false,
    illustration: "/pricing-3.png",
    bgColor: "bg-[#F5E6FF]",
  },
];

export default function PricingSection() {
  return (
    <section className="py-24 bg-white px-6 lg:px-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-[#172127]">
            Find simple hiring pricing are right for you
          </h2>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {PRICING_DATA.map((item, i) => (
            <motion.div 
              key={i}
              variants={fadeIn("up", 0.2 * i)}
              className={`relative flex flex-col rounded-[2rem] border-2 transition-all duration-300 ${
                item.isPopular ? "border-[#0013E3] shadow-2xl scale-105 z-10" : "border-gray-100 shadow-sm"
              }`}
            >
              {/* Top Illustration Box */}
              <div className={`${item.bgColor} h-48 rounded-t-[1.8rem] flex items-center justify-center relative overflow-hidden`}>
                <div className="relative w-32 h-32">
                  <Image src={item.illustration} alt={item.plan} fill className="object-contain" />
                </div>
                {item.isPopular && (
                  <div className="absolute top-0 w-full bg-[#0013E3] text-white text-[10px] font-bold py-1 uppercase tracking-widest text-center">
                    Most Popular
                  </div>
                )}
              </div>

              {/* Content Box */}
              <div className="p-8 flex-1 flex flex-col bg-white rounded-b-[1.8rem]">
                <div className="mb-6">
                  <span className="text-[10px]  text-gray-600 border border-gray-200 px-3 py-1 rounded-full uppercase">
                    {item.badge}
                  </span>
                  <h3 className="text-2xl font-bold mt-4 text-[#172127]">{item.plan}</h3>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-base font-medium ">{item.price}</span>
                    <span className="text-gray-400 text-sm">{item.period}</span>
                  </div>
                </div>

                <div className="mb-8 min-h-[80px]">
                  <p className="text-xs font-bold text-[#172127] mb-2">Who it's best for</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
                </div>

                <div className="space-y-4 mb-10 flex-1">
                  <p className="text-xs font-bold text-[#172127]">Key features</p>
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`mt-1 rounded-full p-0.5 ${item.isPopular ? "bg-[#0013E3]" : "bg-gray-200"}`}>
                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-xs text-gray-600 leading-tight">{feature}</p>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-2 hover:cursor-pointer rounded-full font-bold transition-all ${
                  item.isPopular 
                  ? "bg-[#0013E3] text-white " 
                  : "border-2 border-gray-200 text-gray-700 hover:bg-gray-50"
                }`}>
                  {item.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}