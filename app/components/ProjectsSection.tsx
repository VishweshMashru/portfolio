"use client";
import { motion } from "framer-motion";
import { useState } from "react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  year: string;
  category: string;
  videoUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
};

const projects: Project[] = [
  {
    title: "August AI - Video Ad Generation Platform",
    description: "Full-stack AI platform enabling users to generate professional video advertisements from product URLs using AI avatars. Features automated brand analysis, multi-format export, and sub-200ms response times with Redis caching.",
    tech: ["TypeScript", "React", "Next.js", "Node.js", "MongoDB", "Redis"],
    year: "2024",
    category: "Full-Stack / AI",
    videoUrl: "",
    demoUrl: "https://www.augstai.com/",
    githubUrl: "",
  },
  {
    title: "3D Medical Visualization System",
    description: "Unity-based anatomical reconstruction from CT/MRI DICOM datasets using Marching Cubes algorithm. Integrated AI model for liver abnormality detection while maintaining 60 FPS rendering performance.",
    tech: ["Unity", "C#", "Python", "DICOM", "AI/ML"],
    year: "2024",
    category: "Computer Vision / Medical",
    videoUrl: "https://drive.google.com/file/d/17aJLdqYPWjoA2xwi0vN4jGMfea9m5TCD/view",
    demoUrl: "",
    githubUrl: "",
  },
  {
    title: "Mars Rover Lander Simulation",
    description: "Mars Entry, Descent, and Landing physics simulator with 6-DOF dynamics, PID control system for automated descent, and real-time telemetry display. Features thrust vectoring, atmospheric drag, and Martian gravity modeling.",
    tech: ["C++", "OpenFrameworks", "Physics Engine", "Control Systems"],
    year: "2024",
    category: "Game Development / Physics",
    videoUrl: "https://drive.google.com/file/d/1W2sf3VZPlweyTfPqOoPCPVKgNxvPIJwe/view",
    demoUrl: "",
    githubUrl: "",
  },
  {
    title: "VShell - Unix Shell Implementation",
    description: "POSIX-compliant shell in 2,500+ lines of C supporting pipelines, I/O redirection, background jobs, and environment variables. Implemented robust process management with fork/exec and signal handling.",
    tech: ["C", "POSIX", "Systems Programming", "Unix APIs"],
    year: "2024",
    category: "Systems Programming",
    videoUrl: "",
    githubUrl: "https://github.com/VishweshMashru/vShell",
  },
  {
    title: "Star Gazing Simulator",
    description: "Interactive 3D celestial simulation featuring real-time star positions, constellation mapping, and astronomical event visualization with accurate physics modeling.",
    tech: ["Three.js", "WebGL", "TypeScript", "Next.js"],
    year: "2024",
    category: "3D Graphics",
    videoUrl: "",
    demoUrl: "https://cs-116-a-final-project.vercel.app/",
    githubUrl: "",
  },
  {
    title: "Diffusion Models Research",
    description: "Collaborated on implementing Diffusion-based probabilistic models with PyTorch. Led efforts in customizing and deploying advanced diffusion models for real-world applications.",
    tech: ["Python", "PyTorch", "Machine Learning", "Diffusion Models"],
    year: "2024",
    category: "AI Research",
    githubUrl: "https://github.com/SCE-Development/SCE-SRLDM",
  },
];

export default function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #fff 1px, transparent 1px),
              linear-gradient(to bottom, #fff 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Projects
          </h2>
          <div className="w-20 h-1 bg-white mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl">
            A selection of projects spanning web development, systems programming,
            computer vision, and computational biology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="relative h-full border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-500 bg-black hover:bg-gray-950">
                {/* Video Preview Section */}
                {project.videoUrl && (
                  <div className="relative aspect-video bg-gray-900 overflow-hidden">
                    {playingVideo === i ? (
                      <video
                        src={project.videoUrl}
                        controls
                        autoPlay
                        className="w-full h-full object-cover"
                        onEnded={() => setPlayingVideo(null)}
                      />
                    ) : (
                      <div
                        className="relative w-full h-full cursor-pointer group/video"
                        onClick={() => setPlayingVideo(i)}
                      >
                        {/* Video thumbnail - you can replace with actual thumbnail */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
                        
                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover/video:bg-white/20 transition-all group-hover/video:scale-110">
                            <svg
                              className="w-8 h-8 text-white ml-1"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>

                        {/* Video indicator badge */}
                        <div className="absolute top-3 right-3 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white">
                          Video Demo
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Project Info */}
                <div className="p-6">
                  {/* Year badge */}
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs uppercase tracking-wider text-gray-500">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-600 font-mono">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs border border-gray-800 text-gray-400 rounded-full group-hover:border-gray-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Demo
                      </a>
                    )}
                    
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Code
                      </a>
                    )}

                    {!project.demoUrl && !project.githubUrl && (
                      <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-400 transition-colors">
                        <span className="mr-2">View details</span>
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            hoveredIndex === i ? "translate-x-1" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note about videos */}
        <motion.p
          className="mt-12 text-center text-sm text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Click on projects with video demos to watch them in action
        </motion.p>
      </div>
    </section>
  );
}