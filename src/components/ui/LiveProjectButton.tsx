import React, { useState, useRef } from 'react';

const CHARS = '!<>-_\\/[]{}—=+*^?#________';

export const LiveProjectButton = ({ href, text = "Live Project" }: { href: string; text?: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    let iteration = 0;
    clearInterval(intervalRef.current as number | undefined);

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((_, index) => {
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current as number | undefined);
      }

      iteration += 1 / 3;
    }, 30);
  };

  const handleMouseLeave = () => {
    clearInterval(intervalRef.current as number | undefined);
    setDisplayText(text);
  };

  return (
    <a href={href} 
       target="_blank" 
       rel="noopener noreferrer"
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}
       className="inline-block text-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-all duration-300"
    >
      <span className="relative inline-block whitespace-nowrap">
        <span className="invisible">{text}</span>
        <span className="absolute top-0 left-0 w-full">{displayText}</span>
      </span>
    </a>
  );
};
