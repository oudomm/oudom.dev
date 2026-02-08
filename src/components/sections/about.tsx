"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section-alt relative px-4 py-20">
      {/* Dot Pattern Background */}
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "text-primary/20"
        )}
        cr={1.5}
        width={24}
        height={24}
      />

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="section-divider mx-auto mb-16 max-w-md" />

        <BlurFade delay={0.1} inView>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Get to know me beyond the code
            </p>
          </div>
        </BlurFade>

        <div className="mb-12 grid gap-8 md:grid-cols-3">
          {/* Photo with gradient ring */}
          <BlurFade delay={0.2} inView>
            <div className="md:col-span-1">
              <div className="gradient-ring mx-auto w-fit">
                <div className="relative aspect-square w-full overflow-hidden rounded-xl md:w-auto">
                  <Image
                    src="/images/profile.jpg"
                    alt="Oudom - Profile Photo"
                    width={300}
                    height={300}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </BlurFade>

          {/* About content */}
          <div className="space-y-6 md:col-span-2">
            <BlurFade delay={0.25} inView>
              <div>
                <h3 className="mb-3 text-xl font-semibold">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;m a passionate web developer driven by the desire to
                  solve real-world problems through technology. I believe that
                  even small changes in code can create big impacts on
                  people&apos;s daily lives, and that&apos;s what motivates me
                  to write better software every day.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <div>
                <h3 className="mb-3 text-xl font-semibold">What Drives Me</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;m fascinated by how technology can transform the way
                  people work, learn, and connect. Whether it&apos;s building a
                  backend service that powers thousands of users or creating an
                  interface that makes someone&apos;s job easier, I find purpose
                  in creating solutions that matter.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.35} inView>
              <div>
                <h3 className="mb-3 text-xl font-semibold">Beyond Coding</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When I&apos;m not coding, you can find me watching movies or
                  listening to music. I find that these creative outlets help me
                  think differently about problems and often inspire new
                  approaches to the challenges I face in development.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>

        {/* Quick facts */}
        <BlurFade delay={0.4} inView>
          <Card className="card-pop card-hover border-border/60 border">
            <CardContent className="pt-6">
              <h3 className="mb-6 text-center text-xl font-semibold">
                Quick Facts
              </h3>
              <div className="grid gap-6 text-center md:grid-cols-3">
                <div className="group">
                  <div className="stat-gradient mb-2 text-4xl font-bold transition-transform group-hover:scale-110">
                    5+
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Projects Completed
                  </p>
                </div>
                <div className="group">
                  <div className="stat-gradient mb-2 text-4xl font-bold transition-transform group-hover:scale-110">
                    15+
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Technologies Used
                  </p>
                </div>
                <div className="group">
                  <div className="stat-gradient mb-2 text-4xl font-bold transition-transform group-hover:scale-110">
                    Ready
                  </div>
                  <p className="text-muted-foreground text-sm">
                    For New Opportunities
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </BlurFade>

        {/* Values */}
        <BlurFade delay={0.5} inView>
          <div className="mt-12 text-center">
            <h3 className="mb-6 text-xl font-semibold">
              What I <span className="text-gradient">Value</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge
                variant="secondary"
                className="border-primary/20 border px-4 py-2 transition-transform hover:scale-105"
              >
                Real-World Impact
              </Badge>
              <Badge
                variant="secondary"
                className="border-primary/20 border px-4 py-2 transition-transform hover:scale-105"
              >
                Problem Solving
              </Badge>
              <Badge
                variant="secondary"
                className="border-primary/20 border px-4 py-2 transition-transform hover:scale-105"
              >
                Continuous Learning
              </Badge>
              <Badge
                variant="secondary"
                className="border-primary/20 border px-4 py-2 transition-transform hover:scale-105"
              >
                Clean Code
              </Badge>
              <Badge
                variant="secondary"
                className="border-primary/20 border px-4 py-2 transition-transform hover:scale-105"
              >
                User-Centered Design
              </Badge>
              <Badge
                variant="secondary"
                className="border-primary/20 border px-4 py-2 transition-transform hover:scale-105"
              >
                Team Collaboration
              </Badge>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
