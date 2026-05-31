import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { ScrambleText } from '../ui/ScrambleText';

export const FloatingNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
      setIsOpen(false);
    }
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed top-6 right-6 z-50 flex flex-col items-end"
          >
            {/* Hamburger Button */}
            <motion.button
              onClick={toggleMenu}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-[#121316]/60 backdrop-blur-md border border-[#D7E2EA]/20 flex flex-col items-center justify-center shadow-lg hover:bg-[#121316]/80 transition-colors relative"
            >
              <div className="flex flex-col items-center justify-center gap-1.5 absolute inset-0">
                <motion.div 
                  animate={
                    isOpen 
                      ? { rotate: 45, y: 7.5, scaleX: 1.2, backgroundColor: '#fff' } 
                      : isHovered 
                        ? { rotate: 0, y: -2, scaleX: 1.1, backgroundColor: '#fff' } 
                        : { rotate: 0, y: 0, scaleX: 1, backgroundColor: '#D7E2EA' }
                  } 
                  transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.8 }}
                  className="h-[2px] w-[20px] origin-center" 
                />
                <motion.div 
                  animate={
                    isOpen 
                      ? { opacity: 0, x: 10, scaleX: 0.5 } 
                      : isHovered 
                        ? { opacity: 1, x: 3, scaleX: 0.7, backgroundColor: '#fff' } 
                        : { opacity: 1, x: 0, scaleX: 1, backgroundColor: '#D7E2EA' }
                  }
                  transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.8 }}
                  className="h-[2px] w-[20px] origin-center" 
                />
                <motion.div 
                  animate={
                    isOpen 
                      ? { rotate: -45, y: -7.5, scaleX: 1.2, backgroundColor: '#fff' } 
                      : isHovered 
                        ? { rotate: 0, y: 2, scaleX: 1.1, backgroundColor: '#fff' } 
                        : { rotate: 0, y: 0, scaleX: 1, backgroundColor: '#D7E2EA' }
                  }
                  transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.8 }}
                  className="h-[2px] w-[20px] origin-center" 
                />
              </div>
            </motion.button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.nav
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="mt-4 flex flex-col gap-4 bg-[#121316]/60 backdrop-blur-lg border border-[#D7E2EA]/20 p-6 rounded-2xl shadow-2xl text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base min-w-[150px] items-end"
                >
                  <a href="#about" onClick={toggleMenu} className="hover:opacity-70 transition-opacity duration-200"><ScrambleText text="About" /></a>
                  <a href="#skills" onClick={toggleMenu} className="hover:opacity-70 transition-opacity duration-200"><ScrambleText text="Skill set" /></a>
                  <a href="#projects" onClick={toggleMenu} className="hover:opacity-70 transition-opacity duration-200"><ScrambleText text="Projects" /></a>
                  <a href="#certificates" onClick={toggleMenu} className="hover:opacity-70 transition-opacity duration-200"><ScrambleText text="Certificates" /></a>
                  <a href="#contact" onClick={toggleMenu} className="hover:opacity-70 transition-opacity duration-200"><ScrambleText text="Contact" /></a>
                </motion.nav>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
