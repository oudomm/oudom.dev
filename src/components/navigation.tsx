import Link from "next/link";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { Github, Linkedin } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="border-border/60 bg-background/80 fixed top-0 z-50 w-full border-b backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between sm:grid sm:grid-cols-3">
          <Link
            href="/"
            className="text-foreground text-lg font-bold tracking-tight"
          >
            oudom<span className="text-primary">.dev</span>
          </Link>

          <nav className="hidden items-center justify-center gap-1 sm:flex">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-foreground rounded-full px-3 py-1.5 text-sm transition-colors hover:bg-secondary"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-1">
            <a
              href="https://github.com/oudomm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground hover:bg-secondary flex h-9 w-9 items-center justify-center rounded-full transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/oudomm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground hover:bg-secondary flex h-9 w-9 items-center justify-center rounded-full transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <div className="bg-border mx-2 h-5 w-px" />
            <AnimatedThemeToggler className="cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
}
