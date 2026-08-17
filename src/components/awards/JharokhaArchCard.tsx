import React from "react";
import { Link } from "@tanstack/react-router";

interface JharokhaArchCardProps {
  title: string;
  price: string;
  strikePrice?: string;
  badgeText?: string;
  buttonText: string;
  noteText: string;
  gradientFrom: string;
  gradientTo: string;
  illustration: React.ReactNode;
  to: "/register" | "/awards";
  search?: { preset: "ball" | "bundle" };
  ribbonText?: string;
  isTwinArch?: boolean;
}

export function JharokhaArchCard({
  title,
  price,
  strikePrice,
  badgeText,
  buttonText,
  noteText,
  gradientFrom,
  gradientTo,
  illustration,
  to,
  search,
  ribbonText,
}: JharokhaArchCardProps) {
  const cardId = title.replace(/[^a-zA-Z0-9]/g, "");

  return (
    <div className="relative flex flex-col items-center w-full max-w-[122px] xs:max-w-[145px] sm:max-w-[260px] md:max-w-[305px] mx-auto h-[270px] xs:h-[305px] sm:h-[380px] md:h-[415px] drop-shadow-[0_8px_24px_rgba(0,0,0,0.85)]">
      
      {/* Top Floating Ribbon Badge if present */}
      {ribbonText && (
        <div
          className="absolute -top-2.5 z-40 whitespace-nowrap rounded-sm px-2 py-0.5 font-black uppercase shadow-lg sm:-top-3.5 sm:rounded-md sm:px-4 sm:py-1"
          style={{
            background: "linear-gradient(90deg, #9B711D, #D2A13A, #9B711D)",
            color: "#111A3A",
            border: "1px solid #9B711D",
            fontSize: "clamp(7px, 1.5vw, 10px)",
            letterSpacing: "0.08em",
          }}
        >
          {ribbonText}
        </div>
      )}

      {/* Pointed Jharokha Arch Background & Double Gold/White Border SVG Container */}
      <svg
        className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-visible"
        viewBox="0 0 300 415"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`bgGrad-${cardId}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={gradientFrom} />
            <stop offset="100%" stopColor={gradientTo} />
          </linearGradient>
          
          <linearGradient id={`goldGrad-${cardId}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E1B95A" />
            <stop offset="35%" stopColor="#D2A13A" />
            <stop offset="70%" stopColor="#9B711D" />
            <stop offset="100%" stopColor="#7B5522" />
          </linearGradient>
        </defs>

        {/* Outer Pointed Jharokha Arch Path Fill & Gold Outer Border */}
        <path
          d="M 150,6 
             C 158,18 176,27 204,32 
             C 252,41 284,56 284,86 
             L 284,402 
             Q 284,412 268,412 
             L 32,412 
             Q 16,412 16,402 
             L 16,86 
             C 16,56 48,41 96,32 
             C 124,27 142,18 150,6 Z"
          fill={`url(#bgGrad-${cardId})`}
          stroke={`url(#goldGrad-${cardId})`}
          strokeWidth="3.5"
        />

        {/* Inner Crisp White Accent Filigree Border (Ends BEFORE note text) */}
        <path
          d="M 150,12 
             C 156,22 171,30 197,34 
             C 243,42 274,56 274,84 
             L 274,360 
             Q 274,368 260,368 
             L 40,368 
             Q 26,368 26,360 
             L 26,84 
             C 26,56 57,42 103,34 
             C 129,30 144,22 150,12 Z"
          stroke="#ffffff"
          strokeWidth="1.2"
          strokeDasharray="4 3"
          opacity="0.85"
        />
      </svg>

      {/* Inner Card Content Overlay — Illustrations Shifted a Little Down on Mobile View */}
      <div className="relative z-20 w-full h-full px-1.5 sm:px-4 pt-6 xs:pt-7 sm:pt-9 pb-1.5 sm:pb-3 flex flex-col items-center justify-between text-center">
        
        {/* Top Section: Vector Illustration Shifted Down on Mobile */}
        <div className="h-18 xs:h-22 sm:h-28 md:h-32 flex items-center justify-center shrink-0 mt-2.5 xs:mt-3 sm:mt-2">
          {illustration}
        </div>
        
        {/* Middle Section: Title, Price & Badge */}
        <div className="flex flex-col items-center gap-0.5 sm:gap-1 w-full my-auto">
          <h2 className="font-serif text-[8.5px] xs:text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-tight sm:tracking-wider text-white px-0.5 leading-tight">
            {title}
          </h2>

          <div className="flex items-baseline justify-center gap-0.5 sm:gap-1.5 my-0.5">
            <span className="font-serif text-sm xs:text-lg sm:text-3xl md:text-4xl font-black text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              {price}
            </span>
            {strikePrice && (
              <span className="text-[7.5px] xs:text-[8.5px] sm:text-xs line-through text-white/80 font-bold">
                {strikePrice}
              </span>
            )}
          </div>

          {badgeText && (
            <span className="rounded-full bg-amber-400/25 px-1.5 sm:px-3 py-0.2 text-[6.5px] xs:text-[7.5px] sm:text-[9.5px] font-black uppercase tracking-tighter sm:tracking-wider text-[#FEF08A] border border-amber-300/50">
              {badgeText}
            </span>
          )}
        </div>

        {/* Bottom Section: CTA Button & Note Text */}
        <div className="w-full space-y-0.5 sm:space-y-1.5 shrink-0 pt-0.5">
          <Link
            to={to}
            search={search}
            className="inline-flex w-full items-center justify-center rounded-sm px-1.5 py-1 font-sans font-black uppercase tracking-tighter shadow-md transition hover:brightness-110 sm:rounded-md sm:px-4 sm:py-2 sm:tracking-wider"
            style={{
              background: "linear-gradient(90deg, #9B711D, #E1B95A, #9B711D)",
              color: "#111A3A",
              border: "1px solid #9B711D",
              fontSize: "clamp(8px, 2vw, 13px)",
            }}
          >
            {buttonText}
          </Link>

          <p className="text-[6.5px] xs:text-[8px] sm:text-[9.5px] md:text-[10.5px] font-bold text-white/95 leading-tight scale-95 sm:scale-100">
            {noteText}
          </p>
        </div>

      </div>

    </div>
  );
}
