import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';
import { TypingHeading } from '../ui/TypingHeading';
import { SquishBounce } from '../ui/SquishBounce';
import { LiveProjectButton } from '../ui/LiveProjectButton';
import { projects } from '../../constants/data';

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  return (
    <FadeIn delay={index * 0.1} y={30} className="w-full">
       <div className="w-full max-w-6xl mx-auto rounded-[24px] sm:rounded-[32px] md:rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C]/40 backdrop-blur-md p-5 sm:p-6 md:p-8 flex flex-col shadow-2xl relative mb-4 sm:mb-5 md:mb-6 hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_10px_30px_rgba(215,226,234,0.08)] hover:bg-[#121316]/60 transition-all duration-300">
          
          {/* Top Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-4">
             <div className="flex items-center gap-4 sm:gap-6">
                <span className="hero-heading font-black leading-none pr-3 sm:pr-4 flex-shrink-0" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>{project.num}</span>
                <div className="flex flex-col">
                   <span className="uppercase text-[#D7E2EA]/60 font-medium tracking-wider text-[10px] sm:text-xs">{project.cat}</span>
                   <h3 className="font-bold text-[#D7E2EA] uppercase leading-none mt-1 mb-1.5 sm:mb-2" style={{ fontSize: 'clamp(1.2rem, 2vw, 2rem)' }}>{project.title}</h3>
                   <p className="text-[#D7E2EA]/70 text-xs sm:text-sm max-w-xl leading-relaxed">{project.description}</p>
                </div>
             </div>
             <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-4 md:mt-0 w-full md:w-auto">
               {project.link && <LiveProjectButton href={project.link} text="GitHub" />}
               {project.liveLink && <LiveProjectButton href={project.liveLink} text="Live Site" />}
             </div>
          </div>
       </div>
    </FadeIn>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 px-5 sm:px-8 md:px-10 py-20 pb-20 overflow-hidden">
      
      {/* Decorative 3D Images */}
      <FadeIn delay={0.2} duration={0.9} x={-60} y={0} className="absolute top-[10%] left-[1%] sm:left-[3%] md:left-[5%] w-[100px] sm:w-[140px] md:w-[180px] z-0 opacity-80">
        <SquishBounce>
          <motion.div animate={{ y: [0, -15, 0], rotate: [0, 8, -4, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
            <img src="/img/glass_folder.png" alt="Glass Folder" className="w-full h-auto object-contain drop-shadow-2xl" />
          </motion.div>
        </SquishBounce>
      </FadeIn>

      <FadeIn delay={0.4} duration={0.9} x={60} y={0} className="absolute bottom-[20%] right-[1%] sm:right-[3%] md:right-[5%] w-[90px] sm:w-[130px] md:w-[170px] z-0 opacity-80">
        <SquishBounce>
          <motion.div animate={{ y: [0, 20, 0], rotate: [0, -6, 5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
            <img src="/img/glass_rocket.png" alt="Glass Rocket" className="w-full h-auto object-contain drop-shadow-2xl" />
          </motion.div>
        </SquishBounce>
      </FadeIn>
      <FadeIn y={40} className="relative z-10">
        <TypingHeading
          text="PROJECTS"
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 leading-none tracking-normal" 
          style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}
        />
      </FadeIn>

      <div className="flex flex-col w-full">
        {projects.map((project, i) => (
          <ProjectCard 
            key={project.num} 
            project={project} 
            index={i} 
          />
        ))}

        {/* GitHub Activity Card */}
        <FadeIn delay={0.4} y={30} className="w-full mt-10 md:mt-16">
           <div className="w-full max-w-6xl mx-auto rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border-2 border-[#D7E2EA] bg-[#0C0C0C]/40 backdrop-blur-md p-6 sm:p-8 md:p-10 shadow-2xl relative flex flex-col items-center hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_10px_30px_rgba(215,226,234,0.08)] hover:bg-[#121316]/60 transition-all duration-300">
             <div className="absolute top-6 right-6 sm:top-8 sm:right-10 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-green-500/30 bg-green-500/10 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               <span className="text-green-500 text-xs sm:text-sm uppercase tracking-widest font-bold">Live Sync</span>
             </div>
             
             <h3 className="font-black text-[#D7E2EA] uppercase text-2xl sm:text-3xl mb-2 sm:mb-4 self-start">GitHub Activity</h3>
             <p className="text-[#D7E2EA]/60 uppercase tracking-widest text-sm mb-8 sm:mb-10 self-start">My daily coding contributions over the last year.</p>
             
             <div className="w-full overflow-x-auto pb-4 flex justify-center">
               <img 
                 src="https://ghchart.rshah.org/MoharXD" 
                 alt="MoharXD's Github Contribution Chart" 
                 className="w-full min-w-[700px] max-w-[900px] h-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
               />
             </div>
           </div>
        </FadeIn>
      </div>
    </section>
  );
};
