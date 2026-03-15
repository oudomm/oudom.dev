import { ReactNode } from "react";
import Navigation from "./navigation";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="grain bg-background text-foreground min-h-screen">
      <Navigation />
      <main className="pt-[6.5rem] sm:pt-14">{children}</main>
    </div>
  );
}
