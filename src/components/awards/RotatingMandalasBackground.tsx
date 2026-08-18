import React from "react";

export function RotatingMandalasBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      
      {/* Top Left Giant Slow Clockwise Rotating Geometric Mandala */}
      <div className="absolute -top-32 -left-32 w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] opacity-[0.18] text-[#FEF08A] animate-spin-slow">
        <svg viewBox="0 0 500 500" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Concentric Circles & Diamond Lattice */}
          <circle cx="250" cy="250" r="230" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 6" />
          <circle cx="250" cy="250" r="200" stroke="currentColor" strokeWidth="2" />
          <circle cx="250" cy="250" r="160" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="250" cy="250" r="120" stroke="currentColor" strokeWidth="2" />
          <circle cx="250" cy="250" r="70" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="250" cy="250" r="30" fill="currentColor" opacity="0.3" />

          {/* 12 Outer Radial Starburst Rays */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 250 + 70 * Math.cos(angle);
            const y1 = 250 + 70 * Math.sin(angle);
            const x2 = 250 + 200 * Math.cos(angle);
            const y2 = 250 + 200 * Math.sin(angle);
            return (
              <g key={i}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.5" />
                <circle cx={x2} cy={y2} r="5" fill="currentColor" />
              </g>
            );
          })}

          {/* Interlocking Geometric Diamond Grid */}
          <path
            d="M250 50 L450 250 L250 450 L50 250 Z M250 90 L410 250 L250 410 L90 250 Z"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
      </div>

      {/* Bottom Right Giant Slow Counter-Clockwise Rotating Geometric Mandala */}
      <div className="absolute -bottom-40 -right-40 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] opacity-[0.16] text-[#FDE047] animate-spin-reverse-slow">
        <svg viewBox="0 0 500 500" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Concentric Circles & Lotus Rings */}
          <circle cx="250" cy="250" r="240" stroke="currentColor" strokeWidth="2" />
          <circle cx="250" cy="250" r="210" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="250" cy="250" r="170" stroke="currentColor" strokeWidth="2" />
          <circle cx="250" cy="250" r="130" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="250" cy="250" r="80" stroke="currentColor" strokeWidth="2" />

          {/* 16 Radial Geometric Petal Star */}
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 22.5 * Math.PI) / 180;
            const x1 = 250 + 80 * Math.cos(angle);
            const y1 = 250 + 80 * Math.sin(angle);
            const x2 = 250 + 210 * Math.cos(angle);
            const y2 = 250 + 210 * Math.sin(angle);
            return (
              <g key={i}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.2" />
                <circle cx={x2} cy={y2} r="4" fill="currentColor" />
              </g>
            );
          })}

          {/* Octagonal Outer Geometric Border */}
          <polygon
            points="250,30 405,100 470,250 405,400 250,470 95,400 30,250 95,100"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>

      {/* Center Ambient Subtle Rotating Mandala Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[650px] sm:h-[850px] opacity-[0.10] text-amber-300 animate-spin-slow">
        <svg viewBox="0 0 600 600" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="300" cy="300" r="280" stroke="currentColor" strokeWidth="1.5" strokeDasharray="10 8" />
          <circle cx="300" cy="300" r="220" stroke="currentColor" strokeWidth="2" />
          <circle cx="300" cy="300" r="160" stroke="currentColor" strokeWidth="1.5" />
          
          {/* 24 Fine Radial Filigree Lines */}
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i * 15 * Math.PI) / 180;
            const x1 = 300 + 160 * Math.cos(angle);
            const y1 = 300 + 160 * Math.sin(angle);
            const x2 = 300 + 280 * Math.cos(angle);
            const y2 = 300 + 280 * Math.sin(angle);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" opacity="0.8" />;
          })}
        </svg>
      </div>

    </div>
  );
}
