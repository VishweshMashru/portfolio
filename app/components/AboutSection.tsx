"use client";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { FaGraduationCap, FaProjectDiagram, FaLaptopCode } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-6 bg-[#0f0f0f] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(80% 50% at 50% -10%, rgba(59,130,246,0.25) 0%, transparent 60%), radial-gradient(70% 45% at 10% 110%, rgba(45,212,191,0.18) 0%, transparent 60%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-blue-400"
          initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Me
        </motion.h2>

        <VerticalTimeline className="mt-12">
          {/* High school */}
          <VerticalTimelineElement
            contentStyle={{
              background: "rgba(32,32,32,0.85)",
              color: "#fff",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(32,32,32,0.85)" }}
            date="2019 – 2021"
            iconStyle={{ background: "#3B82F6", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="font-bold">High School</h3>
            <p>Built a strong base in math and CS; started tinkering with code and robotics.</p>
            <ul className="mt-3 ml-5 list-disc text-zinc-300 space-y-1">
              <li>First programs in C/C++ and Python.</li>
              <li>Basic microcontroller projects and simple bots.</li>
            </ul>
          </VerticalTimelineElement>

          {/* SJSU */}
          <VerticalTimelineElement
            contentStyle={{
              background: "rgba(32,32,32,0.85)",
              color: "#fff",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(32,32,32,0.85)" }}
            date="2022 – 2025"
            iconStyle={{ background: "#06B6D4", color: "#fff" }}
            icon={<FaLaptopCode />}
          >
            <h3 className="font-bold">San José State University</h3>
            <p>Deepened focus on systems, compilers, and full-stack development.</p>
            <ul className="mt-3 ml-5 list-disc text-zinc-300 space-y-1">
              <li>Explored operating systems, computer architecture, and advanced algorithms.</li>
              <li>Built projects that strengthened problem-solving and low-level programming skills.</li>
            </ul>
          </VerticalTimelineElement>

          {/* Current */}
          <VerticalTimelineElement
            contentStyle={{
              background: "rgba(32,32,32,0.85)",
              color: "#fff",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(32,32,32,0.85)" }}
            date="Now"
            iconStyle={{ background: "#9333EA", color: "#fff" }}
            icon={<FaProjectDiagram />}
          >
            <h3 className="font-bold">Current Focus</h3>
            <p>
              Continuing to expand my skills in computer science, exploring
              challenging problems in software engineering, and seeking
              opportunities to apply these abilities to impactful projects.
            </p>
            <p className="mt-3 text-zinc-300">
              I’m especially interested in areas that bridge low-level systems
              with modern application development and enjoy learning whatever new
              technologies help me grow as an engineer.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}
