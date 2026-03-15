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

      <div className="mb-20 grid gap-12 xl:grid-cols-[minmax(0,1.15fr)_minmax(18rem,24rem)] xl:items-start">
        <div className="space-y-10">
          <BlurFade delay={0.15} inView>
            <div className="max-w-3xl">
              <p className="section-label mb-3">My Journey</p>
              <p
                className="font-display text-foreground leading-[0.95]"
                style={{ fontSize: "clamp(2.2rem, 5vw, 4.2rem)" }}
              >
                I like the part of software where the system starts making sense.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <div className="grid gap-8 border-y border-border py-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-6">
                <p className="leading-relaxed text-muted-foreground">
                  Full-stack developer with a backend-first mindset. I care
                  about understanding systems properly, not just making things
                  work, but knowing why they work and where they will break.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Right now I&apos;m going deeper into microservices and
                  microfrontends: event-driven design, reactive APIs,
                  observability, and multi-zone Next.js composition. The kind
                  of stuff that matters when software grows past the demo stage.
                </p>
              </div>

              <div className="border border-border bg-muted/20 p-5">
                <p className="section-label mb-4">Current Focus</p>
                <div className="space-y-3">
                  {[
                    "Backend architecture that scales beyond prototypes",
                    "Frontend systems that stay clean as teams grow",
                    "Shipping work that feels considered, not overloaded",
                  ].map((item, index) => (
                    <div key={item} className="flex gap-3">
                      <span className="section-label text-primary/70">
                        0{index + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-foreground/70">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.25} inView>
            <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_14rem] md:items-end">
              <div>
                <p className="section-label mb-3">Beyond Coding</p>
                <p className="leading-relaxed text-muted-foreground">
                  Outside of work, I watch a lot of movies and series. I like
                  work with atmosphere and pacing, which probably explains why I
                  care so much about how products feel, not just what they do.
                </p>
              </div>
              <p className="font-display text-right text-foreground/15 leading-none">
                SLOW
                <br />
                BURN
              </p>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={0.18} inView>
          <div className="space-y-4 xl:sticky xl:top-28">
            <div className="relative aspect-[4/5] overflow-hidden border border-border bg-muted/20">
              <Image
                src="/images/profile.jpg"
                alt="Oudom"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
              <div
                className="absolute bottom-0 left-0 h-10 w-10"
                style={{ background: "var(--primary)" }}
              />
            </div>
            <div className="border border-border p-5">
              <p className="section-label mb-3">Short Version</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Backend-leaning full-stack developer from Phnom Penh. Still
                early, but serious about foundations.
              </p>
            </div>
          </div>
        </BlurFade>
      </div>

      {/* Stats row */}
      <BlurFade delay={0.35} inView>
        <div className="rule mb-12" />
        <div className="mb-12 grid gap-8 sm:grid-cols-3">
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
          <div className="grid gap-3 md:grid-cols-2">
            {values.map((v, index) => (
              <div
                key={v}
                className="flex items-center justify-between border-b border-border py-3"
              >
                <span className="section-label text-primary/70">
                  0{index + 1}
                </span>
                <span className="text-right text-sm text-muted-foreground">
                  {v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
