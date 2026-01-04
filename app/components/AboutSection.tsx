"use client";
import { motion } from "framer-motion";

const timeline = [
  {
    period: "2019 – 2021",
    title: "High School",
    description: "Built foundation in mathematics and computer science through early programming projects in C/C++ and Python.",
    highlights: ["First programs", "Microcontroller projects", "Robotics"],
  },
  {
    period: "2022 – 2025",
    title: "San José State University",
    description: "Focused on systems programming, compiler design, and full-stack development. Explored operating systems and advanced algorithms.",
    highlights: ["Computer Architecture", "Operating Systems", "Advanced Algorithms"],
  },
  {
    period: "Present",
    title: "Current Focus",
    description: "Expanding expertise in software engineering and computational biology, seeking opportunities to apply technical skills to impactful projects.",
    highlights: ["AI/ML", "Distributed Systems", "Computer Vision"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #fff 1px, transparent 1px),
              linear-gradient(to bottom, #fff 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Title */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                About
              </h2>
              <div className="w-20 h-1 bg-white mb-8" />
              <p className="text-lg text-gray-400 leading-relaxed">
                A journey through systems, algorithms, and the art of building
                software that matters.
              </p>
            </motion.div>
          </div>

          {/* Right column - Timeline */}
          <motion.div
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group relative"
              >
                {/* Connecting line */}
                {i !== timeline.length - 1 && (
                  <div className="absolute left-0 top-16 bottom-0 w-px bg-gradient-to-b from-gray-700 to-transparent" />
                )}

                <div className="relative pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-3 h-3 bg-white rounded-full ring-4 ring-black group-hover:ring-8 transition-all" />

                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                    {item.period}
                  </p>
                  
                  <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 text-sm border border-gray-700 text-gray-300 rounded-full hover:border-white hover:text-white transition-colors"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}