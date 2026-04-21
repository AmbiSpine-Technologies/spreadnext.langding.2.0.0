import TalentHeroSection from "./TalentHeroSection"
import JourneySection from './TalentJourneySection'
import ScoreSection from './ScoreSection'
import ResumeFilteringSection from "./ResumeFilteringSection";
import ScoreYourResume from './ScoreYourResume';
import TalentVideoFooter from './TalentVideoFooter';

export default function Page() {
  return (
    <main>
      <TalentHeroSection />
      <JourneySection />
      <ScoreYourResume />
      <ResumeFilteringSection />
      
      <ScoreSection />
      <TalentVideoFooter />
    </main>
  );
}