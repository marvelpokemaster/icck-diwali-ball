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

// Official Mughal cusped multifoil arch path
const ARCH_PATH =
  "M40 480 L40 190 C40 150 70 150 78 120 C86 92 120 96 128 70 C140 40 170 55 200 30 C230 55 260 40 272 70 C280 96 314 92 322 120 C330 150 360 150 360 190 L360 480 Z";

const INNER_FILIGREE_PATH =
  "M48 468 L48 192 C48 155 75 155 83 127 C90 101 121 104 129 80 C140 54 168 67 200 44 C232 67 260 54 271 80 C279 104 310 101 317 127 C325 155 352 155 352 192 L352 468 Z";

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
    <div className="relative flex flex-col items-center w-full max-w-[265px] xs:max-w-[295px] sm:max-w-[280px] md:max-w-[325px] mx-auto h-[445px] xs:h-[475px] sm:h-[450px] md:h-[485px] drop-shadow-[0_16px_36px_rgba(0,0,0,0.9)]">
      
      {/* Top Floating Ribbon Badge if present */}
      {ribbonText && (
        <div className="absolute -top-3.5 sm:-top-4 z-40 bg-gradient-to-r from-[#f59e0b] via-[#f7b731] to-[#d97706] text-[#0c1445] font-black uppercase text-[9.5px] xs:text-xs md:text-sm tracking-wide sm:tracking-[0.14em] px-3 sm:px-5 py-1 sm:py-1.5 rounded-sm sm:rounded-md shadow-2xl border border-amber-200 whitespace-nowrap">
          {ribbonText}
        </div>
      )}

      {/* Mughal Cusped Arch Background & Double Gold/White Border SVG Container */}
      <svg
        className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-visible"
        viewBox="0 0 400 480"
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

        {/* Outer Official Mughal Cusped Arch Path Fill & Gold Outer Border */}
        <path
          d={ARCH_PATH}
          fill={`url(#bgGrad-${cardId})`}
          stroke={`url(#goldGrad-${cardId})`}
          strokeWidth="4.5"
          strokeLinejoin="round"
        />

        {/* Inner Crisp White Accent Filigree Border */}
        <path
          d={INNER_FILIGREE_PATH}
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeDasharray="5 4"
          opacity="0.85"
          strokeLinejoin="round"
        />
      </svg>

      {/* Inner Card Content Overlay — Illustrations Shifted Down, All Items Enlarged */}
      <div className="relative z-20 w-full h-full px-4 sm:px-5 pt-10 xs:pt-12 sm:pt-11 pb-3.5 sm:pb-4 flex flex-col items-center justify-between text-center">
        
        {/* Top Section: Vector Illustration Shifted Down & Enlarged */}
        <div className="h-30 xs:h-36 sm:h-36 md:h-40 flex items-center justify-center shrink-0 mt-3 xs:mt-4 sm:mt-3">
          {illustration}
        </div>
        
        {/* Middle Section: Larger & Bolder Title, Larger Price & Badge */}
        <div className="flex flex-col items-center gap-1.5 sm:gap-2 w-full my-auto">
          <h2 className="font-serif text-xs xs:text-sm sm:text-sm md:text-base font-black uppercase tracking-wider text-white px-1 leading-tight">
            {title}
          </h2>

          <div className="flex items-baseline justify-center gap-1.5 sm:gap-2 my-1">
            <span className="font-serif text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-black text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              {price}
            </span>
            {strikePrice && (
              <span className="text-xs xs:text-sm line-through text-white/80 font-bold">
                {strikePrice}
              </span>
            )}
          </div>

          {badgeText && (
            <span className="rounded-full bg-amber-400/25 px-3 sm:px-4 py-0.5 text-[9.5px] xs:text-xs font-black uppercase tracking-wider text-[#FEF08A] border border-amber-300/50 shadow-md">
              {badgeText}
            </span>
          )}
        </div>

        {/* Bottom Section: Full-Width Thick Gold CTA Button + Note Text */}
        <div className="w-full space-y-1.5 sm:space-y-2 shrink-0 pt-0.5 flex flex-col items-center">
          <Link
            to={to}
            search={search}
            className="w-full sm:w-[94%] inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] px-4 sm:px-5 py-2.5 xs:py-3 md:py-3 font-sans text-xs xs:text-sm font-black uppercase tracking-wider text-[#0c1445] shadow-xl transition hover:brightness-110 active:scale-[0.98]"
          >
            {buttonText}
          </Link>

          <p className="text-[10px] xs:text-xs sm:text-[10px] md:text-xs font-bold text-white/95 leading-tight">
            {noteText}
          </p>
        </div>

      </div>

    </div>
  );
}
