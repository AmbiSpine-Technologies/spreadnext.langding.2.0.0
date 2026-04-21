
"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Button from "../../common/button";
import { useRouter } from 'next/navigation';
import {  fadeIn } from "@/animations/animation"

// const initialProblems = [
//   {
//     title: "Volume without quality",
//     desc: "Job boards flood your inbox with unqualified applicants. You spend more time filtering than hiring.",
//     img: "/journey-social-hub.png",
//   },
//   {
//     title: "Campus hiring is chaos",
//     desc: "Coordinating with 10 colleges, managing student lists on Excel — campus hiring is broken.",
//     img: "/problem2.png",
//   },
//   {
//     title: "No post-hire visibility",
//     desc: "Most platforms stop at the offer letter. No one tracks whether the hire actually worked out.",
//     img: "/Your-profile-does-work.png",
//   },
// ];

const initialProblems = [
  {
    title: "Volume without quality",
    subTitle: "500 applications. 3 worth calling.",
    desc: "Job boards flood your inbox with unqualified applicants. You spend more time filtering than hiring. There's no skill verification.",
    img: "/journey-social-hub.png",
  },
  {
    title: "Campus hiring is chaos",
    subTitle: "Drive day shouldn't feel like a fire drill.",
    desc: "Coordinating with 10 colleges, managing student lists on Excel, chasing offer letters over WhatsApp — campus hiring is broken.",
    img: "/problem2.png",
  },
  {
    title: "No post-hire visibility",
    subTitle: "You hire them. Then what?",
    desc: "Most platforms stop at the offer letter. No one tracks whether the hire actually worked out. No feedback loop.",
    img: "/Your-profile-does-work.png",
  }
];

export default function WhyHiringBroken() {
  const router = useRouter();
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section className="relative bg-white py-24 px-6 lg:px-28">
    <div className=" px-6 lg:px-28 ">
              <motion.h2 
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
           className="text-4xl md:text-5xl font-bold text-center  mb-20 text-black">
          Why hiring in India is still broken
        </motion.h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-20 relative">
        
        {/* LEFT SIDE: Text Content */}
        <div className="flex-1 py-20">
          {initialProblems.map((item, i) => (
            <TextSection 
              key={i} 
              item={item} 
              index={i} 
              onVisible={(idx) => setActiveImage(idx)} 
              isActive={activeImage === i}
            />
          ))}
          {/* Spacer to allow the last item to scroll to the center */}
          <div className="h-[40vh]" />
        </div>

        {/* RIGHT SIDE: Sticky Image with smooth transitions */}
        <div className="hidden lg:block flex-1 sticky top-[15vh] h-[70vh]">
          <div className="relative w-full h-full overflow-hidden rounded-md bg-gray-100 shadow-2xl">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                transition={{ 
                  duration: 0.7, 
                  ease: [0.32, 0.72, 0, 1] 
                }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={initialProblems[activeImage].img}
                  alt={initialProblems[activeImage].title}
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-32">
        <Button 
          className="rounded-full h-11 px-8 font-semibold bg-[#0013E3] text-white hover:bg-blue-800"
          
        >
          <a 
  href="https://spreadnext.com/signin"
  target="_blank"
  rel="noopener noreferrer"
>
          Try Spreadnext
</a>

        </Button>
      </div>
    </section>
  );
}

function TextSection({ item, index, onVisible, isActive }) {
  const ref = useRef(null);
  
  // margin: "-40% 0px -40% 0px" ensures the trigger happens when the text is in the middle of the screen
  const isInView = useInView(ref, { margin: "-10% 0px -10% 0px" });

  useEffect(() => {
    if (isInView) onVisible(index);
  }, [isInView, index, onVisible]);

  return (
    <div ref={ref} className="min-h-[80vh] py-20 flex flex-col justify-center">
      <motion.div
        animate={{ 
          // Instead of 0 opacity, we use 0.2 to keep it visible but "inactive"
          opacity: 1, 
          // x: isActive ? 0 : -20, // Subtle slide-in effect
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-lg"
      >
                  <h3 className="text-3xl font-bold text-black mb-2">
                  {item.title}
                </h3>
                <h4 className="text-xl font-bold text-[#4F46E5] mb-4">
                  {item.subTitle}
                </h4>
                <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
                  {item.desc}
                </p>
      </motion.div>
    </div>
  );
}