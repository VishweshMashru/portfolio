"use client";
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaNode, FaCogs } from 'react-icons/fa';
import { SiNextdotjs, SiTensorflow, SiOpencv, SiTypescript, SiCplusplus } from 'react-icons/si';

const skills = [
  { name: 'Python', icon: <FaPython />, level: 90, group: 'Languages' },
  { name: 'C++', icon: <SiCplusplus />, level: 80, group: 'Languages' },
  { name: 'TypeScript', icon: <SiTypescript />, level: 85, group: 'Languages' },
  { name: 'Next.js', icon: <SiNextdotjs />, level: 85, group: 'Frameworks & Tools' },
  { name: 'React', icon: <FaReact />, level: 85, group: 'Frameworks & Tools' },
  { name: 'Node.js', icon: <FaNode />, level: 75, group: 'Frameworks & Tools' },
  { name: 'TensorFlow', icon: <SiTensorflow />, level: 70, group: 'AI / CV' },
  { name: 'OpenCV', icon: <SiOpencv />, level: 75, group: 'AI / CV' },
  { name: 'Distributed Systems', icon: <FaCogs />, level: 65, group: 'AI / CV' },
];

const groups = ['Languages', 'Frameworks & Tools', 'AI / CV'];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#101010]">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 className="text-4xl font-bold text-blue-400 mb-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {groups.map((g, idx) => (
            <motion.div key={g} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
              className="rounded-2xl p-6 bg-[#161616]/80 border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
              <h3 className="text-left text-blue-300 font-semibold mb-6">{g}</h3>
              <ul className="space-y-5">
                {skills.filter((s) => s.group === g).map((s) => (
                  <li key={s.name} className="text-left">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{s.icon}</span>
                      <span className="text-lg text-gray-200">{s.name}</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{ width: `${s.level}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}