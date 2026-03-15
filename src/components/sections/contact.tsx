import { BlurFade } from "@/components/ui/blur-fade";
import CurrentYear from "@/components/current-year";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";

const socials = [
  {
    label: "Email",
    value: "oudomphoem@gmail.com",
    href: "mailto:oudomphoem@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/oudomm",
    href: "https://github.com/oudomm",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/oudomm",
    href: "https://linkedin.com/in/oudomm",
    icon: Linkedin,
  },
  {
    label: "Telegram",
    value: "t.me/oudommmmm",
    href: "https://t.me/oudommmmm",
    icon: Send,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28 lg:px-12">
      {/* Section header */}
      <div className="relative mb-16">
        <span className="counter">04</span>
        <BlurFade delay={0.05} inView>
          <p className="section-label mb-3">Contact</p>
          <h2
            className="font-display text-foreground"
            style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
          >
            LET&apos;S CONNECT
          </h2>
        </BlurFade>
      </div>

      <div className="rule mb-16" />

      {/* Big email CTA */}
      <BlurFade delay={0.15} inView>
        <div className="mb-16">
          <p className="section-label mb-6">
            I&apos;m looking for my first role. Junior, backend-leaning, open to full-stack.
          </p>
          <a href="mailto:oudomphoem@gmail.com" className="contact-email">
            oudomphoem@gmail.com
          </a>
        </div>
      </BlurFade>

      {/* Social links table */}
      <BlurFade delay={0.25} inView>
        <div className="rule mb-0" />
        {socials.map(({ label, value, href, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center justify-between border-b border-border py-5 group"
          >
            <div className="flex items-center gap-4">
              <Icon className="h-4 w-4 text-muted-foreground/50 group-hover:text-primary transition-colors" />
              <p className="section-label">{label}</p>
            </div>
            <a
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {value}
            </a>
          </div>
        ))}

        {/* Location row */}
        <div className="flex items-center justify-between border-b border-border py-5">
          <div className="flex items-center gap-4">
            <MapPin className="h-4 w-4 text-muted-foreground/50" />
            <p className="section-label">Location</p>
          </div>
          <p className="text-sm text-muted-foreground">Phnom Penh, Cambodia</p>
        </div>
      </BlurFade>

      {/* Availability */}
      <BlurFade delay={0.35} inView>
        <div className="mt-16 flex flex-wrap items-center gap-3">
          <span className="avail-dot" />
          <p className="text-sm text-muted-foreground">
            Open to full-time roles — remote, on-site, or hybrid.
          </p>
        </div>
      </BlurFade>

      {/* Footer */}
      <BlurFade delay={0.4} inView>
        <div className="rule mt-16 mb-8" />
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p
            className="font-display text-foreground/20"
            style={{ fontSize: "clamp(1.2rem, 3vw, 2rem)" }}
          >
            OUDOM PHOEM
          </p>
          <p className="section-label">
            © <CurrentYear /> · Full-Stack Developer
          </p>
        </div>
      </BlurFade>
    </section>
  );
}
