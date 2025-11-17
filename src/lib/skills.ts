import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiSpringboot,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiDocker,
  SiPython,
  SiGooglecloud,
  SiSqlite,
  SiLinux,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbApps } from "react-icons/tb";

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
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Java", icon: FaJava },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "SQLite", icon: SiSqlite },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "Docker", icon: SiDocker },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ],
  },
];

export const learningSkills: Skill[] = [
  { name: "Microservices", icon: TbApps },
  { name: "Google Cloud", icon: SiGooglecloud },
  { name: "Docker", icon: SiDocker },
  { name: "Linux", icon: SiLinux },
];
