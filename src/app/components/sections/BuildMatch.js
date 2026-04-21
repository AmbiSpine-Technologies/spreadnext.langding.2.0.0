"use client";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/animations/animation";
import Button from "../common/button";
import { useRouter } from "next/navigation";

const InfoCard = ({ stepNumber, stepText, title, description, points, children, colorClass }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
    >
      {/* Step Badge */}
      <div className="flex items-center gap-3 mb-6">
        <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border ${colorClass}`}>
          {stepNumber}
        </span>
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
          {stepText}
        </span>
      </div>

      {/* Text Content */}
      <div className="mb-8 text-left ">
        <h3 className="text-xl font-medium text-gray-900 leading-tight mb-4">
          {title}
        </h3>
        <p className="text-gray-500 leading-relaxed text-sm">
          {description}
        </p>
      </div>

      {/* List Points */}
      <ul className="space-y-3 mb-10">
        {points.map((point, index) => (
          <li key={index} className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <span className={`w-1.5 h-1.5 rounded-full ${colorClass.split(' ')[0].replace('text-', 'bg-')}`}></span>
            {point}
          </li>
        ))}
      </ul>

      {/* Illustration Area (The UI mockups) */}
      <div className="mt-auto bg-gray-50 rounded-2xl p-4 min-h-[180px] flex items-center justify-center border border-gray-50">
        {children}
      </div>
    </motion.div>
  );
};

const ProfileMockup = () => (
  <div className="w-full bg-white rounded-xl p-4 shadow-sm border border-gray-100 scale-90 md:scale-100">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-[#0013E3] font-bold text-xs">AK</div>
      <div className="text-left">
        <h5 className="text-sm  font-semibold text-gray-800">Arjun Kumar</h5>
        <p className="text-xs text-gray-400">B.Tech CSE · Pune · 2025</p>
      </div>
    </div>
    <div className="flex flex-wrap gap-2 mb-2">
      {['Python', 'React', 'SQL', 'Product'].map(tag => (
        <span key={tag} className="text-[10px] bg-blue-50 text-[#0013E3] px-2 py-0.5 rounded-md font-bold">{tag}</span>
      ))}
    </div>
    <div className="pt-2 border-t border-gray-50">
      <div className="flex justify-between text-[10px] font-bold text-gray-400 mb-1">
        <span>Career readiness</span>
        <span className="text-[#0013E3]">68%</span>
      </div>
      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <motion.div initial={{ width: 0 }} whileInView={{ width: '68%' }} transition={{ duration: 1 }} className="h-full bg-[#0013E3]"></motion.div>
      </div>
    </div>
  </div>
);

const MatchingMockup = () => (
  <div className="w-full space-y-3 scale-90 md:scale-100">
    {[
      { role: 'Software Engineer', co: 'TCS • Pune', match: '94%', color: 'bg-blue-600' },
      { role: 'Product Intern', co: 'Razorpay • Remote', match: '88%', color: 'bg-emerald-500' },
      { role: 'Business Analyst', co: 'ZS Associates', match: '81%', color: 'bg-purple-600' }
    ].map((item, i) => (
      <div key={i} className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center text-[10px] text-white font-bold`}>{item.role.charAt(0)}</div>
          <div>
            <div className="text-[11px] font-bold text-gray-900 leading-none">{item.role}</div>
            <div className="text-[9px] text-gray-400 mt-1">{item.co}</div>
          </div>
        </div>
        <div className="text-[11px] font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-lg">{item.match}</div>
      </div>
    ))}
  </div>
);

const SuccessMockup = () => (
  <div className="w-full bg-white rounded-xl p-4 shadow-sm border border-gray-100 scale-90 md:scale-100">
    <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-2 mb-4 flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
      <span className="text-[10px] font-bold text-emerald-700">Offer received • TCS Pune • ₹4.5L CTC</span>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between text-[10px] text-gray-400 font-medium">
        <span>Applications sent</span>
        <span className="text-gray-900 font-bold">12</span>
      </div>
      <div className="flex justify-between text-[10px] text-gray-400 font-medium">
        <span>Interview calls</span>
        <span className="text-gray-900 font-bold">4</span>
      </div>
      <div className="flex justify-between text-[10px] text-emerald-500 font-bold pt-2 border-t border-gray-50">
        <span>Career readiness</span>
        <span>92%</span>
      </div>
    </div>
  </div>
);
export const BuildMatch = () => {
    const router = useRouter();
 const steps = [
    {
      stepNumber: "01",
      stepText: "Step One",
      title: "This is your career identity. Not just a CV.",
      description: "Add your skills, projects, gigs, and goals. SpreadNext builds you a profile that shows employers who you actually are.",
      points: ["Skills & projects", "Education & certifications", "Career goals & preferences"],
      colorClass: "text-blue-600 bg-blue-50 border-blue-100",
      mockup: <ProfileMockup />
    },
    {
      stepNumber: "02",
      stepText: "Step Two",
      title: "Stop searching. Start getting found.",
      description: "Our AI reads your profile and surfaces jobs, gigs, and people that match exactly where you are right now.",
      points: ["AI-matched jobs & gigs", "People to connect with", "Skills you should build next"],
      colorClass: "text-emerald-600 bg-emerald-50 border-emerald-100",
      mockup: <MatchingMockup />
    },
    {
      stepNumber: "03",
      stepText: "Step Three",
      title: "Every action moves you closer to an offer.",
      description: "Apply to matched jobs, take real gigs, learn from people one step ahead — and watch your Readiness Score climb.",
      points: ["Apply to matched roles", "Track your career score", "Network, learn, get hired"],
      colorClass: "text-orange-600 bg-orange-50 border-orange-100",
      mockup: <SuccessMockup />
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.span variants={fadeIn("down")} initial="hidden" whileInView="show" className="text-[#0013E3] font-bold text-[10px] uppercase tracking-[0.3em] border border-blue-100 px-4 py-1 rounded-full">
          How it Works
        </motion.span>
        <motion.h2 variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" className="text-3xl md:text-4xl font-black text-gray-900 mt-8 mb-4">
          Built, matched, hired. <br /> In that order.
        </motion.h2>
        <motion.p variants={fadeIn("up", 0.3)} initial="hidden" whileInView="show" className="text-gray-500 text-lg max-w-2xl mx-auto">
          Every step on SpreadNext is designed to get you closer to your first — or next — offer.
        </motion.p>
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 mt-16 md:grid-cols-3 gap-8"
      >
        {steps.map((step, index) => (
          <InfoCard key={index} {...step}>
             {/* Yahan aapke UI Mockup Components aayenge */}
             {step.mockup}
          </InfoCard>
        ))}
      </motion.div>

      <div className="flex justify-center  text-center mt-16">
         <Button onClick={() => router.push("https://spreadnext.com/signin")} variant="primary" className="">
            Build your profile — it takes 3 minutes →
         </Button>
      </div>
         <p className="text-gray-400 text-sm mt-4 font-medium">Free forever • No credit card • Just your career</p>
      
      </div>

    </section>
  );
};