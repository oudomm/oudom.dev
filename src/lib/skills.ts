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
    skills: [
      { name: "Next.js", url: "/images/skills/nextjs.svg" },
      { name: "React", url: "/images/skills/react.svg" },
      { name: "Tailwind CSS", url: "images/skills/tailwindcss.svg" },
    ],
  },
  {
    category: "Backend",
    skills: [{ name: "Spring Boot", url: "/images/skills/spring-boot.svg" }],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", url: "/images/skills/postgresql.svg" },
      { name: "MongoDB", url: "/images/skills/mongodb.svg" },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git", url: "/images/skills/git.svg" },
      { name: "GitHub", url: "/images/skills/github.svg" },
      { name: "Google Cloud", url: "/images/skills/google-cloud.svg" },
    ],
  },
];

export const learningSkills: Skill[] = [
  { name: "Spring Microservices", url: "/images/skills/spring.svg" },
];
