import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center px-4"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          Hi, I&apos;m <span className="text-primary">Oudom</span>
        </h1>

        <h2 className="text-muted-foreground mb-8 text-xl md:text-2xl">
          Full-Stack Web Developer
        </h2>

        <p className="text-muted-foreground mx-auto mb-10 max-w-2xl text-lg md:text-xl">
          Passionate about creating web applications with modern technologies.
          Currently building projects and preparing to join . tech industry.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <a href="#projects">View My Work</a>
          </Button>

          <Button variant="outline" size="lg" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
