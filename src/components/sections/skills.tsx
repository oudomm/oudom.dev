import { BlurFade } from "@/components/ui/blur-fade";
import { skillsData, learningSkills } from "@/lib/skills";
import Image from "next/image";

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28 lg:px-12">
      {/* Section header */}
      <div className="relative mb-16">
        <span className="counter">02</span>
        <BlurFade delay={0.05} inView>
          <p className="section-label mb-3">Skills & Tools</p>
          <h2
            className="font-display text-foreground"
            style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
          >
            WHAT I WORK WITH
          </h2>
        </BlurFade>
      </div>

      <div className="rule mb-0" />

      <BlurFade delay={0.08} inView>
        <div className="grid gap-6 border-b border-border py-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.8fr)]">
          <p className="max-w-2xl leading-relaxed text-muted-foreground">
            I gravitate toward tools that make systems easier to reason about:
            strong backend foundations, a frontend that stays clean under
            pressure, and infrastructure I can actually explain.
          </p>
          <div className="border border-border bg-muted/20 p-5">
            <p className="section-label mb-3">Working Bias</p>
            <p className="text-sm leading-relaxed text-foreground/70">
              Build the boring parts well. Make the sharp edges visible. Keep
              complexity earned.
            </p>
          </div>
        </div>
      </BlurFade>

      <div>
        {skillsData.map((cat, i) => (
          <BlurFade key={cat.category} delay={0.14 + i * 0.08} inView>
            <div className="skill-row">
              <div className="space-y-2">
                <p className="section-label">{cat.category}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-foreground/20">
                  {String(i + 1).padStart(2, "0")}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                {cat.skills.map((skill) => {
                  const isDarkLogo = ["Next.js", "GitHub"].includes(skill.name);
                  return (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-2 border border-transparent pr-3 transition-colors"
                    >
                      <div
                        className={`flex h-5 w-5 items-center justify-center flex-shrink-0 ${
                          isDarkLogo ? "dark:bg-white/90 dark:rounded-sm dark:p-0.5" : ""
                        }`}
                      >
                        <Image
                          src={skill.url}
                          alt={skill.name}
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </BlurFade>
        ))}

        {/* Currently learning row */}
        <BlurFade delay={0.5} inView>
            <div className="skill-row">
              <div className="space-y-2">
                <p className="section-label">Learning Now</p>
                <p className="text-xs uppercase tracking-[0.18em] text-foreground/20">
                  05
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                {learningSkills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2 group">
                  <div className="flex h-5 w-5 items-center justify-center flex-shrink-0">
                    <Image
                      src={skill.url}
                      alt={skill.name}
                      width={20}
                      height={20}
                      className="object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <span className="text-sm text-muted-foreground/60 group-hover:text-muted-foreground transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>

      {/* Languages note */}
      <BlurFade delay={0.6} inView>
        <div className="mt-16 grid gap-6 border-t border-border pt-8 md:grid-cols-3">
          {[
            ["Languages", "Java · TypeScript · JavaScript · SQL"],
            [
              "Paradigms",
              "Reactive Programming · Microservices · Event-Driven Architecture",
            ],
            ["Environment", "Docker · Linux · Google Cloud · GitHub Actions"],
          ].map(([label, items]) => (
            <div key={label} className="border-l border-border pl-4">
              <p className="section-label mb-1">{label}</p>
              <p className="text-sm text-foreground/60">{items}</p>
            </div>
          ))}
        </div>
      </BlurFade>
    </section>
  );
}
