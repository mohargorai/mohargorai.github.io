import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';
import { TypingHeading } from '../ui/TypingHeading';
import { SquishBounce } from '../ui/SquishBounce';

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
    <section id="contact" className="min-h-[80vh] flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 bg-[#121316] relative z-30 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] border-t-2 border-[#D7E2EA]/10 -mt-10 sm:-mt-12 md:-mt-14 overflow-hidden">
      
      {/* Decorative 3D Images */}
      <FadeIn delay={0.1} duration={0.9} x={-60} y={0} className="hidden lg:block absolute top-[10%] left-[2%] w-[100px] xl:w-[140px] z-0 opacity-40 cursor-pointer">
        <SquishBounce>
          <motion.div 
            animate={{ 
              y: [0, -30, 0], 
              x: [0, 15, -5, 0],
              rotateZ: [0, 8, -4, 0],
              rotateY: [0, 20, -20, 0]
            }} 
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            style={{ perspective: 1000 }}
          >
            <img src="/img/glass_phone.png" alt="Glass Phone" className="w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(215,226,234,0.2)]" />
          </motion.div>
        </SquishBounce>
      </FadeIn>


      <FadeIn y={40} className="relative z-10">
        <TypingHeading
          text="LET'S TALK"
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 leading-none tracking-normal" 
          style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}
        />
      </FadeIn>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 w-full max-w-[1400px] mt-4 sm:mt-10 relative z-10 px-0 sm:px-4">
        
        {/* Left Column: Contact List */}
        <div className="flex flex-col w-full justify-start pt-4">
        <FadeIn delay={0.1} y={20} className="w-full">
          <a href="mailto:work.mohargorai@gmail.com" className="group flex flex-col items-start py-6 sm:py-8 border-b border-[#D7E2EA]/15 hover:border-[#D7E2EA]/60 transition-colors duration-500 relative overflow-hidden">
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
          <a href="tel:+917863995905" className="group flex flex-col items-start py-6 sm:py-8 border-b border-[#D7E2EA]/15 hover:border-[#D7E2EA]/60 transition-colors duration-500 relative overflow-hidden">
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
          <a href="https://github.com/MoharXD" target="_blank" rel="noreferrer" className="group flex flex-col items-start py-6 sm:py-8 border-b border-[#D7E2EA]/15 hover:border-[#D7E2EA]/60 transition-colors duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D7E2EA]/5 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out z-0 pointer-events-none"></div>
            <span className="text-[#D7E2EA]/40 uppercase tracking-widest text-xs sm:text-sm font-bold mb-1 sm:mb-2 relative z-10 group-hover:text-[#D7E2EA]/80 transition-colors">03 // GitHub</span>
            <div className="flex items-center gap-3 sm:gap-6 relative z-10">
              <span className="text-[#D7E2EA] font-black text-xl sm:text-2xl lg:text-3xl xl:text-4xl group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                github.com/MoharXD
              </span>
              <span className="text-xl sm:text-3xl opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white">↗</span>
            </div>
          </a>
        </FadeIn>

        <FadeIn delay={0.4} y={20} className="w-full">
          <a href="https://www.linkedin.com/in/mohar-gorai-518123338/" target="_blank" rel="noreferrer" className="group flex flex-col items-start py-6 sm:py-8 border-b border-[#D7E2EA]/15 hover:border-[#D7E2EA]/60 transition-colors duration-500 relative overflow-hidden">
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
          <a href="https://maps.app.goo.gl/5jYiP81FDqHyovsNA" target="_blank" rel="noreferrer" className="group flex flex-col items-start py-6 sm:py-8 border-b border-[#D7E2EA]/15 hover:border-[#D7E2EA]/60 transition-colors duration-500 relative overflow-hidden">
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
            <form onSubmit={handleSubmit} className="w-full h-full rounded-[30px] sm:rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C]/40 backdrop-blur-md p-8 sm:p-12 flex flex-col gap-6 shadow-xl relative overflow-hidden group">
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
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
