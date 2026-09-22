import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import LenisProvider from "@/components/LenisProvider";

import { Oswald, Syne, Space_Grotesk, JetBrains_Mono } from 'next/font/google';

const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' });
const syne = Syne({ subsets: ['latin'], variable: '--font-syne' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' });

export const metadata: Metadata = {
  title: "Kiran Babu Bandela — AI/ML Engineer | GenAI · RAG · Agentic Systems",
  description:
    "Portfolio of Kiran Babu Bandela — AI/ML Engineer specializing in Generative AI, RAG, Agentic Systems, LangGraph, and FastAPI. Building AI products at IKCON Digital, Hyderabad.",
  keywords: [
    "AI/ML Engineer", "Generative AI", "RAG", "LangGraph", "LangChain",
    "Multi-Agent Systems", "FastAPI", "PyTorch", "Kiran Babu Bandela", "Hyderabad",
  ],
  authors: [{ name: "Kiran Babu Bandela", url: "https://github.com/kiran1627" }],
  openGraph: {
    title: "Kiran Babu Bandela — AI/ML Engineer",
    description: "Building multi-agent orchestration, RAG pipelines, and agentic AI systems.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${syne.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="google-site-verification" content="IinthXweeh2z6UGkTIkEjQc97U7l6VM1VzDJo9sEFjw" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Kiran Babu Bandela",
              "alternateName": "Kiran Babu",
              "url": "https://kiranbabu-portfilo.vercel.app",
              "jobTitle": "AI/ML Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "IKCON Digital"
              },
              "sameAs": [
                "https://github.com/kiran1627"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        <LenisProvider>
          <CustomCursor />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
