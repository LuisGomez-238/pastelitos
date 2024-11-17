import React from 'react';

export default function CakeLogo() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bottom Layer */}
      <path d="M8 28C8 26 12 24 24 24C36 24 40 26 40 28V36C40 38 36 40 24 40C12 40 8 38 8 36V28Z" fill="#FFB7E7"/>
      
      {/* Middle Layer */}
      <path d="M12 18C12 16 16 14 24 14C32 14 36 16 36 18V24C36 26 32 28 24 28C16 28 12 26 12 24V18Z" fill="#FFC9F0"/>
      
      {/* Top Layer */}
      <path d="M16 8C16 6 19 4 24 4C29 4 32 6 32 8V14C32 16 29 18 24 18C19 18 16 16 16 14V8Z" fill="#FFE1F7"/>
      
      {/* Kawaii Face */}
      <circle cx="20" cy="30" r="1.5" fill="#FF85D7"/>
      <circle cx="28" cy="30" r="1.5" fill="#FF85D7"/>
      <path d="M22 34C22 35 23 36 24 36C25 36 26 35 26 34" stroke="#FF85D7" strokeWidth="1.5" strokeLinecap="round"/>
      
      {/* Decorative Elements */}
      <circle cx="24" cy="4" r="2" fill="#FF85D7"/>
      <path d="M18 10L16 8M30 10L32 8" stroke="#FFB7E7" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 22C14 22 16 23 24 23C32 23 34 22 34 22" stroke="#FFB7E7" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
} 