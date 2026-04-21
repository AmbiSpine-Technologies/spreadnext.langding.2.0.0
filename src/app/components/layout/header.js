"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation"; // Navigation ke liye import
import Button from "../common/button";
import {motion} from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [heroType, setHeroType] = useState("normal");
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const router = useRouter(); // Router instance
   const pathname = usePathname(); // Current URL path check karne ke liye
 
  const isDarkHero = isHeroVisible && heroType === "media";

const textColor = isDarkHero ? "text-white" : "text-black ";

const bgStyle = isDarkHero
    ? "bg-transparent !border-b-0"
    : "bg-white border-b border-gray-300";

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
    router.push("http://spreadnext.com/signup"); // Signup page par bhejne ke liye
  };


const renderNavLink = (name, href, isExternal = false) => {
    // Agar external link hai aur URL pathname mein shamil hai, toh isActive true hoga
    const isActive = isExternal 
      ? pathname === href || (href.includes("spreadnext.com") && pathname === `/${name.toLowerCase().replace(/\s+/g, "-")}`)
      : pathname === href;

    const commonClass = `relative h-full flex items-center text-sm font-medium transition-all duration-200 ${
      isActive ? "text-blue-600" : textColor + " hover:text-blue-600"
    }`;

    const content = (
      <>
        {name}
        {/* Active Border Bottom - Bilkul navbar border ke upar align hoga */}
        {isActive && (
          <motion.div
            layoutId="nav-underline"
            className="absolute bottom-[-19px] left-0 right-0 h-[2.5px] bg-blue-600 z-10"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </>
    );

    return isExternal ? (
      <a 
        key={name} 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={commonClass}
      >
        {content}
      </a>
    ) : (
      <Link key={name} href={href} className={commonClass}>
        {content}
      </Link>
    );
  };

  const links = ["Campuses", "Talents", "Recruiters", "Services", "News & Updates"];

  return (
    <nav className={`fixed w-full top-0 left-0 z-[100]  duration-300 ${bgStyle}`}>
      <div className=" max-w-[1500px] mx-auto py-2 mt-1 px-6 md:px-20 flex items-center justify-between">
        
        {/* Left Side: Logo & Main Nav */}
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
             <div className=" rounded-md flex items-center justify-center">
                <img src="/spreads.svg" alt="" className="w-8 h-8  object-contain " />
             </div>
            <span className="text-[#0013E3] font-bold text-xl">Spreadnext</span>
          </Link>

          <div className={`hidden lg:flex gap-8 items-center text-xs relative font-medium ${textColor}`}>
 {links.map((link) => 
              renderNavLink(link, `/${link.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}`)
            )}
</div>

        </div>

        {/* Right Side: Auth & Navigation */}
        <div className={`hidden lg:flex items-center gap-6  ${textColor}`}>
          <div className="flex items-center gap-4 ">
            {renderNavLink("Find Jobs", "http://spreadnext.com/jobs", true)}
            {/* <a href="http://spreadnext.com/jobs" className="hover:opacity-80  text-sm font-medium ">Find Jobs</a> */}
            <span className="text-gray-300">|</span>
            {renderNavLink("Login", "http://spreadnext.com/signin", true)}
          </div>
          
          {/* Signup Button with Routing */}
          <Button className="!text-sm !h-10" onClick={handleSignup}>Signup</Button>
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
        <a href="http://spreadnext.com/jobs" onClick={() => setIsOpen(false)}>Find Jobs</a>
        <a href="http://spreadnext.com/signin" onClick={() => setIsOpen(false)}>Login</a>
        <Button onClick={handleSignup} className="">Signup</Button>
      </div>
    </nav>
  );
}
