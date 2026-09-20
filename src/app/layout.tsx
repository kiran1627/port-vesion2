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
      <head />
      <body className="antialiased">
        <LenisProvider>
          <CustomCursor />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
