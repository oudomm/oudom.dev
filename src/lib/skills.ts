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
  SiPython,
  SiGooglecloud,
  SiGithubactions,
  SiIntellijidea,
  SiExpress,
  SiSqlite,
  SiMysql,
  SiFastapi,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
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
      { name: "Express.js", icon: SiExpress },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Java", icon: FaJava },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "SQLite", icon: SiSqlite },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Docker", icon: SiDocker },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
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
