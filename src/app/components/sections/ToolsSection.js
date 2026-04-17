"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/animation";

const tools = [
  { title: "One platform. Three powerful tools", desc: "A bad hire from campus means an employer never returns. No feedback loop. No data. No way to improve." },
  { title: "Know which students are ready before the drive begins.", desc: "Spreadnext's AI scores every student's career readiness across skills, projects, and profile completeness." },
  { title: "Connect your students to companies actively hiring.", desc: "Spreadnext's employer network matches your students to real openings — not just cold applications." }
];

export default function ToolsSection() {
  return (
    <section className="py-24  bg-white px-20 lg:px-28">
      <div className="">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold  text-black text-center mb-20"
        >
          One platform. Three powerful tools
        </motion.h2>
        
        <div className="space-y-6">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              variants={fadeIn("up", 0.2 * i)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-[#7D99D54D] px-10 py-24 rounded-[2rem] flex flex-col md:flex-row justify-between items-center group hover:bg-[#DCE1F0] transition-colors cursor-pointer"
            >
              
              <div className="w-full md:w-[60%]  rounded-2xl flex items-center justify-center ">
              
              </div>

              {/* Right Side: Content (40%) */}
              <div className="w-full md:w-[40%] space-y-3">
             <h3 className="text-4xl font-medium text-[#172127]">{tool.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed">{tool.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}