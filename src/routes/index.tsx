import { createFileRoute, Link } from "@tanstack/react-router";
import { Ticket } from "lucide-react";
import { toast } from "sonner";
import { useEffect } from "react";
import icckLogo from "@/assets/icck-logo.png";
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
    <div className="min-h-screen text-white relative font-sans overflow-x-hidden bg-[#091442] flex flex-col justify-between">
      
      {/* ---------------- FESTIVE PALACE HALL VIBRANT BLUE BACKDROP ---------------- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src={heroBg}
          alt="Palace Background Backdrop"
          className="w-full h-full object-cover object-center opacity-35 blur-[1px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f216b]/95 via-[#0c1854]/90 to-[#070d36]/98" />
        <div className="absolute inset-0 bg-rangoli opacity-70" />
      </div>

      {/* Dynamic Interactive Firecracker Blasting Canvas Overlay */}
      <FirecrackerCanvas />
      
      {/* ---------------- 1. TOP WARM MARIGOLD GOLD HEADER BANNER ---------------- */}
      <header className="relative w-full bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#f59e0b] py-0.5 shadow-2xl z-30">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-2">
          
          {/* Left Diya Lamp */}
          <DiyaLamp className="hidden sm:block w-6.5 h-6.5 drop-shadow-[0_0_10px_rgba(251,191,36,0.9)]" />

          {/* Center Octagonal Cartouche Badge */}
          <HeaderCartouche className="mx-auto py-0.5 px-2 sm:px-3 bg-[#0f172a]/90 border border-amber-300">
            {/* Full-Color Official ICCK Logo */}
            <img
              src={icckLogo}
              alt="ICCK Official Logo"
              width={940}
              height={347}
              className="h-3.5 sm:h-6 w-auto object-contain"
            />

            <div className="text-center sm:text-left border-l border-amber-400/40 pl-1.5 sm:pl-2.5">
              <p className="font-serif text-[8.5px] sm:text-sm font-black uppercase tracking-[0.1em] sm:tracking-[0.14em] text-[#FEF08A] drop-shadow leading-none">
                ICCK DIWALI CELEBRATIONS
              </p>
              <p className="text-[6.5px] sm:text-[9.5px] tracking-widest text-white/90 uppercase font-semibold mt-0.5 leading-none">
                Year 2026 &middot; Diwali Theme &middot; Geometric Motifs
              </p>
            </div>

            <DiyaLamp className="w-3.5 sm:w-5 h-3.5 sm:h-5 drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]" />
          </HeaderCartouche>

          {/* Right Diya Lamp */}
          <DiyaLamp className="hidden sm:block w-6.5 h-6.5 drop-shadow-[0_0_10px_rgba(251,191,36,0.9)]" />

        </div>

        {/* Bottom Scalloped Red Floral Trim */}
        <div className="absolute top-full left-0 right-0 z-30 pointer-events-none">
          <ScallopedTrim className="w-full h-2.5" />
        </div>
      </header>

      {/* ---------------- 2. MAIN FESTIVE HERO & BALANCED ARCH CARDS ---------------- */}
      <main className="relative overflow-hidden z-20 my-auto pt-1 pb-1">
        
        {/* Left Vertical Hanging Diya String */}
        <div className="pointer-events-none absolute top-0 left-1 z-30 opacity-90 hidden lg:block">
          <HangingDiyaString className="w-8 h-40" />
        </div>

        {/* Right Vertical Hanging Diya String */}
        <div className="pointer-events-none absolute top-0 right-1 z-30 opacity-90 hidden lg:block">
          <HangingDiyaString className="w-8 h-40" />
        </div>

        <section className="relative z-20 mx-auto max-w-5xl px-1 sm:px-2 text-center">
          
          {/* Main Compact Title Banner */}
          <div className="mt-0.5 mb-1.5 sm:mb-2">
            <h1 className="font-serif text-base xs:text-lg sm:text-3xl lg:text-4xl font-black leading-[1.02] tracking-wide text-[#FEF08A] drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)] uppercase">
              ICCK Diwali Ball:
              <br />
              <span className="italic text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.6)]">Illuminate Your Celebration!</span>
            </h1>
            <p className="mt-0.5 text-[7.5px] xs:text-[8.5px] sm:text-[11px] tracking-[0.16em] text-white/90 uppercase font-semibold">
              Year 2026 &middot; Diwali Theme &middot; Geometric Motifs
            </p>
          </div>

          {/* ---------------- 3. ALWAYS 3 CARDS SIDE-BY-SIDE IN A STRAIGHT ROW ---------------- */}
          <div className="mt-1 grid grid-cols-3 gap-1 sm:gap-3 md:gap-4 items-end max-w-4xl mx-auto px-1">
            
            {/* Card 1: ICCK DIWALI BALL (Vibrant Royal Indigo Blue) */}
            <JharokhaArchCard
              title="ICCK DIWALI BALL"
              price="$100"
              buttonText="Buy Tickets"
              noteText="Dinner, dance & performances"
              gradientFrom="#253494"
              gradientTo="#0f1854"
              illustration={<IndianDancerIllustration className="w-16 xs:w-20 sm:w-32 md:w-36 h-20 xs:h-24 sm:h-36 md:h-40" />}
              to="/register"
              search={{ preset: "ball" }}
            />

            {/* Card 2: ICCK BUSINESS AWARDS (Vibrant Crimson Magenta) */}
            <JharokhaArchCard
              title="ICCK BUSINESS AWARDS"
              price="$125"
              buttonText="Register Now"
              noteText="Honoring business excellence"
              gradientFrom="#ab1d53"
              gradientTo="#520829"
              illustration={<GoldTrophyIllustration className="w-16 xs:w-18 sm:w-30 md:w-34 h-18 xs:h-22 sm:h-32 md:h-36" />}
              to="/awards"
            />

            {/* Card 3: BUNDLE REGISTRATION (Vibrant Hot Crimson Pink-Magenta) */}
            <JharokhaArchCard
              ribbonText="DISCOUNTED BUNDLE"
              title="BUNDLE REGISTRATION"
              price="$190"
              strikePrice="($225)"
              badgeText="SAVE 15%"
              buttonText="GET THE BUNDLE"
              noteText="Both events at a discounted price"
              gradientFrom="#c2185b"
              gradientTo="#880e4f"
              illustration={<FourIconBundleEmblem className="w-16 xs:w-18 sm:w-30 md:w-34 h-16 xs:h-18 sm:h-30 md:h-34" />}
              to="/register"
              search={{ preset: "bundle" }}
            />

          </div>

          {/* ---------------- 4. BOTTOM ACTION BUTTONS: FULL-WIDTH STACKED ON MOBILE (EXACT MATCH FOR REF IMAGE 15) ---------------- */}
          <div className="mt-3 sm:mt-3.5 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2.5 w-full max-w-[340px] sm:max-w-none mx-auto relative px-3 sm:px-0">
            
            {/* Button 1: VIEW ALL EVENTS */}
            <div className="w-full sm:w-auto flex items-center gap-1.5">
              <FireworkSparkle className="w-5 h-5 text-amber-300 animate-pulse shrink-0 hidden sm:block" />
              <Link
                to="/awards"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] px-4 sm:px-6 py-2.5 sm:py-2 font-sans text-xs sm:text-sm font-black uppercase tracking-[0.12em] sm:tracking-[0.14em] text-[#0f172a] shadow-xl transition hover:brightness-110"
              >
                <Ticket className="h-4 w-4" /> VIEW ALL EVENTS
              </Link>
            </div>

            {/* Button 2: SIGN UP FOR UPDATES */}
            <div className="w-full sm:w-auto flex items-center gap-1.5">
              <button
                onClick={() => toast.success("🎆 Festive firecrackers launched! We'll email you event updates.")}
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] px-4 sm:px-6 py-2.5 sm:py-2 font-sans text-xs sm:text-sm font-black uppercase tracking-[0.12em] sm:tracking-[0.14em] text-[#0f172a] shadow-xl transition hover:brightness-110"
              >
                SIGN UP FOR UPDATES
              </button>
              <FireworkSparkle className="w-5 h-5 text-amber-300 animate-pulse shrink-0 hidden sm:block" />
            </div>

          </div>

          {/* Bottom Rangoli Emblem */}
          <div className="mt-1.5 flex justify-center items-center overflow-hidden">
            <RangoliMandala className="w-24 h-24 sm:w-36 sm:h-36 opacity-90 drop-shadow-[0_4px_15px_rgba(251,191,36,0.6)]" />
          </div>

          {/* Quick Navigation Footer Links */}
          <nav className="mt-0.5 pb-1 flex flex-wrap justify-center gap-x-3 sm:gap-x-4 gap-y-0.5 text-[8.5px] sm:text-[10px] font-bold uppercase tracking-wider text-white/80">
            <Link to="/nominate" className="hover:text-white transition-colors">
              Submit nomination
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
