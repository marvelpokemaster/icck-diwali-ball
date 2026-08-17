import { createFileRoute, Link } from "@tanstack/react-router";
import { Ticket } from "lucide-react";
import { toast } from "sonner";
import { useEffect } from "react";
import icckLogo from "@/assets/logo.svg";
import heroBg from "@/assets/hero-india-korea.jpg";
import { 
  DiyaLamp, 
  HangingDiyaString, 
  IndianDancerIllustration, 
  GoldTrophyIllustration, 
  FourIconBundleEmblem,
  FireworkSparkle,
  RangoliMandala 
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-white relative font-sans overflow-x-hidden bg-[#080b26]">
      
      {/* ---------------- FESTIVE PALACE HALL BACKGROUND BACKDROP ---------------- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src={heroBg}
          alt="Palace Background Backdrop"
          className="w-full h-full object-cover object-center opacity-30 blur-[2px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080b26]/90 via-[#0a0d33]/85 to-[#06081e]/95" />
        <div className="absolute inset-0 bg-rangoli opacity-60" />
      </div>

      {/* Dynamic Interactive Firecracker Blasting Canvas Overlay */}
      <FirecrackerCanvas />
      
      {/* ---------------- 1. STICKY TOP MARIGOLD GOLD HEADER BANNER ---------------- */}
      <header className="sticky top-0 left-0 right-0 w-full bg-gradient-to-r from-[#f59e0b] via-[#f7b731] to-[#f59e0b] py-1 shadow-2xl z-50">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-2">
          
          {/* Left Diya Lamp */}
          <DiyaLamp className="hidden sm:block w-7 h-7 drop-shadow-[0_0_8px_rgba(245,158,11,0.9)]" />

          {/* Center Octagonal Cartouche Badge */}
          <HeaderCartouche className="mx-auto py-0.5 px-2.5">
            {/* Full-Color Official ICCK Logo */}
            <img
              src={icckLogo}
              alt="ICCK Official Logo"
              width={940}
              height={347}
              className="h-4.5 sm:h-5.5 w-auto object-contain"
            />

            <div className="text-center sm:text-left border-l border-amber-400/40 pl-2">
              <p className="font-serif text-[11px] sm:text-xs font-black uppercase tracking-[0.14em] text-[#FEF08A] drop-shadow leading-none">
                ICCK DIWALI CELEBRATIONS
              </p>
              <p className="text-[8px] sm:text-[9.5px] tracking-widest text-white/90 uppercase font-semibold mt-0.5 leading-none">
                Year 2026 &middot; Diwali Theme &middot; Geometric Motifs
              </p>
            </div>

            <DiyaLamp className="w-5 h-5 drop-shadow-[0_0_6px_rgba(245,158,11,0.9)]" />
          </HeaderCartouche>

          {/* Right Diya Lamp */}
          <DiyaLamp className="hidden sm:block w-7 h-7 drop-shadow-[0_0_8px_rgba(245,158,11,0.9)]" />

        </div>

        {/* Bottom Scalloped Red Floral Trim */}
        <div className="absolute top-full left-0 right-0 z-50 pointer-events-none">
          <ScallopedTrim className="w-full h-2.5" />
        </div>
      </header>

      {/* ---------------- 2. MAIN FESTIVE HERO & TIGHTLY PACKED ARCH CARDS ---------------- */}
      <main className="relative overflow-hidden z-20 pt-3 pb-4">
        
        {/* Left Vertical Hanging Diya String */}
        <div className="pointer-events-none absolute top-0 left-1 z-30 opacity-90 hidden lg:block">
          <HangingDiyaString className="w-8 h-48" />
        </div>

        {/* Right Vertical Hanging Diya String */}
        <div className="pointer-events-none absolute top-0 right-1 z-30 opacity-90 hidden lg:block">
          <HangingDiyaString className="w-8 h-48" />
        </div>

        <section className="relative z-20 mx-auto max-w-4xl px-2 text-center">
          
          {/* Main Compact Title Banner */}
          <div className="mt-0.5 mb-1.5">
            <h1 className="font-serif text-xl sm:text-2xl lg:text-3xl font-black leading-[1.05] tracking-wide text-[#FEF08A] drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)] uppercase">
              ICCK Diwali Ball:
              <br />
              <span className="italic text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.4)]">Illuminate Your Celebration!</span>
            </h1>
            <p className="mt-0.5 text-[9.5px] sm:text-[11px] tracking-[0.16em] text-white/90 uppercase font-semibold">
              Year 2026 &middot; Diwali Theme &middot; Geometric Motifs
            </p>
          </div>

          {/* ---------------- 3. TIGHTLY PACKED POINTED ARCH CARDS ---------------- */}
          <div className="mt-1.5 grid gap-2.5 md:gap-3 md:grid-cols-3 items-end max-w-3xl mx-auto px-1">
            
            {/* Card 1: ICCK DIWALI BALL */}
            <JharokhaArchCard
              title="ICCK DIWALI BALL"
              price="$100"
              buttonText="Buy Tickets"
              noteText="Dinner, dance & performances"
              gradientFrom="#252270"
              gradientTo="#121038"
              illustration={<IndianDancerIllustration className="w-16 h-22" />}
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
              illustration={<GoldTrophyIllustration className="w-16 h-20" />}
              to="/awards"
            />

            {/* Card 3: BUNDLE REGISTRATION (Exact 4-Icon Artwork) */}
            <JharokhaArchCard
              isTwinArch={true}
              ribbonText="DISCOUNTED BUNDLE"
              title="BUNDLE REGISTRATION"
              price="$190"
              strikePrice="($225)"
              badgeText="SAVE 15%"
              buttonText="GET THE BUNDLE"
              noteText="Both events at a discounted price"
              gradientFrom="#881337"
              gradientTo="#590624"
              illustration={<FourIconBundleEmblem className="w-20 h-20" />}
              to="/register"
              search={{ preset: "bundle" }}
            />

          </div>

          {/* ---------------- 4. ULTRA-COMPACT BOTTOM ACTION BUTTONS & SPARKLERS ---------------- */}
          <div className="mt-2.5 flex flex-col sm:flex-row items-center justify-center gap-2 relative">
            
            <div className="flex items-center gap-1.5 w-full sm:w-auto">
              <FireworkSparkle className="w-6 h-6 text-amber-300 animate-pulse shrink-0 hidden sm:block" />
              <Link
                to="/awards"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#f59e0b] via-[#f7b731] to-[#d97706] px-6 py-2 font-sans text-xs font-black uppercase tracking-[0.14em] text-[#0c1445] shadow-xl transition hover:brightness-110 hover:scale-[1.02] sm:w-auto"
              >
                <Ticket className="h-3.5 w-3.5" /> VIEW ALL EVENTS
              </Link>
            </div>

            <div className="flex items-center gap-1.5 w-full sm:w-auto">
              <button
                onClick={() => toast.success("🎆 Festive firecrackers launched! We'll email you event updates.")}
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#f59e0b] via-[#f7b731] to-[#d97706] px-6 py-2 font-sans text-xs font-black uppercase tracking-[0.14em] text-[#0c1445] shadow-xl transition hover:brightness-110 hover:scale-[1.02] sm:w-auto"
              >
                SIGN UP FOR UPDATES
              </button>
              <FireworkSparkle className="w-6 h-6 text-amber-300 animate-pulse shrink-0 hidden sm:block" />
            </div>

          </div>

          {/* Bottom Rangoli Emblem (Matching Mobile Screen in Reference Image) */}
          <div className="mt-2 flex justify-center items-center overflow-hidden">
            <RangoliMandala className="w-32 h-32 sm:w-40 sm:h-40 opacity-90 drop-shadow-[0_4px_15px_rgba(245,158,11,0.5)]" />
          </div>

          {/* Quick Navigation Footer Links */}
          <nav className="mt-1.5 flex flex-wrap justify-center gap-x-4 gap-y-1 text-[10px] font-bold uppercase tracking-wider text-white/80">
            <Link to="/nominate" className="hover:text-white transition-colors">
              Submit a nomination
            </Link>
            <Link to="/register" search={{ preset: undefined }} className="hover:text-white transition-colors">
              Registration &amp; invoice
            </Link>
            <Link to="/admin" className="hover:text-white transition-colors">
              Admin dashboard
            </Link>
          </nav>
        </section>
      </main>
    </div>
  );
}
