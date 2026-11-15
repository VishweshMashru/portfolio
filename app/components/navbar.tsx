"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiMoon, FiSearch, FiSun, FiX } from "react-icons/fi";
import { projects, skills } from "../data/portfolio";
const searchItems = [
  {
    label: "About Vishwesh",
    detail: "Background & top skills",
    href: "#about",
  },
  {
    label: "Tech Stack & Tools",
    detail: skills.flatMap((g) => g.items.map((s) => s.name)).join(", "),
    href: "#skills",
  },
  ...projects.map((p, i) => ({
    label: p.title,
    detail: `${p.category} · ${p.tech.join(", ")}`,
    href: `#project-${i}`,
  })),
  {
    label: "Current Focus",
    detail: "AI/ML, Distributed Systems, Computer Vision",
    href: "#focus",
  },
  {
    label: "Academic Background",
    detail: "San José State University · High School",
    href: "#education",
  },
  {
    label: "Writing",
    detail: "Articles on programming and technology",
    href: "/blog",
  },
  {
    label: "Get in Touch",
    detail: "Contact, email, GitHub & LinkedIn",
    href: "#contact",
  },
];
export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [query, setQuery] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);
  const searchInput = useRef<HTMLInputElement>(null);
  const searchButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      try {
        const saved = localStorage.getItem("portfolio-theme") === "dark";
        setDark(saved);
        document
          .querySelector(".portfolio")
          ?.setAttribute("data-theme", saved ? "dark" : "light");
      } catch {
        /* Theme still works when storage is unavailable. */
      }
    });
    return () => cancelAnimationFrame(frame);
  }, []);
  const openSearch = () => {
    setQuery("");
    dialog.current?.showModal();
    document.body.style.overflow = "hidden";
    searchInput.current?.focus();
  };
  const closeSearch = () => {
    dialog.current?.close();
  };
  useEffect(() => {
    const shortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        openSearch();
      }
    };
    window.addEventListener("keydown", shortcut);
    return () => {
      window.removeEventListener("keydown", shortcut);
      document.body.style.overflow = "";
    };
  }, []);
  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document
      .querySelector(".portfolio")
      ?.setAttribute("data-theme", next ? "dark" : "light");
    try {
      localStorage.setItem("portfolio-theme", next ? "dark" : "light");
    } catch {
      /* No persistence in restricted browsers. */
    }
  };
  const results = searchItems.filter((item) =>
    `${item.label} ${item.detail}`
      .toLowerCase()
      .includes(query.toLowerCase().trim()),
  );
  return (
    <>
      <nav className="floating-nav" aria-label="Main navigation">
        <a className="nav-avatar" href="#home" aria-label="Vishwesh — home">
          <Image src="/avatar.jpg" alt="" width={40} height={40} />
        </a>
        <Link href="/blog" className="nav-link">
          Writing
        </Link>
        <a href="#projects" className="nav-link">
          Projects
        </a>
        <span className="nav-divider" />
        <button
          className="search-trigger"
          onClick={openSearch}
          ref={searchButton}
          aria-label="Search portfolio"
        >
          <FiSearch />
          <span>Search</span>
          <kbd>⌘ K</kbd>
        </button>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
        >
          {dark ? <FiMoon /> : <FiSun />}
        </button>
      </nav>
      <dialog
        className="search-dialog"
        ref={dialog}
        aria-labelledby="search-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeSearch();
        }}
        onClose={() => {
          document.body.style.overflow = "";
          searchButton.current?.focus();
        }}
      >
        <div className="search-panel">
          <div className="search-header">
            <h2 id="search-title">Explore the portfolio</h2>
            <button
              className="icon-button"
              onClick={closeSearch}
              aria-label="Close search"
            >
              <FiX />
            </button>
          </div>
          <div className="search-field">
            <FiSearch />
            <input
              ref={searchInput}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, skills, and more…"
              aria-label="Search projects, skills, and more"
            />
          </div>
          <div className="search-results">
            {results.length ? (
              results.map((item) => (
                <Link href={item.href} key={item.href} onClick={closeSearch}>
                  <div>
                    <strong>{item.label}</strong>
                    <span>{item.detail}</span>
                  </div>
                  <FiArrowUpRight />
                </Link>
              ))
            ) : (
              <p className="no-results">
                No results for “{query}”. Try a project name or skill.
              </p>
            )}
          </div>
          <div className="search-footer">
            <span>Find something that sparks your curiosity.</span>
            <kbd>esc to close</kbd>
          </div>
        </div>
      </dialog>
    </>
  );
}
