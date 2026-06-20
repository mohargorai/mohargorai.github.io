import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CHARS = '!<>-_\\/[]{}—=+*^?#________';
const BRAND_TEXT = 'MOHAR GORAI';

export const Preloader = () => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        BRAND_TEXT
          .split('')
          .map((_, index) => {
            if (index < iteration) {
              return BRAND_TEXT[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      if (iteration >= BRAND_TEXT.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3; // Controls the speed of the unscrambling
    }, 40); // 40ms interval for smooth scrambling

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0C0C0C]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative">
        <h1 className="text-[#D7E2EA] font-black tracking-[0.2em] md:tracking-[0.4em] text-2xl sm:text-4xl md:text-5xl uppercase relative z-10">
          {displayText}
        </h1>
        {/* Subtle glowing halo behind the text */}
        <div className="absolute inset-0 bg-[#D7E2EA] blur-[40px] opacity-10 z-0"></div>
      </div>
    </motion.div>
  );
};
