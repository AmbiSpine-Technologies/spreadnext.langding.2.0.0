import CareerPlatformSection from '@/app/components/sections/CareerPlatformSection';
import CareerProblemsSection from '@/app/components/sections/CareerProblemsSection';
import ToolsSection from '@/app/components/sections/ToolsSection';
import SetupSection from '@/app/components/sections/SetupSection';
import TestimonialCTA from './TestimonialCTA';

export default function Page() {
  return (
    <main>
      {/* Aapka Career Platform Section yahan render hoga */}
      <CareerPlatformSection />
      <CareerProblemsSection />
      <ToolsSection />
      <SetupSection />
      <TestimonialCTA />
      
    </main>
  );
}