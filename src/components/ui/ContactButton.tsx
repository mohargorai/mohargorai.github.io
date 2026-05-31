import React from 'react';

export const ContactButton = () => {
  return (
    <>
      <style>
        {`
          @keyframes gradientFlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
      <a href="#contact" 
         className="inline-block rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-widest relative transition-transform hover:scale-105"
         style={{
           background: 'linear-gradient(123deg, #18011F, #B600A8, #7621B0, #BE4C00, #B600A8, #18011F)',
           backgroundSize: '300% 300%',
           animation: 'gradientFlow 6s ease infinite',
           boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset, 0 0 0 2px white',
           outlineOffset: '-3px'
         }}
      >
        Contact Me
      </a>
    </>
  );
};
