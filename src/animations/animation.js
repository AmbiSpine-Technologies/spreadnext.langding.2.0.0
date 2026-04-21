// src/lib/animations.js

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Ek ke baad ek aayenge
    },
  },
};

export const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

// src/lib/animations.js

export const scaleIn = (direction = "none", delay = 0, initialScale = 0.8) => {
  return {
    hidden: {
      // Scale logic
      scale: initialScale,
      opacity: 0,
      // Optional movement logic (agar direction di ho)
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    show: {
      scale: 1,
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring", // Spring use karne se scaling natural lagti hai
        stiffness: 100,
        damping: 20,
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};