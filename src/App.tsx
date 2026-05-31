import React from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { CertificatesSection } from './components/sections/CertificatesSection';
import { ContactSection } from './components/sections/ContactSection';
import { CustomCursor } from './components/ui/CustomCursor';
import { FloatingNavbar } from './components/layout/FloatingNavbar';

function App() {
  return (
    <main className="w-full bg-[#0C0C0C] font-sans overflow-x-clip text-[#D7E2EA]">
      <CustomCursor />
      <FloatingNavbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
      <footer className="text-center py-8 text-[#D7E2EA]/50 text-sm bg-[#121316] relative z-30">
         © {new Date().getFullYear()} Mohar Gorai. All rights reserved.
      </footer>
    </main>
  );
}

export default App;
