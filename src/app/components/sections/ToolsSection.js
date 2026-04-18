// "use client";
// import { motion } from "framer-motion";
// import { fadeIn } from "@/animations/animation";

// const tools = [
//   { title: "One platform. Three powerful tools", desc: "A bad hire from campus means an employer never returns. No feedback loop. No data. No way to improve." },
//   { title: "Know which students are ready before the drive begins.", desc: "Spreadnext's AI scores every student's career readiness across skills, projects, and profile completeness." },
//   { title: "Connect your students to companies actively hiring.", desc: "Spreadnext's employer network matches your students to real openings — not just cold applications." }
// ];

// export default function ToolsSection() {
//   return (
//     <section className="py-24  bg-white px-20 lg:px-28">
//       <div className="">
//         <motion.h2 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="text-4xl md:text-5xl font-bold  text-black text-center mb-20"
//         >
//           One platform. Three powerful tools
//         </motion.h2>
        
//         <div className="space-y-6">
//           {tools.map((tool, i) => (
//             <motion.div
//               key={i}
//               variants={fadeIn("up", 0.2 * i)}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true }}
//               className="bg-[#7D99D54D] px-10 py-24 rounded-[2rem] flex flex-col md:flex-row justify-between items-center group hover:bg-[#DCE1F0] transition-colors cursor-pointer"
//             >
              
//               <div className="w-full md:w-[60%]  rounded-2xl flex items-center justify-center ">
              
//               </div>

//               {/* Right Side: Content (40%) */}
//               <div className="w-full md:w-[40%] space-y-3">
//              <h3 className="text-4xl font-medium text-[#172127]">{tool.title}</h3>
//                 <p className="text-gray-500 text-lg leading-relaxed">{tool.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, scaleIn } from "@/animations/animation"; // Reusing your existing logic

const TOOLS_DATA = [
  {
    title: "One platform. Three powerful tools",
    desc: "A bad hire from campus means an employer never returns. No feedback loop. No data. No way to improve.",
    src: "/tool1.png",
  },
  {
    title: "Know which students are ready before the drive begins.",
    desc: "SpreadNext's AI scores every student's career readiness across skills, projects, and profile completeness. You see the gaps before employers do.",
    src: "/tool2.png",
  },
  {
    title: "Connect your students to companies actively hiring.",
    desc: "SpreadNext's employer network matches your students to real openings — not just cold applications. Employers come to you.",
    src: "/tool3.png",
  },
];

export default function ToolsSection() {
  return (
    <section className="py-24 bg-white px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Reusing fadeIn for Header */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          
          <h2 className="text-3xl md:text-6xl font-medium text-black tracking-tighter leading-tight md:leading-[1.1] mb-2">
  One platform. <br className="hidden md:block" /> Three powerful tools
</h2>
        </motion.div>

        {/* Grid Layout matching the screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {TOOLS_DATA.map((tool, i) => (
            <motion.div
              key={i}
              // REUSING scaleIn: Applying your custom animation here
              variants={scaleIn("up", 0.2 * i, 0.95)} 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col group"
            >
              {/* Image Card - MNC Standard rounding & overflow */}
              <div className="relative aspect-[1.4/1] w-full overflow-hidden rounded-2xl mb-6 shadow-sm border border-gray-100">
                <Image
                  src={tool.src}
                  alt={tool.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="">
                <h3 className="text-xl font-semibold text-[#172127] ">
                  {tool.title}
                </h3>
                <p className="text-[#5E6B74] text-base  leading-relaxed">
                  {tool.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

     
      </div>
    </section>
  );
}