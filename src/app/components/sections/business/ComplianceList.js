// src/components/sections/business/ComplianceList.js
"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/animation";
import Image from "next/image";
import { useRouter } from 'next/navigation';


const COMPLIANCE_DATA = [
  {
    title: "Direct & Indirect Taxation",
    desc: "From individual ITR filing to complex corporate tax planning — our expert partners ensure you stay compliant, minimise liability, and never miss a deadline.",
    img: "/taxation.png",
    button: "Enquire about taxation",
    features: [
      "Income Tax Consultancy Tax planning & advisory for individuals and corporates",
      "ITR Filing Compliance for corporates, LLPs, and individuals",
      "GST Services Registration, return filing, and consultancy",
      "Transfer Pricing Study & report for international transactions",
      "TDS Compliance Filing returns & handling TDS assessments",
      "Representation Services Appealing before tax authorities & handling scrutiny cases",
    ],
  },
  {
    title: "Accounting & Bookkeeping",
    desc: "Accurate, up-to-date financial records are the foundation of every good business decision. Our partners set up and manage your accounting — so you always know exactly where you stand.",
    img: "/Man logging into his account on phone.png",
    button: "Enquire about accounting",
    features: [
      "Bookkeeping & Accounting Regular financial data recording and management",
      "Cloud-Based Accounting Setup & management on Tally, QuickBooks, and Xero",
      "Financial Statements Balance sheets and P&L accounts prepared to standard",
      "Payroll Processing Salary management and statutory compliance",
      "Accounting System Setup ERP implementation and internal control systems",
    ],
  },
  {
    title: "Corporate Law & ROC Compliance",
    desc: "From day one registration to annual filings and secretarial work — our corporate law partners handle every legal requirement so you can focus on building your business.",
    img: "/Young woman pointing at checkmark.png",
    button: "Enquire about corporate laws",
    features: [
      "Company Incorporation Private Ltd, Public Ltd, and OPC formation",
      "LLP Registration & Compliance Limited Liability Partnership setup and ongoing compliance",
      "ROC Filing & Annual Returns Corporate compliance management handled end to end",
      "Secretarial Services Board meetings, minutes, and company secretarial work",
      "Company Closure Winding up and liquidations handled professionally",
    ],
  },
  {
    title: "Business Advisory & Management Consultancy",
    desc: "Whether you're raising funds, planning an acquisition, or need a CFO but can't afford one full-time — our advisory partners bring boardroom-level expertise to businesses of every size.",
       img: "/Young woman pointing at checkmark.png",
    button: "Enquire about advisory",
    features: [
      "Virtual CFO Services Strategic financial planning and management",
      "Startup Advisory Setup, registration, and fund structuring",
      "Project Financing & CMA Reports Preparing reports for bank loans and credit",
      "Business Valuation Valuing companies, shares, and assets accurately",
      "Mergers & Acquisitions Advisory on restructuring and takeovers",
      "Due Diligence Financial verification for investors and buyers",
    ],
  },
  {
    title: "Specialized & Emerging Services",
    desc: "As regulations evolve and businesses go global — compliance gets more complex. Our specialized partners stay ahead of every new requirement so you don't have to.",
       img: "/Exchange market analysis on holographic screen.png",
    button: "Enquire about specialized services",
    features: [
      "NRI Taxation & Advisory FEMA and RBI compliance for non-residents",
      "FSSAI Registration & Compliance Food safety certifications handled end to end",
      "Export-Import (IEC) Code Regulatory assistance for international trade",
      "ESG & Sustainability Reporting Environmental, Social, and Governance compliance",
      "Digital Signature Certificate DSC issuance and management",
      "NGO/Trust/Society Registration 12A/80G registrations and compliance",
    ],
  },
];

export default function ComplianceList() {
   const router = useRouter();
  return (

    <section className="bg-[#275e6e] py-24 px-6 lg:px-28 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-10">
        <h2 className="text-4xl md:text-5xl font-medium text-center">
          Every compliance need. One platform.
        </h2>
        <p className="text-[#ff8652] text-center font-medium my-2 text-lg mb-10">Not just a platform. A compliance partner.</p>

        <div className="space-y-23">
          {COMPLIANCE_DATA.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row tems-center justify-between gap-10 lg:gap-20`}
            >
              {/* Left Side: Illustration & Intro */}
              <div className="flex-1 w-full max-w-[450px]">
                <div className="relative w-full h-[350px] ">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="space-y-4 text-left">
                  <h3 className="text-2xl font-bold leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {item.desc}
                  </p> 
               
                </div>
              </div>

              {/* Right Side: Detailed Features */}
              <div className="flex-1 w-full lg:max-w-md">
                <ul className="space-y-5">
                  {item.features.map((feature, idx) => {
                    // Yahan hum feature title aur description ko split kar rahe hain (pehle do-teen words usually title hain)
                    const splitIdx = feature.indexOf(" ");
                    return (
                      <li key={idx} className="flex items-start gap-4 group">
                        <span className="text-white text-2xl mt-[-4px]">•</span>
                        <p className="text-base text-gray-100 leading-snug">
                          {feature}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
           <div className="py-5 flex justify-center">
                    <button onClick={() => router.push("/contact-us")}  className="rounded-full h-11 px-8 font-medium bg-[#1694EE80] !text-sm hover:cursor-pointer text-white hover:bg-[#0e8de880] transition-colors flex items-center gap-2">
                      Get free Consultation<span className="text-xl">→</span>
                    </button>
                  </div>
      </div>
    </section>
  );
}