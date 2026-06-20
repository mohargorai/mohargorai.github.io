import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const Character = ({ char, progress, range }: { char: string, progress: MotionValue<number>, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span className="invisible">{char === " " ? "\u00A0" : char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char === " " ? "\u00A0" : char}
      </motion.span>
    </span>
  );
};

export const AnimatedText = ({ text, className = '' }: { text: string, className?: string }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const words = text.split(" ");
  let currentProgress = 0;
  const totalChars = text.length;

  return (
    <p ref={containerRef} className={`relative ${className}`}>
      {words.map((word, wordIndex) => {
        const chars = word.split("");
        const wordNode = (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {chars.map((char, charIndex) => {
              const start = currentProgress / totalChars;
              const end = start + (1 / totalChars);
              currentProgress++;
              return (
                <Character key={charIndex} char={char} progress={scrollYProgress} range={[start, end]} />
              );
            })}
          </span>
        );
        currentProgress++; // Increment for the space
        return (
          <React.Fragment key={wordIndex}>
            {wordNode}
            {wordIndex < words.length - 1 && " "}
          </React.Fragment>
        );
      })}
    </p>
  );
};
