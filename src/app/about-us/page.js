// import React from "react";
// import {
//   Users,
//   Target,
//   Award,
//   TrendingUp,
//   Heart,
//   Shield,
//   Briefcase,
//   Globe,
// } from "lucide-react";

// export default function page() {
//   const stats = [
//     { number: "8,000+", label: "Active Jobs", icon: Briefcase },
//     { number: "10,000+", label: "Job Seekers", icon: Users },
//     { number: "500+", label: "Companies", icon: Globe },
//     { number: "95%", label: "Success Rate", icon: TrendingUp },
//   ];

//   const values = [
//     {
//       icon: Target,
//       title: "Our Mission",
//       description:
//         "To connect talented professionals with their dream careers and help companies find the perfect candidates for their teams.",
//     },
//     {
//       icon: Heart,
//       title: "Our Values",
//       description:
//         "We believe in transparency, integrity, and creating meaningful connections that benefit both job seekers and employers.",
//     },
//     {
//       icon: Shield,
//       title: "Our Promise",
//       description:
//         "We ensure a safe, secure, and efficient job search experience with verified listings and trusted employer partnerships.",
//     },
//   ];

//   const team = [
//     {
//       name: "Aditya Srivastava",
//       role: "Founder & CEO",
//       image:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
//     },
//     {
//       name: "Priya Sharma",
//       role: "Head of Operations",
//       image:
//         "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
//     },
//     {
//       name: "Mayank Srivastava",
//       role: "Co-Founder",
//       image:
//         "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
//     },
//     {
//       name: "Sneha Reddy",
//       role: "Technology Lead",
//       image:
//         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-5xl font-bold text-gray-900 mb-6">About Us</h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             We're on a mission to revolutionize the job search experience in
//             India by connecting talented professionals with opportunities that
//             match their skills and aspirations.
//           </p>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="flex justify-center mb-4">
//                   <div className="p-3 bg-blue-100 rounded-full">
//                     <stat.icon className="h-8 w-8 text-blue-600" />
//                   </div>
//                 </div>
//                 <div className="text-4xl font-bold text-gray-900 mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Story Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">
//                 Our Story
//               </h2>
//               <p className="text-gray-600 mb-4 leading-relaxed">
//                 Founded in 2024, Spreadnext was born from a simple observation:
//                 the job search process in India needed to be more efficient,
//                 transparent, and accessible to everyone.
//               </p>
//               <p className="text-gray-600 mb-4 leading-relaxed">
//                 What started as a small platform has now grown into one of
//                 India's most trusted job portals, serving thousands of job
//                 seekers and employers across the country.
//               </p>
//               <p className="text-gray-600 leading-relaxed">
//                 Today, we're proud to facilitate thousands of successful
//                 placements every month, helping people find not just jobs, but
//                 careers they're passionate about.
//               </p>
//             </div>
//             <div className="relative">
//               <img
//                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
//                 alt="Team collaboration"
//                 className="rounded-lg shadow-xl"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
//             What Drives Us
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {values.map((value, index) => (
//               <div
//                 key={index}
//                 className="text-center p-8 rounded-lg hover:shadow-lg transition"
//               >
//                 <div className="flex justify-center mb-6">
//                   <div className="p-4 bg-blue-100 rounded-full">
//                     <value.icon className="h-10 w-10 text-blue-600" />
//                   </div>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                   {value.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   {value.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="inline-block px-4 py-2 bg-indigo-50 rounded-full text-indigo-600 text-sm font-semibold mb-4">
//               Our Team
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Meet The Visionaries
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               A diverse group of passionate professionals dedicated to
//               transforming the job search experience
//             </p>
//           </div>

//           <div className="grid md:grid-cols-4 gap-8">
//             {team.map((member, index) => (
//               <div
//                 key={index}
//                 className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//               >
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 </div>
//                 <div className="p-6 text-center">
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">
//                     {member.name}
//                   </h3>
//                   <p className="text-blue-600 font-medium">{member.role}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="relative py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 overflow-hidden">
     
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white mb-6">
//             <span className="text-sm font-medium">Join Our Community</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Ready to Get Started?
//           </h2>
//           <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
//             Join thousands of job seekers and employers who trust Spreadnext for
//             their career needs.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="group px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2">
//               Find Your Dream Job
//             </button>
//             <button className="px-8 py-4 bg-transparent text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white inline-flex items-center justify-center gap-2">
//               Post a Job
//               <Briefcase className="w-5 h-5" />
//             </button>
//           </div>
//         </div> 
//               </section> 

//     </div>
//   );
// }

"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, itemVariant, fadeIn, scaleIn } from '@/animations/animation';
import Button from '../components/common/button';

export const aboutData = {
  hero: {
    title: "Building the Backbone of India's Digital Era",
    description: "At Spreads, we believe in systems that don't just process information but enable outcomes. We build products that empower every citizen, every institution, and every node in the modern era.",
  },
  whoWeAre: {
    title: "Who We Are",
    description: "AmbiSpine is a technology company focused on building real-world systems — where engineering meets execution, and ideas become infrastructure.",
    points: [
      { title: "Infrastructure", desc: "High-performance, fault-tolerant architectures engineered for scale, security, and uptime, designed to operate reliably under real-world conditions and evolving demand." },
      { title: "Intelligence", desc: "AI-driven systems that power decision-making, map opportunities, and enable smarter outcomes across the ecosystem" },
      { title: "Platforms", desc: "End-to-end digital environments designed to unify workflows, reduce fragmentation, and enable real-world outcomes at scale" }
    ]
  },
  vision: {
    title: "Our Vision",
    description: "We believe the future belongs to systems that don’t just process information, but enable outcomes. We build products that integrate intelligence, infrastructure, and execution into real-world use.",
    image: "/about-section-vision.png"
  },
  measurableOutcomes: {
    title: "In a Nation Defined by Scale and Diversity, We Build Systems That Turn Potential into Measurable Outcomes",
    grid: [
      {
        title: "Built for India’s Scale",
        desc: "India operates at unmatched scale—diverse talent, fragmented access, and uneven opportunity. Traditional systems struggle to connect learning, skills, and real outcomes across this complexity."
      },
      {
        title: "From Fragmentation to Systems",
        desc: "We approach this challenge as a systems problem. Instead of isolated solutions, we design products that unify data, workflows, and decision-making into a single connected layer."
      },
      {
        title: "Outcome-Driven Products",
        desc: "Our products are built to go beyond engagement —they are designed to deliver measurable outcomes. Every layer, from intelligence to infrastructure, aligns toward real-world impact."
      },
      {
        title: "Social Connectivity as Infrastructure",
        desc: "We treat connectivity not just as communication, but as infrastructure. Our systems enable meaningful interactions between individuals, organizations, and opportunities—turning networks into active engines of growth."
      }
    ]
  },
  leadership: {
    title: "Our Leadership",
    description: "Our values represent who we are, what we build, and how we build it. Our leaders bring strategy, technology, and empathy to build the next gen ecosystem for India.",
    teamImage: "/about-leadership-section.png",
   categories: [
    {
      title: "Infrastructure",
      desc: "We design and build scalable, secure systems that operate reliably under real-world conditions for long-term growth.",
      image: "/infra.png" 
    },
    {
      title: "Intelligence",
      desc: "We develop AI-driven systems that analyze data and adapt to behavior, transforming information into actionable outcomes.",
      image: "/intelligence.png"
    },
    {
      title: "Platforms",
      desc: "We build integrated digital ecosystems that unify identity and workflows, designed to reduce fragmentation and enable execution.",
      image: "/platforms.png"
    },
    {
      title: "Social Connectivity",
      desc: "We treat connectivity as a core system layer, enabling meaningful interactions that turn networks into engines of growth.",
      image: "/social.png"
    },
    {
      title: "Product Engineering",
      desc: "We build production-grade products that solve real problems, focusing on performance and scalability from design to deployment.",
      image: "/product.png"
    },
    {
      title: "Operations",
      desc: "We combine engineering with execution discipline to ensure systems are maintained, improved, and scaled effectively over time.",
      image: "/operations.png"
    }
  ]
  }
};

const AboutPage = () => {
  const btnPrimary = "rounded-full h-11 px-8 font-semibold bg-[#0013E3] text-white hover:bg-blue-800 transition-all";
  const btnSecondary = "rounded-full h-11 px-8 font-semibold border border-gray-300 hover:bg-gray-50 transition-all";

  return (
    <div className=" mt-20 text-slate-900  max-w-7xl mx-auto ">
      
      {/* --- HERO SECTION --- */}
      <section className="lg:py-32 py-20 mt-10 px-6 text-center ">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h1 variants={itemVariant} className="text-4xl lg:text-5xl font-inter font-bold  leading-tight mb-6">
            Building the Backbone of <br />
            <span className="text-[#10069F]">India'</span> s Digital Era
          </motion.h1>
          <motion.p variants={itemVariant} className="text-lg font-nanum text-black mb-10">
            AmbiSpine Technologies is a next-generation technology company focused on building scalable digital systems, intelligent platforms, and real-world solutions. Through our flagship ecosystem, <span className="text-[#10069F]">Spreadnext</span>, we are transforming how individuals learn, work, earn, and grow—on a single unified platform.
          </motion.p>
          <motion.div variants={itemVariant} className="flex justify-center gap-4">
            <Button >             <a 
    href="https://spreadnext.com/signin"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center"
  >Explore Spreadnext</a></Button>
            <Button className="!bg-[#e2e8f0] !text-gray-700 h-11 px-8 rounded-full font-semibold">Join Us</Button>
          </motion.div>
        </motion.div>
      </section>

      {/* --- WHO WE ARE SECTION --- */}
      <section className="py-20 px-6 grid md:grid-cols-2  gap-16">
        <motion.div variants={fadeIn("right", 0.1)} initial="hidden" whileInView="show">
          <h2 className="text-3xl lg:text-4xl font-medium mb-6 font-tauri">{aboutData.whoWeAre.title}</h2>
          <p className="text-slate-700 text-2xl leading-relaxed font-nanum font-semibold">{aboutData.whoWeAre.description}</p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" className="space-y-10">
          {aboutData.whoWeAre.points.map((point, index) => (
            <motion.div key={index} variants={itemVariant}>
              <h3 className="text-3xl font-nanum mb-2 font-bold">{point.title}</h3>
              <p className="text-[#000000] text-lg font-nanum font-semibold">{point.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- VISION SECTION --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <motion.div variants={fadeIn("right", 0.2)} initial="hidden" whileInView="show">
          <h2 className="text-5xl font-tauri mb-6">{aboutData.vision.title}</h2>
          <p className="text-black text-xl font-tauri  leading-relaxed mb-6">{aboutData.vision.description}</p>
        </motion.div>
        <motion.div variants={scaleIn("none", 0.3)} initial="hidden" whileInView="show">
          <img src={aboutData.vision.image} alt="Vision" className="rounded-xl object-cover h-[450px] w-full" />
        </motion.div>
      </section>

<section className="py-20 px-6 max-w-7xl mx-auto">

      <motion.h2 
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="font-tauri text-3xl md:text-4xl text-center mb-20 leading-snug text-black"
          dangerouslySetInnerHTML={{ __html: aboutData.measurableOutcomes.title }}
        />

        {/* 2x2 Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-x-16 gap-y-16 px-4 md:px-10"
        >
          {aboutData.measurableOutcomes.grid.map((item, index) => (
            <motion.div key={index} variants={itemVariant} className="">
              <h3 className="font-tauri text-2xl mb-4 text-black">
                {item.title}
              </h3>
              <p className="font-nanum font-semibold text-xl text-black leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
</section>


      {/* --- LEADERSHIP & VALUES SECTION --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center my-20">
          <motion.div variants={fadeIn("up", 0.1)} initial="hidden" whileInView="show">
            <h2 className="text-4xl font-tauri font-bold mb-6">{aboutData.leadership.title}</h2>
            <p className="text-black font-semibold text-xl font-nanum leading-relaxed">Our team brings together engineering, product thinking, and operational discipline.
<br className='mt-5' /> We build with a focus on reliability, scalability, and real-world impact—learning from every iteration and improving the system over time.</p>
          </motion.div>
          <motion.div variants={scaleIn("up", 0.2)} initial="hidden" whileInView="show">
            <img src={aboutData.leadership.teamImage} alt="Leadership team" className="rounded-xl transition-all duration-500 shadow-md" />
          </motion.div>
        </div>

        {/* Categories Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 gap-16"
        >
          {aboutData.leadership.categories.map((cat, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariant}
              className=" my-20"
            >
             <div className="rounded-xl mb-6 aspect-video bg-slate-100">
              <img
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
              />
            </div>
            
              <h4 className="text-2xl font-taur font-medium">{cat.title}</h4>
              <p className="text-black font-nanum text-lg font-semibold">{cat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  );
};

export default AboutPage;