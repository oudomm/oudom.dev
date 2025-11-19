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
];
