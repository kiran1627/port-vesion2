import CinematicVideo from '@/components/CinematicVideo';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="relative w-full h-full text-white selection:bg-[var(--accent-red)] selection:text-white">
      {/* Background Video Engine */}
      <CinematicVideo />
      
      {/* Navigation */}
      <Navbar />

      {/* Content Sections */}
      <div className="relative z-10 flex flex-col w-full h-full">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </div>
    </main>
  );
}
