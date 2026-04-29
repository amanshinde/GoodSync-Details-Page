import React from 'react';

export const HandDrawnUnderline = ({ className = "" }) => (
  <svg viewBox="0 0 100 20" preserveAspectRatio="none" className={`absolute -bottom-2 left-0 w-full h-[0.4em] overflow-visible pointer-events-none ${className}`}>
    <path 
      d="M2,10 Q25,18 50,10 T98,12" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="4" 
      strokeLinecap="round" 
    />
  </svg>
);

export const HandDrawnCircle = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={`absolute inset-0 w-[110%] h-[120%] -left-[5%] -top-[10%] overflow-visible pointer-events-none ${className}`}>
    <path 
      d="M50,10 C20,10 5,30 10,60 C15,90 40,95 70,85 C95,75 95,30 75,15 C55,0 45,5 30,20" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
    />
  </svg>
);

export const HandDrawnArrow = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" className={`overflow-visible pointer-events-none ${className}`}>
    <path 
      d="M10,90 Q40,40 90,10 M80,10 L90,10 L90,20" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);
