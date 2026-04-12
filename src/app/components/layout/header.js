"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Navigation ke liye import
import Button from "../common/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter(); // Router instance

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignup = () => {
    setIsOpen(false); // Mobile menu band karne ke liye
    router.push("/signup"); // Signup page par bhejne ke liye
  };

  const links = ["Campuses", "Talents", "Recruiters", "Services", "News & Updates"];

  return (
    <nav className={`fixed w-full top-0 left-0 z-[100] transition-all duration-300 ${
      scrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
    }`}>
      <div className=" max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* Left Side: Logo & Main Nav */}
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
             <div className=" rounded-md flex items-center justify-center">
                <img src="/spreads.svg" alt="" className="w-10 h-10  object-contain " />
             </div>
            <span className="text-[#0013E3] font-bold text-xl">Spreadnext</span>
          </Link>

          <div className="hidden lg:flex gap-8 items-center text-xs font-medium text-white/90">
            {links.map(link => (
              <Link key={link} href={`/${link.toLowerCase().replace(/ & /g, "-")}`} className="hover:text-white text-lg font-medium transition-colors">
                {link}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side: Auth & Navigation */}
        <div className="hidden lg:flex items-center gap-6 text-white">
          <div className="flex items-center gap-4 ">
            <Link href="/jobs" className="hover:opacity-80  text-lg font-medium ">Find Jobs</Link>
            <span className="text-lg font-medium">|</span>
            <Link href="/login" className="hover:opacity-80 text-lg font-medium ">Login</Link>
          </div>
          
          {/* Signup Button with Routing */}
          <Button onClick={handleSignup}>Signup</Button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black z-[-1] flex flex-col px-10 items-start justify-center gap-6 text-sm text-white transition-all duration-500 ${
        isOpen ? "-translate-x-0 opacity-100" : "translate-x-full opacity-0"
      } lg:hidden`}>
        {links.map(link => (
          <Link key={link} href="#" onClick={() => setIsOpen(false)}>{link}</Link>
        ))}
        <div className="h-[1px] w-20 bg-white/20 my-2" />
        <Link href="/jobs" onClick={() => setIsOpen(false)}>Find Jobs</Link>
        <Link href="/login" onClick={() => setIsOpen(false)}>Login</Link>
        <Button onClick={handleSignup} className="">Signup</Button>
      </div>
    </nav>
  );
}