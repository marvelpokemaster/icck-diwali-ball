import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { 
  Ticket, 
  Sparkles, 
  Building2, 
  Phone, 
  Mail, 
  Youtube, 
  Users, 
  Utensils, 
  Music, 
  Gift, 
  Award,
  Calendar,
  MapPin,
  HeartHandshake,
  Instagram
} from "lucide-react";
import { useEffect, useState } from "react";
import icckLogo from "@/assets/icck-identity/240919_ICCK_horizontal_A_ENG_KOR-color.svg";
import icckGoldLogoHorizontal from "@/assets/icck-identity/240919_ICCK_horizontal_A_ENG-gold.png";
import icckGoldLogo from "@/assets/icck-identity/240919_ICCK_vertical_ENG-gold.svg";
import diwaliFlyerBg from "@/assets/Background_hero.png";
import real2025Stage from "@/assets/real-2025-diwali-stage.png";
import eventPic1 from "@/assets/event-pic-1.png";
import eventPic2 from "@/assets/event-pic-2.png";
import eventPic6 from "@/assets/event-pic-6.png";

import { 
  FireworkSparkle
} from "@/components/awards/DiwaliDecorations";
import { JharokhaArchCard } from "@/components/awards/JharokhaArchCard";
import { HeaderCartouche, ScallopedTrim } from "@/components/awards/JharokhaArchFrame";
import { FirecrackerCanvas } from "@/components/awards/FirecrackerCanvas";

const title = "ICCK Diwali Celebrations 2026 | Business Awards & Ball";
const description =
  "Join industry leaders for the ICCK Diwali Ball & Business Awards 2026. Celebrate culture, networking, cuisine, and excellence in Seoul.";

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
        <div className="absolute inset-0 bg-[#091442]/50" />
      </div>

      {/* Dynamic Interactive Firecracker Canvas Overlay */}
      <FirecrackerCanvas />
      

      {/* ---------------- 1. TOP NAVY HEADER BANNER (GLASSMORPHISM) ---------------- */}
      <header className="sticky top-0 w-full bg-[#060D2B]/75 backdrop-blur-md py-1 shadow-2xl z-50 border-b border-amber-400/20">
        <div className="flex w-full items-center px-4 sm:px-8 lg:px-12">

          {/* Left-aligned Gold ICCK Logo */}
          <a href="#top" className="flex items-center gap-3">
            <img
              src={icckGoldLogoHorizontal}
              alt="ICCK Official Gold Logo"
              width={940}
              height={347}
              className="h-9 xs:h-11 sm:h-14 md:h-16 lg:h-[5.5rem] w-auto object-contain shrink-0 brightness-115 saturate-130 drop-shadow-[0_0_15px_rgba(251,191,36,0.85)] drop-shadow-[0_2px_8px_rgba(245,158,11,0.6)]"
            />
            <span className="sr-only">ICCK Diwali Celebrations 2026</span>
          </a>

        </div>

        {/* Trailing Glass Transition */}
        <div className="absolute top-full left-0 right-0 h-12 sm:h-16 pointer-events-none bg-gradient-to-b from-[#060D2B]/75 to-transparent backdrop-blur-md [mask-image:linear-gradient(to_bottom,black,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]" />

      </header>

      {/* ---------------- 2. MAIN CONTENT SECTIONS ---------------- */}
      <main className="relative overflow-hidden z-20 my-auto pt-4 pb-12 space-y-16">

        {/* ---------------- HERO & PROPORTIONAL CARDS ---------------- */}
        <section className="relative z-20 mx-auto w-[92vw] max-w-[1500px] px-2 sm:px-4 text-center">
          
          {/* Main Title Banner */}
          <div className="mt-1 mb-2 flex items-center justify-center">
            <div>
              <h1 className="font-serif text-4xl xs:text-5xl sm:text-4xl lg:text-5xl font-black leading-[1.05] tracking-wide text-[#FEF08A] drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)] uppercase">
                ICCK DIWALI BALL 2026
              </h1>
            </div>
          </div>

          {/* Date & Location Badge */}
          <div className="mt-2 mb-6 inline-flex flex-wrap items-center justify-center gap-4 rounded-xl border border-amber-300/40 bg-[#060D2B]/80 backdrop-blur-md px-4 py-2 text-xs sm:text-sm font-bold text-amber-200 shadow-xl">
            <span className="flex items-center gap-1.5"><Calendar className="size-4 text-[#F59E0B]" /> December 5th, 2026 | 18:30</span>
            <span className="hidden sm:inline text-amber-500">•</span>
            <span className="flex items-center gap-1.5"><MapPin className="size-4 text-[#F59E0B]" /> Fairmont Ambassador Seoul, Yeouido</span>
          </div>

          {/* 2 ARCH CARDS SPREAD OUT BEAUTIFULLY TO FILL THE SCREEN SPACE */}
          <div className="mt-1 flex flex-col sm:grid sm:grid-cols-2 gap-8 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center sm:items-stretch w-full max-w-[440px] sm:max-w-4xl lg:max-w-5xl mx-auto px-2 xs:px-4">
            
            {/* Card 1: ICCK DIWALI BALL */}
            <JharokhaArchCard
              title="ICCK DIWALI BALL"
              price="$100"
              buttonText="Buy Tickets"
              noteText="Dinner, dance & performances"
              gradientFrom="#253494"
              gradientTo="#0f1854"
              to="mailto:events@indochamkorea.org?subject=Diwali%20Ball%20Ticket%20Enquiry"
            />

            {/* Card 2: ICCK BUSINESS AWARDS */}
            <JharokhaArchCard
              title="ICCK BUSINESS AWARDS"
              price="$125"
              buttonText="Nominate Now"
              noteText="Honoring business excellence"
              gradientFrom="#253494"
              gradientTo="#0f1854"
              to="/awards"
            />

          </div>

          {/* BOTTOM ACTION BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-[360px] sm:max-w-none mx-auto relative px-3 sm:px-0">
            

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

        </section>

        {/* ---------------- (a) ABOUT THE FESTIVAL ---------------- */}
        <section id="about" className="relative z-20 w-[92vw] max-w-[1500px] mx-auto px-4">
          <div className="rounded-2xl border-2 border-amber-400/40 bg-gradient-to-b from-[#060D2B]/95 via-[#091442]/95 to-[#060D2B]/95 backdrop-blur-md p-6 sm:p-10 text-center shadow-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-400/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#FEF08A] mb-4">
              <Sparkles className="size-4 text-[#F59E0B]" /> ABOUT THE FESTIVAL
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-black uppercase tracking-wide text-white mb-4">
              The Festival of Lights & Victory
            </h2>

            <p className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed text-amber-100/90 font-medium">
              Diwali, or the Festival of Lights, is one of the most important and widely observed festivals in India and across global communities. 
              It represents the triumph of light over darkness, good over evil, and wisdom over ignorance. 
              During this festive season, families and business communities gather to light oil lamps, decorate with colorful motifs, enjoy authentic gourmet cuisine, 
              and foster lasting international connections of joy, prosperity, and hope.
            </p>
          </div>
        </section>

        {/* ---------------- (b) HIGHLIGHTS OF DIWALI BALL 2026 ---------------- */}
        <section id="highlights" className="relative z-20 w-[92vw] max-w-[1500px] mx-auto px-4">
          <div className="rounded-2xl border-2 border-amber-300 bg-gradient-to-b from-[#FFF7ED] via-[#FDE047] to-[#D97706] p-6 sm:p-10 text-left shadow-[0_10px_35px_rgba(245,158,11,0.4)] text-[#060D2B]">
            <div className="flex items-center gap-3 mb-6 border-b-2 border-amber-800/20 pb-4">
              <Sparkles className="size-8 text-[#B7182E]" />
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-black uppercase tracking-wide">
                  Highlights of Diwali Ball 2026
                </h2>
                <p className="text-xs sm:text-sm font-bold text-[#1A0A00]/80">
                  An exclusive gala evening of networking, culture, gourmet dining, and recognition.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-bold text-[#060D2B]">
              <div className="flex items-start gap-3 bg-white/60 p-3.5 rounded-xl border border-amber-800/20 shadow-sm">
                <Users className="size-5 text-[#B7182E] shrink-0 mt-0.5" />
                <span>Networking Opportunities with ICCK&apos;s Global Business Network (250+ distinguished C-level executives & leaders).</span>
              </div>

              <div className="flex items-start gap-3 bg-white/60 p-3.5 rounded-xl border border-amber-800/20 shadow-sm">
                <HeartHandshake className="size-5 text-[#B7182E] shrink-0 mt-0.5" />
                <span>Deep Indo-Korea Corporate & Strategic Community Engagement.</span>
              </div>

              <div className="flex items-start gap-3 bg-white/60 p-3.5 rounded-xl border border-amber-800/20 shadow-sm">
                <Music className="size-5 text-[#B7182E] shrink-0 mt-0.5" />
                <span>Authentic Cultural Dance Performances by Renowned Indian Dance Troupes.</span>
              </div>

              <div className="flex items-start gap-3 bg-white/60 p-3.5 rounded-xl border border-amber-800/20 shadow-sm">
                <Utensils className="size-5 text-[#B7182E] shrink-0 mt-0.5" />
                <span>Multi-Course Fine-Dining Indian & International Culinary Experience.</span>
              </div>

              <div className="flex items-start gap-3 bg-white/60 p-3.5 rounded-xl border border-amber-800/20 shadow-sm">
                <Gift className="size-5 text-[#B7182E] shrink-0 mt-0.5" />
                <span>Exclusive Gala Raffle & Auction Grand Prize Giveaways.</span>
              </div>

              <div className="flex items-start gap-3 bg-white/60 p-3.5 rounded-xl border border-amber-800/20 shadow-sm">
                <Award className="size-5 text-[#B7182E] shrink-0 mt-0.5" />
                <span>Distinguished Guests of Honor including H.E. Ambassador of India to the Republic of Korea.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- (c) SPONSORS & SPONSORSHIP CONTACT ---------------- */}
        <section id="sponsors" className="relative z-20 w-[92vw] max-w-[1500px] mx-auto px-4 text-center">
          <div className="rounded-2xl border-2 border-amber-400/40 bg-gradient-to-b from-[#060D2B]/95 via-[#091442]/95 to-[#060D2B]/95 backdrop-blur-md p-6 sm:p-10 shadow-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-400/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#FEF08A] mb-3">
              <Building2 className="size-4 text-[#F59E0B]" /> SPONSORSHIP & PARTNERS
            </div>
            
            <h2 className="font-serif text-3xl font-black uppercase tracking-wide text-white mb-2">
              Our Corporate Sponsors & Partners
            </h2>
            
            <p className="text-sm text-amber-100/80 mb-8 max-w-2xl mx-auto">
              Thank you to our valued corporate partners making this bilateral celebration possible.
            </p>

            {/* Tier Grid */}
            <div className="space-y-6 text-left">
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-[#FEF08A] mb-3 border-b border-amber-400/20 pb-1">
                  Platinum Sponsors
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="bg-[#091442] border border-amber-400/30 rounded-xl p-4 flex items-center justify-center font-serif text-base font-black text-amber-200 h-20 shadow-inner">
                    PLATINUM PARTNER
                  </div>
                  <div className="bg-[#091442] border border-amber-400/30 rounded-xl p-4 flex items-center justify-center font-serif text-base font-black text-amber-200 h-20 shadow-inner">
                    GLOBAL LEADER
                  </div>
                  <div className="bg-[#091442] border border-amber-400/30 rounded-xl p-4 flex items-center justify-center font-serif text-base font-black text-amber-200 h-20 shadow-inner">
                    INDO-KOREA CORP
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-amber-300 mb-3 border-b border-amber-400/20 pb-1">
                  Gold Sponsors
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="bg-[#091442] border border-amber-400/20 rounded-xl p-3 flex items-center justify-center font-sans text-xs font-bold text-amber-100 h-16">
                    GOLD SPONSOR I
                  </div>
                  <div className="bg-[#091442] border border-amber-400/20 rounded-xl p-3 flex items-center justify-center font-sans text-xs font-bold text-amber-100 h-16">
                    GOLD SPONSOR II
                  </div>
                  <div className="bg-[#091442] border border-amber-400/20 rounded-xl p-3 flex items-center justify-center font-sans text-xs font-bold text-amber-100 h-16">
                    GOLD SPONSOR III
                  </div>
                </div>
              </div>
            </div>

            {/* Sponsorship Contact Action */}
            <div className="mt-8 pt-6 border-t border-amber-400/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
              <div>
                <h4 className="font-serif text-lg font-black text-[#FEF08A]">Interested in Sponsoring Diwali Ball 2026?</h4>
                <p className="text-xs text-amber-200/80">Showcase your brand to top Korean & Indian business executives.</p>
              </div>

              <a
                href="mailto:events@indochamkorea.org?subject=Diwali%20Ball%20Sponsorship%20Enquiry"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] px-5 py-3 font-black text-xs uppercase tracking-wider text-[#060c2c] shadow-lg hover:brightness-110 shrink-0"
              >
                <Mail className="size-4" /> Contact Sponsorships
              </a>
            </div>

          </div>
        </section>

        {/* ---------------- (d) EXACT USER-PROVIDED 2025 STAGE PHOTO & YOUTUBE VIDEO SECTION ---------------- */}
        <section id="gallery" className="relative z-20 w-[92vw] max-w-[1500px] mx-auto px-4">
          <div className="rounded-2xl border-2 border-amber-300 bg-gradient-to-b from-[#FFF7ED] via-[#FDE047] to-[#D97706] p-6 sm:p-8 text-left shadow-[0_10px_35px_rgba(245,158,11,0.4)] text-[#060D2B]">
            
            <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
              <div className="flex items-center gap-3">
                <Youtube className="size-7 text-[#B7182E]" />
                <h2 className="font-serif text-2xl font-black uppercase tracking-wide drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
                  2025 Diwali Ball: A Glimpse of Last Year&apos;s Energy
                </h2>
              </div>

              <a
                href="https://www.instagram.com/p/DSZOiEPE-4g/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#B7182E] hover:underline bg-white/70 px-3 py-1.5 rounded-lg border border-amber-800/20 shadow-sm"
              >
                <Instagram className="size-4 text-[#E4405F]" /> View Official Instagram Post
              </a>
            </div>
            
            <p className="text-sm leading-relaxed text-[#1A0A00] font-bold mb-6">
              Relive the grandeur, cultural performances, VIP networking, and festive celebration of the ICCK Diwali Ball!
            </p>

            {/* PHOTO GALLERY WITH EXACT USER-PROVIDED 2025 STAGE PHOTO IN 1ST POSITION */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {/* 1st Position: EXACT User-Provided Official 2025 Stage Photo */}
              <div className="overflow-hidden rounded-xl shadow-md border-2 border-amber-800/30 bg-black aspect-square">
                <img src={real2025Stage} alt="Official ICCK 2025 Diwali Ball Stage Photo" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              
              {/* 2nd Position: VIP Guest Reception & Networking */}
              <div className="overflow-hidden rounded-xl shadow-md border-2 border-amber-800/30 bg-black aspect-square">
                <img src={eventPic1} alt="Diwali Ball VIP Guest Networking" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>

              {/* 3rd Position: Fairmont Grand Ballroom Dining Setup */}
              <div className="overflow-hidden rounded-xl shadow-md border-2 border-amber-800/30 bg-black aspect-square">
                <img src={eventPic2} alt="Diwali Ball Grand Ballroom Dining Setup" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>

              {/* 4th Position: Live Stage Cultural Dance Performance */}
              <div className="overflow-hidden rounded-xl shadow-md border-2 border-amber-800/30 bg-black aspect-square">
                <img src={eventPic6} alt="Live Indian Cultural Stage Performance" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>

            {/* Official 2025 YouTube Video Embed */}
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl border-2 border-amber-800/40 bg-black">
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

      {/* ---------------- 3. CONTACT US & OFFICIAL FOOTER ---------------- */}
      <footer className="relative z-30 border-t-2 border-amber-400/40 bg-[#060d2b] py-10 text-center text-amber-100/90 text-sm font-medium">
        <div className="mx-auto w-[92vw] max-w-[1500px] px-4 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          <img
            src={icckGoldLogoHorizontal}
            alt="Indian Chamber of Commerce in Korea"
            width={940}
            height={347}
            className="h-12 xs:h-14 md:h-16 lg:h-[5.5rem] w-auto object-contain brightness-115 saturate-130 drop-shadow-[0_0_15px_rgba(251,191,36,0.85)] drop-shadow-[0_2px_12px_rgba(245,158,11,0.6)]"
          />

          <div className="space-y-2 text-xs text-amber-200/90 font-medium">
            <h4 className="font-serif text-sm font-black uppercase text-[#FEF08A] tracking-wider mb-1">
              Contact Us
            </h4>

            <p className="flex items-center justify-center md:justify-start gap-2">
              <Building2 className="size-4 text-[#F59E0B] shrink-0" />
              <span>ICCK, 405(4F) IKP 7 Heolleung-ro, Seocho-gu, Seoul, Republic of Korea (06792)</span>
            </p>

            <p className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-6">
              <span className="flex items-center gap-1.5">
                <Phone className="size-3.5 text-[#F59E0B] shrink-0" /> TEL: +82-2-776-1583
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="size-3.5 text-[#F59E0B] shrink-0" />
                <a href="mailto:events@indochamkorea.org" className="hover:text-[#FEF08A] underline font-bold">
                  events@indochamkorea.org
                </a>
              </span>
            </p>
          </div>

          <div className="text-xs text-amber-200/60">
            <p>&copy; 2026 ICCK. All rights reserved.</p>
          </div>

        </div>
      </footer>
    </div>
  );
}
