
// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Button from "../components/common/button";
// const sliderImages = [
//   "/India-next-generation.png",
//   "/student-group.png",
//   "/campus-life.png",
// ];

// export default function HeroSection() {
//   const [index, setIndex] = useState(0);

//   // Auto Slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % sliderImages.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="w-full bg-white px-6 lg:px-20 py-16">

//       <div className="grid lg:grid-cols-2 gap-12 items-center">

//         {/* LEFT CONTENT */}
//         <div>
//           <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
//             A career platform built for India's{" "}
//             <span className="text-blue-600">next generation</span>
//           </h1>

//           <p className="text-gray-500 text-lg mb-8 max-w-lg">
//             Spreadnext connects colleges, students, and recruiters on a single
//             intelligent platform to automate placements and track career readiness.
//           </p>

//           <div className="flex gap-4">
          
//    <Button 
//         className="!bg-[#0A66C2] hover:!bg-[#0554a3] h-14"
        
//         >
//           Build your free career profile
//         </Button>
//            <Button 
//                 className="!bg-[#a0bfdb7f] hover:!bg-gray-300 !text-gray-700  h-14"
                
//                 >
//                   Explore Job
//                 </Button>
          
//           </div>
//         </div>

//         {/* RIGHT SLIDER CARD */}
//         <div className="
//         relative 
//        w-full max-w-[650px] h-[350px] sm:h-[450px] md:h-[500px] lg:h-[700px] mt-10
//       ">

//         {sliderImages.map((img, i) => {
//           const total = sliderImages.length;
//           const offset = (i - index + total) % total;

//           let x = 0;
//           let scale = 0.7;
//           let zIndex = 0;

//           // RESPONSIVE POSITION VALUES
//           const baseX =
//             window.innerWidth < 640
//               ? 120
//               : window.innerWidth < 1024
//               ? 160
//               : 200;

//           if (offset === 0) {
//             // RIGHT (ACTIVE)
//             x = baseX;
//             scale = 1;
//             zIndex = 3;
//           } else if (offset === total - 1) {
//             // MID LEFT
//             x = 0;
//             scale = 0.85;
//             zIndex = 2;
//           } else if (offset === total - 2) {
//             // FAR LEFT
//             x = -baseX;
//             scale = 0.7;
//             zIndex = 1;
//           } else {
//             return null;
//           }

//           return (
//             <motion.img
//               key={i}
//               src={img}
//               className="absolute w-full h-full object-cover rounded-2xl shadow-xl"
//               animate={{ x, scale, zIndex }}
//               transition={{ duration: 0.5 }}
//             />
//           );
//         })}

//         <div>
//            <div className="absolute bottom-[-25px] left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 mt-6">
//         {sliderImages.map((_, i) => (
//           <div
//             key={i}
//             onClick={() => setIndex(i)}
//             className={`h-[3px] sm:h-[4px] rounded-full cursor-pointer transition-all duration-300 ${
//               i === index
//                 ? "w-10 sm:w-16 bg-blue-600"
//                 : "w-6 sm:w-10 bg-gray-300"
//             }`}
//           />
//         ))}
//       </div>
//         </div>
//       </div>

//       {/* INDICATORS */}
     
//       </div>
//     </section>
//   );
// }


"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../components/common/button";

const sliderImages = [
  "/India-next-generation.png",
  "/student-group.png",
  "/campus-life.png",
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 para derecha, -1 para izquierda

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Variantes para el efecto Left-to-Right
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="w-full bg-white px-6 lg:px-20 py-16 mt-6 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        
        {/* LEFT CONTENT */}
        <div className="z-10">
          <h1 className="text-4xl lg:text-[44px] font-medium text-gray-900 leading-tight mb-6">
            A career platform built for India's{" "}
            <span className="text-blue-600">next generation</span>
          </h1>

          <p className="text-gray-500 text-lg mb-8 max-w-lg">
            Spreadnext connects colleges, students, and recruiters on a single
            intelligent platform to automate placements and track career readiness.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button className="!bg-[#0A66C2] hover:!bg-[#0554a3] h-12 px-8 shadow-lg transition-transform active:scale-95">
              Build your free career profile
            </Button>
            <Button className="!bg-[#e2e8f0] hover:!bg-gray-300 !text-gray-700 h-12 px-8">
              Explore Jobs
            </Button>
          </div>
        </div>

        {/* RIGHT SLIDER - FIXED POSITIONING */}
        <div className="relative w-full flex flex-col items-center">
          <div className="relative w-full max-w-[600px]  h-[350px] sm:h-[450px] md:h-[600px]  overflow-hidden rounded-2xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={index}
                src={sliderImages[index]}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* INDICATORS (Dots) */}
          <div className="flex gap-3 mt-8">
            {sliderImages.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === index ? "w-12 bg-blue-600" : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}