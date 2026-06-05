import type { Metadata } from "next";
import { Syne, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { themeScript } from "@/lib/theme-script";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oudom — Back-End Developer",
  description:
    "Back-end developer building secure, reactive microservices and API gateway platforms with Spring Boot, WebFlux, and event-driven architecture.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${syne.variable} ${bebasNeue.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
