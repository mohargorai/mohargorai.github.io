import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, TypingHeading, SquishBounce, LiveProjectButton, BorderGlow } from '../ui';
import { projects } from '../../data/projects';

const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 0V14M0 7H14" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const ProjectRow = ({ project, isExpanded, onToggle }: { project: typeof projects[0], isExpanded: boolean, onToggle: () => void }) => {
  return (
    <div className="w-full border-b border-white/10 last:border-0 group">
      <div 
        className="py-6 sm:py-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
        onClick={onToggle}
      >
        <div className="flex items-center gap-6">
          <span className="font-mono text-white/30 text-xl sm:text-2xl group-hover:text-white/70 transition-colors">{project.num}</span>
          <h3 className={`font-black uppercase text-2xl sm:text-4xl lg:text-5xl tracking-tight transition-colors duration-300 ${isExpanded ? 'text-white' : 'text-white/50 group-hover:text-white/90'}`}>
            {project.title}
          </h3>
        </div>
        
        <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto mt-2 md:mt-0 pl-12 md:pl-0">
          <span className="text-white/40 uppercase tracking-widest text-[10px] sm:text-xs font-bold">{project.cat}</span>
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 group-hover:bg-white/5 transition-all">
            <motion.div animate={{ rotate: isExpanded ? 45 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
              <PlusIcon />
            </motion.div>
          </div>
        </div>
      </div>
      
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-10 pt-2 pl-12 flex flex-col md:flex-row gap-6 justify-between items-start md:items-end">
              <p className="text-white/60 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed">
                {project.description}
              </p>
              <div className="flex items-center gap-3 sm:gap-4 shrink-0 mt-2 md:mt-0">
                {project.link && <LiveProjectButton href={project.link} text="GitHub" />}
                {project.liveLink && <LiveProjectButton href={project.liveLink} text="Live Site" />}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const ProjectsSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 px-5 sm:px-8 md:px-10 pt-24 pb-32 sm:pt-32 sm:pb-40 overflow-hidden">
      
      {/* Decorative 3D Images */}
      <FadeIn delay={0.2} duration={0.9} x={-60} y={0} className="absolute top-[10%] left-[1%] sm:left-[3%] md:left-[5%] w-[100px] sm:w-[140px] md:w-[180px] z-0 opacity-80 pointer-events-none">
        <SquishBounce>
          <motion.div animate={{ y: [0, -15, 0], rotate: [0, 8, -4, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
            <img src={`${import.meta.env.BASE_URL}img/glass_folder.png`} alt="Glass Folder" className="w-full h-auto object-contain drop-shadow-2xl" />
          </motion.div>
        </SquishBounce>
      </FadeIn>

      <FadeIn delay={0.4} duration={0.9} x={60} y={0} className="absolute bottom-[20%] right-[1%] sm:right-[3%] md:right-[5%] w-[90px] sm:w-[130px] md:w-[170px] z-0 opacity-80 pointer-events-none">
        <SquishBounce>
          <motion.div animate={{ y: [0, 20, 0], rotate: [0, -6, 5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
            <img src={`${import.meta.env.BASE_URL}img/glass_rocket.png`} alt="Glass Rocket" className="w-full h-auto object-contain drop-shadow-2xl" />
          </motion.div>
        </SquishBounce>
      </FadeIn>

      <div className="relative z-10 w-full flex flex-col items-center justify-center max-w-[1400px] mx-auto text-center mb-10 sm:mb-16">
        <FadeIn y={40} className="w-full">
          <TypingHeading
            text="PROJECTS"
            className="hero-heading font-black uppercase leading-none tracking-normal" 
            style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}
          />
        </FadeIn>
      </div>

      <div className="flex flex-col w-full max-w-5xl mx-auto relative z-10">
        <div className="border-t border-white/10">
          {projects.map((project, i) => (
            <FadeIn key={project.num} delay={i * 0.1} y={20}>
              <ProjectRow 
                project={project} 
                isExpanded={expandedIndex === i}
                onToggle={() => setExpandedIndex(expandedIndex === i ? null : i)}
              />
            </FadeIn>
          ))}
        </div>

        {/* GitHub Activity Card */}
        <FadeIn delay={0.4} y={30} className="w-full mt-24">
           <BorderGlow
              edgeSensitivity={30}
              glowColor="205 27 88"
              backgroundColor="#0C0C0C"
              borderRadius={30}
              glowRadius={40}
              glowIntensity={0.5}
              coneSpread={25}
              animated={false}
              colors={['#D7E2EA', '#ffffff', '#D7E2EA']}
              className="w-full max-w-5xl mx-auto border border-white/5 shadow-2xl hover:-translate-y-1 transition-all duration-300"
           >
             <div className="flex flex-col items-center w-full h-full p-6 sm:p-8 md:p-10 relative z-10">
               <div className="absolute top-6 right-6 sm:top-8 sm:right-10 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-green-500/30 bg-green-500/10 flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                 <span className="text-green-500 text-[10px] sm:text-xs uppercase tracking-widest font-bold">Live Sync</span>
               </div>
               
               <h3 className="font-black text-[#D7E2EA] uppercase text-xl sm:text-2xl mb-1 sm:mb-2 self-start tracking-tight">GitHub Activity</h3>
               <p className="text-[#D7E2EA]/40 uppercase tracking-widest text-[10px] sm:text-xs mb-8 sm:mb-10 self-start font-medium">Daily coding contributions</p>
               
               <div className="w-full overflow-x-auto pb-4 flex justify-center custom-scrollbar">
                 <img 
                   src="https://ghchart.rshah.org/A855F7/mohargorai" 
                   alt="mohargorai's Github Contribution Chart" 
                   className="w-full min-w-[600px] max-w-[800px] h-auto opacity-70 hover:opacity-100 transition-opacity duration-300 relative z-10 drop-shadow-md"
                 />
               </div>
             </div>
           </BorderGlow>
        </FadeIn>
      </div>
    </section>
  );
};
