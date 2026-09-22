'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'GenAI & Agentic Systems',
    skills: ['Multi-Agent Orchestration', 'Agentic AI', 'RAG', 'Prompt Engineering', 'LLMs', 'Function Calling']
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['LangChain', 'LangGraph', 'PyTorch', 'TensorFlow', 'Keras', 'HuggingFace', 'Scikit-learn', 'OpenCV']
  },
  {
    title: 'Embeddings & Retrieval',
    skills: ['Vector Databases', 'Similarity Search', 'Hybrid Search', 'Reranking']
  },
  {
    title: 'Backend & Deployment',
    skills: ['FastAPI', 'Flask', 'Streamlit', 'Docker', 'MLflow', 'AWS']
  },
  {
    title: 'Databases',
    skills: ['Qdrant', 'FAISS', 'Pinecone', 'MySQL', 'SQLite']
  },
  {
    title: 'Data & Programming',
    skills: ['Python', 'Pandas', 'NumPy', 'EDA', 'Git', 'GitHub', 'Power BI']
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-oswald)] uppercase tracking-tighter">
            TECH_STACK
          </h2>
          <div className="h-px w-full max-w-sm bg-gradient-to-r from-[var(--accent-red)] to-transparent mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold font-[var(--font-syne)] text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-red)]" />
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium font-[var(--font-jetbrains-mono)] bg-black/50 border border-white/10 rounded text-gray-300 hover:text-white hover:border-[var(--accent-red)] transition-colors cursor-default"
                    data-magnetic
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
