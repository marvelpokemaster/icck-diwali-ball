import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Ticket, Sparkles, Building2, Phone, Mail, Youtube } from "lucide-react";
import { useEffect, useState } from "react";
import icckLogo from "@/assets/icck-logo.png";
import icckGoldLogo from "@/assets/icck-gold-vertical-logo-bright.png";
import diwaliFlyerBg from "@/assets/diwali-flyer-bg.jpg";
import { 
  DiyaLamp, 
  HangingDiyaString, 
  IndianDancerIllustration, 
  GoldTrophyIllustration, 
  FourIconBundleEmblem,
  FireworkSparkle
} from "@/components/awards/DiwaliDecorations";
import { JharokhaArchCard } from "@/components/awards/JharokhaArchCard";
import { HeaderCartouche, ScallopedTrim } from "@/components/awards/JharokhaArchFrame";
import { FirecrackerCanvas } from "@/components/awards/FirecrackerCanvas";

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
      
      {/* ---------------- CONFIRMED DIWALI FLYER BACKDROP ---------------- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src={diwaliFlyerBg}
          alt="Festive Diwali Background"
          className="w-full h-full object-cover object-center opacity-90 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#091442]/50 via-transparent to-[#070d36]/90" />
      </div>

      {/* Dynamic Interactive Firecracker Canvas Overlay */}
      <FirecrackerCanvas />

      {/* ---------------- 2 HANGING LANTERNS (LEFT & RIGHT SIDES) ---------------- */}
      <div className="fixed top-0 left-1 xs:left-2 sm:left-6 md:left-10 z-50 pointer-events-none drop-shadow-[0_0_15px_rgba(251,191,36,0.95)]">
        <HangingDiyaString className="w-8 xs:w-9 sm:w-11 h-44 xs:h-52 sm:h-64" />
      </div>

      <div className="fixed top-0 right-1 xs:right-2 sm:right-6 md:right-10 z-50 pointer-events-none drop-shadow-[0_0_15px_rgba(251,191,36,0.95)]">
        <HangingDiyaString className="w-8 xs:w-9 sm:w-11 h-44 xs:h-52 sm:h-64" />
      </div>
      
      {/* ---------------- 1. TOP WARM MARIGOLD GOLD HEADER BANNER ---------------- */}
      <header className="relative w-full bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#f59e0b] py-1.5 shadow-2xl z-40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-2 sm:px-6">
          
          {/* Left Side: Outer Diya Lamps */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-3 sm:ml-0">
            <DiyaLamp className="w-8 sm:w-11 h-8 sm:h-11 drop-shadow-[0_0_12px_rgba(251,191,36,0.95)]" />
            <DiyaLamp className="hidden sm:block w-9 h-9 drop-shadow-[0_0_10px_rgba(251,191,36,0.9)] opacity-90" />
          </div>

          {/* Center Cartouche Badge */}
          <HeaderCartouche
            className="mx-auto py-3.5 sm:py-2.5 px-3 xs:px-4 sm:px-7 border-2 border-amber-400 shadow-[0_0_25px_rgba(251,191,36,0.45)]"
            style={{ background: "#EEF3FF" }}
          >
            <DiyaLamp className="hidden sm:block sm:w-8 sm:h-8 drop-shadow-[0_0_10px_rgba(251,191,36,0.95)] shrink-0" />

            {/* Official Full-Color ICCK Logo */}
            <img
              src={icckLogo}
              alt="ICCK Official Logo"
              width={940}
              height={347}
              className="h-8 xs:h-10 sm:h-11 w-auto object-contain shrink-0"
            />

            <div className="text-center sm:text-left border-l-2 border-amber-600/70 pl-2 xs:pl-3 sm:pl-4">
              <p className="font-serif text-[18px] xs:text-[20px] sm:text-lg lg:text-xl font-black uppercase tracking-normal xs:tracking-wide sm:tracking-[0.16em] text-[#1A0A00] leading-tight whitespace-normal sm:whitespace-nowrap">
                ICCK DIWALI CELEBRATIONS
              </p>
            </div>

            <DiyaLamp className="hidden sm:block sm:w-8 sm:h-8 drop-shadow-[0_0_10px_rgba(251,191,36,0.95)] shrink-0" />
          </HeaderCartouche>

          {/* Right Side: Outer Diya Lamps */}
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
      <main className="relative overflow-hidden z-20 my-auto pt-2 sm:pt-2 pb-6">

        <section className="relative z-20 mx-auto max-w-5xl px-2 sm:px-2 text-center">
          
          {/* Main Title Banner */}
          <div className="mt-1 mb-1 sm:mb-2 flex items-center justify-center gap-2 sm:gap-3">
            <DiyaLamp className="w-7 sm:w-10 h-7 sm:h-10 drop-shadow-[0_0_14px_rgba(251,191,36,0.95)] shrink-0" />
            
            <div>
              <h1 className="font-serif text-4xl xs:text-5xl sm:text-4xl lg:text-5xl font-black leading-[1.05] tracking-wide text-[#FEF08A] drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)] uppercase">
                ILLUMINATE YOUR CELEBRATION!
              </h1>
            </div>

            <DiyaLamp className="w-7 sm:w-10 h-7 sm:h-10 drop-shadow-[0_0_14px_rgba(251,191,36,0.95)] shrink-0" />
          </div>

          {/* ---------------- 3. ARCH CARDS ---------------- */}
          <div className="mt-0.5 sm:mt-1 flex flex-col sm:grid sm:grid-cols-3 gap-8 sm:gap-3 md:gap-4 items-center sm:items-end w-full max-w-[440px] sm:max-w-4xl mx-auto px-2 xs:px-3">
            
            {/* Card 1: ICCK DIWALI BALL */}
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

            {/* Card 2: ICCK BUSINESS AWARDS */}
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

            {/* Card 3: BUNDLE REGISTRATION */}
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

          {/* ---------------- 4. BOTTOM ACTION BUTTONS ---------------- */}
          <div className="mt-6 sm:mt-5 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-[360px] sm:max-w-none mx-auto relative px-3 sm:px-0">
            
            {/* Button 1: VIEW ALL EVENTS */}
            <div className="flex items-center justify-center">
              <button
                onClick={handleViewEventsClick}
                className={`inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#FFF7ED] via-[#FDE047] to-[#CA8A04] border-t-2 border-yellow-100 border-b-2 border-amber-800/60 px-3 sm:px-5 py-2 sm:py-3 font-sans text-xl xs:text-2xl sm:text-base font-black uppercase tracking-[0.14em] text-[#060c2c] shadow-[0_8px_25px_rgba(245,158,11,0.65)] transition-all duration-200 hover:scale-105 active:scale-95 ${
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

            {/* Button 2: SPONSOR ENQUIRY */}
            <div className="flex items-center justify-center">
              <a
                href="mailto:events@indochamkorea.org?subject=Diwali%20Ball%20Sponsorship%20Enquiry"
                className="inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#FFF7ED] via-[#FDE047] to-[#CA8A04] border-t-2 border-yellow-100 border-b-2 border-amber-800/60 px-3 sm:px-5 py-2 sm:py-3 font-sans text-xl xs:text-2xl sm:text-base font-black uppercase tracking-[0.14em] text-[#060c2c] shadow-[0_8px_25px_rgba(245,158,11,0.65)] transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <Sparkles className="h-4 w-4 shrink-0" />
                <span className="drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)]">SPONSOR ENQUIRY</span>
              </a>
            </div>

          </div>

          {/* ---------------- 5. 2025 DIWALI BALL HIGHLIGHTS & YOUTUBE VIDEO SECTION ---------------- */}
          <div className="mt-12 max-w-4xl mx-auto rounded-2xl border-2 border-[#D97706] bg-[#FAF9F6] p-6 sm:p-8 text-left shadow-2xl text-[#060D2B]">
            <div className="flex items-center gap-3">
              <Youtube className="size-7 text-[#B7182E]" />
              <h2 className="font-serif text-2xl font-black uppercase tracking-wide">
                2025 Diwali Ball: A Glimpse of Last Year&apos;s Energy
              </h2>
            </div>
            
            <p className="mt-3 text-sm leading-relaxed text-[#1E293B] font-medium">
              Relive the grandeur, cultural performances, VIP networking, and festive celebration of the ICCK Diwali Ball!
            </p>

            <div className="mt-6 aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-amber-300">
              <iframe
                src="https://www.youtube-nocookie.com/embed/zyKLqCDevnA"
                title="2025 ICCK Diwali Ball Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>

        </section>
      </main>

      {/* ---------------- 6. OFFICIAL FOOTER WITH OFFICIAL VERTICAL GOLD ICCK LOGO ---------------- */}
      <footer className="relative z-30 border-t-2 border-amber-400/40 bg-[#060d2b] py-8 text-center text-amber-100/90 text-sm font-medium">
        <div className="mx-auto max-w-5xl px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <img
            src={icckGoldLogo}
            alt="Indian Chamber of Commerce in Korea"
            width={218}
            height={248}
            className="h-16 sm:h-20 w-auto object-contain drop-shadow-[0_2px_12px_rgba(245,158,11,0.5)]"
          />

          <div className="text-center sm:text-left space-y-1.5 text-xs text-amber-200/90 font-medium">
            <p className="flex items-center justify-center sm:justify-start gap-2">
              <Building2 className="size-4 text-[#F59E0B]" />
              <span>ICCK, 405(4F) IKP 7 Heolleung-ro, Seocho-gu, Seoul, Republic of Korea (06792)</span>
            </p>
            <p className="flex items-center justify-center sm:justify-start gap-4">
              <span className="flex items-center gap-1.5">
                <Phone className="size-3.5 text-[#F59E0B]" /> TEL: +82-2-776-1583
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="size-3.5 text-[#F59E0B]" />
                <a href="mailto:events@indochamkorea.org" className="hover:text-[#FEF08A] underline">
                  events@indochamkorea.org
                </a>
              </span>
            </p>
          </div>

          <p className="text-xs text-amber-200/60">
            &copy; 2026 ICCK. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
