import React from "react";

export function DiyaLamp({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={`overflow-visible ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="diyaFlameGlow" cx="50%" cy="30%" r="40%">
          <stop offset="0%" stopColor="#FFF7ED" />
          <stop offset="40%" stopColor="#F59E0B" />
          <stop offset="80%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id="brassGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="50%" stopColor="#E5C158" />
          <stop offset="100%" stopColor="#92400E" />
        </linearGradient>

        {/* CSS Keyframes for Flame Flickering & Dancing Motion */}
        <style>{`
          @keyframes flameDance {
            0% { transform: scale(1) rotate(0deg) translateY(0px); opacity: 0.95; }
            25% { transform: scale(1.08, 0.94) rotate(-3deg) translateY(-1px); opacity: 1; }
            50% { transform: scale(0.95, 1.06) rotate(3deg) translateY(-2px); opacity: 0.9; }
            75% { transform: scale(1.04, 0.97) rotate(-2deg) translateY(-1px); opacity: 1; }
            100% { transform: scale(1) rotate(0deg) translateY(0px); opacity: 0.95; }
          }
          @keyframes flamePulse {
            0%, 100% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(1.25); opacity: 0.95; }
          }
          @keyframes risingSpark {
            0% { transform: translateY(0) scale(1); opacity: 0.9; }
            100% { transform: translateY(-25px) scale(0.2); opacity: 0; }
          }
          .animate-flame-dance {
            animation: flameDance 1.4s ease-in-out infinite alternate;
            transform-origin: 50px 48px;
          }
          .animate-flame-pulse {
            animation: flamePulse 2s ease-in-out infinite alternate;
            transform-origin: 50px 32px;
          }
          .animate-spark-1 {
            animation: risingSpark 1.6s ease-out infinite;
          }
          .animate-spark-2 {
            animation: risingSpark 2.1s ease-out infinite 0.7s;
          }
        `}</style>
      </defs>

      {/* Luminous Pulsing Flame Aura */}
      <circle cx="50" cy="32" r="28" fill="url(#diyaFlameGlow)" className="animate-flame-pulse" />

      {/* Rising Spark Embers from Flame Tip */}
      <circle cx="50" cy="20" r="1.5" fill="#FEF08A" className="animate-spark-1" />
      <circle cx="48" cy="18" r="1.2" fill="#F59E0B" className="animate-spark-2" />

      {/* Dancing / Flickering Outer Flame */}
      <path
        d="M50 8 C55 20, 61 28, 61 38 C61 47, 55 50, 50 50 C45 50, 39 47, 39 38 C39 28, 45 20, 50 8 Z"
        fill="#F59E0B"
        className="animate-flame-dance"
      />

      {/* Dancing Inner Flame Core */}
      <path
        d="M50 16 C53 24, 57 30, 57 38 C57 43, 53 46, 50 46 C47 46, 43 43, 43 38 C43 30, 47 24, 50 16 Z"
        fill="#FEF08A"
        className="animate-flame-dance"
      />

      {/* Brass Diya Base Body */}
      <path
        d="M15 50 C15 50 20 78 50 78 C80 78 85 50 85 50 C85 50 92 48 88 56 C80 74 65 85 50 85 C35 85 20 74 12 56 C8 48 15 50 15 50 Z"
        fill="url(#brassGrad)"
        stroke="#B8860B"
        strokeWidth="1.5"
      />
      <path d="M15 50 Q50 62 85 50 Q50 56 15 50 Z" fill="#92400E" />
      <path d="M38 82 L62 82 L66 90 L34 90 Z" fill="url(#brassGrad)" stroke="#92400E" strokeWidth="1" />
    </svg>
  );
}

export function HangingDiyaString({ className = "w-6 h-48" }: { className?: string }) {
  return (
    <svg className={`overflow-visible ${className}`} viewBox="0 0 60 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* String */}
      <line x1="30" y1="0" x2="30" y2="160" stroke="#E5C158" strokeWidth="2" strokeDasharray="4 3" />
      {/* Decorative Beads */}
      <circle cx="30" cy="30" r="5" fill="#F59E0B" />
      <circle cx="30" cy="65" r="5" fill="#EF4444" />
      <circle cx="30" cy="100" r="5" fill="#F59E0B" />
      <circle cx="30" cy="135" r="5" fill="#FEF08A" />
      {/* Diya at bottom with dancing flame */}
      <g transform="translate(-20, 110)">
        <DiyaLamp className="w-18 h-18" />
      </g>
    </svg>
  );
}

export function IndianDancerIllustration({ className = "w-24 h-32" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-full animate-pulse" />
      
      <svg className="w-full h-full relative z-10" viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lehengaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EC4899" />
            <stop offset="50%" stopColor="#BE123C" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <linearGradient id="dupattaGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>

        <circle cx="50" cy="22" r="8" fill="#FDBA74" />
        <circle cx="50" cy="19" r="1.5" fill="#EF4444" />
        <path d="M42 16 Q50 8 58 16 Z" fill="#F59E0B" />
        <circle cx="50" cy="10" r="3" fill="#FEF08A" />

        <path d="M25 36 Q38 28 50 30 Q62 28 75 36" stroke="#FDBA74" strokeWidth="4" strokeLinecap="round" />
        <circle cx="23" cy="37" r="2.5" fill="#EF4444" />
        <circle cx="77" cy="37" r="2.5" fill="#EF4444" />

        <path d="M43 30 L57 30 L54 44 L46 44 Z" fill="#BE123C" stroke="#FEF08A" strokeWidth="1" />
        <path d="M40 32 Q50 38 60 32" stroke="url(#dupattaGrad)" strokeWidth="3" />

        <path
          d="M50 44 C30 52, 12 75, 8 105 C30 112, 70 112, 92 105 C88 75, 70 52, 50 44 Z"
          fill="url(#lehengaGrad)"
          stroke="#FEF08A"
          strokeWidth="2"
        />

        <path d="M8 105 Q50 115 92 105" stroke="#FEF08A" strokeWidth="4" fill="none" />
        <path d="M50 44 L25 108 M50 44 L50 111 M50 44 L75 108" stroke="#FEF08A" strokeWidth="1.5" opacity="0.7" />

        <path d="M40 108 L36 120 M60 108 L64 120" stroke="#FDBA74" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="35" cy="120" r="2" fill="#FEF08A" />
        <circle cx="65" cy="120" r="2" fill="#FEF08A" />
      </svg>
    </div>
  );
}

export function GoldTrophyIllustration({ className = "w-24 h-28" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-amber-400/25 blur-xl rounded-full animate-pulse" />
      <svg className="w-full h-full relative z-10" viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="trophyGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFF7ED" />
            <stop offset="40%" stopColor="#FEF08A" />
            <stop offset="80%" stopColor="#E5C158" />
            <stop offset="100%" stopColor="#92400E" />
          </linearGradient>
        </defs>

        <path d="M22 25 C8 25 8 50 26 55" stroke="url(#trophyGold)" strokeWidth="6" strokeLinecap="round" fill="none" />
        <path d="M78 25 C92 25 92 50 74 55" stroke="url(#trophyGold)" strokeWidth="6" strokeLinecap="round" fill="none" />

        <path d="M22 15 L78 15 L70 60 C65 72 35 72 30 60 Z" fill="url(#trophyGold)" stroke="#B8860B" strokeWidth="2" />
        <polygon points="50,26 53,35 62,35 54,41 57,50 50,44 43,50 46,41 38,35 47,35" fill="#92400E" />

        <path d="M44 68 L56 68 L54 85 L46 85 Z" fill="url(#trophyGold)" />
        <rect x="26" y="85" width="48" height="12" rx="3" fill="#451A03" stroke="#FEF08A" strokeWidth="1.5" />
        <rect x="22" y="97" width="56" height="8" rx="2" fill="url(#trophyGold)" />
      </svg>
    </div>
  );
}

export function DualMandalaEmblem({ className = "w-32 h-20" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="w-16 h-16 rounded-full bg-[#1e1b4b] border-2 border-[#FEF08A] shadow-lg flex items-center justify-center z-10 overflow-hidden transform -translate-x-2">
        <IndianDancerIllustration className="w-12 h-14" />
      </div>
      <div className="w-16 h-16 rounded-full bg-[#9f1239] border-2 border-[#FEF08A] shadow-lg flex items-center justify-center z-20 overflow-hidden transform translate-x-2">
        <GoldTrophyIllustration className="w-12 h-14" />
      </div>
    </div>
  );
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
