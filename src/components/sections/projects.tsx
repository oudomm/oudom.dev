import { BlurFade } from "@/components/ui/blur-fade";
import { Project, projects } from "@/lib/projects";
import { ExternalLink, Github, Users } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28 lg:px-12">
      {/* Section header */}
      <div className="relative mb-16">
        <span className="counter">03</span>
        <BlurFade delay={0.05} inView>
          <p className="section-label mb-3">Projects</p>
          <h2
            className="font-display text-foreground"
            style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
          >
            SELECTED WORK
          </h2>
        </BlurFade>
      </div>

      <div className="rule mb-0" />

      {/* Project list */}
      <div>
        {projects.map((project, index) => (
          <BlurFade key={project.id} delay={0.1 + index * 0.15} inView>
            <ProjectEntry project={project} index={index} />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}

function ProjectEntry({ project, index }: { project: Project; index: number }) {
  const [role, contribution] = project.myRole.split("–").map((part) => part.trim());

  return (
    <div className="group border-b border-border py-14 last:border-b-0">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left: text */}
        <div className="flex flex-col justify-between gap-8">
          <div>
            {/* Number + title */}
            <div className="mb-4 flex items-baseline gap-4">
              <span
                className="font-display text-primary/50 leading-none select-none"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3
                className="font-display text-foreground leading-none"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
              >
                {project.title.toUpperCase()}
              </h3>
            </div>

            {/* Description */}
            <p className="mb-6 leading-relaxed text-muted-foreground">
              {project.longDescription}
            </p>

            {/* Role + team */}
            <div className="mb-6 grid grid-cols-2 gap-4">
              <div>
                <p className="section-label mb-1">My Role</p>
                <p className="text-sm text-foreground/70">{role}</p>
              </div>
              <div>
                <p className="section-label mb-1">Team</p>
                <p className="flex items-center gap-1.5 text-sm text-foreground/70">
                  <Users className="h-3.5 w-3.5" />
                  {project.teamSize} {project.teamSize === 1 ? "person" : "people"}
                </p>
              </div>
            </div>

            {contribution && (
              <p className="mb-6 border-l border-primary/50 pl-4 text-sm leading-relaxed text-muted-foreground">
                {contribution}
              </p>
            )}

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-3.5 w-3.5" />
                Source
              </a>
            )}
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Right: image */}
        <div className="project-img">
          <Image
            src={project.imageUrl.light}
            alt={project.title}
            fill
            className="block dark:hidden object-cover"
          />
          <Image
            src={project.imageUrl.dark}
            alt={project.title}
            fill
            className="hidden dark:block object-cover"
          />
          {/* Lime accent stripe on hover */}
          <div
            className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full"
          />
        </div>
      </div>
    </div>
  );
}
