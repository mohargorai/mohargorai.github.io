import React, { useState, useRef } from 'react';

const CHARS = '!<>-_\\/[]{}—=+*^?#________';

export const ScrambleText = ({ text }: { text: string }) => {
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
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block cursor-pointer whitespace-nowrap"
    >
      <span className="invisible">{text}</span>
      <span className="absolute top-0 left-0 w-full">
        {displayText}
      </span>
    </span>
  );
};
