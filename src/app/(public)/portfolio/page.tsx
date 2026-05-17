import { AboutSection } from "./about-section";
import { AchievementsSection } from "./achievement-section";
import { ExperienceTimeline } from "./experience-timeline";
import { HeroBanner } from "./hero-banner";

export default function Portfolio() {
  return (
    <div>
      <HeroBanner />
      <AboutSection />
      <AchievementsSection />
      <ExperienceTimeline />
    </div>
  );
}
