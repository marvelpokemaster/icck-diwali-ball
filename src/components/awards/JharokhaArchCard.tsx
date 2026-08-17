import React from "react";
import { Link } from "@tanstack/react-router";
import { DiyaLamp } from "./DiwaliDecorations";

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

/* Festive Golden Filigree Divider Motif to fill card height elegantly */
function CardMiddleFiligreeMotif() {
  return (
    <div className="my-1.5 flex flex-col items-center justify-center gap-1 w-full opacity-90">
      <svg className="w-36 h-5 overflow-visible" viewBox="0 0 160 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Center Diamond Gem */}
        <polygon points="80,2 86,10 80,18 74,10" fill="#FEF08A" stroke="#92400E" strokeWidth="0.8" />
        <circle cx="80" cy="10" r="2" fill="#BE123C" />

        {/* Left Filigree Scroll */}
        <path d="M70 10 Q50 3 30 10 Q15 15 5 10" stroke="#FEF08A" strokeWidth="1.2" fill="none" />
        <circle cx="5" cy="10" r="1.8" fill="#F59E0B" />
        <circle cx="40" cy="7" r="1.5" fill="#FEF08A" />

        {/* Right Filigree Scroll */}
        <path d="M90 10 Q110 3 130 10 Q145 15 155 10" stroke="#FEF08A" strokeWidth="1.2" fill="none" />
        <circle cx="155" cy="10" r="1.8" fill="#F59E0B" />
        <circle cx="120" cy="7" r="1.5" fill="#FEF08A" />
      </svg>

      {/* Mini Burning Diya Accent */}
      <DiyaLamp className="w-5 h-5 drop-shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
    </div>
  );
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
  isTwinArch = false,
}: JharokhaArchCardProps) {
  const cardId = title.replace(/[^a-zA-Z0-9]/g, "");

  return (
    <div className="relative flex flex-col items-center w-full max-w-[295px] mx-auto h-[410px] drop-shadow-[0_12px_28px_rgba(0,0,0,0.85)]">
      
      {/* Top Floating Ribbon Badge if present */}
      {ribbonText && (
        <div className="absolute -top-3.5 z-40 bg-gradient-to-r from-[#f59e0b] via-[#f7b731] to-[#d97706] text-[#0c1445] font-black uppercase text-[9px] sm:text-[10px] tracking-[0.14em] px-3.5 py-1 rounded-md shadow-xl border border-amber-200">
          {ribbonText}
        </div>
      )}

      {/* Synchronized Arch Background & Double Gold/White Border SVG Container */}
      <svg
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        viewBox="0 0 300 410"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {isTwinArch ? (
            <linearGradient id={`bgGrad-${cardId}`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1e1b4b" />
              <stop offset="35%" stopColor="#252270" />
              <stop offset="65%" stopColor="#881337" />
              <stop offset="100%" stopColor="#590624" />
            </linearGradient>
          ) : (
            <linearGradient id={`bgGrad-${cardId}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={gradientFrom} />
              <stop offset="100%" stopColor={gradientTo} />
            </linearGradient>
          )}
          
          <linearGradient id={`goldGrad-${cardId}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFF7ED" />
            <stop offset="25%" stopColor="#FEF08A" />
            <stop offset="60%" stopColor="#E5C158" />
            <stop offset="100%" stopColor="#92400E" />
          </linearGradient>
        </defs>

        {/* Outer Pointed Jharokha Arch Path Fill & Gold Outer Border */}
        <path
          d="M 150,10 
             C 158,22 176,33 204,39 
             C 252,50 284,68 284,105 
             L 284,385 
             Q 284,398 268,398 
             L 32,398 
             Q 16,398 16,385 
             L 16,105 
             C 16,68 48,50 96,39 
             C 124,33 142,22 150,10 Z"
          fill={`url(#bgGrad-${cardId})`}
          stroke={`url(#goldGrad-${cardId})`}
          strokeWidth="3.2"
        />

        {/* Inner Crisp White Accent Filigree Border */}
        <path
          d="M 150,17 
             C 156,26 171,36 197,41 
             C 243,51 274,68 274,103 
             L 274,378 
             Q 274,390 260,390 
             L 40,390 
             Q 26,390 26,378 
             L 26,103 
             C 26,68 57,51 103,41 
             C 129,36 144,26 150,17 Z"
          stroke="#ffffff"
          strokeWidth="1.2"
          strokeDasharray="4 3"
          opacity="0.85"
        />
      </svg>

      {/* Inner Card Responsive Content Overlay */}
      <div className="relative z-20 w-full h-full px-4 pt-10 pb-5 flex flex-col items-center justify-between text-center">
        
        {/* Top Section: Illustration & Title */}
        <div className="flex flex-col items-center gap-1 w-full">
          <div className="h-20 flex items-center justify-center">
            {illustration}
          </div>
          
          <h2 className="font-serif text-xs sm:text-sm font-bold uppercase tracking-wider text-white px-1 leading-tight">
            {title}
          </h2>

          <div className="flex items-baseline justify-center gap-1.5 mt-0.5">
            <span className="font-serif text-2xl sm:text-3xl font-black text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {price}
            </span>
            {strikePrice && (
              <span className="text-[11px] sm:text-xs line-through text-white/80">
                {strikePrice}
              </span>
            )}
          </div>

          {badgeText && (
            <span className="rounded-full bg-amber-400/20 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-[#FEF08A] border border-amber-300/40">
              {badgeText}
            </span>
          )}
        </div>

        {/* Middle Festive Golden Filigree Ornament filling space matching royal theme */}
        <CardMiddleFiligreeMotif />

        {/* Bottom Section: CTA Button & Note */}
        <div className="w-full space-y-1 pt-1">
          <Link
            to={to}
            search={search}
            className="w-full inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#f59e0b] via-[#f7b731] to-[#d97706] px-4 py-2 font-sans text-xs font-black uppercase tracking-wider text-[#0c1445] shadow-md transition hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
          >
            {buttonText}
          </Link>

          <p className="text-[10px] font-semibold text-white/90 leading-tight">
            {noteText}
          </p>
        </div>

      </div>

    </div>
  );
}
