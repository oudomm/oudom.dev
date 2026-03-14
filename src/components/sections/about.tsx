import { BlurFade } from "@/components/ui/blur-fade";
import Image from "next/image";

const values = [
  "Understanding over memorizing",
  "Reading code before writing it",
  "Backend done properly",
  "Ship it, then improve it",
  "Honest about what I don't know",
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 lg:px-12">
      {/* Section header */}
      <div className="relative mb-16">
        <span className="counter">01</span>
        <BlurFade delay={0.05} inView>
          <p className="section-label mb-3">About</p>
          <h2
            className="font-display text-foreground"
            style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
          >
            THE PERSON BEHIND THE CODE
          </h2>
        </BlurFade>
      </div>

      <div className="rule mb-16" />

      {/* Main content: photo + bio */}
      <div className="mb-20 grid gap-12 md:grid-cols-3 lg:gap-20">
        {/* Photo */}
        <BlurFade delay={0.15} inView>
          <div className="md:col-span-1">
            <div className="relative overflow-hidden border border-border aspect-square">
              <Image
                src="/images/profile.jpg"
                alt="Oudom"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
              {/* Lime corner accent */}
              <div
                className="absolute bottom-0 left-0 w-8 h-8"
                style={{ background: "var(--primary)" }}
              />
            </div>
          </div>
        </BlurFade>

        {/* Bio text */}
        <div className="space-y-10 md:col-span-2">
          <BlurFade delay={0.2} inView>
            <div>
              <p className="section-label mb-3">My Journey</p>
              <p className="leading-relaxed text-muted-foreground">
                Full-stack developer with a focus on backend architecture.
                I care about understanding systems properly — not just making
                things work, but knowing why they work.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.25} inView>
            <div>
              <p className="section-label mb-3">What I&apos;m Learning</p>
              <p className="leading-relaxed text-muted-foreground">
                Currently studying microservices and microfrontends in depth —
                event-driven design, reactive APIs, observability, and
                multi-zone Next.js for frontend composition. The kind of things
                that matter when systems actually need to scale.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <div>
              <p className="section-label mb-3">Beyond Coding</p>
              <p className="leading-relaxed text-muted-foreground">
                Outside of work, I watch a lot of movies and series.
              </p>
            </div>
          </BlurFade>
        </div>
      </div>

      {/* Stats row */}
      <BlurFade delay={0.35} inView>
        <div className="rule mb-12" />
        <div className="grid grid-cols-3 gap-8 mb-12">
          {[
            { value: "5+", label: "Projects Completed" },
            { value: "15+", label: "Technologies Used" },
            { value: "Now", label: "Available to Work" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center md:text-left">
              <div
                className="font-display text-primary mb-1"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
              >
                {value}
              </div>
              <p className="section-label">{label}</p>
            </div>
          ))}
        </div>
        <div className="rule" />
      </BlurFade>

      {/* Values */}
      <BlurFade delay={0.4} inView>
        <div className="mt-12">
          <p className="section-label mb-6">What I Value</p>
          <div className="flex flex-wrap gap-2">
            {values.map((v) => (
              <span
                key={v}
                className="tech-tag hover:border-primary hover:text-foreground transition-colors"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
