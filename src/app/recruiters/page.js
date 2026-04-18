import RecruitersHero from "@/app/components/sections/recruter/RecruitersHero";
import WhyHiringBroken from "@/app/components/sections/recruter/WhyHiringBroken";
// import ToolsSection from "@/components/sections/common/ToolsSection";
// import Pricing from "@/components/sections/talents/Pricing";
import WhySpreadnext from '@/app/components/sections/recruter/WhyHiringBroken'
import WhyChooseSpreadnext from "../components/sections/recruter/WhyChooseSpreadnext";
import PricingSection from "../components/sections/recruter/PricingSection";
import HiringPlatform from "../components/sections/recruter/HiringPlatform";
import HiringNeeds from "@/app/components/sections/recruter/HiringNeeds"
import HiringAndTemplates from "../components/sections/recruter/HiringAndTemplates";
export default function RecruitersPage() {
  return (
    <main>
      <RecruitersHero />
      <WhyHiringBroken />
      <HiringPlatform />
      <HiringNeeds />
      <HiringAndTemplates />
      <WhyChooseSpreadnext />
      <PricingSection />
      {/* <ToolsSection /> */}
      {/* <Pricing /> */}
    </main>
  );
}