'use client';

import React, { useRef, useState, useEffect, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Code2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    id: 'finpilot',
    index: '01',
    title: 'FinPilot',
    tagline: 'Autonomous Finance',
    description: 'Multi-agent LangGraph decision cycle for portfolio advisory, with run tracking and state replay.',
    techStack: ['Next.js 15', 'FastAPI', 'LangGraph'],
    impact: '88% decision accuracy',
    videoSrc: '/projects/Finpilot.mp4',
    architecture: '/projects/finpilot_architecture_1780035965751.png',
    githubUrl: 'https://github.com/kiran1627',
    liveUrl: '#',
    glow: 'rgba(255, 215, 0, 0.15)', // goldish
    overview: 'An advanced, autonomous finance command center running a multi-agent decision cycle. It monitors live market variables and automatically compiles personalized asset weight suggestions.',
    problem: 'Personal trading requires reading massive amounts of live feeds, sentiments, and financial sentry indices, which rapidly overwhelms single human operators.',
    solution: 'Designed a stateful orchestration graph where multiple specialized LLM agents (Profile Analyst, Market Advisor, Risk Officer) collaborate autonomously to evaluate tickers and suggest allocations.',
    results: [
      { label: 'Decision Accuracy', value: '88%' },
      { label: 'Simulation Runs', value: '$10k+' },
      { label: 'Inference Latency', value: '<250ms' }
    ],
    workflow: [
      { step: '01', title: 'Data Ingestion', desc: 'Scrapes live ticker logs, financial news feeds, and sentiment indices.' },
      { step: '02', title: 'Debate Session', desc: 'Analyst, Trader, and Risk Manager debate allocations in a stateful loop.' },
      { step: '03', title: 'Risk Verification', desc: 'Validates decisions against static safety limits and volatility margins.' },
      { step: '04', title: 'FastAPI Dispatch', desc: 'Dispatches simulated orders and logs state records to SQLite.' }
    ]
  },
  {
    id: 'proact-safe',
    index: '02',
    title: 'PROACT-SAFE',
    tagline: 'Firearm Threat CCTV',
    description: 'CPU-optimized YOLOv8 vision pipeline detecting weapon threats across live camera feeds in under 50ms.',
    techStack: ['YOLOv8', 'FastAPI', 'WebSockets'],
    impact: '99.8% weapon accuracy',
    videoSrc: '/projects/Proact.mp4',
    architecture: '/projects/proact_safe_architecture_1780035982390.png',
    githubUrl: 'https://github.com/kiran1627/PROACT-SAFE',
    liveUrl: '#',
    glow: 'rgba(196, 0, 36, 0.15)', // redish
    overview: 'A real-time edge security system that ingests simulated 4-camera CCTV feeds, performs hardware-optimized firearm class inferences, and raises instant alerts.',
    problem: 'Standard CCTV platforms rely entirely on human monitoring focus, resulting in critical delays when weapon hazards emerge in public spaces.',
    solution: 'Built an ingestion pipeline loading camera frames, performing YOLOv8n CPU inference <50ms, scoring threats, and broadcasting security alerts via WebSockets.',
    results: [
      { label: 'Weapon Accuracy', value: '99.8%' },
      { label: 'Processing Speed', value: '<50ms' },
      { label: 'WS Alert Dispatch', value: '<10ms' }
    ],
    workflow: [
      { step: '01', title: 'Frame Ingestion', desc: 'Pulls camera MJPEG frames via high-speed OpenCV routes.' },
      { step: '02', title: 'YOLOv8 Threat Inference', desc: 'Extracts firearm anomaly classes on standard edge hardware.' },
      { step: '03', title: 'Risk Scoring Matrix', desc: 'Applies threshold filters and tracks threat persistence over frames.' },
      { step: '04', title: 'WS Alarm Dispatch', desc: 'Broadcasts alert indicators and frame base64 snapshots instantly.' }
    ]
  },
  {
    id: 'blood-donation',
    index: '03',
    title: 'Blood Donation Matcher',
    tagline: 'ML Geolocation Routing',
    description: 'Random Forest compatibility scoring paired with geocoding and blockchain-verified donor matching.',
    techStack: ['Scikit-learn', 'Flask', 'Blockchain'],
    impact: '95% donor match rate',
    videoSrc: '/projects/BloodDonation-demo-compressed.mp4',
    architecture: '/projects/blood_donation_architecture_1780035932279.png',
    githubUrl: 'https://github.com/kiran1627',
    liveUrl: '#',
    glow: 'rgba(255, 255, 255, 0.1)', // whitish
    overview: 'A smart web portal bridging emergency recipient requests with optimal compatible blood donors, verifying matches via geofencing and logging records securely.',
    problem: 'Hospitals experience fatal delays when matching compatible rare blood groups within narrow emergency timeframes.',
    solution: 'Designed a Random Forest Classifier that scores donor-patient compatibility paired with Positionstack geodes and custom Blockchain logging.',
    results: [
      { label: 'Donor Match Rate', value: '95%' },
      { label: 'Proximity Threshold', value: '<15km' },
      { label: 'Record Encryption', value: 'SHA256' }
    ],
    workflow: [
      { step: '01', title: 'Intake Request', desc: 'Hospital logs compatible rare blood requests on React client.' },
      { step: '02', title: 'Geocode Lookup', desc: 'Positionstack API maps target locations into lat/long coordinates.' },
      { step: '03', title: 'RF ML Inference', desc: 'Models calculate donor matching rates and availability score.' },
      { step: '04', title: 'Immutable Verification', desc: 'Registers verified donor logs securely on blockchain ledger.' }
    ]
  },
  {
    id: 'genai-chatbot',
    index: '04',
    title: 'Multimodal Chatbot',
    tagline: 'Conversational Agent',
    description: 'CLIP visual embeddings, Whisper transcription, and gTTS synthesis unified into one voice-first assistant.',
    techStack: ['PyTorch', 'CLIP', 'Whisper'],
    impact: '98% context accuracy',
    videoSrc: '/projects/chatbot-demo.mp4',
    architecture: '/projects/chatbot_architecture_1780035950296.png',
    githubUrl: 'https://github.com/kiran1627',
    liveUrl: '#',
    glow: 'rgba(255, 215, 0, 0.15)', // goldish
    overview: 'A full speech-and-image AI portal that resolves audio signals and visual pixel grids into unified prompt contexts before generating conversational returns.',
    problem: 'Classic chatbots remain restricted to text, lacking context retention of image frames and vocal recording streams.',
    solution: 'Engineered an orchestrator combining CLIP visual embeddings, Whisper STT speech translation, and a GPT context buffer to generate audio voice synthesis.',
    results: [
      { label: 'Speech Translation', value: '<200ms' },
      { label: 'Synthesizer Playback', value: '<350ms' },
      { label: 'Context Accuracy', value: '98%' }
    ],
    workflow: [
      { step: '01', title: 'Media Upload Ingest', desc: 'User types prompt, records vocal audio, or uploads image.' },
      { step: '02', title: 'Pipeline Demux', desc: 'Whisper translates audio, CLIP maps image pixels to coordinates.' },
      { step: '03', title: 'Prompt Integration', desc: 'Assembles context logs and builds the finalized LLM instructions.' },
      { step: '04', title: 'Audio Synthesis', desc: 'Pushes token-stream outputs and reads response via gTTS.' }
    ]
  }
];

const ProjectDetailsModal = ({ project, onClose }: { project: typeof projectsData[0], onClose: () => void }) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement;
    dialogRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;
      const focusables = dialogRef.current?.querySelectorAll(
        'a[href], button, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0] as HTMLElement;
      const last = focusables[focusables.length - 1] as HTMLElement;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md"
      role="presentation"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        className="relative w-full max-w-4xl max-h-[95vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-10 shadow-[0_0_50px_rgba(196,0,36,0.1)] custom-scrollbar"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        ref={dialogRef}
        tabIndex={-1}
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
      >
        <button 
          className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors z-10" 
          onClick={onClose} 
          aria-label="Close project details"
        >
          <X size={20} />
        </button>

        <div className="mb-8 pr-12">
          <span className="text-[var(--accent-red)] font-bold text-sm tracking-wider uppercase mb-2 block font-[var(--font-jetbrains-mono)]">Project {project.index}</span>
          <h3 id={titleId} className="text-3xl md:text-5xl font-bold font-[var(--font-oswald)] text-white mb-2">{project.title}</h3>
          <p className="text-gray-400 font-[var(--font-syne)] text-lg md:text-xl">{project.tagline}</p>
        </div>

        <div className="relative rounded-xl overflow-hidden bg-white/5 border border-white/10 mb-10 aspect-video flex items-center justify-center">
          <video src={project.videoSrc} controls muted playsInline autoPlay className="w-full h-full object-contain" />
        </div>

        <div className="mb-10">
          <h4 className="text-xl font-bold text-white mb-3 font-[var(--font-syne)]">Overview</h4>
          <p className="text-gray-300 leading-relaxed">{project.overview}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-lg font-bold text-white mb-3 font-[var(--font-syne)]">The Challenge</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{project.problem}</p>
          </div>
          <div className="bg-[var(--accent-red)]/5 border border-[var(--accent-red)]/20 rounded-xl p-6 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-red)]/10 blur-[50px] -mr-16 -mt-16 rounded-full" />
            <h4 className="text-lg font-bold text-white mb-3 font-[var(--font-syne)] relative z-10">The Solution</h4>
            <p className="text-gray-300 text-sm leading-relaxed relative z-10">{project.solution}</p>
          </div>
        </div>

        <div className="mb-10">
          <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2 font-[var(--font-syne)]">
            <Code2 size={20} className="text-[var(--accent-red)]" /> System Architecture
          </h4>
          <div className="rounded-xl border border-white/10 overflow-hidden bg-white/5 p-4 flex justify-center">
            <img
              src={project.architecture}
              alt={`${project.title} architecture diagram`}
              className="w-full max-w-2xl h-auto object-contain rounded"
            />
          </div>
        </div>

        <div className="mb-10">
          <h4 className="text-xl font-bold text-white mb-6 font-[var(--font-syne)]">Pipeline Workflow</h4>
          <div className="space-y-4">
            {project.workflow.map((item) => (
              <div key={item.step} className="flex gap-4 p-4 rounded-xl border border-white/5 bg-black/50 hover:bg-white/5 transition-colors">
                <span className="text-[var(--accent-red)] font-bold font-[var(--font-jetbrains-mono)] opacity-80">{item.step}</span>
                <div>
                  <strong className="block text-white mb-1 font-[var(--font-syne)]">{item.title}</strong>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-lg font-bold text-white mb-4 font-[var(--font-syne)]">Results</h4>
            <div className="space-y-3">
              {project.results.map((r) => (
                <div key={r.label} className="flex justify-between items-center border-b border-white/10 pb-2 last:border-0 last:pb-0">
                  <span className="text-gray-400 text-sm">{r.label}</span>
                  <strong className="text-white font-[var(--font-jetbrains-mono)] text-sm">{r.value}</strong>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-lg font-bold text-white mb-4 font-[var(--font-syne)]">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <span key={t} className="text-xs font-[var(--font-jetbrains-mono)] text-[var(--accent-red)] bg-[var(--accent-red)]/10 px-3 py-1.5 rounded border border-[var(--accent-red)]/20">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8 pt-8 border-t border-white/10">
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors font-[var(--font-syne)] font-bold text-sm">
            <FaGithub size={18} /> View Repository
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

function ProjectCard({ project, onClick }: { project: typeof projectsData[0], onClick: () => void }) {
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
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-6 overflow-hidden h-full flex flex-col transition-all duration-300 cursor-pointer hover:border-[var(--accent-red)]/50"
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
          background: `radial-gradient(600px circle at ${spotlight.x}% ${spotlight.y}%, ${project.glow}, transparent 40%)`
        }}
      />

      <div className="relative z-10 flex-grow flex flex-col pointer-events-none">
        <span className="text-[var(--accent-red)] font-bold text-xs font-[var(--font-jetbrains-mono)] mb-2 block" style={{ transform: 'translateZ(20px)' }}>{project.index}</span>
        <h3 className="text-2xl font-bold font-[var(--font-syne)] text-white mb-2" style={{ transform: 'translateZ(30px)' }}>
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
        
        <div className="flex justify-between items-center mt-auto pointer-events-auto" style={{ transform: 'translateZ(40px)' }}>
          <div className="flex gap-3">
             <a href={project.githubUrl} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
               <FaGithub size={20} />
             </a>
             {project.liveUrl !== '#' && (
               <a href={project.liveUrl} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                 <ExternalLink size={20} />
               </a>
             )}
          </div>
          
          <span className="text-sm font-bold text-white group-hover:text-[var(--accent-red)] transition-colors font-[var(--font-syne)] flex items-center gap-1 pointer-events-none">
            View Details <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState<typeof projectsData[0] | null>(null);

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div key={project.id} className="h-full" style={{ perspective: '1000px' }}>
              <ProjectCard project={project} onClick={() => setActiveProject(project)} />
            </div>
          ))}
        </div>
        
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectDetailsModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
