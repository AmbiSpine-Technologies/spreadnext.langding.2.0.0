import Image from "next/image";
import Header from "@/app/components/layout/header";
import Hero from "@/app/components/sections/Hero";
import TrustedSection from "@/app/components/sections/TrustedSection";
import DigitalHomeSection from "@/app/components/sections/DigitalHomeSection";
import FuelYourCareer from "@/app/components/sections/FuelYourCareer";
import ServicesSection from "@/app/components/sections/ServicesSection";
import TestimonialsSection from '@/app/components/sections/TestimonialsSection'
import Footer from '@/app/components/layout/footer';

export default function Home() {
  return (
    <div className="">
      <main >
    <Header />
      <Hero />
       <DigitalHomeSection />
       <FuelYourCareer />
       <ServicesSection />
       <TestimonialsSection />
      <TrustedSection />
      <Footer />
     
      </main>
    </div>
  );
}
