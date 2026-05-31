import React from 'react';

export const DownloadCVButton = () => {
  return (
    <a href="/assets/Mohar_Resume.pdf" 
       target="_blank" 
       rel="noopener noreferrer"
       download="Mohar_Gorai_Resume.pdf"
       className="inline-flex items-center justify-center rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base text-[#D7E2EA] font-medium uppercase tracking-widest border border-[#D7E2EA]/30 hover:bg-[#D7E2EA]/10 transition-colors duration-300 backdrop-blur-md"
    >
      Download CV &darr;
    </a>
  );
};
