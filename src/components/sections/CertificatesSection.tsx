import React, { useState, useEffect, Suspense } from 'react';
import { motion, useSpring } from 'framer-motion';
import { FadeIn, TypingHeading, SquishBounce } from '../ui';
import { pdfjs } from 'react-pdf';

// Lazy load heavy PDF components
const Document = React.lazy(() => import('react-pdf').then(m => ({ default: m.Document })));
const Page = React.lazy(() => import('react-pdf').then(m => ({ default: m.Page })));
import { certificates } from '../../data/certificates';

// Configure the worker for PDF.js using a CDN to avoid build issues
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export const CertificatesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHoverDevice, setIsHoverDevice] = useState(true);
  
  // Spring physics for the cursor follower
  const cursorX = useSpring(0, { stiffness: 150, damping: 15, mass: 0.5 });
  const cursorY = useSpring(0, { stiffness: 150, damping: 15, mass: 0.5 });
  
  // Smoothly fade in/out the follower
  const opacity = useSpring(0, { stiffness: 300, damping: 30 });
  const scale = useSpring(0.8, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const hoverCheck = window.matchMedia('(hover: hover)').matches;
    setIsHoverDevice(hoverCheck);

    if (!hoverCheck) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleScroll = () => {
      // Hide the popup immediately when the user scrolls to prevent it from sticking
      setHoveredIndex(null);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [cursorX, cursorY]);

  useEffect(() => {
    if (!isHoverDevice) return;
    
    if (hoveredIndex !== null) {
      opacity.set(1);
      scale.set(1);
    } else {
      opacity.set(0);
      scale.set(0.8);
    }
  }, [hoveredIndex, opacity, scale, isHoverDevice]);

  return (
    <section id="certificates" className="bg-[#121316] flex flex-col pt-24 pb-32 sm:pt-32 sm:pb-40 relative z-30 overflow-hidden border-t border-white/5 rounded-t-[40px] sm:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 cursor-default">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] bg-purple-500/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[30vw] h-[30vw] bg-blue-500/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="px-5 sm:px-8 md:px-10 mb-16 sm:mb-20 md:mb-24 relative z-10 w-full flex flex-col items-center justify-center max-w-[1400px] mx-auto text-center">
        <FadeIn y={40} className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <div className="relative w-[100px] sm:w-[120px] md:w-[160px] lg:w-[180px] aspect-square z-0 shrink-0">
            <SquishBounce>
              <motion.div animate={{ y: [0, -15, 0], rotate: [0, 8, -4, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
                <img 
                  src={`${import.meta.env.BASE_URL}img/glass_trophy_cutout.png`} 
                  alt="Neon Glass Trophy" 
                  className="w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(168,85,247,0.4)]" 
                />
              </motion.div>
            </SquishBounce>
          </div>
          <TypingHeading
            text="CERTIFICATES"
            className="hero-heading font-black uppercase leading-none tracking-normal text-center sm:text-left mb-0" 
            style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}
          />
        </FadeIn>
      </div>
      
      {/* Interactive Typography List */}
      <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 relative z-20 flex flex-col pb-20">
        {certificates.map((cert, index) => (
          <FadeIn 
            key={index} 
            y={20} 
            delay={index * 0.1}
            className="w-full"
          >
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group block relative border-b border-white/10 py-5 sm:py-6 transition-all duration-500 hover:border-[#D7E2EA]/40 cursor-pointer"
              onMouseEnter={() => isHoverDevice && setHoveredIndex(index)}
              onMouseLeave={() => isHoverDevice && setHoveredIndex(null)}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 sm:gap-4">
                
                {/* Title */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#D7E2EA]/40 group-hover:text-white transition-colors duration-500 transform md:group-hover:translate-x-4 origin-left">
                  {cert.title}
                </h3>
                
                {/* Meta */}
                <div className="flex flex-col md:items-end transform md:group-hover:-translate-x-4 transition-transform duration-500 shrink-0 mt-1 md:mt-0">
                  <span className="text-white/40 group-hover:text-[#D7E2EA] font-bold tracking-[0.1em] uppercase text-xs sm:text-sm transition-colors duration-500">
                    {cert.issuer}
                  </span>
                  <div className="flex items-center gap-2 mt-1 md:mt-2">
                    <span className="text-white/20 group-hover:text-white/60 font-mono text-[10px] sm:text-xs transition-colors duration-500">
                      {cert.date}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#D7E2EA] transition-colors duration-500"></div>
                  </div>
                </div>

              </div>
            </a>
          </FadeIn>
        ))}
      </div>

      {/* The Floating Image Follower */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 w-[280px] sm:w-[360px] aspect-[4/3] rounded-[24px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/10 bg-[#0C0C0C] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          opacity,
          scale,
        }}
      >
        {/* Pre-render all images and PDFs and toggle opacity for instant swapping */}
        {certificates.map((cert, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 w-full h-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] origin-center ${hoveredIndex === index ? 'opacity-100 scale-100 rotate-0 z-10' : 'opacity-0 scale-[0.85] -rotate-3 z-0'}`}
          >
            {cert.image ? (
              <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
            ) : cert.pdf ? (
               <div className="w-full h-full bg-white relative overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 flex items-center justify-center w-full h-full scale-[1.05]">
                   <Suspense fallback={<div className="w-full h-full bg-white absolute inset-0" />}>
                     <Document 
                       file={cert.pdf} 
                       loading={<div className="w-full h-full bg-white absolute inset-0" />}
                       className="flex items-center justify-center w-full h-full"
                     >
                       <Page 
                         pageNumber={1} 
                         width={400} 
                         renderTextLayer={false} 
                         renderAnnotationLayer={false}
                       />
                     </Document>
                   </Suspense>
                 </div>
               </div>
            ) : null}
            
            {/* Soft inner shadow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none rounded-[24px]"></div>
          </div>
        ))}
      </motion.div>
      
    </section>
  );
};
