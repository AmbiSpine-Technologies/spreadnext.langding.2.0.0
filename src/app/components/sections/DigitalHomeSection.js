// "use client";
// import React from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import { fadeIn } from "@/animations/animation"; 
// import Button from "@/app/components/common/button";

// const FeatureCard = ({ card, index }) => {
//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ delay: index * 0.1 }}
//       viewport={{ once: true }}
//       className="flex flex-col items-center  max-w-[297px]  mx-auto text-center group"
//     >
//       {/* Image Container with Figma Dimensions */}
//       <div className="w-full rounded-2xl  relative shadow-md border border-gray-100">
//         <Image
//           src={card.image}
//           alt={card.title}
//           fill
//           className="object-cover transition-transform duration-500 group-hover:scale-105"
//         />
//       </div>

//       {/* Text Content */}
//       <h3 className="mt-6 text-xl font-bold text-gray-900 leading-tight">
//         {card.title}
//       </h3>
//       <p className="mt-3 text-gray-500 text-sm leading-relaxed max-w-[280px]">
//         {card.description}
//       </p>
      
//       {/* Action Button */}
//       <button className="mt-4 bg-[#0013E3] hover:bg-blue-700 text-white px-6 py-2 rounded-full text-xs font-bold transition-all transform active:scale-95">
//         {card.buttonText}
//       </button>
//     </motion.div>
//   );
// };

// export default function DigitalHomeSection() {
//   const router = useRouter();

//   const cards = [
//     {
//       id: 1,
//       image: "/Everything-career-needs.png",
//       title: "Everything your career needs. In one place",
//       description: "AI matches your profile to real jobs from companies actively hiring right now, not generic listings.",
//       buttonText: "Browse Jobs",
//       route: "/jobs",
//     },
//     {
//       id: 2,
//       image: "/Your-profile-does-work.png",
//       title: "Your profile does the work for you",
//       description: "Build a career identity beyond a resume — skills, projects, and achievements.",
//       buttonText: "Build your profile",
//       route: "/profile/setup",
//     },
//   ];

//   return (
//     <section className="bg-white py-20 px-6 md:px-10 lg:px-20 overflow-hidden">
//       <div className="max-w-[1440px] mx-auto text-center">
        
//         {/* Title Animation */}
   
//         <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-10 xl:gap-20">
          
//           {/* Left Side - VIDEO Frame Animation */}
//           <motion.div 
//             variants={fadeIn("right", 0.4)}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="flex-shrink-0 relative max-w-sm lg:max-w-xs xl:max-w-sm"
//           >
//             <div className="relative rounded-[45px] shadow-2xl overflow-hidden aspect-[9/18.5] w-full bg-gray-100">
//                <video
//                   className="w-full h-full object-cover"
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                >
//                   <source src="/story.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                </video>
//             </div>
//           </motion.div>
// <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
//             {cards.map((feature, idx) => (
//               <FeatureCard key={idx} card={feature} index={idx} />
//             ))}
//           </div>
//           {/* Right Side - Cards with Sequential Animations */}
       
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/animation";
import Button from "@/app/components/common/button";

const FeatureCard = ({ card, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col items-start text-left max-w-[340px]"
    >
      {/* Image Container */}
      <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden mb-8">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Text Content */}
      <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-4">
        {card.title}
      </h3>
      <p className="text-gray-600 text-base leading-relaxed mb-6">
        {card.description}
      </p>

      {/* Action Button - Using your custom Button component */}
       <div className="w-full flex justify-center mt-auto">
        <Button 
          className="bg-[#0663ED] hover:!bg-[#0651c2] rounded-full h-11 px-8 font-semibold text-white"
          onClick={() => window.location.href = card.route}
        >
          {card.buttonText}
        </Button>
      </div>
   
    </motion.div>
  );
};

export default function DigitalHomeSection() {
  const cards = [
    {
      id: 1,
      image: "/Everything-career-needs.png",
      title: "Everything your career needs. In one place",
      description:
        "AI matches your profile to real jobs from companies actively hiring right now not generic listings. Matched opportunities.",
      buttonText: "Browse jobs",
      route: "/jobs",
    },
    {
      id: 2,
      image: "/Your-profile-does-work.png",
      title: "Your profile does the work for you",
      description:
        "Build a career identity beyond a resume — skills, projects, gigs, and achievements that employers actually look for.",
      buttonText: "Build your profile",
      route: "/profile/setup",
    },
  ];

return (
  <section className="bg-white py-24 px-6 md:px-12">
    <div className="max-w-[1600px] mx-auto">
      
      {/* Title */}
      <motion.h2 
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black leading-tight text-center mb-24"
      >
        Everything your career needs. <br /> In one place
      </motion.h2>

      {/* LAYOUT: 3-column grid to ensure equal spacing.
          Gap is consistent between all elements.
      */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-20 items-center justify-items-center">
        
        {/* Left Side - Mobile Frame (Width increased to max-w-[400px]) */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full max-w-[380px]" // Increased from 320px
        >
          <div className="relative rounded-[3rem] overflow-hidden aspect-[9/18] bg-gray-50">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/story.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

        {/* Middle & Right Side - Map the two cards into the remaining 2 grid columns */}
        {cards.map((feature, idx) => (
          <FeatureCard key={feature.id} card={feature} index={idx} />
        ))}

      </div>
    </div>
  </section>
);
}