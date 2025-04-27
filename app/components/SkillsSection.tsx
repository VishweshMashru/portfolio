'use client';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaNode, FaCogs } from 'react-icons/fa';
import { SiNextdotjs, SiTensorflow, SiOpencv, SiTypescript, SiCplusplus } from 'react-icons/si';

const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: <FaPython /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
  },
  {
    category: "Frameworks & Tools",
    items: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNode /> },
    ],
  },
  {
    category: "AI / Computer Vision",
    items: [
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "OpenCV", icon: <SiOpencv /> },
      { name: "Distributed Systems", icon: <FaCogs /> },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-8 bg-[#1F1F1F] text-center">
      <motion.h2
        className="text-4xl font-bold text-blue-400 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Skills
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-300">
        {skills.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.8 }}
            className="bg-[#2C2C2C] p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-300">{group.category}</h3>
            <ul className="space-y-4">
              {group.items.map((skill, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <div className="text-2xl">{skill.icon}</div>
                  <span className="text-lg">{skill.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
