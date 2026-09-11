import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, SquishBounce, TypingHeading } from '../ui';
import { services } from '../../data/services';

const allSkills = services.flatMap(svc => svc.skills);
const row1 = allSkills.slice(0, Math.ceil(allSkills.length / 3));
const row2 = allSkills.slice(Math.ceil(allSkills.length / 3), Math.ceil(allSkills.length * 2 / 3));
const row3 = allSkills.slice(Math.ceil(allSkills.length * 2 / 3));

const MarqueeRow = ({ items, direction = "left", speed = "40s" }: { items: any[], direction?: "left" | "right", speed?: string }) => {
  // We duplicate items to fill ultra-wide screens
  const baseItems = [...items, ...items, ...items, ...items];
  // We double it AGAIN to create identical left and right halves for the 50% translation loop
  const fullItems = [...baseItems, ...baseItems];
  
  return (
    <div className="flex w-full overflow-hidden has-[a:hover]:[&>div]:[animation-play-state:paused]">
      <div 
        className={`flex w-max shrink-0 items-center gap-4 sm:gap-6 pr-4 sm:pr-6 ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
        style={{ animationDuration: speed }}
      >
        {fullItems.map((skill, idx) => (
          <a
            key={`${skill.name}-${idx}`}
            href={skill.url}
            target="_blank"
            rel="noreferrer"
            data-cursor-padding="10"
            className="cursor-target flex-shrink-0 relative flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#1a1c20] hover:bg-white/10 border border-white/10 rounded-full text-base sm:text-xl font-bold text-white/70 hover:text-white transition-all duration-300 shadow-xl"
          >
            {skill.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export const ServicesSection = () => {
  return (
    <section id="skills" className="bg-[#121316] border-t border-white/5 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-24 pb-32 sm:pt-32 sm:pb-40 relative z-10 overflow-hidden flex flex-col justify-center min-h-[80vh]">
      
      {/* Background Floating Categories */}
      <div className="absolute inset-0 flex flex-col justify-between py-20 pointer-events-none opacity-[0.03] z-0 overflow-hidden">
        {services.map((svc, i) => (
          <motion.div 
            key={svc.num} 
            className="whitespace-nowrap font-black uppercase text-white select-none"
            style={{ fontSize: 'clamp(5rem, 15vw, 20rem)', lineHeight: 0.8 }}
            initial={{ x: i % 2 === 0 ? "10%" : "-10%" }}
            animate={{ x: i % 2 === 0 ? "-10%" : "10%" }}
            transition={{ duration: 25 + i * 5, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
          >
            {svc.title} &nbsp;&nbsp; {svc.title} &nbsp;&nbsp; {svc.title}
          </motion.div>
        ))}
      </div>

      {/* Decorative 3D Images */}
      <FadeIn delay={0.1} duration={0.9} x={-80} y={0} className="absolute top-[15%] left-[1%] sm:left-[3%] md:left-[5%] w-[110px] sm:w-[150px] md:w-[190px] z-10 opacity-80 pointer-events-none">
        <SquishBounce>
          <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, -3, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
            <img src={`${import.meta.env.BASE_URL}img/glass_laptop.png`} alt="Glass Laptop" className="w-full h-auto object-contain drop-shadow-[0_30px_40px_rgba(215,226,234,0.15)]" />
          </motion.div>
        </SquishBounce>
      </FadeIn>

      <div className="relative z-20 w-full flex flex-col items-center justify-center max-w-[1400px] mx-auto text-center mb-10 sm:mb-16">
        <FadeIn y={40} className="w-full">
          <TypingHeading
            text="SKILL SET"
            className="hero-heading font-black uppercase leading-none tracking-normal" 
            style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}
          />
        </FadeIn>
      </div>

      {/* Marquee Rows */}
      <div className="relative z-30 w-full flex flex-col gap-6 sm:gap-8 overflow-hidden transform -rotate-2 scale-105 py-10">
         <MarqueeRow items={row1} direction="left" speed="50s" />
         <MarqueeRow items={row2} direction="right" speed="45s" />
         <MarqueeRow items={row3} direction="left" speed="55s" />
      </div>

    </section>
  );
};
