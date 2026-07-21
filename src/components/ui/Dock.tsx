import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';

interface DockProps {
  children: React.ReactNode;
}

export const Dock = ({ children }: DockProps) => {
  const mouseX = useMotionValue(Infinity);
  
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="mx-auto flex w-max justify-center h-[80px] items-end gap-4 rounded-3xl bg-[#D7E2EA]/5 px-6 pb-3 backdrop-blur-md border border-[#D7E2EA]/10 shadow-[0_0_30px_rgba(215,226,234,0.05)]"
    >
      {React.Children.map(children, (child) => (
        <DockIcon mouseX={mouseX}>{child}</DockIcon>
      ))}
    </motion.div>
  );
};

interface DockIconProps {
  mouseX: MotionValue;
  children: React.ReactNode;
}

const DockIcon = ({ mouseX, children }: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [56, 96, 56]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div 
      ref={ref} 
      style={{ width, height: width }} 
      className="cursor-target relative flex items-center justify-center rounded-2xl bg-[#D7E2EA]/10 hover:bg-[#D7E2EA]/20 transition-colors border border-[#D7E2EA]/20 shadow-lg group"
    >
      <div className="w-full h-full flex items-center justify-center text-[#D7E2EA]/80 group-hover:text-white transition-colors duration-300 [&>a]:absolute [&>a]:inset-0 [&>a]:flex [&>a]:items-center [&>a]:justify-center [&>a>svg]:w-[60%] [&>a>svg]:h-[60%]">
         {children}
      </div>
    </motion.div>
  );
};
