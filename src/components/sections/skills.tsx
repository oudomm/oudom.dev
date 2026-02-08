"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { skillsData, learningSkills } from "@/lib/skills";
import Image from "next/image";
import { useState } from "react";

function SkillCard({
  category,
  index,
}: {
  category: (typeof skillsData)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <BlurFade delay={0.1 + index * 0.1} inView className="h-full">
      <Card
        className="card-pop card-hover border-border/60 relative h-full overflow-hidden border"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <BorderBeam
            size={100}
            duration={4}
            colorFrom="oklch(0.65 0.24 350)"
            colorTo="oklch(0.70 0.18 180)"
          />
        )}
        <CardHeader>
          <CardTitle className="text-gradient text-xl">
            {category.category}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {category.skills.map((skill) => {
              const isDarkLogo = ["Next.js", "GitHub"].includes(skill.name);
              return (
                <div key={skill.name} className="flex items-center gap-3">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-md ${isDarkLogo ? "dark:bg-white/90 dark:p-1" : ""}`}>
                    <Image
                      src={skill.url}
                      alt={`${skill.name} logo`}
                      width={isDarkLogo ? 24 : 32}
                      height={isDarkLogo ? 24 : 32}
                    />
                  </div>
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </BlurFade>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="blob-decoration px-4 py-20">
      <div className="relative mx-auto max-w-6xl">
        <div className="section-divider mx-auto mb-16 max-w-md" />

        <BlurFade delay={0.1} inView>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Technologies and tools I&apos;ve learned and used in my projects
              and studies.
            </p>
          </div>
        </BlurFade>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillsData.map((category, index) => (
            <SkillCard key={category.category} category={category} index={index} />
          ))}
        </div>

        <BlurFade delay={0.6} inView>
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Currently learning and expanding my skills in:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {learningSkills.map((skill) => {
                return (
                  <Badge
                    key={skill.name}
                    variant="outline"
                    className="border-primary/30 hover:border-primary/50 flex items-center gap-2 px-4 py-2 text-base transition-colors"
                  >
                    <Image
                      src={skill.url}
                      alt={`${skill.name} logo`}
                      width={24}
                      height={24}
                    />
                    {skill.name}
                  </Badge>
                );
              })}
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
