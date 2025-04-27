'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "EcoFootprint",
    description: "Track and reduce your carbon footprint using personalized recommendations and real-time analytics.",
    tech: ["Next.js", "Tailwind", "Node.js"],
  },
  {
    title: "AI SAT Generator",
    description: "A tool that generates SAT practice questions using AI models to aid student preparation.",
    tech: ["Python", "OpenAI API", "React"],
  },
  {
    title: "Coral Vision",
    description: "Computer vision system for analyzing coral reef health and aiding ocean conservation efforts.",
    tech: ["TensorFlow", "OpenCV", "Distributed Systems"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-8 bg-[#2C2C2C] text-center">
      <motion.h2
        className="text-4xl font-bold text-blue-400 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#1F1F1F] p-6 rounded-lg shadow-lg hover:shadow-blue-500/40 transition transform hover:-translate-y-2 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {project.tech.map((techItem, i) => (
                <span key={i} className="bg-gray-700 text-sm text-gray-300 px-3 py-1 rounded-full">
                  {techItem}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
