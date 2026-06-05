import React from 'react';
import { motion, useAnimation } from 'framer-motion';

export const SquishBounce = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  const controls = useAnimation();

  const handlePoke = () => {
    controls.start({
      scaleX: [1, 1.25, 0.85, 1.05, 1],
      scaleY: [1, 0.75, 1.15, 0.95, 1],
      y: [0, 15, -15, 5, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1]
      }
    });
  };

  return (
    <motion.div
      className={className}
      animate={controls}
      onMouseEnter={handlePoke}
      style={{ display: 'inline-block', width: '100%', height: '100%' }}
    >
      {children}
    </motion.div>
  );
};
