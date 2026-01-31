import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="spring-hero flex min-h-screen items-center justify-center px-4"
    >
      <div className="mx-auto max-w-4xl text-center">
        <div className="animate-fade-in-up">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-gradient">Oudom</span>
          </h1>

          <h2 className="text-foreground/80 mb-6 text-xl md:text-2xl">
            Full-Stack Developer{" "}
            <span className="opacity-60">(Backend-Focused)</span>
          </h2>

          <p className="text-muted-foreground mx-auto mb-10 max-w-2xl text-lg md:text-xl">
            I build scalable backend systems with Spring Boot and microservices,
            while delivering clean, user-friendly web applications.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="card-pop card-hover">
              <a href="#projects">View My Work</a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="card-pop card-hover bg-card/60"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <div className="stagger-children mt-10 flex flex-wrap justify-center gap-3">
            <span className="bg-secondary text-secondary-foreground rounded-full px-4 py-2 text-sm font-medium transition-transform hover:scale-105">
              Spring Boot
            </span>
            <span className="bg-accent text-accent-foreground rounded-full px-4 py-2 text-sm font-medium transition-transform hover:scale-105">
              Microservices
            </span>
            <span className="bg-primary/15 rounded-full px-4 py-2 text-sm font-medium transition-transform hover:scale-105">
              Backend Systems
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
