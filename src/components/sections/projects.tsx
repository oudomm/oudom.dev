"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Project, projects } from "@/lib/projects";
import { ExternalLink, Github, Users } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">My Projects</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Here are some projects I&apos;ve worked on during my studies,
            showcasing my skills in web development.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden">
      <div className="bg-muted relative aspect-video overflow-hidden">
        <Image
          src={project.imageUrl.light}
          alt={`${project.title} screenshot`}
          fill
          className="block object-cover dark:hidden"
        />
        <Image
          src={project.imageUrl.dark}
          alt={`${project.title} screenshot`}
          fill
          className="hidden object-cover dark:block"
        />
      </div>

      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{project.title}</CardTitle>
          <div className="text-muted-foreground flex items-center gap-1 text-sm">
            <Users className="h-4 w-4" />
            {project.teamSize} people
          </div>
        </div>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground mb-4 text-sm">
          {project.longDescription}
        </p>

        <div className="mb-4">
          <p className="mb-2 text-sm font-medium">My Role:</p>
          <p className="text-muted-foreground text-sm">{project.myRole}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="gap-2">
        {project.githubUrl && (
          <Button variant="outline" size="sm" asChild>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
        )}
        {project.liveUrl && project.liveUrl !== "#" && (
          <Button size="sm" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
