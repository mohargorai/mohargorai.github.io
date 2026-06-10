import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const Word = ({ word, progress, range }: { word: string, progress: MotionValue<number>, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block mr-[0.25em]">
      <span className="invisible">{word}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {word}
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
  const totalWords = words.length;

  return (
    <p ref={containerRef} className={`relative flex flex-wrap ${className}`}>
      {words.map((word, index) => {
        const start = index / totalWords;
        const end = start + (1 / totalWords);
        return (
          <Word key={index} word={word} progress={scrollYProgress} range={[start, end]} />
        );
      })}
    </p>
  );
};
