import RecruitersHero from "@/app/components/sections/recruter/RecruitersHero";
import WhyHiringBroken from "@/app/components/sections/recruter/WhyHiringBroken";
// import ToolsSection from "@/components/sections/common/ToolsSection";
// import Pricing from "@/components/sections/talents/Pricing";

import WhyChooseSpreadnext from "../components/sections/recruter/WhyChooseSpreadnext";
import PricingSection from "../components/sections/recruter/PricingSection";
import HiringPlatform from "../components/sections/recruter/HiringPlatform";
export default function RecruitersPage() {
  return (
    <main>
      <RecruitersHero />
      <WhyHiringBroken />
      <HiringPlatform />
      <WhyChooseSpreadnext />
      <PricingSection />
      {/* <ToolsSection /> */}
      {/* <Pricing /> */}
    </main>
  );
}