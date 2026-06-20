import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoverDevice, setIsHoverDevice] = useState(() => typeof window !== 'undefined' ? window.matchMedia('(hover: hover)').matches : true);

  // Mouse position values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Snappy spring for the primary glass cursor
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Lazy, slow spring for the massive background glow
  const glowSpringConfig = { damping: 40, stiffness: 100, mass: 1.5 };
  const glowXSpring = useSpring(cursorX, glowSpringConfig);
  const glowYSpring = useSpring(cursorY, glowSpringConfig);

  useEffect(() => {
    // Check if device supports hover (PC)
    if (!isHoverDevice) return; // Don't attach listeners on touch devices

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isHoverDevice || !isVisible) return null;

  return (
    <>
      {/* Massive soft glowing background spotlight that lazily follows the cursor */}
      <motion.div
        className="fixed top-0 left-0 w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] rounded-full pointer-events-none z-0"
        style={{
          x: glowXSpring,
          y: glowYSpring,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(215,226,234,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Primary Glassmorphic Ring */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] flex items-center justify-center backdrop-blur-md border border-[#D7E2EA]/30 bg-[#D7E2EA]/10 shadow-[0_0_15px_rgba(215,226,234,0.2)]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Center Dot (Inverts color dynamically) */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
};
