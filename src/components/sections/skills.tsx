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

      {/* Skill rows — each category is a horizontal row */}
      <div>
        {skillsData.map((cat, i) => (
          <BlurFade key={cat.category} delay={0.1 + i * 0.08} inView>
            <div className="skill-row">
              <p className="section-label">{cat.category}</p>
              <div className="flex flex-wrap items-center gap-4">
                {cat.skills.map((skill) => {
                  const isDarkLogo = ["Next.js", "GitHub"].includes(skill.name);
                  return (
                    <div key={skill.name} className="flex items-center gap-2 group">
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
            <p className="section-label">
              Learning Now
            </p>
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
        <div className="mt-16 flex flex-wrap gap-x-8 gap-y-2">
          {[
            ["Languages", "TypeScript · JavaScript · Java · Python"],
            ["Paradigms", "REST · Microservices · Microfrontends"],
            ["Environment", "Linux · Docker · Google Cloud"],
          ].map(([label, items]) => (
            <div key={label}>
              <p className="section-label mb-1">{label}</p>
              <p className="text-sm text-foreground/60">{items}</p>
            </div>
          ))}
        </div>
      </BlurFade>
    </section>
  );
}
