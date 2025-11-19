import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillsData, learningSkills } from "@/lib/skills";
import Image from "next/image";

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Technologies and tools I&apos;ve learned and used in my projects and
            studies.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillsData.map((category) => (
            <Card key={category.category}>
              <CardHeader>
                <CardTitle className="text-xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill) => {
                    return (
                      <div key={skill.name} className="flex items-center gap-3">
                        <Image
                          src={skill.url}
                          alt={`${skill.name} logo`}
                          width={32}
                          height={32}
                        />
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

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
                  className="flex items-center gap-2 px-3 py-2"
                >
                  <Image
                    src={skill.url}
                    alt={`${skill.name} logo`}
                    width={30}
                    height={30}
                  />
                  {skill.name}
                </Badge>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
