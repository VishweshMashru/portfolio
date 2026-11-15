import Navbar from "./components/navbar";
import HomeSection from "./components/HomeSection";
import AboutSection, { AboutIntro } from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
export default function Home() {
  return (
    <main className="portfolio" data-theme="light">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <div className="portfolio-container" id="main-content">
        <HomeSection />
        <SkillsSection />
        <AboutIntro />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
        <footer className="portfolio-footer">
          <a href="#home" className="footer-wordmark">
            vm<span>.</span>
          </a>
          <p>© 2026 Vishwesh Mashruwala. All rights reserved.</p>
          <span>Built with Next.js & Framer Motion</span>
        </footer>
      </div>
    </main>
  );
}
