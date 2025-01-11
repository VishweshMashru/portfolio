'use client';

import { motion, useTransform, useScroll } from 'framer-motion';

export default function HomePage() {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 300], [0, -50]); // Hero section parallax
  const yAbout = useTransform(scrollY, [300, 600], [50, 0]); // About section parallax

  return (
    <div className="bg-orange-200 text-white min-h-screen">
      {/* Hero Section */}
      <motion.div
        className="flex flex-col items-center justify-center h-[80vh] text-center"
        style={{ y: yHero }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I’m <span className="text-red-400">Vishwesh</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          A passionate software engineer and curious problem solver. I enjoy building innovative projects and exploring the latest technologies.
        </p>
        <motion.a
          href="#about"
          className="mt-8 px-6 py-3 bg-red-400 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-fuchsia-400"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Learn More About Me
        </motion.a>
      </motion.div>

      {/* About Section */}
      <motion.div
        id="about"
        className="py-16 px-8 bg-orange-300 text-center"
        style={{ y: yAbout }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-red-400">About Me</h2>
        <p className="mt-6 text-lg max-w-4xl mx-auto">
          I’m currently a junior at San Jose State University, majoring in Computer Science. My projects range from building AI-driven applications to working on image processing and computer vision. 
          I love collaborating with others, learning new things, and contributing to meaningful projects.
        </p>
        <div className="mt-8">
          <motion.a
            href="#projects"
            className="px-6 py-3 bg-red-400 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-fuchsia-400"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Check Out My Projects
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
