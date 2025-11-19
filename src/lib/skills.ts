export interface Skill {
  name: string;
  url: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [{ name: "Next.js", url: "/images/skills/nextjs.svg" }],
  },
  {
    category: "Backend",
    skills: [{ name: "Spring Boot", url: "/images/skills/spring.svg" }],
  },
  {
    category: "Databases",
    skills: [{ name: "PostgreSQL", url: "/images/skills/postgresql.svg" }],
  },
  {
    category: "Tools & DevOps",
    skills: [{ name: "Git", url: "/images/skills/git.svg" }],
  },
];

export const learningSkills: Skill[] = [
  { name: "Docker", url: "/images/skills/docker.svg" },
  { name: "Linux", url: "/images/skills/linux.svg" },
];
