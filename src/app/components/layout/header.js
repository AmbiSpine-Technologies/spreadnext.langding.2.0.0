"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation"; // Navigation ke liye import
import Button from "../common/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [heroType, setHeroType] = useState("normal");
const [isHeroVisible, setIsHeroVisible] = useState(false);
  
  const router = useRouter(); // Router instance
   const pathname = usePathname(); // Current URL path check karne ke liye
 
  const isDarkHero = isHeroVisible && heroType === "media";

const textColor = isDarkHero ? "text-white" : "text-black";

const bgStyle = isDarkHero
  ? "bg-transparent !border-b-0"
  : "bg-white border-gray-300";


 useEffect(() => {
    const hero = document.getElementById("hero-section");

    if (!hero) {
      setIsHeroVisible(false);
      setHeroType("normal");
      return;
    }

    // ✅ Detect hero type (manual + fallback)
    const type =
      hero.getAttribute("data-hero") ||
      (hero.querySelector("video") || hero.querySelector("img")
        ? "media"
        : "normal");

    setHeroType(type);

    // ✅ Observe hero visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, [pathname]);


  const handleSignup = () => {
    setIsOpen(false); // Mobile menu band karne ke liye
    router.push("/signup"); // Signup page par bhejne ke liye
  };

  const links = ["Campuses", "Talents", "Recruiters", "Services", "News & Updates"];

  return (
    <nav className={`fixed w-full top-0 left-0 z-[100]  border-b transition-all duration-300 ${bgStyle}`}>
      <div className=" max-w-[1500px] mx-auto py-2 mt-1 px-6 md:px-20 flex items-center justify-between">
        
        {/* Left Side: Logo & Main Nav */}
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
             <div className=" rounded-md flex items-center justify-center">
                <img src="/spreads.svg" alt="" className="w-8 h-8  object-contain " />
             </div>
            <span className="text-[#0013E3] font-bold text-xl">Spreadnext</span>
          </Link>

          <div className={`hidden lg:flex gap-8 items-center text-xs font-medium ${textColor}`}>
            {links.map(link => (
              <Link key={link} href={`/${link.toLowerCase().replace(/ & /g, "-")}`} className=" text-sm font-medium transition-colors">
                {link}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side: Auth & Navigation */}
        <div className={`hidden lg:flex items-center gap-6  ${textColor}`}>
          <div className="flex items-center gap-4 ">
            <Link href="/jobs" className="hover:opacity-80  text-sm font-medium ">Find Jobs</Link>
            <span className="text-lg font-medium">|</span>
            <Link href="/login" className="hover:opacity-80 text-sm font-medium ">Login</Link>
          </div>
          
          {/* Signup Button with Routing */}
          <Button className="!text-sm" onClick={handleSignup}>Signup</Button>
        </div>

        {/* Mobile Toggle */}
        <button className={`lg:hidden ${textColor}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black z-[-1] flex flex-col px-10 items-start justify-center gap-6 text-sm ${textColor} transition-all duration-500 ${
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
