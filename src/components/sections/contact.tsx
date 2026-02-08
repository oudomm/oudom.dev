"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  MapPin,
  Calendar,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="blob-decoration px-4 py-20">
      <div className="relative mx-auto max-w-4xl">
        <div className="section-divider mx-auto mb-16 max-w-md" />

        <BlurFade delay={0.1} inView>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Let&apos;s <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              I&apos;m actively looking for opportunities to start my career in
              web development. Let&apos;s discuss how I can contribute to your
              team!
            </p>
          </div>
        </BlurFade>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          {/* Contact Information */}
          <BlurFade delay={0.2} inView className="h-full">
            <Card className="card-pop card-hover h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="text-primary h-5 w-5" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-muted-foreground h-5 w-5" />
                  <a
                    href="mailto:oudomphoem@gmail.com"
                    className="text-primary hover:underline"
                  >
                    oudomphoem@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Send className="text-muted-foreground h-5 w-5" />
                  <a
                    href="https://t.me/oudommmmm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    t.me/in/oudommmmm
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Linkedin className="text-muted-foreground h-5 w-5" />
                  <a
                    href="https://linkedin.com/in/oudomm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    linkedin.com/in/oudomm
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Github className="text-muted-foreground h-5 w-5" />
                  <a
                    href="https://github.com/oudomm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    github.com/oudomm
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="text-muted-foreground h-5 w-5" />
                  <span className="text-muted-foreground">
                    Phnom Penh, Cambodia
                  </span>
                </div>
              </CardContent>
            </Card>
          </BlurFade>

          {/* Availability & Preferences */}
          <BlurFade delay={0.3} inView className="h-full">
            <Card className="card-pop card-hover h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="text-primary h-5 w-5" />
                  Availability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="mb-2 font-medium">Job Search Status</p>
                  <Badge
                    variant="secondary"
                    className="bg-accent/20 text-accent border-accent/30 border"
                  >
                    Actively Looking
                  </Badge>
                </div>

                <div>
                  <p className="mb-2 font-medium">Available From</p>
                  <p className="text-muted-foreground">Immediately</p>
                </div>

                <div>
                  <p className="mb-2 font-medium">Preferred Roles</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-primary/30">
                      Backend Developer
                    </Badge>
                    <Badge variant="outline" className="border-primary/30">
                      Full-Stack Developer
                    </Badge>
                    <Badge variant="outline" className="border-primary/30">
                      Frontend Developer
                    </Badge>
                    <Badge variant="outline" className="border-primary/30">
                      Junior Developer
                    </Badge>
                  </div>
                </div>

                <div>
                  <p className="mb-2 font-medium">Work Preference</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-primary/30">
                      On-site
                    </Badge>
                    <Badge variant="outline" className="border-primary/30">
                      Remote
                    </Badge>
                    <Badge variant="outline" className="border-primary/30">
                      Hybrid
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </BlurFade>
        </div>

        {/* Call to Action */}
        <BlurFade delay={0.4} inView>
          <div className="border-border/60 card-pop bg-card/70 relative overflow-hidden rounded-lg border p-8 text-center">
            <BorderBeam
              size={150}
              duration={6}
              colorFrom="oklch(0.65 0.24 350)"
              colorTo="oklch(0.70 0.18 180)"
            />
            <div className="bg-primary/5 relative z-10 rounded-lg p-8">
              <h3 className="mb-4 text-xl font-semibold">
                Ready to Make an Impact
              </h3>
              <p className="text-muted-foreground mx-auto mb-6 max-w-2xl">
                I&apos;m excited to bring my passion for solving real-world
                problems and creating meaningful software solutions to your
                development team.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <ShimmerButton
                  shimmerColor="oklch(0.70 0.18 180)"
                  background="oklch(0.65 0.24 350)"
                  className="px-8 py-3 text-base font-semibold"
                >
                  <a
                    href="mailto:oudomphoem@gmail.com"
                    className="flex items-center"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </a>
                </ShimmerButton>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
