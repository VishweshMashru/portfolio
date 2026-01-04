import Navbar from "./components/navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 px-6 bg-black border-t border-gray-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Vishwesh Mashruwala. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Built with Next.js & Framer Motion
          </p>
        </div>
      </footer>
    </main>
  );
}