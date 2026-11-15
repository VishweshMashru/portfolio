import { skills } from "../data/portfolio";
import { SectionHeading, SkillIcon } from "./PortfolioUI";
export default function SkillsSection() {
  return (
    <section id="skills" className="portfolio-section">
      <SectionHeading eyebrow="Expertise" title="Tech Stack & Tools">
        <span className="section-note">Always learning, always building</span>
      </SectionHeading>
      <div className="skill-groups">
        {skills.map((group) => (
          <div key={group.category} className="skill-group">
            <h3>{group.category}</h3>
            <div className="skill-grid">
              {group.items.map((skill) => (
                <div
                  className="skill-item"
                  key={skill.name}
                  tabIndex={0}
                  aria-label={`${skill.name}, proficiency ${skill.level}%`}
                >
                  <SkillIcon name={skill.name} />
                  <span>{skill.name}</span>
                  <span className="skill-level">
                    {skill.level}% proficiency
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
