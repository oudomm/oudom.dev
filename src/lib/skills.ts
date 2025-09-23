import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiSpringboot,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiVercel,
  SiDocker,
  SiFastapi,
  SiPython,
  SiGooglecloud,
  SiGithubactions,
  SiIntellijidea,
} from "react-icons/si";
import { FaDatabase, FaServer, FaJava } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "CSS3", icon: SiCss3 },
      { name: "HTML5", icon: SiHtml5 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Java", icon: FaJava },
      { name: "Python", icon: SiPython },
      { name: "REST APIs", icon: FaServer },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Database Design", icon: FaDatabase },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "GitHub", icon: SiGithub },
      { name: "Git", icon: SiGit },
      { name: "Vercel", icon: SiVercel },
      { name: "VS Code", icon: DiVisualstudio },
      { name: "IntelliJ IDEA", icon: SiIntellijidea },
    ],
  },
];

export const learningSkills: Skill[] = [
  { name: "Google Cloud", icon: SiGooglecloud },
  { name: "Docker", icon: SiDocker },
  { name: "GitHub Actions", icon: SiGithubactions },
];
