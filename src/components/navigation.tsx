import Link from "next/link";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

export default function Navigation() {
  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="border-border/60 bg-background/70 nav-glass fixed top-0 z-50 w-full border-b backdrop-blur-md">
      {/* gradient bottom line */}
      <div className="from-primary h-[2px] w-full bg-gradient-to-r via-emerald-400 to-amber-300" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="from-primary inline-block bg-gradient-to-r via-emerald-400 to-amber-300 bg-clip-text text-xl font-extrabold tracking-tight text-transparent"
          >
            Oudom
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-underline text-foreground/80 hover:text-foreground text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <AnimatedThemeToggler className="cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
}
