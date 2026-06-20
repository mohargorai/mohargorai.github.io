import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Fast-counting logic
    const interval = setInterval(() => {
      setProgress((prev) => {
        // Random increment between 2 and 15
        const next = prev + Math.floor(Math.random() * 14) + 2;
        if (next >= 100) {
          clearInterval(interval);
          // Hold at 100% briefly, then trigger exit
          setTimeout(() => {
            setIsVisible(false);
            // Notify parent to unlock scrolling after animation finishes
            setTimeout(onComplete, 800); 
          }, 300);
          return 100;
        }
        return next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0C0C0C] text-[#D7E2EA]"
        >
          {/* Progress Counter */}
          <div className="relative overflow-hidden">
            <motion.span 
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="hero-heading font-black tracking-tighter block leading-none" 
              style={{ fontSize: 'clamp(5rem, 15vw, 15rem)' }}
            >
              {progress}%
            </motion.span>
          </div>
          
          {/* Small loading text */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 uppercase tracking-widest text-xs font-bold opacity-50">
            Initializing Experience
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
