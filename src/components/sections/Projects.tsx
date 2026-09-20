'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: 'FinPilot – Multi-Agent Autonomous Finance System',
    description: 'Designed a multi-agent orchestration graph in LangGraph – specialized agent nodes for profiling, scenario simulation, and decision persistence. Built frontend in Next.js.',
    techStack: ['FastAPI', 'Next.js', 'LangGraph', 'Agents'],
    githubUrl: '#',
    liveUrl: 'https://finpilot-two.vercel.app'
  },
  {
    id: 2,
    title: 'PROACT-SAFE – Firearm Threat Monitoring',
    description: 'Firearm detection system on YOLOv8 with temporal filtering across 5+ frames and weighted scoring to reduce false alerts; built a React dashboard for live monitoring.',
    techStack: ['Python', 'YOLOv8', 'OpenCV', 'React'],
    githubUrl: 'https://github.com/kiran1627/PROACT-SAFE',
    liveUrl: '#'
  },
  {
    id: 3,
    title: 'AI-Powered Blood Donation & Matching System',
    description: 'Platform connecting donors, recipients, and hospitals via geolocation-based matching, a Random Forest compatibility model, and blockchain-backed donation records.',
    techStack: ['FastAPI', 'React', 'Scikit-learn', 'Blockchain'],
    githubUrl: '#',
    liveUrl: '#'
  }
];

function ProjectCard({ project }: { project: typeof projectsData[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Rotate calculations
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
    
    // Spotlight calculations
    const xPct = (x / rect.width) * 100;
    const yPct = (y / rect.height) * 100;
    setSpotlight({ x: xPct, y: yPct, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setSpotlight({ ...spotlight, opacity: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-6 overflow-hidden h-full flex flex-col transition-all duration-300"
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Spotlight Effect */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0 mix-blend-screen"
        style={{
          opacity: spotlight.opacity,
          background: `radial-gradient(600px circle at ${spotlight.x}% ${spotlight.y}%, rgba(196,0,36,0.15), transparent 40%)`
        }}
      />

      <div className="relative z-10 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold font-[var(--font-syne)] text-white mb-3" style={{ transform: 'translateZ(30px)' }}>
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-6 flex-grow" style={{ transform: 'translateZ(20px)' }}>
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8" style={{ transform: 'translateZ(25px)' }}>
          {project.techStack.map(tech => (
            <span key={tech} className="text-xs font-[var(--font-jetbrains-mono)] text-[var(--accent-red)] bg-[var(--accent-red)]/10 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4 mt-auto" style={{ transform: 'translateZ(40px)' }}>
          <a href={project.githubUrl} className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors" data-magnetic>
            <FaGithub size={20} />
          </a>
          <a href={project.liveUrl} className="p-2 bg-[var(--accent-red)] hover:bg-[var(--bright-red)] rounded-full text-white transition-colors" data-magnetic>
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-oswald)] uppercase tracking-tighter">
            <span className="text-[var(--accent-red)]">05.</span> DEPLOYMENTS
          </h2>
          <div className="h-px w-full max-w-sm bg-gradient-to-r from-[var(--accent-red)] to-transparent mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div key={project.id} className="h-full" style={{ perspective: '1000px' }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
