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
    title: "API-NGIN",
    description: "Backend-as-a-Service development platform.",
    longDescription:
      "The all-in-one Backend-as-a-Service platform with authentication, APIs, databases, and more. This project helps developers quickly set up backend infrastructure without building everything from scratch.",
    technologies: ["Next.js", "Spring Boot", "MongoDB", "PostgreSQL"],
    githubUrl: "https://github.com/oudomm",
    liveUrl: "https://api-ngin.oudom.dev",
    imageUrl: {
      light: "/projects/api-ngin-light.png",
      dark: "/projects/api-ngin-dark.png",
    },
    type: "fullstack",
    teamSize: 8,
    myRole:
      "Full-stack Developer - Built REST API endpoints, handled application deployment, and integrated frontend components with backend services",
  },
  {
    id: "project-2",
    title: "Personal Portfolio Website",
    description: "Modern portfolio website built with Next.js and TypeScript.",
    longDescription:
      "A responsive portfolio website showcasing my projects and skills. Built from scratch to demonstrate my frontend development abilities and attention to modern web development practices.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/ui"],
    githubUrl: "https://github.com/yourusername/portfolio", // You'll update this later
    liveUrl: "#", // You'll update this when deployed
    imageUrl: {
      light: "/projects/portfolio-light.png",
      dark: "/projects/portfolio-dark.png",
    },
    type: "frontend",
    teamSize: 1,
    myRole:
      "Solo Developer - Complete design and development of responsive portfolio website",
  },
];
