import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoverDevice] = useState(() => typeof window !== 'undefined' ? window.matchMedia('(hover: hover)').matches : true);

  // Immediate mouse position for instantaneous center dot tracking (0ms lag)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Snappy responsive spring for the sleek trailing glass ring
  const ringSpringConfig = { damping: 28, stiffness: 600, mass: 0.2 };
  const cursorXSpring = useSpring(cursorX, ringSpringConfig);
  const cursorYSpring = useSpring(cursorY, ringSpringConfig);

  // Smooth, lightweight spring for the ambient background glow
  const glowSpringConfig = { damping: 30, stiffness: 220, mass: 0.5 };
  const glowXSpring = useSpring(cursorX, glowSpringConfig);
  const glowYSpring = useSpring(cursorY, glowSpringConfig);

  useEffect(() => {
    // Check if device supports hover (PC)
    if (!isHoverDevice) return; // Don't attach listeners on touch devices

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isHoverDevice]);

  if (!isHoverDevice || !isVisible) return null;

  return (
    <>
      {/* Soft glowing background spotlight that smoothly follows the cursor */}
      <motion.div
        className="fixed top-0 left-0 w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] rounded-full pointer-events-none z-0"
        style={{
          x: glowXSpring,
          y: glowYSpring,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(215,226,234,0.06) 0%, transparent 70%)',
          willChange: 'transform',
        }}
      />

      {/* Primary Glassmorphic Ring - lightweight GPU-composited glass without expensive backdrop-filter stall */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] flex items-center justify-center border border-[#D7E2EA]/40 bg-[#D7E2EA]/15 shadow-[0_0_12px_rgba(215,226,234,0.25)]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          willChange: 'transform',
        }}
      />

      {/* Center Dot - Instantaneous 1:1 hardware tracking with zero spring delay */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          willChange: 'transform',
        }}
      />
    </>
  );
};
