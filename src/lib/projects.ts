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
    description: "Schema-based Backend-as-a-Service platform.",
    longDescription:
      "A BaaS platform that generates RESTful APIs from user-defined schemas. Users create data structures via a form interface, and the system automatically produces production-ready APIs. Supports MongoDB for schema storage and external PostgreSQL databases.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Spring Boot",
      "MongoDB",
      "PostgreSQL",
      "Docker",
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
      "Full-stack Developer – Built AI scraper chatbot, integrated PostgreSQL, developed frontend features, and managed deployment.",
  },
  {
    id: "project-2",
    title: "LineupLab",
    description: "Football lineup builder and formation creator.",
    longDescription:
      "A free online tool for creating professional football lineups. Features drag-and-drop player positioning, customizable formations (4-3-3, 4-4-2, 3-5-2, etc.), player photo uploads, bench management, and high-quality image export. Built with modern glass morphism UI and full light/dark theme support.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "dnd-kit",
    ],
    githubUrl: "https://github.com/oudomm/LineupLab",
    liveUrl: "https://lineuplab.oudom.dev",
    imageUrl: {
      light: "/images/projects/lineuplab-light.png",
      dark: "/images/projects/lineuplab-dark.png",
    },
    type: "frontend",
    teamSize: 1,
    myRole:
      "Solo Developer – Designed and built the entire application including drag-and-drop system, formation presets, image export, and responsive UI.",
  },
];
