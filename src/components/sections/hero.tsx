import { BlurFade } from "@/components/ui/blur-fade";

const techStack = [
  "Next.js",
  "Spring Boot",
  "TypeScript",
  "React",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Google Cloud",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-end px-6 pb-16 pt-24 lg:px-12"
    >
      {/* Name — the hero IS the typography */}
      <div className="mb-6 overflow-hidden">
        <BlurFade delay={0.05} inView>
          <div
            className="font-display text-foreground leading-[0.85] select-none"
            style={{ fontSize: "clamp(4.5rem, 19vw, 14rem)" }}
          >
            OUDOM
          </div>
        </BlurFade>
        <BlurFade delay={0.1} inView>
          <div
            className="font-display text-foreground/15 leading-[0.85] select-none"
            style={{ fontSize: "clamp(4.5rem, 19vw, 14rem)" }}
          >
            PHOEM
          </div>
        </BlurFade>
      </div>

      {/* Divider */}
      <div className="rule mb-8" />

      {/* Info row */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <BlurFade delay={0.2} inView>
          <div>
            <p className="section-label mb-2">Role</p>
            <p
              className="font-display text-foreground"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
            >
              FULL-STACK DEVELOPER
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.25} inView>
          <div>
            <p className="section-label mb-2">Based In</p>
            <p
              className="font-display text-foreground/50"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
            >
              PHNOM PENH, CAMBODIA
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.28} inView>
          <div>
            <p className="section-label mb-2">Status</p>
            <p className="flex items-center gap-2 text-sm font-medium text-foreground/70">
              <span className="avail-dot" />
              Open to opportunities
            </p>
          </div>
        </BlurFade>
      </div>

      {/* Description + CTA */}
      <div className="mb-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <BlurFade delay={0.32} inView>
          <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
            Full-stack developer focused on backend systems. Building with Spring
          Boot, Next.js, and whatever the problem needs.
          </p>
        </BlurFade>

        <BlurFade delay={0.38} inView>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#projects" className="cta-link">
              <span className="cta-bar" />
              View Work
            </a>
            <a
              href="#contact"
              className="text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact →
            </a>
          </div>
        </BlurFade>
      </div>

      {/* Tech stack */}
      <BlurFade delay={0.44} inView>
        <div className="rule mb-4" />
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </BlurFade>
    </section>
  );
}
