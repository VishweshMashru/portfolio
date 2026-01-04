"use client";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", level: 90 },
      { name: "C++", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "Java", level: 80 },
    ],
  },
  {
    category: "Frameworks & Tools",
    items: [
      { name: "Next.js", level: 85 },
      { name: "React", level: 85 },
      { name: "Node.js", level: 75 },
      { name: "TailwindCSS", level: 90 },
    ],
  },
  {
    category: "AI & Systems",
    items: [
      { name: "TensorFlow", level: 75 },
      { name: "OpenCV", level: 80 },
      { name: "Unix/Linux", level: 85 },
      { name: "Distributed Systems", level: 70 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-32 px-6 bg-white overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-black opacity-[0.02] rounded-full blur-3xl" />
      
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-6xl md:text-7xl font-bold text-black mb-6 tracking-tight">
            Skills
          </h2>
          <div className="w-20 h-1 bg-black mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: idx * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              <div className="border border-gray-200 rounded-3xl p-8 h-full hover:border-black transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-8 font-medium">
                  {skillGroup.category}
                </h3>

                <div className="space-y-6">
                  {skillGroup.items.map((skill, i) => (
                    <div key={skill.name} className="group/item">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-lg font-medium text-black">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-400 opacity-0 group-hover/item:opacity-100 transition-opacity">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-black rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.2,
                            delay: idx * 0.15 + i * 0.1,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <p className="text-gray-500 text-sm">
            Always learning, always building
          </p>
        </motion.div>
      </div>
    </section>
  );
}