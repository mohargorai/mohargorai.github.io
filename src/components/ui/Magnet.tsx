import React, { useRef, useState, useEffect } from 'react';

export const Magnet = ({ 
  children, 
  padding = 150, 
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = ''
}: {
  children: React.ReactNode,
  padding?: number,
  strength?: number,
  activeTransition?: string,
  inactiveTransition?: string,
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      if (
        clientX >= left - padding &&
        clientX <= left + width + padding &&
        clientY >= top - padding &&
        clientY <= top + height + padding
      ) {
        setIsActive(true);
        setPosition({
          x: (clientX - centerX) / strength,
          y: (clientY - centerY) / strength
        });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [padding, strength]);

  return (
    <div 
      ref={ref}
      className={className}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
};
