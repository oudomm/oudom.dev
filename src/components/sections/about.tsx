import { BlurFade } from "@/components/ui/blur-fade";
import Image from "next/image";

const values = [
  "Real-World Impact",
  "Problem Solving",
  "Continuous Learning",
  "Clean Code",
  "User-Centered Design",
  "Team Collaboration",
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
                I&apos;m a passionate web developer driven by the desire to
                solve real-world problems through technology. I believe that
                even small changes in code can create big impacts on
                people&apos;s daily lives, and that&apos;s what motivates me
                to write better software every day.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.25} inView>
            <div>
              <p className="section-label mb-3">What Drives Me</p>
              <p className="leading-relaxed text-muted-foreground">
                I&apos;m fascinated by how technology can transform the way
                people work, learn, and connect. Whether it&apos;s building a
                backend service that powers thousands of users or creating an
                interface that makes someone&apos;s job easier, I find purpose
                in creating solutions that matter.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <div>
              <p className="section-label mb-3">Beyond Coding</p>
              <p className="leading-relaxed text-muted-foreground">
                When I&apos;m not coding, you&apos;ll find me watching movies
                or listening to music. These creative outlets help me think
                differently about problems and often inspire new approaches to
                the challenges I face in development.
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
            { value: "∞", label: "Problems to Solve" },
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
