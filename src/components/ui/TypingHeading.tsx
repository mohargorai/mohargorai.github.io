import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingHeadingProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export const TypingHeading: React.FC<TypingHeadingProps> = ({ text, className, style }) => {
  const [appLoaded, setAppLoaded] = useState(() => (typeof window !== 'undefined' && (window as unknown as { isAppLoaded?: boolean }).isAppLoaded) || false);

  useEffect(() => {
    if (appLoaded) return;
    const handleLoad = () => setAppLoaded(true);
    window.addEventListener('appLoaded', handleLoad);
    return () => window.removeEventListener('appLoaded', handleLoad);
  }, [appLoaded]);

  return (
    <motion.h2
      className={className}
      style={style}
      initial="hidden"
      whileInView={appLoaded ? "visible" : "hidden"}
      viewport={{ once: false, margin: "-10%" }}
    >
      {Array.from(text).map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { visibility: "hidden" },
            visible: { 
              visibility: "visible", 
              transition: { delay: index * 0.08, duration: 0 } 
            },
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.h2>
  );
};
