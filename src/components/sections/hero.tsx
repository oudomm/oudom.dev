"use client";

import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Button } from "@/components/ui/button";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const skills = [
  "Microfrontends",
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "TailwindCSS",
  "Microservices",
  "Spring Boot",
  "Java",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Linux",
  "Google Cloud"
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-gradient relative flex min-h-screen items-center justify-center overflow-hidden px-4"
    >
      {/* Animated Grid Pattern Background */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.15}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "fill-primary/30 stroke-primary/30"
        )}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <BlurFade delay={0.1} inView>
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Hi, I&apos;m <span className="text-gradient">Oudom</span>
          </h1>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <h2 className="text-foreground/80 mb-6 text-xl md:text-2xl">
            Full-Stack Developer
          </h2>
        </BlurFade>

        <BlurFade delay={0.3} inView>
          <p className="text-muted-foreground mx-auto mb-10 max-w-2xl text-lg md:text-xl">
            I build scalable backend systems with Spring Boot and microservices,
            while delivering clean, user-friendly web applications.
          </p>
        </BlurFade>

        <BlurFade delay={0.4} inView>
          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
            <ShimmerButton
              shimmerColor="oklch(0.70 0.18 180)"
              background="oklch(0.65 0.24 350)"
              className="h-11 px-8 text-sm font-semibold"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </ShimmerButton>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="card-pop card-hover bg-card/60 h-11"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </BlurFade>

        <BlurFade delay={0.5} inView>
          <div className="relative mt-12 overflow-hidden py-4">
            <div className="from-background to-background/0 pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r" />
            <div className="from-background/0 to-background pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-r" />
            <Marquee pauseOnHover className="[--duration:25s]">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-secondary/80 text-secondary-foreground border-primary/20 rounded-full border px-4 py-2 text-sm font-medium transition-all hover:scale-105 hover:border-primary/40"
                >
                  {skill}
                </span>
              ))}
            </Marquee>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
