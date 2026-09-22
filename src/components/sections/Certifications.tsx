'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X } from 'lucide-react';

const certsData = [
  {
    id: 1,
    title: 'Generative AI Professional',
    issuer: 'Oracle Cloud Infrastructure',
    date: '2025',
    hash: 'SHA256://8a2b...c9d4',
    competencies: ['Generative AI', 'LLMs', 'Cloud AI'],
  },
  {
    id: 2,
    title: 'Data Science Professional',
    issuer: 'Oracle Cloud Infrastructure',
    date: '2025',
    hash: 'SHA256://f3e1...b7a2',
    competencies: ['Machine Learning', 'Data Science', 'Model Deployment'],
  },
  {
    id: 3,
    title: 'Certified in Emerging Technologies',
    issuer: 'SAP & Edunet',
    date: '2025',
    hash: 'SHA256://1d5c...9f0e',
    competencies: ['Emerging Tech', 'SAP', 'Innovation'],
  },
  {
    id: 4,
    title: 'Finalist – TASK Code Unnati Innovation Marathon',
    issuer: 'SAP & Edunet',
    date: '2025',
    hash: 'SHA256://6b8a...3c2d',
    competencies: ['Innovation', 'Hackathon', 'Problem Solving'],
  }
];

export default function Certifications() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedCert, setSelectedCert] = useState<typeof certsData[0] | null>(null);
  const [autoSpin, setAutoSpin] = useState(true);
  
  const radius = typeof window !== 'undefined' ? (window.innerWidth < 768 ? 275 : window.innerWidth < 1024 ? 380 : 480) : 480;
  const N = certsData.length;
  const step = 360 / N;

  // Drag physics state
  const prevX = useRef(0);
  const velocity = useRef(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    let lastTime = performance.now();

    const loop = (time: number) => {
      const dt = time - lastTime;
      lastTime = time;

      if (!isDragging) {
        if (autoSpin) {
          setRotation(r => r - 0.06 * dt);
        } else if (Math.abs(velocity.current) > 0.01) {
          // Inertia
          setRotation(r => r + velocity.current);
          velocity.current *= 0.945; // Friction
        }
      }
      
      animationRef.current = requestAnimationFrame(loop);
    };

    animationRef.current = requestAnimationFrame(loop);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isDragging, autoSpin]);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setAutoSpin(false);
    prevX.current = e.clientX;
    velocity.current = 0;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - prevX.current;
    
    // Adjust rotation sensitivity based on radius
    const rotationDelta = (dx / radius) * 50; 
    setRotation(r => r + rotationDelta);
    
    // Track velocity for throw inertia
    velocity.current = rotationDelta;
    prevX.current = e.clientX;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const handleCardClick = (index: number) => {
    if (Math.abs(velocity.current) > 1) return; // Don't trigger if swiping hard
    
    // Target rotation to bring card to front (angle 0)
    const targetAngle = -(index * step);
    
    // Find shortest path
    let currentNorm = rotation % 360;
    if (currentNorm < 0) currentNorm += 360;
    
    let targetNorm = targetAngle % 360;
    if (targetNorm < 0) targetNorm += 360;
    
    let delta = targetNorm - currentNorm;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    
    setRotation(r => r + delta);
    setAutoSpin(false);

    // If already front-facing, open modal
    if (Math.abs(delta) < 5) {
      setSelectedCert(certsData[index]);
    }
  };

  return (
    <section id="certifications" className="relative py-32 overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 flex justify-between items-end">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-oswald)] uppercase tracking-tighter">
              CREDENTIALS
            </h2>
            <div className="h-px w-full max-w-sm bg-gradient-to-r from-[var(--accent-red)] to-transparent mt-4" />
          </div>
          
          <button 
            onClick={() => setAutoSpin(!autoSpin)}
            className="text-xs font-[var(--font-jetbrains-mono)] text-gray-400 hover:text-white transition-colors"
          >
            [AUTO-SPIN: {autoSpin ? 'ON' : 'PAUSED'}]
          </button>
        </div>

        {/* 3D Gallery Container */}
        <div 
          className="relative w-full h-[600px] flex items-center justify-center draggable perspective-[2000px]"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {/* Cylinder Wrapper */}
          <div 
            ref={containerRef}
            className="relative w-full h-full flex items-center justify-center transform-style-preserve-3d transition-transform will-change-transform"
            style={{ 
              transform: `translateZ(${-radius}px) rotateY(${rotation}deg)`,
              transformStyle: 'preserve-3d'
            }}
          >
            {certsData.map((cert, i) => {
              const angle = i * step;
              // Calculate if card is facing away (cos(phi) < 0)
              // The card's global angle is (angle + rotation)
              const globalAngle = (angle + rotation) * (Math.PI / 180);
              const isBackfacing = Math.cos(globalAngle) < 0;

              return (
                <div
                  key={cert.id}
                  onClick={() => handleCardClick(i)}
                  className="absolute left-1/2 top-1/2 w-[280px] md:w-[320px] -ml-[140px] md:-ml-[160px] -mt-[160px] cursor-pointer group select-none"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    backfaceVisibility: 'hidden',
                    opacity: isBackfacing ? 0 : 1, // Fallback if backface visibility fails in some browsers
                    pointerEvents: isBackfacing ? 'none' : 'auto'
                  }}
                >
                  <div className="h-[320px] bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:border-[var(--accent-red)]/50 group-hover:bg-black/80 relative overflow-hidden shadow-2xl">
                    {/* Brand-colored laser top beam */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--accent-red)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <ShieldCheck size={48} className="text-gray-500 group-hover:text-[var(--accent-red)] transition-colors mb-6" strokeWidth={1.5} />
                    
                    <h3 className="text-lg font-bold font-[var(--font-syne)] text-white mb-2 leading-tight">
                      {cert.title}
                    </h3>
                    
                    <p className="text-sm text-gray-400 font-medium mb-6">
                      {cert.issuer}
                    </p>
                    
                    <div className="mt-auto">
                      <span className="inline-block bg-white/5 border border-white/10 text-gray-300 text-xs px-3 py-1 rounded font-[var(--font-jetbrains-mono)]">
                        VIEW VERIFICATION
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {certsData.map((_, i) => {
            const targetAngle = -(i * step);
            const currentNorm = rotation % 360;
            const diff = Math.abs(currentNorm - targetAngle);
            const isActive = diff < step/2 || diff > 360 - step/2;
            
            return (
              <button
                key={i}
                onClick={() => handleCardClick(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${isActive ? 'bg-[var(--accent-red)] w-6' : 'bg-white/20 hover:bg-white/40'}`}
              />
            );
          })}
        </div>
      </div>

      {/* Verification Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#090909] border border-white/10 rounded-2xl p-8 max-w-lg w-full relative shadow-[0_0_50px_rgba(196,0,36,0.1)]"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-full border border-[var(--accent-red)]/30 text-[var(--accent-red)]">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-[var(--font-syne)] text-white">{selectedCert.title}</h3>
                  <p className="text-sm text-gray-400">{selectedCert.issuer}</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="text-xs text-gray-500 mb-1 font-[var(--font-jetbrains-mono)] uppercase">Verified Date</div>
                  <div className="text-white font-medium">{selectedCert.date}</div>
                </div>
                
                <div>
                  <div className="text-xs text-gray-500 mb-1 font-[var(--font-jetbrains-mono)] uppercase">Cryptographic Security Hash</div>
                  <div className="bg-black/50 border border-white/5 p-3 rounded text-xs font-[var(--font-jetbrains-mono)] text-[var(--accent-red)] break-all">
                    {selectedCert.hash}
                  </div>
                </div>
                
                <div>
                  <div className="text-xs text-gray-500 mb-2 font-[var(--font-jetbrains-mono)] uppercase">Verified Competencies</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.competencies.map(comp => (
                      <span key={comp} className="bg-white/5 border border-white/10 text-gray-300 text-xs px-2 py-1 rounded">
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => setSelectedCert(null)}
                className="w-full mt-8 py-3 bg-white text-black font-bold uppercase tracking-wider text-sm hover:bg-gray-200 transition-colors"
              >
                Close Verification
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
