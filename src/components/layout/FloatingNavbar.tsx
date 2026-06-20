import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { ScrambleText } from '../ui/ScrambleText';

export const FloatingNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollY } = useScroll();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

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
            ref={menuRef}
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
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{
                    hidden: { opacity: 0, y: -20, scale: 0.8, filter: "blur(10px)" },
                    visible: { 
                      opacity: 1, y: 0, scale: 1, filter: "blur(0px)", 
                      transition: { type: "spring", damping: 25, stiffness: 300, staggerChildren: 0.08, delayChildren: 0.1 } 
                    },
                    exit: { 
                      opacity: 0, y: -20, scale: 0.8, filter: "blur(10px)", 
                      transition: { duration: 0.25, ease: "easeInOut" } 
                    }
                  }}
                  className="mt-4 flex flex-col gap-4 bg-[#121316]/60 backdrop-blur-lg border border-[#D7E2EA]/20 p-6 rounded-2xl shadow-2xl text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base min-w-[150px] items-end overflow-hidden origin-top-right"
                >
                  {[
                    { href: '#about', text: 'About' },
                    { href: '#skills', text: 'Skill set' },
                    { href: '#projects', text: 'Projects' },
                    { href: '#certificates', text: 'Certificates' },
                    { href: '#contact', text: 'Contact' },
                  ].map((item) => (
                    <div key={item.href} className="overflow-hidden">
                      <motion.a
                        href={item.href}
                        onClick={toggleMenu}
                        variants={{
                          hidden: { opacity: 0, y: 40, rotate: 10 },
                          visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                          exit: { opacity: 0, y: 20, rotate: -5, transition: { duration: 0.2 } }
                        }}
                        className="hover:opacity-70 transition-opacity duration-200 block origin-bottom-left"
                      >
                        <ScrambleText text={item.text} />
                      </motion.a>
                    </div>
                  ))}
                </motion.nav>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
