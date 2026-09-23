'use client';

import { motion } from 'framer-motion';
import { Database, BrainCircuit, Server, Monitor, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'Data Ingestion',
    description: 'Pandas, PySpark, Document Loaders',
    icon: Database,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20'
  },
  {
    title: 'Vector/Retrieval',
    description: 'Pinecone, Milvus, Qdrant',
    icon: Database, // Reusing Database for Vector DB
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20'
  },
  {
    title: 'Orchestration & LLM',
    description: 'LangChain, LangGraph, Llama 3, GPT-4',
    icon: BrainCircuit,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20'
  },
  {
    title: 'API Layer',
    description: 'FastAPI, Docker, AWS',
    icon: Server,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20'
  },
  {
    title: 'Client / UI',
    description: 'Next.js, React, TailwindCSS',
    icon: Monitor,
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20'
  }
];

export default function Architecture() {
  return (
    <section id="architecture" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-oswald)] uppercase tracking-tighter">
            ARCHITECTURE
          </h2>
          <div className="h-px w-full max-w-sm bg-gradient-to-r from-[var(--accent-red)] to-transparent mt-4" />
          <p className="text-gray-400 mt-6 max-w-2xl text-lg">
            The blueprint behind my applications. This is the typical tech stack and pipeline I use to build robust machine learning and AI systems.
          </p>
        </div>

        {/* Architecture Flow */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center gap-4 lg:gap-2 w-full lg:w-auto">
              
              {/* Step Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-2xl bg-white/5 border ${step.borderColor} hover:border-[var(--accent-red)]/50 transition-all duration-300 w-full lg:w-48 h-48 flex flex-col items-center justify-center text-center group shadow-lg`}
              >
                <div className={`p-4 rounded-full ${step.bgColor} ${step.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <step.icon size={28} />
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{step.title}</h3>
                <p className="text-gray-500 text-xs font-[var(--font-jetbrains-mono)]">
                  {step.description}
                </p>
              </motion.div>

              {/* Arrow Connector (hide on last item) */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="hidden lg:flex text-[var(--accent-red)]"
                >
                  <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <ArrowRight size={24} />
                  </motion.div>
                </motion.div>
              )}
              
              {/* Vertical arrow for mobile */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="flex lg:hidden text-[var(--accent-red)] my-2"
                >
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <ArrowRight size={24} className="rotate-90" />
                  </motion.div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
