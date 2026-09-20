'use client';

import { useEffect, useRef, useState } from 'react';
import { useLenis } from '@studio-freight/react-lenis';

export default function CinematicVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const currentRef = useRef(0);
  const targetRef = useRef(0);
  const readyRef = useRef(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useLenis(({ progress }) => {
    setScrollProgress(progress);
    const duration = videoRef.current?.duration;
    targetRef.current = progress * (duration && !isNaN(duration) ? duration : 10);
  });

  useEffect(() => {
    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      const xp = (mouseX / window.innerWidth) * 100;
      const yp = (mouseY / window.innerHeight) * 100;
      
      const glow = document.getElementById('cine-glow');
      if (glow) {
        glow.style.background = `radial-gradient(at ${xp}% ${yp}%, rgba(196,0,36,0.18), transparent)`;
      }

      // Cursor position for parallax
      targetX = (mouseX / window.innerWidth) * 2 - 1; // -1 to 1
      targetY = (mouseY / window.innerHeight) * 2 - 1; // -1 to 1
    };

    window.addEventListener('mousemove', handleMouseMove);

    let currentParallaxX = 0;
    let currentParallaxY = 0;

    const updateLoop = () => {
      // 1. Video scrubbing logic
      if (videoRef.current && readyRef.current) {
        if (isNaN(targetRef.current)) targetRef.current = 0;
        if (isNaN(currentRef.current)) currentRef.current = 0;
        
        currentRef.current += (targetRef.current - currentRef.current) * 0.10;
        
        if (Math.abs(targetRef.current - currentRef.current) > 0.001) {
          try {
             videoRef.current.currentTime = currentRef.current;
          } catch {
             // Ignore seek errors
          }
        }
      }

      // 2. Parallax tilt logic
      currentParallaxX += (targetX - currentParallaxX) * 0.1;
      currentParallaxY += (targetY - currentParallaxY) * 0.1;

      if (containerRef.current) {
        const dx = currentParallaxX;
        const dy = currentParallaxY;
        containerRef.current.style.transform = `scale(1.06) translate3d(${dx * -15}px, ${dy * -15}px, 0) rotateX(${dy * -2}deg) rotateY(${dx * 2}deg)`;
      }

      animationFrameId = requestAnimationFrame(updateLoop);
    };

    updateLoop();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleVideoReady = () => {
    readyRef.current = true;
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 1) {
      handleVideoReady();
    }
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div id="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} />
      <div ref={containerRef} className="w-full h-full will-change-transform origin-center">
        <video
          ref={videoRef}
          src="/video/portfolio-background.mp4"
          playsInline
          muted
          preload="auto"
          onLoadedMetadata={handleVideoReady}
          onCanPlay={handleVideoReady}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="cine-vignette" />
      <div id="cine-glow" />
      <div className="cine-grain" />
      <div className="cine-scan" />
    </div>
  );
}
