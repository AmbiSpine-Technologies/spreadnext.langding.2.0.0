"use client";
import { motion } from "framer-motion";
import { fadeIn, scaleIn } from "@/animations/animation";
import Image from "next/image";

const TEMPLATES = [
  { id: 1, name: "Modern Professional", img: "/templates1.png", tag: "Most Popular" },
  { id: 2, name: "Executive Minimal", img: "/templates2.jpg", tag: "New" },
  { id: 3, name: "Creative Tech", img: "/template3.png", tag: "ATS Friendly" },
];

export default function HiringAndTemplates() {
  return (
    <section className="py-24 bg-white px-6 lg:px-28">
      <div className="max-w-7xl mx-auto">
        
        {/* --- PART 2: RESUME TEMPLATES SECTION --- */}
        <div className="pt-20 border-t border-gray-100">
          <motion.div 
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-black mb-4">
              Resume templates that get you <span className="text-[#0013E3]">hired.</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Expert-designed templates tested against top ATS software to guarantee high readability.
            </p>
          </motion.div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {TEMPLATES.map((template, i) => (
              <motion.div
                key={template.id}
                variants={scaleIn("up", 0.1 * i)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="group relative bg-white rounded-lg overflow-hidden border border-gray-400 transition-all duration-500 border border-gray-100"
              >
                <div className="relative aspect-[3/4] w-full bg-gray-100">
                  <Image 
                    src={template.img} 
                    alt={template.name} 
                    fill 
                    className="object-cover group-hover:scale-105  transition-transform duration-700"
                  />
                  {/* <div className="absolute top-6 left-6 bg-[#0013E3] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    {template.tag}
                  </div> */}
                </div>

                <div className="p-6 flex justify-between items-center bg-white">
                  <h3 className="text-xl font-medium text-black">{template.name}</h3>
                  <button className="text-[#0013E3] hover:cursor-pointer font-bold hover:translate-x-1 transition-transform">
                     Use →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            className="mt-16 text-center"
          >
            <button className="rounded-full h-12 px-10 hover:cursor-pointer font-semibold bg-[#0013E3] text-white hover:bg-blue-800 transition-all shadow-xl active:scale-95">
              Browse all 50+ templates
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}