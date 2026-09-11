import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue, useMotionTemplate } from 'framer-motion';

const Word = ({ word, progress, range }: { word: string, progress: MotionValue<number>, range: [number, number] }) => {
  // Map the word's specific range to an opacity from 0.15 to 1
  const opacity = useTransform(progress, range, [0.15, 1]);
  // Map the same range to a blur from 6px down to 0px
  const blurValue = useTransform(progress, range, [6, 0]);
  const filter = useMotionTemplate`blur(${blurValue}px)`;
  
  // Add scale and y-translation to make the word "pop" into place
  const scale = useTransform(progress, range, [0.85, 1]);
  const y = useTransform(progress, range, [6, 0]);
  
  return (
    <motion.span className="inline-block origin-bottom" style={{ opacity, filter, scale, y }}>
      {word}
    </motion.span>
  );
};

export const AnimatedText = ({ text, className = '' }: { text: string, className?: string }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.4'] // Starts when top hits 80% of screen, ends when bottom hits 40%
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={`${className} flex flex-wrap justify-center gap-x-[0.3em] gap-y-[0.1em]`}>
      {words.map((word, i) => {
        // Calculate the range for this specific word
        const start = i / words.length;
        const end = start + (1 / words.length);
        return (
          <Word key={i} word={word} progress={scrollYProgress} range={[start, end]} />
        );
      })}
    </p>
  );
};
