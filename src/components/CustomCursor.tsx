'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Position references
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      const target = e.target as HTMLElement;
      const isMagnetic = target.closest('[data-magnetic]') !== null;

      if (isMagnetic) {
        if (ringRef.current) ringRef.current.classList.add('scale-150', 'bg-white/10');
        if (dotRef.current) dotRef.current.classList.add('opacity-0');
      } else {
        if (ringRef.current) ringRef.current.classList.remove('scale-150', 'bg-white/10');
        if (dotRef.current) dotRef.current.classList.remove('opacity-0');
      }

      dotPos.current.x = clientX;
      dotPos.current.y = clientY;
    };

    const render = () => {
      // Lerp ring towards dot
      ringPos.current.x += (dotPos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (dotPos.current.y - ringPos.current.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      requestRef.current = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove);
    requestRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      <div 
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/30 pointer-events-none z-[100] transition-all duration-300 ease-out will-change-transform mix-blend-difference"
      />
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[100] transition-opacity duration-300 will-change-transform mix-blend-difference"
      />
    </>
  );
}
