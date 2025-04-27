import Navbar from "./components/navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <SkillsSection /> 
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
