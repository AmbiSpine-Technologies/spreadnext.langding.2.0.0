import BusinessHero from "@/app/components/sections/business/BusinessHero";
// import ComplianceSection from "@/components/sections/business/ComplianceSection";
import HowItWorks from "@/app/components/sections/business/HowItWorks";
import ComplianceList from "@/app/components/sections/business/ComplianceList";
import WhySpreadnext from "../components/sections/business/WhySpreadnext";
import ComplianceFooter from '../components/sections/business/ComplianceFooter';

export default function page() {
  return (
    <main className="">
       <BusinessHero />
       <WhySpreadnext />
       <ComplianceList />
       <HowItWorks />
       <ComplianceFooter />
    </main>
  );
}