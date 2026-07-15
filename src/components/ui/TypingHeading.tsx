import React from 'react';
import { TextPressure } from './TextPressure';

interface TypingHeadingProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export const TypingHeading: React.FC<TypingHeadingProps> = ({ text, className, style }) => {
  return (
    <div className="relative w-full h-[18vw] sm:h-[14vw] md:h-[11vw] max-h-[160px] flex items-center justify-center overflow-visible" style={style}>
      <TextPressure
        text={text}
        flex={false}
        alpha={false}
        stroke={false}
        width
        weight
        italic
        textColor="transparent"
        className={className}
      />
    </div>
  );
};
