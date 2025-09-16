"use client";
import { useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function HomeSection() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* glow background */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-blue-600 via-purple-600 to-cyan-400"/>
      </div>

      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0"
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: { color: { value: "#9ca3af" }, move: { enable: true, speed: 0.25 }, number: { value: 40 }, opacity: { value: 0.25 }, size: { value: { min: 1, max: 2 } } },
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          className="text-sm tracking-widest text-gray-400 uppercase"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Software Engineer • AI • CV
        </motion.p>

        <motion.h1
          className="mt-4 text-5xl md:text-7xl font-extrabold leading-tight bg-clip-text text-transparent bg-[linear-gradient(92deg,#93c5fd,#a78bfa,#22d3ee)] bg-[length:200%_200%] animate-[gradient_6s_ease_infinite]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          Hi, I’m Vishwesh.
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-2xl text-gray-300/90"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          I build fast, elegant systems—from Next.js frontends to CV/AI projects and distributed backends.
        </motion.p>

        <motion.div className="mt-10 flex items-center justify-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}>
          <a href="#projects" className="px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-blue-600 to-purple-700 shadow-lg shadow-blue-500/20 hover:opacity-95">Explore Projects</a>
          <a href="#contact" className="px-6 py-3 rounded-full font-medium text-gray-200 border border-white/15 hover:bg-white/5">Contact Me</a>
        </motion.div>
      </div>
    </section>
  );
}
