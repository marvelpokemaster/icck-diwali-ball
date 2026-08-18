import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Ticket } from "lucide-react";
import { toast } from "sonner";
import { useEffect, useState } from "react";
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
import { RotatingMandalasBackground } from "@/components/awards/RotatingMandalasBackground";

const title = "ICCK Diwali Celebrations 2026 | Business Awards & Ball";
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
  const navigate = useNavigate();
  const [isNavigatingEvents, setIsNavigatingEvents] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleViewEventsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isNavigatingEvents) return;
    setIsNavigatingEvents(true);

    setTimeout(() => {
      navigate({ to: "/awards" });
    }, 280);
  };

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

      {/* Restore Subtle Rotating Geometric Mandalas Moving Background Layer */}
      <RotatingMandalasBackground />

      {/* Dynamic Interactive Firecracker Blasting Canvas Overlay */}
      <FirecrackerCanvas />

      {/* ---------------- 2 HANGING DIYA LAMPS (FIXED OVERLAY ON LEFT & RIGHT SIDES) ---------------- */}
      <div className="fixed top-0 left-1 xs:left-2 sm:left-6 md:left-10 z-50 pointer-events-none drop-shadow-[0_0_15px_rgba(251,191,36,0.95)]">
        <HangingDiyaString className="w-8 xs:w-9 sm:w-11 h-44 xs:h-52 sm:h-64" />
      </div>

      <div className="fixed top-0 right-1 xs:right-2 sm:right-6 md:right-10 z-50 pointer-events-none drop-shadow-[0_0_15px_rgba(251,191,36,0.95)]">
        <HangingDiyaString className="w-8 xs:w-9 sm:w-11 h-44 xs:h-52 sm:h-64" />
      </div>
      
      {/* ---------------- 1. TOP WARM MARIGOLD GOLD HEADER BANNER WITH PERFECTLY FITTED CARTOUCHE ---------------- */}
      <header className="relative w-full bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#f59e0b] py-1.5 shadow-2xl z-40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-2 sm:px-6">
          
          {/* Left Side: Outer Diya Lamps — desktop only */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-3 sm:ml-0">
            <DiyaLamp className="w-8 sm:w-11 h-8 sm:h-11 drop-shadow-[0_0_12px_rgba(251,191,36,0.95)]" />
            <DiyaLamp className="hidden sm:block w-9 h-9 drop-shadow-[0_0_10px_rgba(251,191,36,0.9)] opacity-90" />
          </div>

          {/* Center Octagonal Cartouche Badge */}
          <HeaderCartouche
            className="mx-auto py-2.5 px-3 xs:px-4 sm:px-7 border-2 border-amber-400 shadow-[0_0_25px_rgba(251,191,36,0.45)]"
            style={{ background: "#FDF8EC" }}
          >
            <DiyaLamp className="hidden sm:block sm:w-8 sm:h-8 drop-shadow-[0_0_10px_rgba(251,191,36,0.95)] shrink-0" />

            {/* Prominent Full-Color Official ICCK Logo */}
            <img
              src={icckLogo}
              alt="ICCK Official Logo"
              width={940}
              height={347}
              className="h-8 xs:h-10 sm:h-11 w-auto object-contain shrink-0"
            />

            <div className="text-center sm:text-left border-l-2 border-amber-600/70 pl-2 xs:pl-3 sm:pl-4">
              <p className="font-serif text-[13px] xs:text-[15px] sm:text-lg lg:text-xl font-black uppercase tracking-wide xs:tracking-wider sm:tracking-[0.16em] text-[#1A0A00] leading-tight whitespace-nowrap">
                ICCK DIWALI CELEBRATIONS
              </p>
            </div>

            <DiyaLamp className="hidden sm:block sm:w-8 sm:h-8 drop-shadow-[0_0_10px_rgba(251,191,36,0.95)] shrink-0" />
          </HeaderCartouche>

          {/* Right Side: Outer Diya Lamps — desktop only */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-3 sm:mr-0">
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
      <main className="relative overflow-hidden z-20 my-auto pt-2 sm:pt-2 pb-2 sm:pb-1">

        <section className="relative z-20 mx-auto max-w-5xl px-2 sm:px-2 text-center">
          
          {/* Main Title Banner with Flanking Diya Lamps (WITHOUT ICCK DIWALI BALL) */}
          <div className="mt-1 mb-1 sm:mb-2 flex items-center justify-center gap-2 sm:gap-3">
            <DiyaLamp className="w-7 sm:w-10 h-7 sm:h-10 drop-shadow-[0_0_14px_rgba(251,191,36,0.95)] shrink-0" />
            
            <div>
              <h1 className="font-serif text-xl xs:text-2xl sm:text-4xl lg:text-5xl font-black leading-[1.05] tracking-wide text-[#FEF08A] drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)] uppercase">
                ILLUMINATE YOUR CELEBRATION!
              </h1>
            </div>

            <DiyaLamp className="w-7 sm:w-10 h-7 sm:h-10 drop-shadow-[0_0_14px_rgba(251,191,36,0.95)] shrink-0" />
          </div>

          {/* ---------------- 3. ARCH CARDS: FULL MOBILE WIDTH WITH ZERO SIDE WHITESPACE ---------------- */}
          <div className="mt-0.5 sm:mt-1 flex flex-col sm:grid sm:grid-cols-3 gap-8 sm:gap-3 md:gap-4 items-center sm:items-end w-full max-w-[440px] sm:max-w-4xl mx-auto px-2 xs:px-3">
            
            {/* Card 1: ICCK DIWALI BALL (Vibrant Royal Indigo Blue) */}
            <JharokhaArchCard
              title="ICCK DIWALI BALL"
              price="$100"
              buttonText="Buy Tickets"
              noteText="Dinner, dance & performances"
              gradientFrom="#253494"
              gradientTo="#0f1854"
              illustration={<IndianDancerIllustration className="w-38 xs:w-42 sm:w-36 md:w-42 h-42 xs:h-46 sm:h-40 md:h-46" />}
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
              illustration={<GoldTrophyIllustration className="w-34 xs:w-38 sm:w-32 md:w-38 h-38 xs:h-42 sm:h-36 md:h-42" />}
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
              illustration={<FourIconBundleEmblem className="w-34 xs:w-38 sm:w-32 md:w-38 h-36 xs:h-40 sm:h-34 md:h-38" />}
              to="/register"
              search={{ preset: "bundle" }}
            />

          </div>

          {/* ---------------- 4. 3D POPPED-UP BOTTOM ACTION BUTTONS (FOR MOBILE & PC) ---------------- */}
          <div className="mt-6 sm:mt-5 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-[360px] sm:max-w-none mx-auto relative px-3 sm:px-0">
            
            {/* Button 1: VIEW ALL EVENTS */}
            <div className="w-full sm:w-auto flex items-center justify-center">
              <button
                onClick={handleViewEventsClick}
                className={`inline-flex w-[88%] xs:w-[90%] sm:w-auto max-w-[320px] items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#FFF7ED] via-[#FDE047] to-[#CA8A04] border-t-2 border-yellow-100 border-b-2 border-amber-800/60 px-6 sm:px-7 py-3.5 sm:py-3 font-sans text-xs xs:text-sm sm:text-base font-black uppercase tracking-[0.14em] text-[#060c2c] shadow-[0_8px_25px_rgba(245,158,11,0.65)] transition-all duration-200 hover:scale-105 active:scale-95 ${
                  isNavigatingEvents ? "brightness-125 scale-105 ring-4 ring-amber-300/80" : ""
                }`}
              >
                {isNavigatingEvents ? (
                  <FireworkSparkle className="h-4 w-4 animate-spin text-[#060c2c] shrink-0" />
                ) : (
                  <Ticket className="h-4 w-4 shrink-0" />
                )}
                <span className="drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)]">VIEW ALL EVENTS</span>
              </button>
            </div>

            {/* Button 2: SIGN UP FOR UPDATES */}
            <div className="w-full sm:w-auto flex items-center justify-center">
              <button
                onClick={() => toast.success("🎆 Festive firecrackers launched! We'll email you event updates.")}
                className="inline-flex w-[88%] xs:w-[90%] sm:w-auto max-w-[320px] items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#FFF7ED] via-[#FDE047] to-[#CA8A04] border-t-2 border-yellow-100 border-b-2 border-amber-800/60 px-6 sm:px-7 py-3.5 sm:py-3 font-sans text-xs xs:text-sm sm:text-base font-black uppercase tracking-[0.14em] text-[#060c2c] shadow-[0_8px_25px_rgba(245,158,11,0.65)] transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <FireworkSparkle className="h-4 w-4 text-[#060c2c] shrink-0" />
                <span className="drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)]">SIGN UP FOR UPDATES</span>
              </button>
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
