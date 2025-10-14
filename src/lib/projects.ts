export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: { light: string; dark: string };
  type: "frontend" | "fullstack" | "backend";
  teamSize: number;
  myRole: string;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Endora",
    description:
      "School final project: Schema-based Backend-as-a-Service (BaaS) platform.",
    longDescription:
      "Endora is a full-stack Backend-as-a-Service (BaaS) platform built as my final school project. It enables users to define data schemas through a form-based interface, similar to creating SQL tables, and automatically generates RESTful APIs from those schemas. The system stores schema definitions in MongoDB and supports connecting external PostgreSQL databases to instantly generate APIs. Endora aims to help frontend developers and students quickly create production-ready backends without manual API coding.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Spring Boot",
      "MongoDB",
      "PostgreSQL",
      "Google Cloud",
    ],
    githubUrl: "https://github.com/oudomm",
    liveUrl: "https://endora.space",
    imageUrl: {
      light: "/images/projects/endora-light.png",
      dark: "/images/projects/endora-dark.png",
    },
    type: "fullstack",
    teamSize: 8,
    myRole:
      "Full-stack Developer – Developed schema-based API generation logic, integrated external PostgreSQL connections, contributed to the frontend interface, and managed deployment.",
  },
  {
    id: "project-2",
    title: "Personal Portfolio Website",
    description:
      "Modern and responsive portfolio built with Next.js and TypeScript.",
    longDescription:
      "A personal portfolio website designed and developed to showcase my projects, skills, and experiences. The site features a responsive layout, light and dark themes, and smooth animations. Built with modern tools and frameworks, it reflects my approach to creating clean, accessible, and performance-focused web interfaces.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/ui"],
    githubUrl: "https://github.com/oudomm/my-portfolio",
    liveUrl: "https://oudom.dev",
    imageUrl: {
      light: "/images/projects/portfolio-light.png",
      dark: "/images/projects/portfolio-dark.png",
    },
    type: "frontend",
    teamSize: 1,
    myRole:
      "Frontend Developer – Designed and developed the entire website, implemented responsive UI components, theme switching, and optimized overall performance.",
  },
];
