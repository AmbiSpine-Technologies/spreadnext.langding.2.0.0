
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
// useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % sliderImages.length);
//     }, 4000); // 5s is better for reading & viewing
//     return () => clearInterval(interval);
//   }, []);
//   // Variantes para el efecto Left-to-Right
// const premiumPopup = {
//     initial: { 
//       opacity: 0, 
//       scale: 0.5,           // Starts very small
//       rotate: -5,           // Slight tilt for dynamic feel
//       y: 40                 // Comes from slightly below
//     },
//     animate: { 
//       opacity: 1, 
//       scale: 1, 
//       rotate: 0, 
//       y: 0,
//       transition: {
//         type: "spring",     // Spring physics for "bouncy" popup
//         stiffness: 260,
//         damping: 20,
//       }
//     },
//     exit: { 
//       opacity: 0, 
//       scale: 1.1,           // Zooms out while fading
//       filter: "blur(8px)",
//       transition: { duration: 0.4 }
//     }
//   };

//   return (
//     <section className="w-full bg-white px-6 lg:px-20 py-16 mt-6 overflow-hidden">
//       <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        
//         {/* LEFT CONTENT */}
//         <div className="z-10">
//           <h1 className="text-4xl lg:text-[44px] font-semibold text-gray-900 leading-tight mb-6">
//             A career platform built for India's{" "}
//             next generation
//           </h1>

//           <p className="text-gray-500 text-lg mb-8 max-w-lg">
//             <span className="text-[#10069F] font-medium">Spreadnext</span> connects colleges, students, and recruiters on a single
//             intelligent platform to automate placements and track career readiness.
//           </p>

//           <div className="flex flex-wrap gap-4">
//             <Button className=" shadow-lg transition-transform active:scale-95">
//               Build your free career profile
//             </Button>
//             <Button className="!bg-[#e2e8f0]  !text-gray-700 h-12 px-8">
//               Explore Jobs
//             </Button>
//           </div>
//         </div>

//         {/* RIGHT SLIDER - FIXED POSITIONING */}
//       <div className="relative w-full mt-2 flex flex-col items-center">
//           {/* Decorative background shape to enhance the popup */}

//           <div className="relative w-full aspect-[4/5] md:aspect-square max-w-[550px] overflow-visible">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={index}
//                 variants={premiumPopup}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 className="w-full h-full relative"
//               >
//                 {/* Floating card effect */}
//                 <div className="absolute inset-0 bg-white rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100">
//                   <motion.img
//                     src={sliderImages[index]}
//                     className="w-full h-full object-cover"
//                     alt="Hero Slide"
//                   />
//                 </div>
                
              
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* INDICATORS */}
//           <div className="flex gap-2 mt-2 bg-gray-50 p-2 rounded-full border border-gray-100">
//             {sliderImages.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setIndex(i)}
//                 className={`h-2 rounded-full transition-all duration-700 hover:cursor-pointer ${
//                   i === index ? "w-20 bg-[#0011D2]" : "w-2 bg-gray-400"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../components/common/button";

const sliderImages = [
  "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/7129007/pexels-photo-7129007.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
  // "https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=800",
  // "https://images.pexels.com/photos/5673502/pexels-photo-5673502.jpeg?auto=compress&cs=tinysrgb&w=800",
  // "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800",
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Jitter "Pop & Fall" Animation logic
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 } // Teeno images thode gap pe pop hongi
    },
    exit: { opacity: 0 }
  };

  const itemVariants = {
    initial: { scale: 0, opacity: 0, y: 40 },
    animate: { 
      scale: 1, 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 20 } 
    },
    exit: { 
      scale: 0.8, 
      opacity: 0, 
      y: 100, // Downward exit
      transition: { duration: 0.4, ease: "easeInOut" } 
    }
  };

  return (
    <section className="w-full bg-white px-6 lg:px-20 py-16 mt-6 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        
        {/* LEFT CONTENT */}
        <div className="z-20">
          <h1 className="text-4xl lg:text-[44px] font-semibold text-gray-900 leading-tight mb-6">
            A career platform built for India's{" "}
            <span className="text-[#0011D2]">next generation</span>
          </h1>

          <p className="text-gray-500 text-lg mb-8 max-w-lg">
            <span className="text-[#10069F] font-medium">Spreadnext</span> connects colleges, students, and recruiters on a single
            intelligent platform to automate placements.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button className="rounded-full h-11 px-8 font-semibold bg-[#0013E3] text-white hover:bg-blue-800 shadow-lg transition-transform active:scale-95">
              <a 
    href="https://spreadnext.com/signin"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center"
  >
       Build your free career profile

  </a>
            </Button>
            <Button className="!bg-[#e2e8f0] !text-gray-700 h-11 px-8 rounded-full font-semibold">
                           <a 
    href="https://spreadnext.com/signin"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center"
  >
   Explore Jobs
  </a>
           
            </Button>
          </div>
        </div>

        {/* RIGHT SLIDER - 3 IMAGE STACK POPUP */}
        <div className="relative w-full mt-2 flex flex-col items-center justify-center min-h-[550px]">
          
          <div className="relative  w-[360px] h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                variants={containerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute inset-0"
              >
                {/* 1. MAIN CENTER IMAGE */}
                <motion.div 
                  variants={itemVariants}
                  className="w-full h-full relative rounded-md shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] "
                >
                  <img src={sliderImages[index]} className="w-full h-full object-cover" alt="Main" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>

                {/* 2. TOP RIGHT SMALL IMAGE */}
                <motion.div 
                  variants={itemVariants}
                  className="absolute -top-10 -left-10 w-20 h-20 md:w-28 md:h-28 rounded-md overflow-hidden  z-20"
                >
                  <img src={sliderImages[(index + 1) % sliderImages.length]} className="w-full h-full object-cover" alt="TopRight" />
                </motion.div>

                {/* 3. BOTTOM LEFT SMALL IMAGE */}
                <motion.div 
                  variants={itemVariants}
                  className="absolute -bottom-10 -right-10 w-20 h-20 md:w-28 md:h-28 rounded-md overflow-hidden  z-20"
                >
                  <img src={sliderImages[(index + 2) % sliderImages.length]} className="w-full h-full object-cover" alt="BottomLeft" />
                </motion.div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* CUSTOM INDICATORS */}
          <div className="flex gap-2 mt-20 bg-white/50 backdrop-blur-sm p-2 rounded-full border border-gray-100 shadow-inner z-30">
            {sliderImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? "w-20 bg-[#0011D2]" : "w-1.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}