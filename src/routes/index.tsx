import { createFileRoute, Link } from "@tanstack/react-router";
import { Ticket } from "lucide-react";
import { toast } from "sonner";
import icckLogo from "@/assets/icck-logo.png";
import { 
  DiyaLamp, 
  HangingDiyaString, 
  IndianDancerIllustration, 
  GoldTrophyIllustration, 
  DualMandalaEmblem,
  FireworkSparkle 
} from "@/components/awards/DiwaliDecorations";
import { JharokhaArchCard } from "@/components/awards/JharokhaArchCard";
import { HeaderCartouche, ScallopedTrim } from "@/components/awards/JharokhaArchFrame";
import { FirecrackerCanvas } from "@/components/awards/FirecrackerCanvas";

const title = "ICCK Diwali Celebrations 2026 | Diwali Ball & Business Awards";
const description =
  "Book the ICCK Diwali Ball, register for the ICCK Business Awards, or save 15% with the bundle registration. One festive night of Indian–Korean celebration.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-[#0a0e2a] text-white relative font-sans overflow-x-hidden">
      {/* Dynamic Interactive Firecracker Blasting Canvas Overlay */}
      <FirecrackerCanvas />
      
      {/* ---------------- 1. TOP MARIGOLD GOLD HEADER BANNER ---------------- */}
      <header className="relative w-full bg-gradient-to-r from-[#f59e0b] via-[#f7b731] to-[#f59e0b] pt-3 pb-3 shadow-xl z-30">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4">
          
          {/* Left Diya Lamp */}
          <DiyaLamp className="hidden sm:block w-9 h-9 drop-shadow-[0_0_12px_rgba(245,158,11,0.9)]" />

          {/* Center Octagonal Cartouche Badge */}
          <HeaderCartouche className="mx-auto">
            <img
              src={icckLogo}
              alt="ICCK Logo"
              width={940}
              height={347}
              className="h-6 sm:h-7 w-auto brightness-0 invert"
            />
            <div className="text-center sm:text-left border-l-2 border-amber-400/40 pl-3">
              <p className="font-serif text-xs sm:text-base font-black uppercase tracking-[0.18em] text-[#FEF08A] drop-shadow">
                ICCK DIWALI CELEBRATIONS
              </p>
              <p className="text-[9px] sm:text-[11px] tracking-widest text-amber-200 uppercase font-semibold">
                Year 2026 &middot; Diwali Theme &middot; Geometric Motifs
              </p>
            </div>
            <DiyaLamp className="w-7 h-7 drop-shadow-[0_0_10px_rgba(245,158,11,0.9)]" />
          </HeaderCartouche>

          {/* Right Diya Lamp */}
          <DiyaLamp className="hidden sm:block w-9 h-9 drop-shadow-[0_0_12px_rgba(245,158,11,0.9)]" />

        </div>

        {/* Bottom Scalloped Red Floral Trim */}
        <div className="absolute top-full left-0 right-0 z-30 pointer-events-none">
          <ScallopedTrim className="w-full h-4" />
        </div>
      </header>

      {/* ---------------- 2. MAIN FESTIVE HERO & POINTED ARCH CARDS ---------------- */}
      <main className="relative overflow-hidden z-20 pt-10 pb-16">
        
        {/* Left Vertical Hanging Diya String */}
        <div className="pointer-events-none absolute top-4 left-3 z-30 opacity-90 hidden lg:block">
          <HangingDiyaString className="w-12 h-64" />
        </div>

        {/* Right Vertical Hanging Diya String */}
        <div className="pointer-events-none absolute top-4 right-3 z-30 opacity-90 hidden lg:block">
          <HangingDiyaString className="w-12 h-64" />
        </div>

        {/* Ambient Glowing Rangoli Background Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-rangoli opacity-70" aria-hidden />

        <section className="relative z-20 mx-auto max-w-6xl px-4 text-center">
          
          {/* Main Title Banner */}
          <div className="mt-2 mb-10">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-wide text-[#FEF08A] drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)] uppercase">
              ICCK Diwali Ball:
              <br />
              <span className="italic text-[#FFF7ED]">Illuminate Your Celebration!</span>
            </h1>
            <p className="mt-2 text-xs tracking-[0.2em] text-amber-200 uppercase md:text-sm font-semibold">
              Year 2026 &middot; Diwali Theme &middot; Geometric Motifs
            </p>
          </div>

          {/* ---------------- 3. THE 3 POINTED ONION-DOME ARCH CARDS ---------------- */}
          <div className="mt-8 grid gap-8 md:grid-cols-3 items-end max-w-5xl mx-auto px-2">
            
            {/* Card 1: ICCK DIWALI BALL */}
            <JharokhaArchCard
              title="ICCK DIWALI BALL"
              price="$100"
              buttonText="Buy Tickets"
              noteText="Dinner, dance & performances"
              gradientFrom="#2b2673"
              gradientTo="#120f3d"
              illustration={<IndianDancerIllustration className="w-20 h-28" />}
              to="/register"
              search={{ preset: "ball" }}
            />

            {/* Card 2: ICCK BUSINESS AWARDS */}
            <JharokhaArchCard
              title="ICCK BUSINESS AWARDS"
              price="$125"
              buttonText="Register Now"
              noteText="Honoring business excellence"
              gradientFrom="#9f1239"
              gradientTo="#590624"
              illustration={<GoldTrophyIllustration className="w-20 h-26" />}
              to="/awards"
            />

            {/* Card 3: BUNDLE REGISTRATION */}
            <JharokhaArchCard
              ribbonText="DISCOUNTED BUNDLE"
              title="BUNDLE REGISTRATION"
              price="$190"
              strikePrice="($225)"
              badgeText="SAVE 15%"
              buttonText="GET THE BUNDLE"
              noteText="Both events at a discounted price"
              gradientFrom="#9f1239"
              gradientTo="#590624"
              illustration={<DualMandalaEmblem className="w-28 h-20" />}
              to="/register"
              search={{ preset: "bundle" }}
            />

          </div>

          {/* ---------------- 4. BOTTOM ACTION BUTTONS & FIREWORK SPARKLERS ---------------- */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5 relative">
            
            <div className="flex items-center gap-3">
              <FireworkSparkle className="w-10 h-10 text-amber-300 animate-pulse shrink-0" />
              <Link
                to="/awards"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#f59e0b] via-[#f7b731] to-[#d97706] px-9 py-3.5 font-sans text-xs font-black uppercase tracking-[0.18em] text-[#0c1445] shadow-2xl transition hover:brightness-110 hover:scale-[1.03] sm:w-auto"
              >
                <Ticket className="h-4 w-4" /> VIEW ALL EVENTS
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => toast.success("🎆 Festive firecrackers launched! We'll email you event updates.")}
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#f59e0b] via-[#f7b731] to-[#d97706] px-9 py-3.5 font-sans text-xs font-black uppercase tracking-[0.18em] text-[#0c1445] shadow-2xl transition hover:brightness-110 hover:scale-[1.03] sm:w-auto"
              >
                SIGN UP FOR UPDATES
              </button>
              <FireworkSparkle className="w-10 h-10 text-amber-300 animate-pulse shrink-0" />
            </div>

          </div>

          {/* Quick Navigation Footer Links */}
          <nav className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-wider text-amber-200/80">
            <Link to="/nominate" className="hover:text-[#FEF08A] transition-colors">
              Submit a nomination
            </Link>
            <Link to="/register" search={{ preset: undefined }} className="hover:text-[#FEF08A] transition-colors">
              Registration &amp; invoice
            </Link>
            <Link to="/admin" className="hover:text-[#FEF08A] transition-colors">
              Admin dashboard
            </Link>
          </nav>
        </section>
      </main>
    </div>
  );
}
