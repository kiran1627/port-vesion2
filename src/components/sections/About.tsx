'use client';

import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-oswald)] uppercase tracking-tighter">
            <span className="text-[var(--accent-red)]">02.</span> SYSTEM_INSPECTION
          </h2>
          <div className="h-px w-full max-w-sm bg-gradient-to-r from-[var(--accent-red)] to-transparent mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Bio Terminal Window */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-white/10 bg-black/60 backdrop-blur-md rounded-lg overflow-hidden"
          >
            <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="ml-4 flex items-center gap-2 text-xs font-[var(--font-jetbrains-mono)] text-gray-400">
                <Terminal size={14} />
                <span>kiran@root:~/about</span>
              </div>
            </div>
            <div className="p-6 md:p-8 font-[var(--font-jetbrains-mono)] text-sm md:text-base text-gray-300 leading-relaxed">
              <p className="mb-4">
                <span className="text-[var(--accent-red)]">&gt;</span> Initialize bio protocol...
              </p>
              <p className="mb-4 text-white">
                Hi, I&apos;m Kiran Babu Bandela, an AI/ML Engineer with a relentless focus on creating intelligent, scalable systems. My expertise spans Generative AI, RAG pipelines, and building autonomous agents.
              </p>
              <p className="mb-4">
                I thrive at the intersection of complex data problems and real-world application, translating advanced machine learning research into production-ready software.
              </p>
              <p>
                <span className="text-[var(--accent-red)] animate-pulse">_</span>
              </p>
            </div>
          </motion.div>

          {/* Core Strengths Matrix */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {[
              { title: 'Generative AI & LLMs', desc: 'Designing custom RAG architectures and finetuning models for domain-specific tasks.', level: 95 },
              { title: 'Multi-Agent Systems', desc: 'Orchestrating complex workflows using LangChain, LangGraph, and specialized autonomous agents.', level: 90 },
              { title: 'Backend & Infrastructure', desc: 'Developing high-performance microservices with FastAPI, deployed on scalable cloud infrastructure.', level: 85 },
            ].map((strength, i) => (
              <div key={i} className="border border-white/10 bg-black/40 backdrop-blur-sm p-6 rounded-lg group hover:border-[var(--accent-red)]/50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-[var(--font-syne)] font-bold text-xl text-white group-hover:text-[var(--accent-red)] transition-colors">
                    {strength.title}
                  </h3>
                  <span className="font-[var(--font-jetbrains-mono)] text-sm text-[var(--accent-red)]">
                    {strength.level}%
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  {strength.desc}
                </p>
                {/* Progress Bar */}
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${strength.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + (i * 0.1) }}
                    className="h-full bg-[var(--accent-red)] shadow-[0_0_10px_var(--bright-red)]"
                  />
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
