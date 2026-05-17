import { AboutSection } from "./about-section";
import { AchievementsSection } from "./achievement-section";
import { ContactSection } from "./contact-section";
import { ExperienceTimeline } from "./experience-timeline";
import { HeroBanner } from "./hero-banner";
import { ProjectsSection } from "./project-section";

export default function Portfolio() {
  return (
    <div>
      <HeroBanner />
      <AboutSection />
      <AchievementsSection />
      <ExperienceTimeline />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
