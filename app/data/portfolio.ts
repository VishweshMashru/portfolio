export type Project = {
  title: string;
  description: string;
  tech: string[];
  year: string;
  category: string;
  videoUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    title: "August AI - Video Ad Generation Platform",
    description:
      "Full-stack AI platform enabling users to generate professional video advertisements from product URLs using AI avatars. Features automated brand analysis, multi-format export, and sub-200ms response times with Redis caching.",
    tech: ["TypeScript", "React", "Next.js", "Node.js", "MongoDB", "Redis"],
    year: "2024",
    category: "Full-Stack / AI",
    videoUrl: "",
    demoUrl: "https://www.augstai.com/",
    githubUrl: "",
  },
  {
    title: "3D Medical Visualization System",
    description:
      "Unity-based anatomical reconstruction from CT/MRI DICOM datasets using Marching Cubes algorithm. Integrated AI model for liver abnormality detection while maintaining 60 FPS rendering performance.",
    tech: ["Unity", "C#", "Python", "DICOM", "AI/ML"],
    year: "2024",
    category: "Computer Vision / Medical",
    videoUrl:
      "https://drive.google.com/file/d/17aJLdqYPWjoA2xwi0vN4jGMfea9m5TCD/view",
    demoUrl:
      "https://drive.google.com/file/d/17aJLdqYPWjoA2xwi0vN4jGMfea9m5TCD/view",
    githubUrl: "",
  },
  {
    title: "Mars Rover Lander Simulation",
    description:
      "Mars Entry, Descent, and Landing physics simulator with 6-DOF dynamics, PID control system for automated descent, and real-time telemetry display. Features thrust vectoring, atmospheric drag, and Martian gravity modeling.",
    tech: ["C++", "OpenFrameworks", "Physics Engine", "Control Systems"],
    year: "2024",
    category: "Game Development / Physics",
    videoUrl:
      "https://drive.google.com/file/d/1W2sf3VZPlweyTfPqOoPCPVKgNxvPIJwe/view",
    demoUrl:
      "https://drive.google.com/file/d/1W2sf3VZPlweyTfPqOoPCPVKgNxvPIJwe/view",
    githubUrl: "",
  },
  {
    title: "VShell - Unix Shell Implementation",
    description:
      "POSIX-compliant shell in 2,500+ lines of C supporting pipelines, I/O redirection, background jobs, and environment variables. Implemented robust process management with fork/exec and signal handling.",
    tech: ["C", "POSIX", "Systems Programming", "Unix APIs"],
    year: "2024",
    category: "Systems Programming",
    videoUrl: "",
    githubUrl: "https://github.com/VishweshMashru/vShell",
  },
  {
    title: "Star Gazing Simulator",
    description:
      "Interactive 3D celestial simulation featuring real-time star positions, constellation mapping, and astronomical event visualization with accurate physics modeling.",
    tech: ["Three.js", "WebGL", "TypeScript", "Next.js"],
    year: "2024",
    category: "3D Graphics",
    videoUrl: "",
    demoUrl: "https://cs-116-a-final-project.vercel.app/",
    githubUrl: "",
  },
  {
    title: "Diffusion Models Research",
    description:
      "Collaborated on implementing Diffusion-based probabilistic models with PyTorch. Led efforts in customizing and deploying advanced diffusion models for real-world applications.",
    tech: ["Python", "PyTorch", "Machine Learning", "Diffusion Models"],
    year: "2024",
    category: "AI Research",
    githubUrl: "https://github.com/SCE-Development/SCE-SRLDM",
  },
];

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", level: 90 },
      { name: "C++", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "Java", level: 80 },
    ],
  },
  {
    category: "Frameworks & Tools",
    items: [
      { name: "Next.js", level: 85 },
      { name: "React", level: 85 },
      { name: "Node.js", level: 75 },
      { name: "TailwindCSS", level: 90 },
    ],
  },
  {
    category: "AI & Systems",
    items: [
      { name: "TensorFlow", level: 75 },
      { name: "OpenCV", level: 80 },
      { name: "Unix/Linux", level: 85 },
      { name: "Distributed Systems", level: 70 },
    ],
  },
];

export const timeline = [
  {
    period: "2019 – 2021",
    title: "High School",
    description:
      "Built foundation in mathematics and computer science through early programming projects in C/C++ and Python.",
    highlights: ["First programs", "Microcontroller projects", "Robotics"],
  },
  {
    period: "2022 – 2025",
    title: "San José State University",
    description:
      "Focused on systems programming, compiler design, and full-stack development. Explored operating systems and advanced algorithms.",
    highlights: [
      "Computer Architecture",
      "Operating Systems",
      "Advanced Algorithms",
    ],
  },
  {
    period: "Present",
    title: "Current Focus",
    description:
      "Expanding expertise in software engineering and computational biology, seeking opportunities to apply technical skills to impactful projects.",
    highlights: ["AI/ML", "Distributed Systems", "Computer Vision"],
  },
];
