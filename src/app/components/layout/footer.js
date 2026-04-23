"use client";
import React, {useState} from "react";
import Link from "next/link";

const Footer = () => {
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
  const handleSubmit = async () => {
    if (!email) return;

    const res = await fetch("http://localhost:5000/api/sub/subscribe/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
 console.log(res);
    const data = await res.json();
    setMessage(data.message); // ✅ popup message
 

    // auto hide
    setTimeout(() => setMessage(""), 3000);
    setEmail("");
  };
  return (
    <footer className="bg-white border-t border-gray-300 relative">
       {message && (
        <div className="fixed bottom-6 right-6 bg-black text-white px-6 py-3 rounded shadow-lg">
          {message}
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12  pt-20 pb-8 px-6 md:px-12 lg:px-24">
        
        {/* Brand & Newsletter Section */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className=" rounded-md flex items-center justify-center">
                <img src="/spreads.svg" alt="" className="w-10 h-10  object-contain " />
             </div>
            <h2 className="text-2xl font-bold text-[#1B1B24]">Spreadnext</h2>
          </div>
          
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Stay updated with news and updates from Spreadnext & AmbiSpine Technologeis
          </p>

          <div className="relative flex gap-4 max-w-md">
            <input
              type="email"
              placeholder="Email"
              value={email}
               onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-3 bg-white border border-gray-300 rounded-full placeholder:text-[#737373] text-[#686565] font-medium focus:outline-none focus:ring-0 transition-all text-sm"
            />
            <button onClick={handleSubmit} className="hover:cursor-pointer bg-[#0013E3] !h-10 text-white px-8 py-1 rounded-full font-semibold !text-[12px] hover:bg-[#0315e3] transition-colors">
              Join
            </button>
          </div>

          <p className="text-xs text-gray-500 font-inter leading-tight max-w-sm">
            India's career platform for the next generation. Learn, network, and get hired — in one place. By signing up, you agree to receive updates, Career tips, job alerts & platform update. You may withdraw your consent and unsubscribe at any time by clicking the unsubscribe link.
          </p>
        </div>

        {/* Links Row */}
        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Column 1: About Us */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-[#1B1B24] text-sm uppercase ">About Us</h3>
            <ul className="flex flex-col gap-1">
              {["About Us", "Contact", "Privacy Policy", "Help Center", "Careers"].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-500 font-inter hover:text-[#0013E3] text-[13px] transition-colors font-medium">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: For Students */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-[#1B1B24] text-sm uppercase ">For Students</h3>
            <ul className="flex flex-col gap-1">
              {["Build your profile", "Browse job", "Skill Program", "Ai-Copilot", "Career readiness score"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-500 font-inter hover:text-[#0013E3] text-[13px] transition-colors font-medium">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Colleges + Terms (Stacked like in image) */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-[#1B1B24] text-sm uppercase ">For colleges & universities</h3>
              <ul className="flex flex-col gap-1">
                {["Placement Management", "Employability analytics", "Campus Dashboard", "Skill Programs"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-500 font-inter hover:text-[#0013E3] text-[13px] transition-colors font-medium">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Terms & Condition underneath Colleges */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-[#1B1B24] text-sm uppercase ">Terms & condition</h3>
              <ul className="flex flex-col gap-1">
                {["Privacy Policy", "Cookie Policy", "Terms of Condition"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-500 font-inter hover:text-[#0013E3] text-[13px] transition-colors font-medium">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Recruiter */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-[#1B1B24] text-sm uppercase ">For Recruiter & Companies</h3>
            <ul className="flex flex-col gap-1">
              {["Post a job", "Search Talents", "Campus Talent Access", "Recruiter Dashboard"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-500 hover:text-[#0013E3] text-[13px] transition-colors font-medium">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 ">
      <div className=" py-6 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
        <div className="text-center md:text-left">
          <p>Spreadnext © 2025 — All rights reserved from AmbiSpine Technologeis</p>
          <p>Made in India, Built for the World.</p>
        </div>
        <div>
          <p className="text-gray-500">Contact Us: <span className="text-[#1B1B24]">info@amispine-technologeis.com</span> | <span className="text-[#1B1B24]">Rewa HQ</span></p>
        </div>
      </div>
      </div>
   
    </footer>
  );
};

export default Footer;