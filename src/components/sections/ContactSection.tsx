import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeIn, TypingHeading, SquishBounce, BorderGlow } from '../ui';

export const ContactSection = () => {
  const [status, setStatus] = useState<"IDLE" | "SUBMITTING" | "SUCCESS" | "ERROR">("IDLE");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SUBMITTING");
    
    const formData = new FormData(e.currentTarget);
    // Web3Forms Access Key
    formData.append("access_key", "384293b2-79da-405d-9100-04a4fc2eb945");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setStatus("SUCCESS");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus("IDLE"), 5000);
      } else {
        setStatus("ERROR");
        setTimeout(() => setStatus("IDLE"), 5000);
      }
    } catch {
      setStatus("ERROR");
      setTimeout(() => setStatus("IDLE"), 5000);
    }
  };

  return (
    <section id="contact" className="flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 pt-24 pb-16 sm:pt-32 sm:pb-20 bg-[#121316] relative z-30 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] border-t-2 border-[#D7E2EA]/10 -mt-10 sm:-mt-12 md:-mt-14 overflow-hidden">
      
      <div className="px-5 sm:px-8 md:px-10 mb-16 sm:mb-20 md:mb-24 relative z-10 w-full flex flex-col items-center justify-center max-w-[1400px] mx-auto text-center mt-4 lg:mt-8">
        <FadeIn y={40} className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <div className="relative w-[100px] sm:w-[120px] md:w-[160px] lg:w-[180px] xl:w-[200px] aspect-square z-0 shrink-0 hidden sm:block">
            <SquishBounce>
              <motion.div 
                animate={{ 
                  y: [0, -20, 0], 
                  rotateZ: [0, 8, -4, 0],
                  rotateY: [0, 15, -15, 0]
                }} 
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                style={{ perspective: 1000 }}
              >
                <img 
                  src={`${import.meta.env.BASE_URL}img/glass_phone.png`} 
                  alt="Glass Phone" 
                  className="w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(215,226,234,0.2)]" 
                />
              </motion.div>
            </SquishBounce>
          </div>
          <TypingHeading
            text="LET'S TALK"
            className="hero-heading font-black uppercase text-center sm:text-left mb-0 leading-none tracking-normal" 
            style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}
          />
        </FadeIn>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 w-full max-w-[1400px] mt-0 sm:mt-4 relative z-10 px-0 sm:px-4">
        
        {/* Left Column: Contact List */}
        <div className="flex flex-col w-full justify-between h-full pt-4">
        <FadeIn delay={0.1} y={20} className="w-full">
          <a href="mailto:work.mohargorai@gmail.com" className="group flex flex-col items-start py-5 sm:py-6 border-b border-[#D7E2EA]/15 hover:border-[#D7E2EA]/60 transition-colors duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D7E2EA]/5 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out z-0 pointer-events-none"></div>
            <span className="text-[#D7E2EA]/40 uppercase tracking-widest text-xs sm:text-sm font-bold mb-1 sm:mb-2 relative z-10 group-hover:text-[#D7E2EA]/80 transition-colors">01 // Email</span>
            <div className="flex items-center gap-3 sm:gap-6 relative z-10">
              <span className="text-[#D7E2EA] font-black text-xl sm:text-2xl lg:text-3xl xl:text-4xl group-hover:text-white group-hover:translate-x-2 transition-all duration-300 break-all sm:break-normal">
                work.mohargorai@gmail.com
              </span>
              <span className="text-xl sm:text-3xl opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white">↗</span>
            </div>
          </a>
        </FadeIn>

        <FadeIn delay={0.2} y={20} className="w-full">
          <a href="tel:+917863995905" className="group flex flex-col items-start py-5 sm:py-6 border-b border-[#D7E2EA]/15 hover:border-[#D7E2EA]/60 transition-colors duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D7E2EA]/5 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out z-0 pointer-events-none"></div>
            <span className="text-[#D7E2EA]/40 uppercase tracking-widest text-xs sm:text-sm font-bold mb-1 sm:mb-2 relative z-10 group-hover:text-[#D7E2EA]/80 transition-colors">02 // Phone</span>
            <div className="flex items-center gap-3 sm:gap-6 relative z-10">
              <span className="text-[#D7E2EA] font-black text-xl sm:text-2xl lg:text-3xl xl:text-4xl group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                +91 7863995905
              </span>
              <span className="text-xl sm:text-3xl opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white">↗</span>
            </div>
          </a>
        </FadeIn>

        <FadeIn delay={0.3} y={20} className="w-full">
          <a href="https://github.com/mohargorai" target="_blank" rel="noreferrer" className="group flex flex-col items-start py-5 sm:py-6 border-b border-[#D7E2EA]/15 hover:border-[#D7E2EA]/60 transition-colors duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D7E2EA]/5 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out z-0 pointer-events-none"></div>
            <span className="text-[#D7E2EA]/40 uppercase tracking-widest text-xs sm:text-sm font-bold mb-1 sm:mb-2 relative z-10 group-hover:text-[#D7E2EA]/80 transition-colors">03 // GitHub</span>
            <div className="flex items-center gap-3 sm:gap-6 relative z-10">
              <span className="text-[#D7E2EA] font-black text-xl sm:text-2xl lg:text-3xl xl:text-4xl group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                github.com/mohargorai
              </span>
              <span className="text-xl sm:text-3xl opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white">↗</span>
            </div>
          </a>
        </FadeIn>

        <FadeIn delay={0.4} y={20} className="w-full">
          <a href="https://www.linkedin.com/in/mohar-gorai-518123338/" target="_blank" rel="noreferrer" className="group flex flex-col items-start py-5 sm:py-6 border-b border-[#D7E2EA]/15 hover:border-[#D7E2EA]/60 transition-colors duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D7E2EA]/5 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out z-0 pointer-events-none"></div>
            <span className="text-[#D7E2EA]/40 uppercase tracking-widest text-xs sm:text-sm font-bold mb-1 sm:mb-2 relative z-10 group-hover:text-[#D7E2EA]/80 transition-colors">04 // LinkedIn</span>
            <div className="flex items-center gap-3 sm:gap-6 relative z-10">
              <span className="text-[#D7E2EA] font-black text-xl sm:text-2xl lg:text-3xl xl:text-4xl group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                linkedin.com/in/mohar-gorai
              </span>
              <span className="text-xl sm:text-3xl opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white">↗</span>
            </div>
          </a>
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="w-full">
          <a href="https://maps.app.goo.gl/5jYiP81FDqHyovsNA" target="_blank" rel="noreferrer" className="group flex flex-col items-start py-5 sm:py-6 border-b border-[#D7E2EA]/15 hover:border-[#D7E2EA]/60 transition-colors duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D7E2EA]/5 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out z-0 pointer-events-none"></div>
            <span className="text-[#D7E2EA]/40 uppercase tracking-widest text-xs sm:text-sm font-bold mb-1 sm:mb-2 relative z-10 group-hover:text-[#D7E2EA]/80 transition-colors">05 // Location</span>
            <div className="flex items-center gap-3 sm:gap-6 relative z-10">
              <span className="text-[#D7E2EA] font-black text-xl sm:text-2xl lg:text-3xl xl:text-4xl group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                Asansol, West Bengal
              </span>
              <span className="text-xl sm:text-3xl opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white">↗</span>
            </div>
          </a>
        </FadeIn>
        </div>

        {/* Right Column: Contact Form */}
        <div className="flex flex-col w-full">
          <FadeIn delay={0.6} y={20} className="w-full h-full">
            <form onSubmit={handleSubmit} className="w-full h-full">
              <BorderGlow
                edgeSensitivity={30}
                glowColor="205 27 88"
                backgroundColor="#0C0C0C"
                borderRadius={40}
                glowRadius={40}
                glowIntensity={1}
                coneSpread={25}
                animated={false}
                colors={['#D7E2EA', '#ffffff', '#D7E2EA']}
                className="w-full h-full shadow-xl group"
              >
                <div className="flex flex-col gap-6 w-full h-full p-6 sm:p-10 relative">
                  <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#D7E2EA]/5 rounded-full blur-3xl z-0 pointer-events-none group-focus-within:bg-[#D7E2EA]/10 transition-colors duration-700"></div>
                  
                  <h3 className="text-[#D7E2EA] font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-widest relative z-10 mb-4">Send a Message</h3>
                  
                  <div className="relative z-10">
                    <label className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs font-bold mb-3 block">Your Name</label>
                    <input type="text" name="name" required className="w-full bg-[#121316]/60 border-2 border-[#D7E2EA]/20 rounded-2xl px-6 py-4 text-[#D7E2EA] font-medium focus:outline-none focus:border-[#D7E2EA]/80 transition-colors" placeholder="Mohar Gorai" />
                  </div>

                  <div className="relative z-10">
                    <label className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs font-bold mb-3 block">Your Email</label>
                    <input type="email" name="email" required className="w-full bg-[#121316]/60 border-2 border-[#D7E2EA]/20 rounded-2xl px-6 py-4 text-[#D7E2EA] font-medium focus:outline-none focus:border-[#D7E2EA]/80 transition-colors" placeholder="work.mohargorai@gmail.com" />
                  </div>

                  <div className="relative z-10 flex-grow">
                    <label className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs font-bold mb-3 block">Your Message</label>
                    <textarea name="message" required rows={5} className="w-full h-[calc(100%-2rem)] bg-[#121316]/60 border-2 border-[#D7E2EA]/20 rounded-2xl px-6 py-4 text-[#D7E2EA] font-medium focus:outline-none focus:border-[#D7E2EA]/80 transition-colors resize-none" placeholder="Hi!!"></textarea>
                  </div>

                  {/* Web3Forms Honeypot - Invisible to humans, catches bots */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  <button type="submit" disabled={status === "SUBMITTING" || status === "SUCCESS"} className="relative z-10 w-full rounded-full border-2 border-[#D7E2EA] text-[#0C0C0C] bg-[#D7E2EA] font-black uppercase tracking-widest px-8 py-5 text-sm sm:text-base hover:bg-transparent hover:text-[#D7E2EA] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-4 shadow-[0_0_20px_rgba(215,226,234,0.3)] hover:shadow-none">
                    {status === "IDLE" && "Send Message"}
                    {status === "SUBMITTING" && "Sending..."}
                    {status === "SUCCESS" && "Send Message"}
                    {status === "ERROR" && "Send Message"}
                  </button>

                  {status === "SUCCESS" && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-400 font-bold text-center text-sm tracking-widest uppercase relative z-10 mt-2"
                    >
                      ✓ Message sent successfully!
                    </motion.div>
                  )}
                  {status === "ERROR" && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 font-bold text-center text-sm tracking-widest uppercase relative z-10 mt-2"
                    >
                      Failed to send message. Please try again.
                    </motion.div>
                  )}
                </div>
              </BorderGlow>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
