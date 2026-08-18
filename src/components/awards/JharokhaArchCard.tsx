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
  const isBundle = Boolean(ribbonText);

  return (
    <div
      className={`relative flex flex-col items-center w-[92%] xs:w-[94%] max-w-[355px] xs:max-w-[375px] sm:max-w-[280px] md:max-w-[325px] mx-auto h-[465px] xs:h-[495px] sm:h-[450px] md:h-[480px] transition-all duration-300 sm:hover:-translate-y-1.5 ${
        isBundle
          ? "drop-shadow-[0_20px_45px_rgba(251,191,36,0.35)] sm:scale-[1.02]"
          : "drop-shadow-[0_16px_36px_rgba(0,0,0,0.9)] sm:hover:drop-shadow-[0_22px_45px_rgba(251,191,36,0.35)]"
      }`}
    >
      
      {/* Top Floating Ribbon Badge if present */}
      {ribbonText && (
        <div className="absolute -top-3.5 sm:-top-4 z-40 bg-gradient-to-r from-[#f59e0b] via-[#f7b731] to-[#d97706] text-[#0c1445] font-black uppercase text-[10px] xs:text-xs md:text-sm tracking-wide sm:tracking-[0.14em] px-3.5 sm:px-5 py-1 sm:py-1.5 rounded-sm sm:rounded-md shadow-2xl border border-amber-200 whitespace-nowrap animate-pulse">
          {ribbonText}
        </div>
      )}

      {/* Mughal Cusped Arch Background, Geometric Jaali Motifs & Double Gold Border SVG Container */}
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

          {/* Traditional Geometric Jaali Lattice Motif Pattern */}
          <pattern id={`jaaliPattern-${cardId}`} width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M15 0 L30 15 L15 30 L0 15 Z" fill="none" stroke="#FDE047" strokeWidth="0.6" opacity="0.18" />
            <circle cx="15" cy="15" r="4" fill="none" stroke="#FDE047" strokeWidth="0.5" opacity="0.15" />
            <path d="M8 8 L22 22 M22 8 L8 22" stroke="#FDE047" strokeWidth="0.4" opacity="0.12" />
            <circle cx="15" cy="0" r="1.2" fill="#FDE047" opacity="0.25" />
            <circle cx="30" cy="15" r="1.2" fill="#FDE047" opacity="0.25" />
            <circle cx="15" cy="30" r="1.2" fill="#FDE047" opacity="0.25" />
            <circle cx="0" cy="15" r="1.2" fill="#FDE047" opacity="0.25" />
          </pattern>
        </defs>

        {/* Outer Official Mughal Cusped Arch Path Fill & Gold Outer Border */}
        <path
          d={ARCH_PATH}
          fill={`url(#bgGrad-${cardId})`}
          stroke={`url(#goldGrad-${cardId})`}
          strokeWidth={isBundle ? "5.5" : "4.5"}
          strokeLinejoin="round"
        />

        {/* Rich Geometric Jaali Lattice Overlay */}
        <path
          d={ARCH_PATH}
          fill={`url(#jaaliPattern-${cardId})`}
        />

        {/* Geometric Corner Starburst Motifs */}
        <g stroke="#FEF08A" strokeWidth="0.8" opacity="0.35" fill="none">
          <circle cx="70" cy="190" r="8" />
          <path d="M70 178 L70 202 M58 190 L82 190" />
          <circle cx="330" cy="190" r="8" />
          <path d="M330 178 L330 202 M318 190 L342 190" />
        </g>

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

      {/* Inner Card Content Overlay — EXPANDED MOBILE CARD WIDTH FOR ZERO SIDE WHITE SPACE */}
      <div className="relative z-20 w-full h-full px-5 xs:px-6 sm:px-5 pt-11 xs:pt-13 sm:pt-11 pb-4 sm:pb-5 flex flex-col items-center justify-between text-center">
        
        {/* Top Section: Vector Artwork */}
        <div className="h-38 xs:h-42 sm:h-38 md:h-44 flex items-center justify-center shrink-0 mt-2 xs:mt-3 sm:mt-2">
          {illustration}
        </div>
        
        {/* Middle Section: Title, Price & Badge */}
        <div className="flex flex-col items-center gap-1.5 sm:gap-2 w-full my-auto py-1">
          <h2 className="font-serif text-base xs:text-lg sm:text-base md:text-lg font-black uppercase tracking-wider text-white px-1 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
            {title}
          </h2>

          <div className="flex items-baseline justify-center gap-2 my-1">
            <span className="font-serif text-4xl xs:text-5xl sm:text-4xl md:text-5xl font-black text-[#FEF08A] drop-shadow-[0_4px_14px_rgba(0,0,0,0.95)]">
              {price}
            </span>
            {strikePrice && (
              <span className="text-xs xs:text-sm line-through text-white/80 font-bold bg-black/30 px-1.5 py-0.5 rounded border border-white/20">
                {strikePrice}
              </span>
            )}
          </div>

          {badgeText && (
            <span className="rounded-full bg-gradient-to-r from-amber-500/30 via-amber-400/40 to-amber-500/30 px-3.5 sm:px-4.5 py-0.5 text-[10.5px] xs:text-xs font-black uppercase tracking-wider text-[#FEF08A] border border-amber-300/60 shadow-md">
              {badgeText}
            </span>
          )}
        </div>

        {/* Bottom Section: Fitted CTA Button + Note Text */}
        <div className="w-full space-y-1.5 sm:space-y-2 shrink-0 pt-0.5 flex flex-col items-center">
          <Link
            to={to}
            search={search}
            className="w-[86%] xs:w-[88%] sm:w-[84%] md:w-[86%] max-w-[260px] inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] px-3.5 sm:px-4 py-2.5 xs:py-3 sm:py-2.5 md:py-3 font-sans text-xs xs:text-sm sm:text-xs md:text-sm font-black uppercase tracking-wider text-[#0c1445] shadow-xl transition hover:brightness-110 active:scale-[0.98]"
          >
            {buttonText}
          </Link>

          <p className="text-xs xs:text-xs sm:text-xs md:text-xs font-bold text-white/95 leading-tight px-1">
            {noteText}
          </p>
        </div>

      </div>

    </div>
  );
}
