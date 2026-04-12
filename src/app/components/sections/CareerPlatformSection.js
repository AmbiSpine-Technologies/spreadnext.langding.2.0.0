import React from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";

const stats = [
  { value: "82%", label: "Average placement rate across Spreadnext campuses" },
  { value: "3.2x", label: "More employer connections per student" },
  { value: "42 hrs", label: "Average time from drive to offer letter" },
  { value: "50+", label: "Colleges already on the platform" },
];

export default function CareerPlatformSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1440px] mx-auto relative">
        
        {/* Main Banner Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
          
          {/* Left Side: Dark Blue Rounded Banner */}
          <div className="bg-[#3D447E] text-white p-10 md:p-16 lg:p-20 rounded-[2.5rem] lg:w-[60%] w-full flex-shrink-0 z-10">
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
              A career platform built for India's <br /> next generation
            </h2>
            <p className="text-gray-200 text-sm md:text-base mb-12 max-w-2xl">
              Spreadnext helps talent discover jobs, collaborations, and learning
              paths while helping companies source, assess, and grow teams
              through one AI-driven ecosystem.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0013E3] text-white font-semibold rounded-full hover:bg-blue-800 transition duration-300">
              Request a campus demo <MoveRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Side: Overlay Image with Staggered Effect */}
          <div className="lg:w-[55%] w-full lg:-ml-[15%] flex-shrink-0 z-20">
            <div className="relative aspect-[16/10] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image
                src="/compus-platform-hero.png" // Replace with your image path
                alt="Students collaborating on campus"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-20 text-center max-w-6xl mx-auto">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <h4 className="text-5xl md:text-6xl font-extrabold text-[#1B1B24] mb-3 tracking-tighter">
                {stat.value}
              </h4>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-[220px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}