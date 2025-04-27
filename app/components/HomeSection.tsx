/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // <-- Changed here

export default function HeroSection() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine); // <-- Changed here
  }, []);

  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "#1F1F1F" },
          particles: {
            color: { value: "#ffffff" },
            move: { enable: true, speed: 0.2 },
            number: { value: 50 },
            opacity: { value: 0.3 },
            size: { value: { min: 1, max: 3 } },
          },
        }}
        className="absolute inset-0"
      />

      {/* Main Content */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-white z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hi, I am <span className="text-blue-400">Vishwesh</span>
      </motion.h1>

      <motion.p
        className="mt-6 text-lg md:text-2xl text-gray-400 max-w-2xl z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Software Engineer | AI Explorer | Computer Vision Enthusiast
      </motion.p>

      <motion.a
        href="#about"
        className="mt-10 inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-semibold hover:from-blue-500 hover:to-blue-700 shadow-lg z-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More About Me
      </motion.a>
    </section>
  );
}
