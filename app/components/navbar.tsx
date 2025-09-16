"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaHome, FaUserAlt, FaFolderOpen, FaEnvelope, FaLaptopCode, FaBars, FaTimes } from "react-icons/fa";

const links = [
  { href: "#home", label: "Home", icon: <FaHome className="text-xl" /> },
  { href: "#about", label: "About", icon: <FaUserAlt className="text-xl" /> },
  { href: "#skills", label: "Skills", icon: <FaLaptopCode className="text-xl" /> },
  { href: "#projects", label: "Projects", icon: <FaFolderOpen className="text-xl" /> },
  { href: "#contact", label: "Contact", icon: <FaEnvelope className="text-xl" /> },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      // simple scrollspy
      const positions = links.map((l) => {
        const el = document.querySelector(l.href);
        if (!el) return { id: l.href, top: Infinity };
        const rect = (el as HTMLElement).getBoundingClientRect();
        return { id: l.href, top: Math.abs(rect.top) };
      });
      positions.sort((a, b) => a.top - b.top);
      if (positions[0]) setActive(positions[0].id);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "backdrop-blur-xl bg-[#101010]/60 border-b border-white/10" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <motion.div
              className="text-3xl text-gray-200 border rounded-2xl border-white/10 p-2 bg-white/5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ rotate: 5 }}
            >
              <FaLaptopCode />
            </motion.div>
            <span className="font-semibold tracking-wide text-gray-300">Vishwesh</span>
          </a>

          <button className="md:hidden p-2 text-gray-300" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <FaTimes /> : <FaBars />}
          </button>

          <ul className="hidden md:flex items-center gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition hover:text-white hover:bg-white/5 ${active === l.href ? "text-white bg-white/10" : "text-gray-300"}`}
                >
                  {l.icon}
                  <span>{l.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* mobile */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#121212]/95 backdrop-blur-xl">
          <ul className="max-w-6xl mx-auto px-4 py-2 space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg transition hover:bg-white/5 ${active === l.href ? "text-white bg-white/10" : "text-gray-300"}`}
                >
                  {l.icon}
                  <span>{l.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}