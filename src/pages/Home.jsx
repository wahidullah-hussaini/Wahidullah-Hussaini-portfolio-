import Hero from "../components/home/Hero";
import IntroSection from "../components/home/IntroSection";
import FeaturedProjects from "../components/home/FeaturedProjects";
import SkillsPreview from "../components/home/SkillsPreview";
import LearningJourney from "../components/home/LearningJourney";
import MissionEducation from "../components/home/MissionEducation";
import GalleryPreview from "../components/home/GalleryPreview";
import ContactCTA from "../components/home/ContactCTA";
import useDocumentTitle from "../hooks/useDocumentTitle";

// The home page is just the sections, stacked in order.
// Each section is its own file in src/components/home/, so you can
// edit, reorder or remove one without touching the others.
export default function Home() {
  useDocumentTitle(); // no argument = "Wahidullah Hussaini — Frontend Developer"

  return (
    <>
      <Hero />
      <IntroSection />
      <FeaturedProjects />
      <SkillsPreview />
      <LearningJourney />
      <MissionEducation />
      <GalleryPreview />
      <ContactCTA />
    </>
  );
}
