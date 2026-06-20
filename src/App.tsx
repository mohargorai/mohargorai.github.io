import React from 'react';
import { HeroSection, AboutSection, ServicesSection, ProjectsSection, CertificatesSection, ContactSection } from './components/sections';
import { CustomCursor, TargetCursor } from './components/ui';
import { FloatingNavbar } from './components/layout';

function App() {
  return (
    <main className="w-full bg-[#0C0C0C] font-sans overflow-x-clip text-[#D7E2EA]">
      <CustomCursor />
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={false}
        parallaxOn
        hoverDuration={0.2}
      />
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
  );
}

export default App;
