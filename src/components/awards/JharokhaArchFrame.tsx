import React from "react";

export function HeaderCartouche({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const bgFill = (style?.background as string) || "#060D2B";

  return (
    <div className={`relative inline-flex items-center justify-center px-7 xs:px-9 sm:px-12 py-3 sm:py-2.5 ${className}`}>
      {/* Outer Gold Chevron Ribbon Border & Fill SVG with < > Pointed Edges */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]"
        preserveAspectRatio="none"
        viewBox="0 0 400 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main Ribbon Polygon Background with Gold Border */}
        <path
          d="M22,2 L378,2 L398,30 L378,58 L22,58 L2,30 Z"
          fill={bgFill}
          stroke="#F59E0B"
          strokeWidth="3"
        />
        {/* Inner Decorative Gold Filigree Accent Line */}
        <path
          d="M25,6 L375,6 L392,30 L375,54 L25,54 L8,30 Z"
          fill="none"
          stroke="#FEF08A"
          strokeWidth="1.2"
          strokeDasharray="4 2"
          opacity="0.8"
        />
      </svg>

      <div className="relative z-20 flex items-center gap-2.5 xs:gap-3">{children}</div>
    </div>
  );
}

export function ScallopedTrim({ className = "w-full" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1200 20" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0,0 
           Q20,18 40,0 Q60,18 80,0 Q100,18 120,0 Q140,18 160,0 Q180,18 200,0 
           Q220,18 240,0 Q260,18 280,0 Q300,18 320,0 Q340,18 360,0 Q380,18 400,0 
           Q420,18 440,0 Q460,18 480,0 Q500,18 520,0 Q540,18 560,0 Q580,18 600,0 
           Q620,18 640,0 Q660,18 680,0 Q700,18 720,0 Q720,18 740,0 Q760,18 780,0 
           Q800,18 820,0 Q840,18 860,0 Q880,18 900,0 Q920,18 940,0 Q960,18 980,0 
           Q1000,18 1020,0 Q1040,18 1060,0 Q1080,18 1100,0 Q1120,18 1140,0 Q1160,18 1180,0 Q1200,18 1200,0 L1200,0 L0,0 Z"
        fill="#881337"
        stroke="#FEF08A"
        strokeWidth="1.5"
      />
    </svg>
  );
}
