"use client";

import { useState } from "react";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/projects";
import { skillsData, learningSkills } from "@/lib/skills";
import { Github, Linkedin, Mail, MapPin, Send, ArrowUpRight } from "lucide-react";

function BentoCard({
  children,
  className,
  delay = 0,
  showBeam = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  showBeam?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <BlurFade delay={delay} inView className={className}>
      <div
        className="bg-card border-border/60 relative h-full overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:border-primary/30"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {showBeam && isHovered && (
          <BorderBeam size={120} duration={5} colorFrom="oklch(0.65 0.24 350)" colorTo="oklch(0.70 0.18 180)" />
        )}
        {children}
      </div>
    </BlurFade>
  );
}

export default function BentoGrid() {
  return (
    <section className="relative px-4 py-6 md:py-10">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">

          {/* Row 1: Hero + Status */}
          <BentoCard className="lg:col-span-2" delay={0.05}>
            <div className="flex items-start gap-4">
              <div className="gradient-ring shrink-0">
                <Image src="/images/profile.jpg" alt="Oudom" width={72} height={72} className="rounded-xl object-cover" priority />
              </div>
              <div className="flex-grow">
                <h1 className="text-2xl font-bold md:text-3xl">Oudom</h1>
                <p className="text-muted-foreground mb-3 text-sm">Full-Stack Developer</p>
                <p className="text-foreground/80 mb-5 leading-relaxed">
                  I craft scalable backend systems with Spring Boot and deliver clean, user-friendly web experiences.
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <ShimmerButton
                    shimmerColor="oklch(0.70 0.18 180)"
                    background="oklch(0.65 0.24 350)"
                    className="h-9 px-5 text-sm font-medium"
                    onClick={() => window.location.href = 'mailto:oudomphoem@gmail.com'}
                  >
                    Get in Touch
                  </ShimmerButton>
                  <a href="https://github.com/oudomm" target="_blank" rel="noopener noreferrer"
                    className="bg-secondary hover:bg-secondary/80 inline-flex h-9 items-center gap-2 rounded-full px-4 text-sm font-medium transition-colors">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </BentoCard>

          <BentoCard delay={0.1}>
            <div className="mb-2 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="bg-accent absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                <span className="bg-accent relative inline-flex h-2 w-2 rounded-full"></span>
              </span>
              <span className="text-accent text-sm font-medium">Available for work</span>
            </div>
            <div className="text-muted-foreground mb-3 flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4" /> Phnom Penh, Cambodia
            </div>
            <div className="mb-4 flex gap-2">
              <a href="https://github.com/oudomm" target="_blank" rel="noopener noreferrer" className="bg-secondary hover:bg-secondary/80 flex h-9 w-9 items-center justify-center rounded-full transition-colors"><Github className="h-4 w-4" /></a>
              <a href="https://linkedin.com/in/oudomm" target="_blank" rel="noopener noreferrer" className="bg-secondary hover:bg-secondary/80 flex h-9 w-9 items-center justify-center rounded-full transition-colors"><Linkedin className="h-4 w-4" /></a>
              <a href="https://t.me/oudommmmm" target="_blank" rel="noopener noreferrer" className="bg-secondary hover:bg-secondary/80 flex h-9 w-9 items-center justify-center rounded-full transition-colors"><Send className="h-4 w-4" /></a>
              <a href="mailto:oudomphoem@gmail.com" className="bg-secondary hover:bg-secondary/80 flex h-9 w-9 items-center justify-center rounded-full transition-colors"><Mail className="h-4 w-4" /></a>
            </div>
            <div className="border-border/60 border-t pt-4">
              <p className="text-muted-foreground mb-1 text-xs">Let&apos;s work together</p>
              <a href="mailto:oudomphoem@gmail.com" className="text-primary hover:underline text-sm font-medium">
                oudomphoem@gmail.com
              </a>
            </div>
          </BentoCard>

          {/* Row 2: Featured Project (full width) */}
          <BentoCard className="group lg:col-span-3" delay={0.15} showBeam>
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="lg:w-1/2">
                <p className="text-primary text-[11px] font-semibold uppercase tracking-wider">Featured Project</p>
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="text-xl font-bold">{projects[0].title}</h3>
                  <a href={projects[0].liveUrl} target="_blank" rel="noopener noreferrer" className="bg-primary/10 hover:bg-primary/20 rounded-full p-2 transition-colors">
                    <ArrowUpRight className="text-primary h-4 w-4" />
                  </a>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">{projects[0].description}</p>
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="secondary" className="border-primary/10 border text-xs">Next.js</Badge>
                  <Badge variant="secondary" className="border-primary/10 border text-xs">Spring Boot</Badge>
                </div>
              </div>
              <div className="bg-secondary/30 relative min-h-[220px] overflow-hidden rounded-xl lg:w-1/2">
                <Image src={projects[0].imageUrl.light} alt={projects[0].title} fill className="block object-cover object-top transition-transform duration-500 group-hover:scale-105 dark:hidden" />
                <Image src={projects[0].imageUrl.dark} alt={projects[0].title} fill className="hidden object-cover object-top transition-transform duration-500 group-hover:scale-105 dark:block" />
              </div>
            </div>
          </BentoCard>

          {/* Row 3: Tech Stack + Side Project */}
          <BentoCard className="lg:col-span-2" delay={0.2}>
            <p className="text-muted-foreground mb-3 text-[11px] font-semibold uppercase tracking-wider">Tech Stack</p>
            <div className="space-y-3">
              {skillsData.map((cat) => (
                <div key={cat.category}>
                  <p className="text-muted-foreground mb-1.5 text-[10px] font-medium">{cat.category}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => {
                      const isDarkLogo = ["Next.js", "GitHub"].includes(skill.name);
                      return (
                        <div key={skill.name} className="bg-secondary/50 hover:bg-secondary flex items-center gap-1.5 rounded-full px-2 py-1 transition-colors">
                          <div className={`flex h-4 w-4 items-center justify-center ${isDarkLogo ? "dark:rounded dark:bg-white/90" : ""}`}>
                            <Image src={skill.url} alt={skill.name} width={isDarkLogo ? 10 : 14} height={isDarkLogo ? 10 : 14} />
                          </div>
                          <span className="text-[11px] font-medium">{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
              {learningSkills.length > 0 && (
                <div>
                  <p className="text-muted-foreground mb-1.5 text-[10px] font-medium">Learning</p>
                  <div className="flex flex-wrap gap-1.5">
                    {learningSkills.map((skill) => (
                      <div key={skill.name} className="bg-accent/10 border-accent/20 flex items-center gap-1.5 rounded-full border px-2 py-1">
                        <div className="flex h-4 w-4 items-center justify-center">
                          <Image src={skill.url} alt={skill.name} width={14} height={14} />
                        </div>
                        <span className="text-[11px] font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </BentoCard>

          {projects[1] && (
            <BentoCard className="group" delay={0.3} showBeam>
              <p className="text-muted-foreground text-[11px] font-semibold uppercase tracking-wider">Side Project</p>
              <div className="mb-2 flex items-start justify-between">
                <h3 className="text-lg font-bold">{projects[1].title}</h3>
                <a href={projects[1].liveUrl} target="_blank" rel="noopener noreferrer" className="bg-primary/10 hover:bg-primary/20 rounded-full p-1.5 transition-colors">
                  <ArrowUpRight className="text-primary h-4 w-4" />
                </a>
              </div>
              <p className="text-muted-foreground mb-3 text-sm">{projects[1].description}</p>
              <div className="bg-secondary/30 relative mb-3 h-40 overflow-hidden rounded-xl">
                <Image src={projects[1].imageUrl.light} alt={projects[1].title} fill className="block object-cover transition-transform duration-500 group-hover:scale-105 dark:hidden" />
                <Image src={projects[1].imageUrl.dark} alt={projects[1].title} fill className="hidden object-cover transition-transform duration-500 group-hover:scale-105 dark:block" />
              </div>
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="outline" className="border-primary/20 text-xs">Next.js</Badge>
              </div>
            </BentoCard>
          )}

          
        </div>
      </div>
    </section>
  );
}
