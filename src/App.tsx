import React, { useState } from 'react';
import { HeroSection, AboutSection, ServicesSection, ProjectsSection, CertificatesSection, ContactSection } from './components/sections';
import { CustomCursor, Preloader } from './components/ui';
import { FloatingNavbar } from './components/layout';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Preloader onComplete={() => setLoading(false)} />
      <main className={`w-full bg-[#0C0C0C] font-sans overflow-x-clip text-[#D7E2EA] ${loading ? 'h-screen overflow-y-hidden' : ''}`}>
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
    </>
  );
}

export default App;
