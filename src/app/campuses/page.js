import CareerPlatformSection from '@/app/components/sections/CareerPlatformSection';
import CareerProblemsSection from '@/app/components/sections/CareerProblemsSection'
export default function Page() {
  return (
    <main>
      {/* Aapka Career Platform Section yahan render hoga */}
      <CareerPlatformSection />
      <CareerProblemsSection />
      {/* Baaki sections aap niche add kar sakte hain */}
    </main>
  );
}