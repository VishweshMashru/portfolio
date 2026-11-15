import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiBookOpen, FiCpu } from "react-icons/fi";
import { timeline } from "../data/portfolio";
import { SectionHeading, SkillIcon } from "./PortfolioUI";
export function AboutIntro() {
  return (
    <section id="about" className="portfolio-section">
      <SectionHeading eyebrow="About" title="A little about me" />
      <div className="about-layout">
        <div className="about-portrait">
          <Image
            src="/avatar.jpg"
            alt="Vishwesh Mashruwala's GitHub avatar"
            width={280}
            height={280}
          />
          <span>Vishwesh Mashruwala</span>
        </div>
        <div className="about-copy">
          <h3>Vishwesh Mashruwala</h3>
          <p>
            A journey through systems, algorithms, and the art of building
            software that matters.
          </p>
          <p>{timeline[2].description}</p>
          <p className="eyebrow top-skills-title">Top Skills</p>
          <div className="top-skills">
            {["Python", "C++", "TypeScript", "React", "Next.js", "OpenCV"].map(
              (name) => (
                <div key={name} title={name}>
                  <SkillIcon name={name} />
                  <span className="sr-only">{name}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
export default function AboutSection() {
  return (
    <>
      <section id="focus" className="portfolio-section">
        <SectionHeading eyebrow="Growth" title="Current Focus" />
        <div className="focus-card">
          <div className="large-icon">
            <FiCpu />
          </div>
          <div>
            <div className="card-topline">
              <h3>{timeline[2].title}</h3>
              <span className="status-pill">{timeline[2].period}</span>
            </div>
            <p>{timeline[2].description}</p>
            <div className="tags">
              {timeline[2].highlights.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <Link className="writing-card" href="/blog">
          <div className="large-icon">
            <FiBookOpen />
          </div>
          <div>
            <h3>Writing</h3>
            <p>
              Hot takes, strong opinions, and thoughts on technology,
              programming languages, and what actually matters in software
              engineering.
            </p>
          </div>
          <FiArrowUpRight className="writing-arrow" />
        </Link>
      </section>
      <section id="education" className="portfolio-section">
        <SectionHeading eyebrow="Education" title="Academic Background" />
        <div className="education-list">
          {timeline
            .slice(0, 2)
            .reverse()
            .map((item, i) => (
              <article className="education-card" key={item.title}>
                <span className="education-number">0{i + 1}</span>
                <div>
                  <div className="card-topline">
                    <h3>{item.title}</h3>
                    <span className="period">{item.period}</span>
                  </div>
                  <p>{item.description}</p>
                  <div className="tags">
                    {item.highlights.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
        </div>
      </section>
    </>
  );
}
