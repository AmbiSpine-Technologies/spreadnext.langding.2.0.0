import Image from "next/image";
import Header from "@/app/components/layout/header";
import Hero from "@/app/components/sections/Hero";
import TrustedSection from "@/app/components/sections/TrustedSection";
import DigitalHomeSection from "@/app/components/sections/DigitalHomeSection";
import FuelYourCareer from "@/app/components/sections/FuelYourCareer";
import ServicesSection from "@/app/components/sections/ServicesSection";
import TestimonialsSection from '@/app/components/sections/TestimonialsSection'
import TrendingJobs from '@/app/components/TrendingJobs' 
import { BuildMatch } from '@/app/components/sections/BuildMatch'
export default function Home() {
  return (
    <div className="">
      <main >
    
       <Hero />
       <DigitalHomeSection />
       <FuelYourCareer />
       <ServicesSection />
       <TrendingJobs />
       <BuildMatch />
       <TestimonialsSection />
       <TrustedSection />
  
     
      </main>
    </div>
  );
}
