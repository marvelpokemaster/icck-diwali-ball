import React from "react";

export function RotatingMandalasBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
      
      {/* 1. Center Large Subtle Geometric Starburst Mandala (Clockwise 60s spin) */}
      <div className="w-[500px] xs:w-[600px] sm:w-[750px] md:w-[900px] h-[500px] xs:h-[600px] sm:h-[750px] md:h-[900px] opacity-[0.22] text-[#FEF08A] animate-spin-slow">
        <svg viewBox="0 0 500 500" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Geometric Concentric Rings */}
          <circle cx="250" cy="250" r="230" stroke="currentColor" strokeWidth="1" strokeDasharray="8 6" />
          <circle cx="250" cy="250" r="200" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="250" cy="250" r="160" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="250" cy="250" r="120" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="250" cy="250" r="80" stroke="currentColor" strokeWidth="1" />
          <circle cx="250" cy="250" r="40" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="250" cy="250" r="10" fill="currentColor" opacity="0.5" />

          {/* 12-Point Geometric Starburst Rays */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 250 + 40 * Math.cos(angle);
            const y1 = 250 + 40 * Math.sin(angle);
            const x2 = 250 + 200 * Math.cos(angle);
            const y2 = 250 + 200 * Math.sin(angle);
            return (
              <g key={i}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" opacity="0.8" />
                <circle cx={x2} cy={y2} r="3" fill="currentColor" opacity="0.6" />
              </g>
            );
          })}

          {/* Interlocking Hexagram Geometric Star */}
          <polygon
            points="250,50 310,150 420,150 330,210 370,320 250,250 130,320 170,210 80,150 190,150"
            stroke="currentColor"
            strokeWidth="1.2"
            fill="none"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* 2. Top-Left Secondary Geometric Halo (Counter-Clockwise 80s spin) */}
      <div className="absolute -top-32 -left-32 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] opacity-[0.18] text-[#FDE047] animate-spin-reverse-slow">
        <svg viewBox="0 0 400 400" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1" strokeDasharray="6 4" />
          <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="90" stroke="currentColor" strokeWidth="1" />
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const x1 = 200 + 30 * Math.cos(angle);
            const y1 = 200 + 30 * Math.sin(angle);
            const x2 = 200 + 180 * Math.cos(angle);
            const y2 = 200 + 180 * Math.sin(angle);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" opacity="0.7" />;
          })}
        </svg>
      </div>

      {/* 3. Bottom-Right Secondary Geometric Halo (Clockwise 60s spin) */}
      <div className="absolute -bottom-32 -right-32 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] opacity-[0.18] text-[#FDE047] animate-spin-slow">
        <svg viewBox="0 0 400 400" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1" strokeDasharray="6 4" />
          <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="90" stroke="currentColor" strokeWidth="1" />
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const x1 = 200 + 30 * Math.cos(angle);
            const y1 = 200 + 30 * Math.sin(angle);
            const x2 = 200 + 180 * Math.cos(angle);
            const y2 = 200 + 180 * Math.sin(angle);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" opacity="0.7" />;
          })}
        </svg>
      </div>

    </div>
  );
}
