// "use client";
// import Button from "../common/button";
// import { useRouter } from "next/navigation"; 
// // src/components/sections/Hero.js
// export default function Hero() {
//     const router = useRouter(); // Router instance
  
//     const handleSignup = () => {
//     // setIsOpen(false); // Mobile menu band karne ke liye
//     router.push("/signup"); // Signup page par bhejne ke liye
//   };
//   return (
//     <section className="relative h-screen flex items-center justify-center overflow-hidden">
//       <video 
//         autoPlay muted loop playsInline 
//         className="absolute inset-0 w-full h-full object-cover"
//       >
//         <source src="/hero-story.mp4" type="video/mp4" />
//       </video>
//       <div className="absolute inset-0 bg-black/40" />

//       <div className="relative z-10 text-center px-6 max-w-5xl">
//         <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
//           Where careers, hiring, and business <br className="hidden md:block"/> 
//           <span className="text-white/90">growth connect</span>
//         </h1>
//         <p className="mt-6 text-gray-200 text-lg md:text-xl max-w-2xl mx-auto">
//           India's AI-driven ecosystem for talent and recruiters.
//         </p>
//        <div className="flex flex-col items-center justify-center mt-10">
//           <Button onClick={handleSignup} className="mt-10 text-lg px-12 py-6 " >Get started</Button>

//        </div>
        
//       </div>
//     </section>
//   );
// }

"use client";
import Button from "../common/button";
import { useRouter } from "next/navigation"; 
import { motion } from "framer-motion"; // <-- Import added

// Define animation variants for cleaner code
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each element
      delayChildren: 0.1,   // Initial delay
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 }, // Elements start down
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// src/components/sections/Hero.js
export default function Hero() {
  const router = useRouter(); // Router instance
  
  const handleSignup = () => {
    // setIsOpen(false); // Mobile menu band karne ke liye
    router.push("/signup"); // Signup page par bhejne ke liye
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video (stays behind animations) */}
      <video 
        autoPlay muted loop playsInline 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-story.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40" />

      {/* Z-Index ensures content is on top of video and overlay */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        
        {/* Animated Container for Staggering */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center"
        >
          {/* 1. Animated Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-7xl font-bold text-white leading-tight"
          >
            Where careers, hiring, and business <br className="hidden md:block"/> 
            <span className="text-white/90">growth connect</span>
          </motion.h1>

          {/* 2. Animated Paragraph */}
          <motion.p 
            variants={itemVariants}
            className="mt-6 text-gray-200 text-lg md:text-xl max-w-2xl mx-auto"
          >
            India's AI-driven ecosystem for talent and recruiters.
          </motion.p>
          
          {/* 3. Animated Button with Hover Effect */}
          <motion.div 
            variants={itemVariants}
            className="mt-10" // Removed outer flex/div, added MT here
          >
            <motion.div
              whileHover={{ scale: 1.05 }} // Subtle pop-in on hover
              whileTap={{ scale: 0.95 }}   // Subtle push-down on click
            >
              <Button 
                onClick={handleSignup} 
                className="text-lg px-12 py-6" // Cleaned redundant MT here
              >
                Get started
              </Button>
            </motion.div>
          </motion.div>
        
        </motion.div> {/* End Container */}

      </div>
    </section>
  );
}