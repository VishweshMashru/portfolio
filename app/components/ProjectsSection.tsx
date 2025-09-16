"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tech: string[];
  href?: string;
  image?: { url: string; alt?: string }; // add later
  accent?: string;
};

const projects: Project[] = [
  {
    title: "EcoFootprint",
    description:
      "Next.js platform to track and reduce personal CO₂ emissions with real-time analytics and personalized tips.",
    tech: ["Next.js", "Tailwind", "Node.js"],
    href: "#contact",
    image: undefined,
    accent: "#22d3ee",
  },
  {
    title: "Unix Shell",
    description:
      "POSIX-style shell in C with job control, pipes, redirection, signals, and built-ins.",
    tech: ["C", "Unix APIs", "Signals & Processes"],
    href: "#contact",
    image: undefined,
    accent: "#60a5fa",
  },
  {
    title: "Toy Language Compiler & VM",
    description:
      "Compiler for a C-like language (Java + ANTLR) targeting a custom bytecode VM with a stack-based evaluator.",
    tech: ["Java", "ANTLR", "Custom VM"],
    href: "#contact",
    image: undefined,
    accent: "#a78bfa",
  },
];

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const accent = p.accent ?? "#22d3ee";
  return (
    <motion.a
      href={p.href ?? "#"}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: i * 0.06, duration: 0.5, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0e1013] shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
    >
      <div className="relative aspect-[16/10]">
        {p.image?.url ? (
          <Image
            src={p.image.url}
            alt={p.image.alt ?? p.title}
            fill
            priority={i < 2}
            sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div
            className="h-full w-full"
            style={{
              background:
                `radial-gradient(120% 80% at 80% 10%, ${accent}22 0%, transparent 60%),` +
                `radial-gradient(120% 80% at 20% 90%, #ffffff10 0%, transparent 60%),` +
                `linear-gradient(180deg, #0f1217 0%, #0a0c10 100%)`,
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage:
              "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"300\" height=\"300\" viewBox=\"0 0 300 300\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"3\"/></filter><rect width=\"300\" height=\"300\" filter=\"url(%23n)\"/></svg>')",
            backgroundSize: "300px 300px",
          }}
        />
      </div>

      <div className="relative p-6">
        <h3 className="text-2xl font-semibold text-white tracking-tight">
          {p.title}
        </h3>
        <p className="mt-2 text-[15px] leading-6 text-zinc-300">
          {p.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-zinc-100"
            >
              {t}
            </span>
          ))}
        </div>

        <div
          className="mt-5 inline-flex items-center text-sm font-medium"
          style={{ color: accent }}
        >
          View details
          <svg
            className="ml-1 h-4 w-4 translate-x-0 transition-transform group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M13.2 5.2a1 1 0 0 1 1.6-1.2l6 6a1 1 0 0 1 0 1.4l-6 6a1 1 0 1 1-1.4-1.4l4.3-4.3H4a1 1 0 1 1 0-2h14.3l-4.3-4.3a1 1 0 0 1 .2-1.2z" />
          </svg>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: `radial-gradient(180% 100% at 50% 0%, ${accent}22 0%, transparent 60%)`,
        }}
      />
    </motion.a>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative overflow-hidden py-24 px-6">
      {/* background depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0d10] to-[#0a0a0c]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(80% 50% at 50% -10%, rgba(59,130,246,0.25) 0%, transparent 60%), radial-gradient(70% 45% at 10% 110%, rgba(45,212,191,0.18) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* TITLE: fade/slide like Skills + underline grow */}
        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white">Projects</h2>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="mx-auto mt-3 h-[2px] w-24 origin-left rounded bg-gradient-to-r from-blue-500 to-cyan-400"
          />
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
