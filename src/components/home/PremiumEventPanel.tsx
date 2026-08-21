import React from "react";
import { Calendar, MapPin, Sparkles, ChevronRight, Award, Ticket } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function PremiumEventPanel() {
  return (
    <section className="relative z-20 mx-auto w-[92vw] max-w-[1600px] px-2 sm:px-4 mb-8">
      
      {/* Main Glassmorphism Panel */}
      <div className="relative overflow-hidden rounded-[2rem] border border-amber-400/20 bg-gradient-to-br from-[#060D2B]/85 via-[#091442]/75 to-[#050A20]/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        
        {/* Subtle Inner Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-200/5 to-transparent pointer-events-none" />
        
        {/* Corner Ornaments */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-amber-300/30 rounded-tl-[2rem] pointer-events-none opacity-50" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-amber-300/30 rounded-br-[2rem] pointer-events-none opacity-50" />

        <div className="relative z-10 flex flex-col lg:flex-row p-8 sm:p-12 lg:p-14 xl:p-16 gap-10 lg:gap-14 xl:gap-20 items-center lg:items-stretch">
          
          {/* LEFT COLUMN: Event Description */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center text-center lg:text-left">
            
            {/* Supertitle */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <Sparkles className="size-4 text-amber-400" />
              <span className="text-amber-400/90 text-sm font-bold tracking-widest uppercase">The Premier Indian Gala</span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black leading-[1.1] tracking-wide text-[#FEF08A] drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)] uppercase mb-6">
              ICCK Diwali Ball 2026
            </h1>

            {/* Description */}
            <p className="text-amber-100/80 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 font-medium">
              Join us for an unforgettable evening of celebration, high-level networking, and cultural excellence as we honor the vibrant ties between India and Korea.
            </p>

            {/* Metadata Grid */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10 text-sm font-semibold text-amber-100/90">
              <div className="flex items-center gap-2 bg-[#060D2B]/50 px-4 py-2.5 rounded-xl border border-amber-500/20 shadow-inner">
                <Calendar className="size-4 text-[#F59E0B]" />
                <span>Dec 5th, 2026 | 18:30</span>
              </div>
              <div className="flex items-center gap-2 bg-[#060D2B]/50 px-4 py-2.5 rounded-xl border border-amber-500/20 shadow-inner">
                <MapPin className="size-4 text-[#F59E0B]" />
                <span>Fairmont Ambassador, Seoul</span>
              </div>
            </div>

            {/* Main CTA */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="mailto:events@indochamkorea.org?subject=Diwali%20Ball%20Sponsorship%20Enquiry"
                className="group relative inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-b from-[#FFF7ED] via-[#FDE047] to-[#CA8A04] border-t-2 border-yellow-100 border-b-2 border-amber-800/60 px-8 py-3.5 font-sans text-sm sm:text-base font-black uppercase tracking-[0.14em] text-[#060c2c] shadow-[0_8px_25px_rgba(245,158,11,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-95 hover:shadow-[0_12px_35px_rgba(245,158,11,0.6)]"
              >
                <span className="drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)]">Sponsor Enquiry</span>
                <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" strokeWidth={3} />
                
                {/* Button Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </div>

          {/* Vertical Divider (Desktop only) */}
          <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-amber-500/30 to-transparent" />
          
          {/* Horizontal Divider (Mobile only) */}
          <div className="block lg:hidden w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent my-2" />

          {/* RIGHT COLUMN: Action Cards */}
          <div className="w-full lg:w-[55%] flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6 justify-center">
            
            {/* Card 1: Business Awards */}
            <Link
              to="/awards"
              className="group relative flex-1 flex flex-col justify-between rounded-2xl border border-amber-400/20 bg-[#0A1136]/60 backdrop-blur-sm p-6 sm:p-8 transition-all duration-300 hover:bg-[#0C164A]/80 hover:border-amber-400/40 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-400/30 flex items-center justify-center mb-6 shadow-inner">
                  <Award className="size-6 text-amber-400" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase tracking-wide text-white mb-3 group-hover:text-amber-200 transition-colors">
                  Business Awards
                </h3>
                <p className="text-amber-100/70 text-sm leading-relaxed mb-8">
                  Honoring measurable achievement in trade, investment, and innovation across the India–Korea corridor.
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between mt-auto pt-5 border-t border-amber-400/10">
                <span className="text-xl font-bold text-amber-400">$125</span>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-200/80 group-hover:text-amber-400 transition-colors flex items-center gap-1">
                  Nominate <ChevronRight className="size-3" />
                </span>
              </div>
            </Link>

            {/* Card 2: Diwali Ball Tickets */}
            <a
              href="mailto:events@indochamkorea.org?subject=Diwali%20Ball%20Ticket%20Enquiry"
              className="group relative flex-1 flex flex-col justify-between rounded-2xl border border-amber-400/20 bg-[#0A1136]/60 backdrop-blur-sm p-6 sm:p-8 transition-all duration-300 hover:bg-[#0C164A]/80 hover:border-amber-400/40 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-400/30 flex items-center justify-center mb-6 shadow-inner">
                  <Ticket className="size-6 text-amber-400" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase tracking-wide text-white mb-3 group-hover:text-amber-200 transition-colors">
                  Diwali Ball
                </h3>
                <p className="text-amber-100/70 text-sm leading-relaxed mb-8">
                  Secure your seat for an evening of authentic cuisine, vibrant dance performances, and high-level networking.
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between mt-auto pt-5 border-t border-amber-400/10">
                <span className="text-xl font-bold text-amber-400">$100</span>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-200/80 group-hover:text-amber-400 transition-colors flex items-center gap-1">
                  Buy Tickets <ChevronRight className="size-3" />
                </span>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
