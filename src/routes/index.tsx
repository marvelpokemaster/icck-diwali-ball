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
      
      {/* ---------------- 1. TOP WARM MARIGOLD GOLD HEADER BANNER WITH ENLARGED & DUAL EXTRA DIYA LAMPS ---------------- */}
      <header className="relative w-full bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#f59e0b] py-1 shadow-2xl z-30">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-3 sm:px-6">
          
          {/* Left Side: Dual Extra Prominent Glowing Diya Lamps */}
          <div className="flex items-center gap-2 sm:gap-3">
            <DiyaLamp className="w-8 sm:w-11 h-8 sm:h-11 drop-shadow-[0_0_12px_rgba(251,191,36,0.95)]" />
            <DiyaLamp className="hidden sm:block w-9 h-9 drop-shadow-[0_0_10px_rgba(251,191,36,0.9)] opacity-90" />
          </div>

          {/* Center Octagonal Cartouche Badge with Enlarged Inner Diya Lamps */}
          <HeaderCartouche className="mx-auto py-1 px-3 sm:px-5 bg-[#0f172a]/95 border-2 border-amber-300 shadow-2xl">
            <DiyaLamp className="w-5 sm:w-7 h-5 sm:h-7 drop-shadow-[0_0_10px_rgba(251,191,36,0.95)] shrink-0" />

            {/* Full-Color Official ICCK Logo */}
            <img
              src={icckLogo}
              alt="ICCK Official Logo"
              width={940}
              height={347}
              className="h-4.5 sm:h-7 w-auto object-contain"
            />

            <div className="text-center sm:text-left border-l-2 border-amber-400/50 pl-2 sm:pl-3">
              <p className="font-serif text-[9.5px] sm:text-base font-black uppercase tracking-[0.12em] sm:tracking-[0.16em] text-[#FEF08A] drop-shadow leading-none">
                ICCK DIWALI CELEBRATIONS
              </p>
              <p className="text-[7px] sm:text-[10.5px] tracking-widest text-white/95 uppercase font-semibold mt-0.5 leading-none">
                Year 2026 &middot; Diwali Theme &middot; Geometric Motifs
              </p>
            </div>

            <DiyaLamp className="w-5 sm:w-7 h-5 sm:h-7 drop-shadow-[0_0_10px_rgba(251,191,36,0.95)] shrink-0" />
          </HeaderCartouche>

          {/* Right Side: Dual Extra Prominent Glowing Diya Lamps */}
          <div className="flex items-center gap-2 sm:gap-3">
            <DiyaLamp className="hidden sm:block w-9 h-9 drop-shadow-[0_0_10px_rgba(251,191,36,0.9)] opacity-90" />
            <DiyaLamp className="w-8 sm:w-11 h-8 sm:h-11 drop-shadow-[0_0_12px_rgba(251,191,36,0.95)]" />
          </div>

        </div>

        {/* Bottom Scalloped Red Floral Trim */}
        <div className="absolute top-full left-0 right-0 z-30 pointer-events-none">
          <ScallopedTrim className="w-full h-3" />
        </div>
      </header>

      {/* ---------------- 2. MAIN FESTIVE HERO & PROPORTIONAL CARDS ---------------- */}
      <main className="relative overflow-hidden z-20 my-auto pt-3 sm:pt-2 pb-2 sm:pb-1">
        
        {/* Left Vertical Hanging Diya String & Extra Standing Diya Lamp */}
        <div className="pointer-events-none absolute top-0 left-2 z-30 opacity-90 hidden lg:flex flex-col items-center gap-4">
          <HangingDiyaString className="w-9 h-44" />
          <DiyaLamp className="w-10 h-10 drop-shadow-[0_0_15px_rgba(251,191,36,0.9)]" />
        </div>

        {/* Right Vertical Hanging Diya String & Extra Standing Diya Lamp */}
        <div className="pointer-events-none absolute top-0 right-2 z-30 opacity-90 hidden lg:flex flex-col items-center gap-4">
          <HangingDiyaString className="w-9 h-44" />
          <DiyaLamp className="w-10 h-10 drop-shadow-[0_0_15px_rgba(251,191,36,0.9)]" />
        </div>

        <section className="relative z-20 mx-auto max-w-5xl px-3 sm:px-2 text-center">
          
          {/* Main Title Banner */}
          <div className="mt-1 mb-4 sm:mb-3 flex items-center justify-center gap-2">
            <DiyaLamp className="w-7 sm:w-10 h-7 sm:h-10 drop-shadow-[0_0_12px_rgba(251,191,36,0.9)] shrink-0 hidden sm:block" />
            
            <div>
              <h1 className="font-serif text-lg xs:text-xl sm:text-3xl lg:text-4xl font-black leading-[1.05] tracking-wide text-[#FEF08A] drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)] uppercase">
                ICCK Diwali Ball:
                <br />
                <span className="italic text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.6)]">Illuminate Your Celebration!</span>
              </h1>
              <p className="mt-1 text-[8.5px] xs:text-[9.5px] sm:text-[11px] tracking-[0.16em] text-white/90 uppercase font-semibold">
                Year 2026 &middot; Diwali Theme &middot; Geometric Motifs
              </p>
            </div>

            <DiyaLamp className="w-7 sm:w-10 h-7 sm:h-10 drop-shadow-[0_0_12px_rgba(251,191,36,0.9)] shrink-0 hidden sm:block" />
          </div>

          {/* ---------------- 3. PROPORTIONAL ARCH CARDS: PERFECTLY FITTED MOBILE STACK & 3-COLUMNS DESKTOP ---------------- */}
          <div className="mt-3 flex flex-col sm:grid sm:grid-cols-3 gap-8 sm:gap-3 md:gap-4 items-center sm:items-end w-full max-w-[290px] xs:max-w-[320px] sm:max-w-4xl mx-auto px-1">
            
            {/* Card 1: ICCK DIWALI BALL (Vibrant Royal Indigo Blue) */}
            <JharokhaArchCard
              title="ICCK DIWALI BALL"
              price="$100"
              buttonText="Buy Tickets"
              noteText="Dinner, dance & performances"
              gradientFrom="#253494"
              gradientTo="#0f1854"
              illustration={<IndianDancerIllustration className="w-34 xs:w-38 sm:w-40 md:w-44 h-38 xs:h-42 sm:h-44 md:h-48" />}
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
              illustration={<GoldTrophyIllustration className="w-30 xs:w-34 sm:w-38 md:w-42 h-34 xs:h-38 sm:h-40 md:h-44" />}
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
              illustration={<FourIconBundleEmblem className="w-30 xs:w-34 sm:w-38 md:w-42 h-30 xs:h-34 sm:h-38 md:h-42" />}
              to="/register"
              search={{ preset: "bundle" }}
            />

          </div>

          {/* ---------------- 4. BOTTOM ACTION BUTTONS ---------------- */}
          <div className="mt-6 sm:mt-5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-2.5 w-full max-w-[360px] sm:max-w-none mx-auto relative px-3 sm:px-0">
            
            {/* Button 1: VIEW ALL EVENTS */}
            <div className="w-full sm:w-auto flex items-center gap-1.5">
              <FireworkSparkle className="w-5 h-5 text-amber-300 animate-pulse shrink-0 hidden sm:block" />
              <Link
                to="/awards"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] px-6 sm:px-6 py-3 sm:py-2.5 font-sans text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-[#0f172a] shadow-xl transition hover:brightness-110"
              >
                <Ticket className="h-4 w-4" /> VIEW ALL EVENTS
              </Link>
            </div>

            {/* Button 2: SIGN UP FOR UPDATES */}
            <div className="w-full sm:w-auto flex items-center gap-1.5">
              <button
                onClick={() => toast.success("🎆 Festive firecrackers launched! We'll email you event updates.")}
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] px-6 sm:px-6 py-3 sm:py-2.5 font-sans text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-[#0f172a] shadow-xl transition hover:brightness-110"
              >
                SIGN UP FOR UPDATES
              </button>
              <FireworkSparkle className="w-5 h-5 text-amber-300 animate-pulse shrink-0 hidden sm:block" />
            </div>

          </div>

          {/* Bottom Rangoli Emblem */}
          <div className="mt-3 flex justify-center items-center overflow-hidden">
            <RangoliMandala className="w-24 h-24 sm:w-36 sm:h-36 opacity-90 drop-shadow-[0_4px_15px_rgba(251,191,36,0.6)]" />
          </div>

          {/* Quick Navigation Footer Links */}
          <nav className="mt-1 pb-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white/80">
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
