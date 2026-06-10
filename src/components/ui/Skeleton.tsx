import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'rectangular' | 'circular' | 'text';
}

export const Skeleton = ({ className = '', variant = 'rectangular' }: SkeletonProps) => {
  // Base classes for the shimmer animation and dark aesthetic
  const baseClasses = "relative overflow-hidden bg-[#121316]/80 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent";
  
  // Shape configurations
  const variants = {
    rectangular: "rounded-[24px]",
    circular: "rounded-full",
    text: "rounded-md"
  };

  return (
    <div 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      role="status"
      aria-busy="true"
      aria-label="Loading content..."
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};
