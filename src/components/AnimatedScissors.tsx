
import React from 'react';

export const AnimatedScissors = () => {
  return (
    <div className="animated-scissors-container">
      <svg
        width="100"
        height="100"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animated-scissors"
        aria-hidden="true"
      >
        {/* Top Handle */}
        <circle cx="60" cy="60" r="25" className="scissors-handle" fill="#1A2D69" />
        <path d="M65 40C65 40 75 45 75 35C75 25 65 30 65 40Z" className="scissors-accent" fill="#F3C034" />

        {/* Bottom Handle */}
        <circle cx="120" cy="120" r="25" className="scissors-handle scissors-bottom-handle" fill="#1A2D69" />

        {/* Blades */}
        <path 
          d="M60 60L160 10C160 10 170 15 165 25L60 60Z" 
          className="scissors-blade scissors-top-blade" 
          fill="#8D9EFF"
        />
        <path 
          d="M60 60L165 110C165 110 175 115 165 125L60 60Z" 
          className="scissors-blade scissors-bottom-blade" 
          fill="#8D9EFF"
        />

        {/* Blade Accents */}
        <path 
          d="M60 60L160 10C160 10 162 15 157 20L60 60Z" 
          className="scissors-blade-accent" 
          fill="#1A2D69"
        />
        <path 
          d="M60 60L165 110C165 110 167 115 160 120L60 60Z" 
          className="scissors-blade-accent" 
          fill="#1A2D69"
        />

        {/* Center Joint */}
        <circle cx="60" cy="60" r="8" className="scissors-joint" fill="#F3C034" />
      </svg>
    </div>
  );
};
