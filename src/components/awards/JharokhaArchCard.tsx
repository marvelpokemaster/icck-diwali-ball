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
    <div className="relative flex flex-col items-center w-full max-w-[310px] mx-auto h-[460px] drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)]">
      
      {/* Top Floating Ribbon Badge if present */}
      {ribbonText && (
        <div className="absolute -top-4 z-40 bg-gradient-to-r from-[#f59e0b] via-[#f7b731] to-[#d97706] text-[#0c1445] font-black uppercase text-[10px] sm:text-[11px] tracking-[0.16em] px-4 py-1 rounded-md shadow-xl border border-amber-200">
          {ribbonText}
        </div>
      )}

      {/* Synchronized Arch Background & Double Gold Border SVG Container */}
      <svg
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        viewBox="0 0 300 460"
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
            <stop offset="0%" stopColor="#FFF7ED" />
            <stop offset="25%" stopColor="#FEF08A" />
            <stop offset="60%" stopColor="#E5C158" />
            <stop offset="100%" stopColor="#92400E" />
          </linearGradient>
        </defs>

        {/* Outer Pointed Onion-Dome Arch Path Fill & Gold Outer Border */}
        <path
          d="M 150,12 
             C 158,26 176,38 204,45 
             C 252,58 284,78 284,120 
             L 284,432 
             Q 284,448 268,448 
             L 32,448 
             Q 16,448 16,432 
             L 16,120 
             C 16,78 48,58 96,45 
             C 124,38 142,26 150,12 Z"
          fill={`url(#bgGrad-${cardId})`}
          stroke={`url(#goldGrad-${cardId})`}
          strokeWidth="3.5"
        />

        {/* Inner Dotted Gold Accent Border */}
        <path
          d="M 150,20 
             C 156,30 171,41 197,47 
             C 243,59 274,78 274,118 
             L 274,424 
             Q 274,438 260,438 
             L 40,438 
             Q 26,438 26,424 
             L 26,118 
             C 26,78 57,59 103,47 
             C 129,41 144,30 150,20 Z"
          stroke="#FEF08A"
          strokeWidth="1.2"
          strokeDasharray="4 3"
          opacity="0.8"
        />
      </svg>

      {/* Inner Card Responsive Content Overlay */}
      <div className="relative z-20 w-full h-full px-5 pt-14 pb-7 flex flex-col items-center justify-between text-center">
        
        {/* Top Section: Illustration & Title */}
        <div className="flex flex-col items-center gap-2 w-full">
          <div className="h-24 flex items-center justify-center">
            {illustration}
          </div>
          
          <h2 className="font-serif text-sm sm:text-base font-bold uppercase tracking-[0.12em] text-white px-1 leading-snug">
            {title}
          </h2>

          <div className="flex items-baseline justify-center gap-2 mt-1">
            <span className="font-serif text-3xl sm:text-4xl font-black text-white drop-shadow">
              {price}
            </span>
            {strikePrice && (
              <span className="text-xs sm:text-sm line-through text-white/70">
                {strikePrice}
              </span>
            )}
          </div>

          {badgeText && (
            <span className="rounded-full bg-amber-400/20 px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#FEF08A] border border-amber-300/40">
              {badgeText}
            </span>
          )}
        </div>

        {/* Bottom Section: CTA Button & Note */}
        <div className="w-full space-y-2 pt-3">
          <Link
            to={to}
            search={search}
            className="w-full inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#f59e0b] via-[#f7b731] to-[#d97706] px-5 py-2.5 font-sans text-xs font-black uppercase tracking-wider text-[#0c1445] shadow-lg transition hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
          >
            {buttonText}
          </Link>

          <p className="text-[11px] font-medium text-slate-200/90 leading-tight">
            {noteText}
          </p>
        </div>

      </div>

    </div>
  );
}
