"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HomeSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Gradient orb that follows mouse */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.08] blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #000 0%, transparent 70%)",
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Floating text reveal */}
        <div className="overflow-hidden mb-4">
          <motion.p
            className="text-sm tracking-[0.3em] text-gray-400 uppercase"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Software Engineer
          </motion.p>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            className="text-[clamp(3rem,12vw,9rem)] font-bold tracking-tighter text-black leading-[0.9] mb-8"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Vishwesh
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900">
              Mashruwala
            </span>
          </motion.h1>
        </div>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Building elegant systems at the intersection of AI, computer vision,
          and distributed computing
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-black text-white rounded-full overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
            </span>
            <div className="absolute inset-0 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </a>

          <a
            href="#contact"
            className="group px-8 py-4 border-2 border-black text-black rounded-full relative overflow-hidden"
          >
            <span className="relative z-10 transition-colors group-hover:text-white">
              Get in Touch
            </span>
            <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-black rounded-full flex items-start justify-center p-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-1 h-2 bg-black rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}