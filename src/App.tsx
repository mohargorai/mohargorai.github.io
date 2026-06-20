import React, { useState, useEffect } from 'react';
import { HeroSection, AboutSection, ServicesSection, ProjectsSection, CertificatesSection, ContactSection } from './components/sections';
import { CustomCursor, Preloader } from './components/ui';
import { FloatingNavbar } from './components/layout';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure the preloader stays on screen long enough for the animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!isLoading && (
        <main className="w-full bg-[#0C0C0C] font-sans overflow-x-clip text-[#D7E2EA]">
          <CustomCursor />
          <FloatingNavbar />
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ProjectsSection />
          <CertificatesSection />
          <ContactSection />
          <footer className="text-center py-8 text-[#D7E2EA]/50 text-sm bg-[#121316] relative z-30 font-medium tracking-wide">
             Designed & Built by Mohar Gorai
          </footer>
        </main>
      )}
    </>
  );
}

export default App;
