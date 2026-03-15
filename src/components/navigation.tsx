import Link from "next/link";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { Github, Linkedin } from "lucide-react";

const navItems = ["About", "Skills", "Projects", "Contact"];

export default function Navigation() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="flex h-14 items-center justify-between">
          <Link
            href="/"
            className="font-display text-xl tracking-widest text-foreground hover:text-primary transition-colors"
          >
            OUDOM
          </Link>

          <div className="hidden items-center gap-8 sm:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="section-label text-foreground/50 hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/oudomm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/40 hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/oudomm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/40 hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <div className="bg-border mx-1 h-4 w-px" />
            <AnimatedThemeToggler className="cursor-pointer opacity-50 hover:opacity-100 transition-opacity" />
          </div>
        </div>

        <div className="scrollbar-none flex gap-2 overflow-x-auto border-t border-border/60 py-2 sm:hidden">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="section-label whitespace-nowrap rounded-full border border-border px-3 py-1.5 text-foreground/70 transition-colors hover:border-primary hover:text-foreground"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
