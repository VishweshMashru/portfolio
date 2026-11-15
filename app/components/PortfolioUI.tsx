import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiServer,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import {
  SiPython,
  SiCplusplus,
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiTensorflow,
  SiOpencv,
  SiLinux,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}
export const skillIcons: Record<string, { icon: IconType; color: string }> = {
  Python: { icon: SiPython, color: "#3675a6" },
  "C++": { icon: SiCplusplus, color: "#1673b8" },
  TypeScript: { icon: SiTypescript, color: "#3178c6" },
  Java: { icon: FaJava, color: "#d96b19" },
  "Next.js": { icon: SiNextdotjs, color: "currentColor" },
  React: { icon: SiReact, color: "#087ea4" },
  "Node.js": { icon: SiNodedotjs, color: "#43853d" },
  TailwindCSS: { icon: SiTailwindcss, color: "#0b99b0" },
  TensorFlow: { icon: SiTensorflow, color: "#ef840d" },
  OpenCV: { icon: SiOpencv, color: "#42a956" },
  "Unix/Linux": { icon: SiLinux, color: "currentColor" },
  "Distributed Systems": { icon: FiServer, color: "#8162cb" },
};
export function SkillIcon({ name }: { name: string }) {
  const item = skillIcons[name];
  if (!item) return null;
  const Icon = item.icon;
  return (
    <span className="skill-icon" style={{ color: item.color }}>
      <Icon aria-hidden="true" />
    </span>
  );
}
export function SocialLinks({ boxed = false }: { boxed?: boolean }) {
  return (
    <div className={`social-links ${boxed ? "boxed" : ""}`}>
      <a
        href="https://github.com/VishweshMashru"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FiGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/vishwesh-mashruwala-00a53122a/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FiLinkedin />
      </a>
      <a href="mailto:mashruwalavishwesh03@gmail.com" aria-label="Email">
        <FiMail />
      </a>
    </div>
  );
}
export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className="text-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <FiArrowUpRight aria-hidden="true" />
    </a>
  );
}
