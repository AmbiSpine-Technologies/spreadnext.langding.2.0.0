
"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Mayank Shrivastava",
      role: "CMO",
      location: "Rewa",
      avatar: "/mayank..jpg",
      verified: true,
      quote:
        "Spreads helped me craft a true digital identity — where my projects, passions, and personality all helped unlock real job offers. What I loved most? The balance of storytelling and opportunity. I didn't just apply — I was discovered for who I am.",
      bgGradient: "from-purple-400 to-pink-400",
    },
    {
      id: 2,
      name: "Aditya Shrivasta",
      role: "Director",
      location: "Rewa",
      avatar: "/aditya.jpg",
      verified: true,
      quote:
        "Spreads didn't just match me to a job — it gave me space to express my story, showcase my work, and connect with hiring teams who actually cared. I felt guided at every step, from uploading my resume to final onboarding. It's more than a job portal — it's where my real career chapter began.",
      bgGradient: "from-blue-400 to-cyan-400",
    },
    {
      id: 3,
      name: "Shivanshu Dubey",
      role: "Admin and Sales",
      location: "Rewa",
       avatar: "/shivanshu.jpg",
     
      verified: true,
      quote:
        "With Spreads, I built a microblog that reflected who I really am — not just what's on my resume. That personal touch helped me attract recruiters and collaborators who share my vision. This platform celebrates personality, not just polished profiles. I finally felt like I belonged in the professional world.",
      bgGradient: "from-green-400 to-blue-400",
    },
    // {
    //   id: 4,
    //   name: "Rupendra Vishwkarma",
    //   role: "Software Developer",
    //   location: "Hyderabad",
    //   avatar: "/rupendra.jpg",
    //   verified: true,
    //   quote:
    //     "From AI-matched job roles to real conversations with hiring teams, Spreads is built for our generation. The resume parser, auto-interview scheduling, and skill testing made the process feel smooth and transparent. I wasn't guessing anymore — I was growing. This isn't just job search. It's a professional journey.",
    //   bgGradient: "from-orange-400 to-red-400",
    // },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-[#F8F9FF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Find Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-600">
              Circle
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from talented individuals who are already part of our
            growing Community. Their success is just the beginning.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10 mx-auto max-w-4xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                    <div className="flex items-center mb-8">
                        <img src= {testimonial.avatar} className="w-16 h-16 rounded-full m-2 object-cover" />
                    
                      <div className="flex-1">
                        <div className="flex items-center mb-1">
                          <h3 className="text-xl font-bold text-gray-900 mr-2">
                            {testimonial.name}
                          </h3>
                          {testimonial.verified && (
                            <div className="bg-blue-500 rounded-full p-1">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                          )}
                        </div>
                        <p className="text-gray-600 font-medium">
                          {testimonial.role}
                        </p>
                        <p className="text-blue-600 text-sm font-medium">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>

                    <blockquote className="text-gray-700 text-lg leading-relaxed italic">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 group z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 group z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-blue-600 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

      </div>


    </section>
  );
};

export default TestimonialsSection;
