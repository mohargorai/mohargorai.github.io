import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';
import { DownloadCVButton } from '../ui/DownloadCVButton';
import { ContactButton } from '../ui/ContactButton';
import { Magnet } from '../ui/Magnet';
import { ScrambleText } from '../ui/ScrambleText';

export const HeroSection = () => {
  return (
    <section className="h-screen w-full flex flex-col overflow-x-clip relative">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full">
        <nav className="flex justify-center sm:justify-between items-center gap-4 sm:gap-0 flex-wrap px-4 sm:px-6 md:px-10 pt-6 md:pt-8 w-full text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.4rem]">
          <a href="#about" className="hover:opacity-70 transition-opacity duration-200"><ScrambleText text="About" /></a>
          <a href="#skills" className="hover:opacity-70 transition-opacity duration-200"><ScrambleText text="Skill set" /></a>
          <a href="#projects" className="hover:opacity-70 transition-opacity duration-200"><ScrambleText text="Projects" /></a>
          <a href="#certificates" className="hover:opacity-70 transition-opacity duration-200"><ScrambleText text="Certificates" /></a>
          <a href="#contact" className="hover:opacity-70 transition-opacity duration-200"><ScrambleText text="Contact" /></a>
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-20 pointer-events-none">

        <div className="overflow-hidden w-full flex justify-center px-2 sm:px-0">
          <motion.h1 
            initial={{ opacity: 1 }}
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[10.5vw] sm:text-[11vw] md:text-[12vw] lg:text-[12.5vw] mt-6 sm:mt-4 md:-mt-5"
          >
            {Array.from("Hi, I'm Mohar").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0, delay: 0.3 + index * 0.1 }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 sm:gap-0 pb-7 sm:pb-8 md:pb-10 px-4 sm:px-6 md:px-10 relative z-20">
        <div className="flex flex-col items-center sm:items-start gap-4 sm:gap-6 w-full sm:w-auto text-center sm:text-left">
          <FadeIn delay={0.25} y={20}>
            <div className="inline-flex items-center gap-2.5 px-3 py-1 sm:px-5 sm:py-2 rounded-full border border-[#D7E2EA]/20 bg-[#D7E2EA]/5 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-[#10B981] shadow-[0_0_8px_#10B981]"></span>
              </span>
              <span className="text-[#D7E2EA] text-[9px] sm:text-xs uppercase tracking-widest font-bold drop-shadow-md">Open to Opportunities</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.35} y={20}>
            <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[200px] sm:max-w-[220px] md:max-w-[260px] mx-auto sm:mx-0" style={{ fontSize: 'clamp(0.7rem, 1.4vw, 1.5rem)' }}>
              Software developer driven by continuous learning and building impactful projects
            </p>
          </FadeIn>
        </div>

        <div className="flex flex-col items-center sm:items-end gap-4 sm:gap-6 mt-6 sm:mt-0">
          <FadeIn delay={0.4} y={20}>
            <ContactButton />
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <DownloadCVButton />
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 z-10 w-[160px] sm:w-[220px] md:w-[320px] lg:w-[400px] top-1/2 -translate-y-1/2 pointer-events-none sm:pointer-events-auto">
        <Magnet padding={150} strength={3}>
          <div className="w-full aspect-square rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 border-[#D7E2EA]/20">
            <img 
              src={`${import.meta.env.BASE_URL}img/profile.jpg`} 
              alt="Mohar Gorai" 
              className="w-full h-full object-cover"
              style={{ 
                WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', 
                maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' 
              }}
            />
          </div>
        </Magnet>
      </FadeIn>
    </section>
  );
};
