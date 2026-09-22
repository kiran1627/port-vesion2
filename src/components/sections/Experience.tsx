'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const timelineData = [
  {
    id: 1,
    type: 'work',
    role: 'IT Intern',
    organization: 'IKCON Digital IT Services Pvt Ltd',
    period: 'Jun 2026 - Present',
    location: 'Hyderabad, India',
    description: 'Designed Cortex AI chatbot (RAG + Qwen3-8B) for UMS. Built SurakshaGrid government emergency-response platform using FastAPI, Gemini, and XGBoost. Developed a function-calling LLM chatbot (Ollama qwen2.5:7b-instruct). Owned the AI microservice behind SurakshaGrid (live across 5 Telangana govt depts). Built a hybrid RAG pipeline: BM25 + Qdrant (RRF fusion), BGE reranking, self-hosted Qwen3-8B. Built SETU GRID, a real-time WebSocket coordination layer.'
  },
  {
    id: 2,
    type: 'work',
    role: 'Artificial Intelligence Intern',
    organization: 'Placemantra',
    period: 'Jan 2025 - Mar 2025',
    location: 'India',
    description: 'Cleaned and prepped text data for NLP models. Trained PyTorch/TensorFlow models improving accuracy by 12%. Set up MLflow for reproducible experiments. Tuned models for a placement-matching pipeline.'
  },
  {
    id: 3,
    type: 'education',
    role: 'B.Tech in Computer Science & Engineering (AI & ML)',
    organization: 'Jawaharlal Nehru Technological University Hyderabad (JNTUH)',
    period: 'Nov 2022 - May 2026',
    location: 'Hyderabad, India',
    description: 'CGPA: 7.76. Finalist — TASK / SAP Innovation Marathon (2024) for an AI-enabled Smart Blood Donation System.'
  }
];

export default function Experience() {
  const [filter, setFilter] = useState<'all' | 'work' | 'education'>('all');

  const filteredData = timelineData.filter(item => filter === 'all' || item.type === filter);

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-oswald)] uppercase tracking-tighter">
              JOURNEY
            </h2>
            <div className="h-px w-full max-w-sm bg-gradient-to-r from-[var(--accent-red)] to-transparent mt-4" />
          </div>

          {/* Interactive filter pills */}
          <div className="flex gap-4">
            {(['all', 'work', 'education'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`relative px-4 py-1.5 text-sm font-medium font-[var(--font-jetbrains-mono)] uppercase transition-colors ${
                  filter === f ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                }`}
                data-magnetic
              >
                {filter === f && (
                  <motion.div
                    layoutId="experience-filter"
                    className="absolute inset-0 bg-white/10 rounded-full border border-[var(--accent-red)]/50"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{f}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Central glowing neon laser spine */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--accent-red)] to-transparent shadow-[0_0_15px_var(--bright-red)] md:-translate-x-1/2 opacity-50" />

          <div className="space-y-12 md:space-y-24">
            <AnimatePresence mode="popLayout">
              {filteredData.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, type: 'spring' }}
                    className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Center glowing waypoint node */}
                    <div className="absolute left-4 md:left-1/2 top-0 w-3 h-3 bg-black border-2 border-[var(--accent-red)] rounded-full -translate-x-1.5 md:-translate-x-1.5 shadow-[0_0_10px_var(--bright-red)] z-10">
                      <div className={`absolute inset-0 rounded-full animate-ping opacity-50 ${item.type === 'work' ? 'bg-[var(--bright-red)]' : 'bg-green-500'}`} />
                    </div>

                    {/* Content Card */}
                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                      <div className="p-6 border border-white/10 bg-black/40 backdrop-blur-sm rounded-xl hover:border-[var(--accent-red)]/30 transition-colors group">
                        <div className="flex flex-col gap-2 mb-4">
                          <span className="text-xs font-[var(--font-jetbrains-mono)] text-[var(--accent-red)]">
                            {item.period}
                          </span>
                          <h3 className="text-2xl font-bold font-[var(--font-syne)] text-white group-hover:text-[var(--accent-red)] transition-colors">
                            {item.role}
                          </h3>
                          <div className="text-sm text-gray-400 font-medium">
                            {item.organization} &bull; {item.location}
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
