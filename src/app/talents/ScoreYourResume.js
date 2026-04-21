"use client"
import React from 'react'
import { motion } from 'framer-motion' // Required for animations
import Button from '../components/common/button'
import { fadeIn } from '@/animations/animation'

export default function ScoreYourResume() {
  return (
    <section className="w-full bg-[#f8fafc] px-6 lg:px-20 py-32 mt-6 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        
        {/* LEFT CONTENT (Text & Button) */}
        <motion.div
          variants={fadeIn("right", 0.3)} // Slower fade for elegance
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Headline - Updated to match design */}
          <h1 className="text-3xl lg:text-4xl  font-bold text-gray-900 leading-[1.2] mb-6">
            The Smarter Way to Score Your Resume
          </h1>

          {/* Description - Updated to match design text */}
          <p className="text-gray-600 text-[16px] md:text-lg mb-10 max-w-xl leading-relaxed">
            Stop rewriting your resume in the dark. Our smart scanner provides a 
            definitive 0-100 compatibility score and a step-by-step roadmap to 
            fix it. From keyword density to structural integrity, we show you 
            exactly what to change to turn your applications into invitations.
          </p>

          {/* Single Button - Updated to match design style */}
          <div className="flex flex-wrap gap-4">
            <Button className="!bg-[#0A66C2] hover:!bg-[#0554a3] !rounded-full   font-medium shadow-lg transition-transform active:scale-95">
                <a 
    href="https://spreadnext.com/signin"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center"
  >
Get Your Score
  </a>
            </Button>
          </div>
        </motion.div>

        {/* RIGHT CONTENT (The Illustration) */}
        <div className="relative w-full flex flex-col items-center">
          <motion.div
            variants={fadeIn("left", 0.3)} // slides in from the left
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative z-10 w-full lg:max-w-[600px] h-auto lg:h-[480px]"
          >
            {/* Image centered and scaled */}
            <img
              src="/atsscoe.png" // Ensure this image is in your public folder
              alt="ATS Resume Score 85 out of 100 Dashboard"
              className="w-full h-full  mx-auto drop-shadow-xl"
            />
          </motion.div>
        </div>

      </div>
    </section>
  )
}