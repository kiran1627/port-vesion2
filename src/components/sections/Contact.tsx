'use client';

import { useState } from 'react';
import { Copy, Check, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'kiranbabub18@gmail.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-oswald)] uppercase tracking-tighter text-center">
            <span className="text-[var(--accent-red)]">07.</span> INITIATE_CONTACT
          </h2>
          <div className="h-px w-full max-w-sm bg-gradient-to-r from-transparent via-[var(--accent-red)] to-transparent mx-auto mt-4" />
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-300 mb-12 text-lg">
            Currently building AI systems and open to new opportunities.
            Whether you have a question, a project idea, or just want to connect,
            my inbox is always open.
          </p>

          <div
            onClick={handleCopy}
            className="inline-flex items-center gap-4 bg-white/5 border border-white/20 hover:border-[var(--accent-red)] rounded-full py-4 px-8 cursor-pointer transition-all duration-300 group mb-16"
            data-magnetic
          >
            <div className="p-2 bg-[var(--accent-red)]/20 rounded-full text-[var(--accent-red)] group-hover:bg-[var(--accent-red)] group-hover:text-white transition-colors">
              {copied ? <Check size={20} /> : <Copy size={20} />}
            </div>
            <span className="text-lg md:text-xl font-[var(--font-jetbrains-mono)] font-bold tracking-tight text-white group-hover:text-[var(--accent-red)] transition-colors break-all">
              {email}
            </span>
          </div>

          <div className="flex justify-center flex-wrap gap-6">
            {[
              { icon: FaGithub, href: 'https://github.com/kiran1627', label: 'GitHub' },
              { icon: FaLinkedin, href: 'https://linkedin.com/in/kiranbabu18', label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${email}`, label: 'Email' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-white/10 rounded-full text-gray-400 hover:text-[var(--accent-red)] hover:border-[var(--accent-red)]/50 transition-colors bg-black/50"
                aria-label={social.label}
                data-magnetic
              >
                <social.icon size={24} />
              </a>
            ))}
            <a
              href="https://wa.me/919381342247"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-white/10 rounded-full text-gray-400 hover:text-[var(--accent-red)] hover:border-[var(--accent-red)]/50 transition-colors bg-black/50 font-[var(--font-jetbrains-mono)] text-sm font-bold flex items-center gap-2"
              aria-label="WhatsApp"
            >
              WhatsApp
            </a>
            <a
              href="/Kiran_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-white/10 rounded-full text-gray-400 hover:text-[var(--accent-red)] hover:border-[var(--accent-red)]/50 transition-colors bg-black/50 font-[var(--font-jetbrains-mono)] text-sm font-bold flex items-center gap-2"
              aria-label="Resume"
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full py-6 text-center border-t border-white/5 bg-black/80 backdrop-blur-md">
        <p className="text-xs text-gray-500 font-[var(--font-jetbrains-mono)]">
          &copy; {new Date().getFullYear()} KIRAN BABU BANDELA. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </section>
  );
}
