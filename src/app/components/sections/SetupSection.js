// "use client";
// import { motion } from "framer-motion";
// import { fadeIn } from "@/animations/animation";

// export default function SetupSection() {
//   const steps = [
//     "Onboard your institution. Add your college profile, departments, and batch details. Takes under an hour.",
//     "Invite your students. Students join Spreadnext and build their career profiles. You see readiness scores in real-time.",
//     "Connect with employers. Spreadnext matches your students to companies hiring from your location and skill profile.",
//     "Track outcomes. Every offer, every placement, every rejection — tracked and reported back to your dashboard."
//   ];

//   return (
//     <section className="py-24 px-28 bg-white">
//       <div className=" mx-auto flex flex-col lg:flex-row gap-16 items-center">
//         <motion.div variants={fadeIn("right", 0.2)} initial="hidden" whileInView="show" className="flex-1">
//           <img src="/setup.png" className="rounded-3xl shadow-2xl" alt="Setup" />
//           <h2 className="text-3xl font-bold mt-8 text-[#000000]">Set up in days. Not months.</h2>
//           <p className="text-gray-500 mt-4 max-w-md">Spreadnext goes live in 48 hours — so you spend less time setting up and more time placing students.</p>
//         </motion.div>

//         <div className="flex-1 space-y-4">
//           {steps.map((step, i) => (
//             <motion.div 
//               key={i}
//               variants={fadeIn("left", 0.1 * i)}
//               initial="hidden"
//               whileInView="show"
//               className="bg-[#F1F3F9] p-6 rounded-2xl text-gray-700 font-medium text-lg"
//             >
//               {step}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/animation";

export default function CareerSetupSection() {
  const steps = [
    "Onboard your institution. Add your college profile, departments, and batch details. Takes under an hour.",
    "Invite your students. Students join Spreadnext and build their career profiles. You see readiness scores in real-time.",
    "Connect with employers. Spreadnext matches your students to companies hiring from your location, department, and skill profile.",
    "Track outcomes. Every offer, every placement, every rejection — tracked and reported back to your dashboard automatically."
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        
        {/* Left Side: Larger Image & Main Text (60% Width) */}
        <motion.div 
          variants={fadeIn("right", 0.2)} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true }}
          className="w-full lg:w-[50%] flex-shrink-0"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden  group">
            <img 
              src="/setup.png" 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
              alt="Spreadnext Digital Campus Setup" 
            />
          </div>
          
          <div className="mt-10 space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold text-[#1B1B24] tracking-tight">
              Set up in days. Not months.
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed">
              The faster your placement cell runs on real data, the better your outcomes. 
              We built <span className="text-[#0013E3] font-semibold">Spreadnext</span> to go live in 48 hours — so you spend less time setting up 
              and more time placing students.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Step Cards (40% Width) */}
        <div className="w-full lg:w-[50%] space-y-5 mt-4 lg:mt-2">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              variants={fadeIn("left", 0.1 * i + 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-[#F1F3F9] p-8 rounded-[1.5rem] text-[#3D447E] font-medium text-lg md:text-[20px] "
            >
              {step}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}