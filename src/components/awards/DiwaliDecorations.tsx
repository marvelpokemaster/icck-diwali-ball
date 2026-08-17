import React from "react";

export function DiyaLamp({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF7ED" />
          <stop offset="30%" stopColor="#F59E0B" />
          <stop offset="70%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#78350F" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="40%" stopColor="#F59E0B" />
          <stop offset="80%" stopColor="#B45309" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>
      </defs>
      {/* Outer Flame Glow */}
      <circle cx="50" cy="30" r="28" fill="url(#flameGlow)" opacity="0.85" />
      {/* Flame Drop */}
      <path
        d="M50 8 Q60 25 50 42 Q40 25 50 8 Z"
        fill="#FFF7ED"
        stroke="#F59E0B"
        strokeWidth="1.5"
      />
      <path
        d="M50 16 Q55 27 50 38 Q45 27 50 16 Z"
        fill="#F59E0B"
      />
      <circle cx="50" cy="32" r="4" fill="#FEF08A" />
      
      {/* Diya Clay / Brass Bowl Base */}
      <path
        d="M15 50 Q50 90 85 50 Q50 62 15 50 Z"
        fill="url(#brassGrad)"
        stroke="#451A03"
        strokeWidth="2"
      />
      {/* Ornate Rim Motifs */}
      <path
        d="M20 52 Q50 64 80 52"
        stroke="#FEF08A"
        strokeWidth="2.5"
        strokeDasharray="4 2"
        fill="none"
      />
      {/* Stand Base */}
      <path
        d="M38 72 L62 72 L68 85 L32 85 Z"
        fill="url(#brassGrad)"
        stroke="#451A03"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function HangingDiyaString({ className = "w-8 h-48" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Vertical Beaded String */}
      <svg className="w-full h-full" viewBox="0 0 40 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="0" x2="20" y2="200" stroke="#FEF08A" strokeWidth="2" strokeDasharray="3 3" />
        <circle cx="20" cy="30" r="4" fill="#F59E0B" stroke="#78350F" strokeWidth="1" />
        <circle cx="20" cy="70" r="5" fill="#DC2626" stroke="#78350F" strokeWidth="1" />
        <circle cx="20" cy="110" r="4" fill="#F59E0B" stroke="#78350F" strokeWidth="1" />
        <circle cx="20" cy="150" r="6" fill="#FEF08A" stroke="#78350F" strokeWidth="1.5" />
        <g transform="translate(-10, 150) scale(0.6)">
          <DiyaLamp className="w-16 h-16" />
        </g>
      </svg>
    </div>
  );
}

export function IndianDancerIllustration({ className = "w-24 h-28" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Background Starburst Aura */}
      <div className="absolute inset-0 bg-amber-400/20 blur-lg rounded-full animate-pulse" />
      <svg className="w-full h-full relative z-10" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="skirtGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F43F5E" />
            <stop offset="50%" stopColor="#BE123C" />
            <stop offset="100%" stopColor="#881337" />
          </linearGradient>
          <linearGradient id="dupattaGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#FEF08A" />
          </linearGradient>
        </defs>
        
        {/* Background Starburst Sparkles */}
        {[15, 45, 75, 105, 135, 165].map((ang, i) => (
          <line
            key={i}
            x1="50"
            y1="50"
            x2={50 + 42 * Math.cos((ang * Math.PI) / 180)}
            y2={50 + 42 * Math.sin((ang * Math.PI) / 180)}
            stroke="#FEF08A"
            strokeWidth="1"
            strokeDasharray="2 4"
            opacity="0.6"
          />
        ))}

        {/* Flared Ghagra / Dance Skirt */}
        <path
          d="M50 45 Q20 70 10 100 Q50 112 90 100 Q80 70 50 45 Z"
          fill="url(#skirtGrad)"
          stroke="#FEF08A"
          strokeWidth="2"
        />
        {/* Gold Border Motifs on Skirt */}
        <path
          d="M14 96 Q50 108 86 96"
          stroke="#F59E0B"
          strokeWidth="4"
          fill="none"
        />
        <path
          d="M16 92 Q50 104 84 92"
          stroke="#FEF08A"
          strokeWidth="1.5"
          strokeDasharray="3 2"
          fill="none"
        />

        {/* Dupatta / Shawl Flow */}
        <path
          d="M32 35 C15 45 5 70 15 85 C25 65 35 48 45 42 Z"
          fill="url(#dupattaGrad)"
          opacity="0.9"
        />
        <path
          d="M68 35 C85 45 95 70 85 85 C75 65 65 48 55 42 Z"
          fill="url(#dupattaGrad)"
          opacity="0.9"
        />

        {/* Torso & Choli */}
        <path
          d="M40 32 L60 32 L55 48 L45 48 Z"
          fill="#F59E0B"
          stroke="#78350F"
          strokeWidth="1"
        />

        {/* Head & Hair Crown */}
        <circle cx="50" cy="22" r="8" fill="#FDE047" />
        <circle cx="50" cy="22" r="6.5" fill="#78350F" />
        {/* Bindi & Maang Tikka */}
        <circle cx="50" cy="20" r="1.5" fill="#DC2626" />
        <line x1="50" y1="14" x2="50" y2="18" stroke="#FEF08A" strokeWidth="1.5" />

        {/* Dance Mudra Arms */}
        <path
          d="M40 34 C30 25 22 15 28 10 C32 14 38 24 42 32 Z"
          fill="#FDE047"
          stroke="#78350F"
          strokeWidth="1"
        />
        <path
          d="M60 34 C70 25 78 15 72 10 C68 14 62 24 58 32 Z"
          fill="#FDE047"
          stroke="#78350F"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

export function GoldTrophyIllustration({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 bg-amber-400/25 blur-xl rounded-full animate-pulse" />
      <svg className="w-full h-full relative z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="trophyGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFF7ED" />
            <stop offset="30%" stopColor="#FEF08A" />
            <stop offset="70%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <linearGradient id="baseGold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#78350F" />
            <stop offset="50%" stopColor="#451A03" />
            <stop offset="100%" stopColor="#1E1B4B" />
          </linearGradient>
        </defs>

        {/* Sparkle Rays */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((ang, i) => (
          <line
            key={i}
            x1="50"
            y1="40"
            x2={50 + 38 * Math.cos((ang * Math.PI) / 180)}
            y2={40 + 38 * Math.sin((ang * Math.PI) / 180)}
            stroke="#FEF08A"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            opacity="0.75"
          />
        ))}

        {/* Handles */}
        <path
          d="M20 18 C10 18 10 42 28 42 M80 18 C90 18 90 42 72 42"
          stroke="url(#trophyGold)"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Cup Body */}
        <path
          d="M25 12 L75 12 L68 48 C62 62 38 62 32 48 Z"
          fill="url(#trophyGold)"
          stroke="#78350F"
          strokeWidth="1.5"
        />

        {/* Embossed Star */}
        <polygon
          points="50,22 53,30 62,30 55,35 58,43 50,38 42,43 45,35 38,30 47,30"
          fill="#FFF7ED"
          stroke="#B45309"
          strokeWidth="1"
        />

        {/* Stem */}
        <rect x="44" y="60" width="12" height="14" fill="url(#trophyGold)" stroke="#78350F" strokeWidth="1" />
        
        {/* Tiered Pedestal Base */}
        <path d="M30 74 L70 74 L75 88 L25 88 Z" fill="url(#baseGold)" stroke="#F59E0B" strokeWidth="1.5" />
        <rect x="22" y="88" width="56" height="6" fill="url(#trophyGold)" rx="1.5" />
      </svg>
    </div>
  );
}

/* Two Interlocking Scalloped Blue & Red Circular Badges for Card 3 */
export function DualInterlockingBadges({ className = "w-24 h-22" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 bg-amber-400/30 blur-lg rounded-full animate-pulse" />
      <svg className="w-full h-full relative z-10" viewBox="0 0 140 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="badgeGoldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFF7ED" />
            <stop offset="40%" stopColor="#FEF08A" />
            <stop offset="80%" stopColor="#E5C158" />
            <stop offset="100%" stopColor="#92400E" />
          </linearGradient>
        </defs>

        {/* 1. Left Scalloped Circle (Blue `#1e1b4b`) */}
        <g>
          <circle cx="45" cy="40" r="34" fill="#1e1b4b" stroke="url(#badgeGoldGrad)" strokeWidth="3" />
          <circle cx="45" cy="40" r="29" fill="none" stroke="#FEF08A" strokeWidth="1" strokeDasharray="3 2" opacity="0.8" />
          
          {/* Mini Dancer Silhouette inside Left Badge */}
          <g transform="translate(25, 20) scale(0.4)">
            <path d="M50 20 C35 30 20 50 15 80 C35 88 65 88 85 80 C80 50 65 30 50 20 Z" fill="#F472B6" />
            <circle cx="50" cy="14" r="7" fill="#FEF08A" />
          </g>
        </g>

        {/* 2. Right Scalloped Circle (Red `#881337`) */}
        <g>
          <circle cx="95" cy="40" r="34" fill="#881337" stroke="url(#badgeGoldGrad)" strokeWidth="3" />
          <circle cx="95" cy="40" r="29" fill="none" stroke="#FEF08A" strokeWidth="1" strokeDasharray="3 2" opacity="0.8" />
          
          {/* Mini Trophy & Icons inside Right Badge */}
          <g transform="translate(80, 20) scale(0.35)">
            <path d="M22 15 L78 15 L70 55 C65 65 35 65 30 55 Z" fill="url(#badgeGoldGrad)" />
            <rect x="28" y="68" width="44" height="10" fill="#FEF08A" rx="2" />
          </g>
        </g>

        {/* Gold Interlocking Center Sparkle */}
        <circle cx="70" cy="40" r="4" fill="#FEF08A" stroke="#92400E" strokeWidth="1" />
      </svg>
    </div>
  );
}

export function FourIconBundleEmblem({ className = "w-24 h-24" }: { className?: string }) {
  return <DualInterlockingBadges className={className} />;
}

export function RangoliMandala({ className = "w-48 h-48" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="95" stroke="#E5C158" strokeWidth="2" strokeDasharray="6 3" />
      <circle cx="100" cy="100" r="85" fill="#BE123C" opacity="0.25" stroke="#F5E3A1" strokeWidth="1.5" />
      
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 100 100)`}>
          <path d="M100 15 C110 40, 115 60, 100 75 C85 60, 90 40, 100 15 Z" fill="#E5C158" opacity="0.9" />
          <circle cx="100" cy="20" r="3" fill="#FFF7ED" />
        </g>
      ))}
      
      <circle cx="100" cy="100" r="45" fill="#881337" stroke="#FEF08A" strokeWidth="2" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 100 100)`}>
          <polygon points="100,60 106,85 100,95 94,85" fill="#F5E3A1" />
        </g>
      ))}
      <circle cx="100" cy="100" r="18" fill="#FEF08A" />
      <circle cx="100" cy="100" r="10" fill="#BE123C" />
    </svg>
  );
}

export function FireworkSparkle({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 50 50)`}>
          <line x1="50" y1="20" x2="50" y2="5" stroke="#FEF08A" strokeWidth="2" strokeLinecap="round" />
          <circle cx="50" cy="2" r="2" fill="#F59E0B" />
        </g>
      ))}
      <circle cx="50" cy="50" r="6" fill="#FEF08A" />
    </svg>
  );
}
