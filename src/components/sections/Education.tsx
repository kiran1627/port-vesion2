"use client";

import { useEffect, useRef } from "react";
import { education, achievements } from "@/data/portfolio";

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const coursework = [
    "Machine Learning",
    "Deep Learning",
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Computer Networks",
    "Artificial Intelligence",
    "Big Data Analytics",
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="section"
      style={{ background: "var(--surface-2)" }}
    >
      <div className="divider" />
      <div className="container" style={{ paddingTop: "7rem" }}>

        {/* ── Header ── */}
        <div className="section-header">
          <div className="reveal">
            <p className="section-number mb-3">06 // Education</p>
            <h2
              className="font-oswald font-bold uppercase"
              style={{ fontSize: "clamp(2.5rem,5vw,4rem)", color: "var(--text)", lineHeight: 1.05 }}
            >
              Academic{" "}
              <span style={{
                background: "linear-gradient(135deg,#fff 0%,#ff3b5c 50%,#c40024 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Foundation
              </span>
            </h2>
          </div>
        </div>

        {/* ── Main education card ── */}
        {education.map((edu) => (
          <div key={edu.shortName} className="reveal card card-red overflow-hidden max-w-4xl mb-8">

            {/* Laser top — red → cyan → red */}
            <div
              className="h-0.5 w-full"
              style={{ background: "linear-gradient(90deg, var(--accent-red), var(--cyan), var(--accent-red))" }}
            />

            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-8 items-start">

                {/* ── University badge ── */}
                <div
                  className="w-24 h-24 rounded-xl flex items-center justify-center flex-shrink-0 relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, var(--accent-red) 0%, #6a0019 100%)",
                    boxShadow: "0 0 40px rgba(196,0,36,0.35), inset 0 1px 0 rgba(255,255,255,0.1)",
                  }}
                >
                  <span
                    className="font-oswald font-black text-white relative z-10"
                    style={{ fontSize: "1.4rem", letterSpacing: "-0.02em" }}
                  >
                    {edu.shortName}
                  </span>
                  {/* Shimmer overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%)",
                      backgroundSize: "200% 100%",
                      animation: "shimmer 3s infinite",
                    }}
                  />
                </div>

                {/* ── Info block ── */}
                <div className="flex-1 min-w-0">
                  <p
                    className="font-mono text-xs mb-3"
                    style={{ color: "var(--accent-red)", letterSpacing: "0.2em" }}
                  >
                    DEGREE &nbsp;·&nbsp; {edu.period}
                  </p>

                  <h3
                    className="font-oswald font-bold uppercase mb-2"
                    style={{ fontSize: "1.15rem", color: "var(--text)", lineHeight: 1.2 }}
                  >
                    {edu.degree}
                  </h3>

                  <p
                    className="font-mono text-sm mb-4"
                    style={{ color: "var(--accent-red)" }}
                  >
                    {edu.university}
                  </p>

                  <p
                    className="font-mono text-xs mb-6"
                    style={{ color: "var(--text-3)" }}
                  >
                    📍 {edu.location}
                  </p>

                  {/* Coursework chips */}
                  <div>
                    <p
                      className="font-mono text-xs mb-3"
                      style={{ color: "var(--text-3)", letterSpacing: "0.15em" }}
                    >
                      KEY COURSEWORK
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {coursework.map((c) => (
                        <span key={c} className="chip-neutral"
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.6rem",
                            letterSpacing: "0.06em",
                            padding: "0.2rem 0.6rem",
                            borderRadius: "3px",
                            border: "1px solid var(--border)",
                            background: "rgba(255,255,255,0.025)",
                            color: "var(--text-2)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── CGPA gauge ── */}
                <div className="flex flex-col items-center gap-3 flex-shrink-0">
                  <div className="relative w-28 h-28">
                    <svg
                      className="w-28 h-28"
                      viewBox="0 0 112 112"
                      style={{ transform: "rotate(-90deg)" }}
                    >
                      {/* Track */}
                      <circle
                        cx="56" cy="56" r="46"
                        fill="none"
                        stroke="rgba(196,0,36,0.12)"
                        strokeWidth="7"
                      />
                      {/* Progress */}
                      <circle
                        cx="56" cy="56" r="46"
                        fill="none"
                        stroke="url(#cgpaGrad)"
                        strokeWidth="7"
                        strokeLinecap="round"
                        strokeDasharray={`${(parseFloat(edu.cgpa) / 10) * 289.0} 289.0`}
                      />
                      <defs>
                        <linearGradient id="cgpaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%"   stopColor="var(--accent-red)" />
                          <stop offset="100%" stopColor="var(--cyan)" />
                        </linearGradient>
                      </defs>
                    </svg>
                    {/* Center text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span
                        className="font-oswald font-black"
                        style={{ fontSize: "1.75rem", color: "var(--accent-red)", lineHeight: 1 }}
                      >
                        {edu.cgpa}
                      </span>
                      <span
                        className="font-mono mt-1"
                        style={{ fontSize: "0.55rem", color: "var(--text-3)", letterSpacing: "0.2em" }}
                      >
                        CGPA
                      </span>
                    </div>
                  </div>
                  <span
                    className="font-mono text-xs"
                    style={{ color: "var(--text-3)", letterSpacing: "0.1em" }}
                  >
                    out of 10.0
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* ── Achievement card ── */}
        <div className="reveal max-w-4xl">
          <div
            className="card overflow-hidden"
            style={{ borderColor: "rgba(255,215,0,0.2)" }}
          >
            {/* Gold laser top */}
            <div
              className="h-0.5 w-full"
              style={{ background: "linear-gradient(90deg, transparent, #ffd700, transparent)" }}
            />

            <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Trophy badge */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{
                  background: "rgba(255,215,0,0.1)",
                  border: "1px solid rgba(255,215,0,0.25)",
                  boxShadow: "0 0 24px rgba(255,215,0,0.12)",
                }}
              >
                🏆
              </div>

              <div className="flex-1">
                <p
                  className="font-mono text-xs mb-2"
                  style={{ color: "#ffd700", letterSpacing: "0.2em" }}
                >
                  ACHIEVEMENT · 2025
                </p>
                {achievements.map((a) => (
                  <div key={a.title}>
                    <h4
                      className="font-oswald font-semibold uppercase mb-1"
                      style={{ fontSize: "1rem", color: "var(--text)" }}
                    >
                      {a.title} — {a.event}
                    </h4>
                    <p
                      className="font-mono text-xs"
                      style={{ color: "var(--text-3)" }}
                    >
                      Organized by {a.org} &nbsp;·&nbsp; {a.year}
                    </p>
                  </div>
                ))}
              </div>

              {/* Gold chip */}
              <span
                className="font-mono text-xs px-3 py-1.5 rounded flex-shrink-0"
                style={{
                  background: "rgba(255,215,0,0.08)",
                  border: "1px solid rgba(255,215,0,0.25)",
                  color: "#ffd700",
                  letterSpacing: "0.1em",
                }}
              >
                FINALIST
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
