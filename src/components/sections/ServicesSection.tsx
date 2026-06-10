import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, SquishBounce, TypingHeading } from '../ui';
import { services } from '../../data/services';

export const ServicesSection = () => {
  return (
    <section id="skills" className="content-auto bg-[#121316] border-t border-white/5 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-24 pb-32 sm:pt-32 sm:pb-40 relative z-10 overflow-hidden">
      
      {/* Decorative 3D Images */}
      <FadeIn delay={0.1} duration={0.9} x={-80} y={0} className="absolute top-[15%] left-[1%] sm:left-[3%] md:left-[5%] w-[110px] sm:w-[150px] md:w-[190px] z-0 opacity-80">
        <SquishBounce>
          <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, -3, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
            <img src={`${import.meta.env.BASE_URL}img/glass_laptop.png`} alt="Glass Laptop" className="w-full h-auto object-contain drop-shadow-[0_30px_40px_rgba(215,226,234,0.15)]" />
          </motion.div>
        </SquishBounce>
      </FadeIn>


      <FadeIn y={40} className="relative z-10">
        <TypingHeading
          text="SKILL SET"
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-24 leading-none tracking-normal" 
          style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}
        />
      </FadeIn>

      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 sm:gap-8 relative z-10">
        {services.map((svc, i) => (
          <FadeIn key={svc.num} delay={i * 0.1} y={30} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] flex-shrink-0">
            <div className="w-full h-full rounded-[24px] sm:rounded-[32px] md:rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C]/40 backdrop-blur-md p-6 sm:p-8 flex flex-col shadow-xl relative hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(215,226,234,0.08)] hover:bg-[#121316]/60 transition-all duration-300 group overflow-hidden">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#D7E2EA]/5 rounded-full blur-3xl group-hover:bg-[#D7E2EA]/10 transition-colors duration-500"></div>
              
              <span className="hero-heading font-black leading-none tracking-tighter mb-4 sm:mb-6 text-[#D7E2EA]/20 group-hover:text-[#D7E2EA]/40 transition-colors duration-300" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                {svc.num}
              </span>
              <h3 className="font-bold uppercase text-[#D7E2EA] mb-4 text-xl sm:text-2xl z-10">
                {svc.title}
              </h3>
              <div className="flex flex-wrap gap-2 z-10">
                {svc.skills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-[#D7E2EA]/5 hover:bg-[#D7E2EA]/15 border border-[#D7E2EA]/10 rounded-full text-xs sm:text-sm text-[#D7E2EA]/80 font-medium transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
