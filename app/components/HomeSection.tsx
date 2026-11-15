"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCpu,
  FiLayers,
  FiMapPin,
  FiMail,
  FiCode,
} from "react-icons/fi";
import { SocialLinks } from "./PortfolioUI";
import { projects, skills } from "../data/portfolio";
function LocalClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "America/Los_Angeles",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="hero-clock">
      <span>SAN JOSÉ, CA</span>
      <time aria-label="Current time in San José">{time || "--:--:--"}</time>
    </div>
  );
}
export default function HomeSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-banner">
        <Image
          src="/landscape.jpg"
          alt="Sunlit granite cliffs and pine forest in Yosemite Valley"
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1120px"
          className="landscape"
        />
        <div className="banner-caption">
          A little curiosity. A lot of building.
        </div>
        <LocalClock />
      </div>
      <div className="hero-content">
        <div className="identity-row">
          <div className="avatar-wrap">
            <Image
              src="/avatar.jpg"
              alt="Vishwesh Mashruwala's GitHub avatar"
              width={148}
              height={148}
              priority
            />
            <span className="availability-dot" title="Open to opportunities" />
          </div>
          <h1>
            Hi, I’m Vishwesh<span> — Software Engineer.</span>
          </h1>
        </div>
        <a href="#contact" className="availability-pill">
          <span />
          Open to opportunities
          <FiArrowUpRight aria-hidden="true" />
        </a>
        <p className="hero-description">
          Building elegant systems at the intersection of AI, computer vision,
          and distributed computing
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">
            <FiLayers />
            View Projects
            <FiArrowRight />
          </a>
          <a className="button" href="#contact">
            <FiMail />
            Get in Touch
          </a>
        </div>
        <SocialLinks />
        <div className="stats-grid">
          <div className="stat-card">
            <FiLayers />
            <strong>{projects.length.toString().padStart(2, "0")}</strong>
            <span>Featured Projects</span>
          </div>
          <div className="stat-card">
            <FiCode />
            <strong>
              {skills.reduce((sum, group) => sum + group.items.length, 0)}
            </strong>
            <span>Skills & Technologies</span>
          </div>
          <div className="stat-card">
            <FiCpu />
            <strong>AI & Systems</strong>
            <span>Engineering Focus</span>
          </div>
          <div className="stat-card">
            <FiMapPin />
            <strong>San José, CA</strong>
            <span>Based in</span>
          </div>
        </div>
      </div>
    </section>
  );
}
