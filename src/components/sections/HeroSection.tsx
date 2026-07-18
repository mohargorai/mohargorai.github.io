import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, ContactButton, DownloadCVButton, Magnet, TiltedCard, ScrambleText, Antigravity } from '../ui';

const welcomeWords = [
  "Welcome",
  "স্বাগতম",
  "स्वागत",
  "ようこそ",
  "நல்வரவு",
  "స్వాగతం",
  "ಸ್ವಾಗತ",
  "സ്വാഗതം",
  "સ્વાગતમ",
  "ਜੀ ਆਇਆਂ ਨੂੰ",
  "خوش آمدید",
  "欢迎",
  "환영합니다",
  "Willkommen",
  "Bienvenido",
  "Bienvenue",
  "Benvenuto",
  "Bem-vindo",
  "Добро пожаловать",
  "أهلاً بك"
];

export const HeroSection = () => {
  const [appLoaded, setAppLoaded] = useState(() => (typeof window !== 'undefined' && (window as unknown as { isAppLoaded?: boolean }).isAppLoaded) || false);
  const [welcomeIndex, setWelcomeIndex] = useState(0);

  useEffect(() => {
    if (appLoaded) return;
    const handleLoad = () => setAppLoaded(true);
    window.addEventListener('appLoaded', handleLoad);
    return () => window.removeEventListener('appLoaded', handleLoad);
  }, [appLoaded]);

  useEffect(() => {
    if (!appLoaded) return;
    const interval = setInterval(() => {
      setWelcomeIndex((prev) => (prev + 1) % welcomeWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [appLoaded]);

  return (
    <section className="h-screen w-full flex flex-col overflow-x-clip relative">
      <Antigravity
        count={500}
        magnetRadius={150}
        ringRadius={80}
        waveSpeed={0.4}
        waveAmplitude={15}
        particleSize={1.5}
        lerpSpeed={0.05}
        color="#D7E2EA"
        autoAnimate
        particleVariance={1}
        rotationSpeed={0.5}
        pulseSpeed={3}
        particleShape="sphere"
        fieldStrength={10}
      />
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
      <div className="flex-1 flex flex-col items-center justify-center relative z-20 pointer-events-none w-full">
        
        <div className="flex flex-col items-start justify-center w-fit">
          <div className="overflow-hidden w-full flex justify-start px-2 sm:px-0">
            <motion.h1 
              initial={{ opacity: 1 }}
              className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-left text-[10.5vw] sm:text-[11vw] md:text-[12vw] lg:text-[12.5vw] mt-6 sm:mt-4 md:-mt-5"
            >
              {Array.from("Hi, I'm Mohar").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ visibility: "hidden" }}
                  animate={appLoaded ? { visibility: "visible" } : { visibility: "hidden" }}
                  transition={{ duration: 0, delay: appLoaded ? 0.3 + index * 0.1 : 0 }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          <div className="h-[40px] sm:h-[50px] md:h-[70px] flex justify-start items-center w-full mt-2 sm:mt-0 relative px-2 sm:px-0">
            <AnimatePresence mode="wait">
              <motion.span
                key={welcomeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="hero-heading font-black tracking-tight text-[6vw] sm:text-[5vw] md:text-[4vw] absolute left-2 sm:left-0"
              >
                {welcomeWords[welcomeIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
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
          <div className="w-full aspect-square rounded-full border-2 border-[#D7E2EA]/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <TiltedCard
              imageSrc={`${import.meta.env.BASE_URL}img/profile.jpg`}
              altText="Mohar Gorai"
              captionText="Mohar Gorai"
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={false}
            />
          </div>
        </Magnet>
      </FadeIn>
    </section>
  );
};
