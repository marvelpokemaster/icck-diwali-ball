import { createFileRoute, Link } from "@tanstack/react-router";
import { Ticket } from "lucide-react";
import { toast } from "sonner";
import { useEffect } from "react";

import icckLogo from "@/assets/icck-logo.png";

import {
  DiyaLamp,
  HangingDiyaString,
  IndianDancerIllustration,
  GoldTrophyIllustration,
  FourIconBundleEmblem,
  FireworkSparkle,
  RangoliMandala,
} from "@/components/awards/DiwaliDecorations";

import { JharokhaArchCard } from "@/components/awards/JharokhaArchCard";
import {
  HeaderCartouche,
  ScallopedTrim,
} from "@/components/awards/JharokhaArchFrame";
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
    <div className="relative flex min-h-screen flex-col overflow-x-hidden font-sans text-white" style={{ background: "#071943" }}>

      {/* ================================================================
          BACKGROUND — CSS ONLY, NO PHOTO
          Deep navy with a barely-perceptible central royal-blue depth glow
          and an extremely faint upper gold warmth. NO side lighting.
      ================================================================= */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Base navy */}
        <div className="absolute inset-0" style={{ background: "#071943" }} />

        {/* Very subtle central blue depth — stays well within center, no sides */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(27,52,130,0.28) 0%, rgba(7,25,67,0) 100%)",
          }}
        />

        {/* Barely-there warm gold warmth at the very top (behind the header) */}
        <div
          className="absolute inset-x-0 top-0 h-[22%]"
          style={{
            background:
              "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(217,164,65,0.08) 0%, rgba(7,25,67,0) 100%)",
          }}
        />
      </div>

      {/* Interactive firecrackers */}
      <FirecrackerCanvas />

      {/* ================================================================
          TOP GOLD HEADER — full-width, clearly visible warm gold band
          Desktop target: ~56px. Mobile: ~48px.
      ================================================================= */}
      <header
        className="relative z-30 w-full shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
        style={{
          background: "linear-gradient(90deg, #A86F18 0%, #D9A441 30%, #F1C45B 50%, #D9A441 70%, #A86F18 100%)",
          borderBottom: "1px solid #7B5522",
        }}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-3 py-2 sm:py-3">

          {/* Left diya */}
          <DiyaLamp className="hidden h-7 w-7 sm:block" />

          {/* Center cartouche — dark navy with gold border */}
          <HeaderCartouche className="mx-auto px-2.5 py-1 sm:px-4 sm:py-1.5">
            <img
              src={icckLogo}
              alt="ICCK Official Logo"
              width={940}
              height={347}
              className="h-5 w-auto object-contain sm:h-7"
            />

            <div className="border-l border-[#D9A441]/50 pl-2 text-center sm:pl-3 sm:text-left">
              <p className="font-serif text-[9px] font-black uppercase leading-none tracking-[0.1em] text-[#FFE39A] sm:text-sm sm:tracking-[0.14em]">
                ICCK DIWALI CELEBRATIONS
              </p>
              <p className="mt-0.5 text-[7px] font-semibold uppercase leading-none tracking-widest text-white/85 sm:text-[9.5px]">
                Year 2026 &middot; Diwali Theme &middot; Geometric Motifs
              </p>
            </div>

            <DiyaLamp className="h-4 w-4 sm:h-5 sm:w-5" />
          </HeaderCartouche>

          {/* Right diya */}
          <DiyaLamp className="hidden h-7 w-7 sm:block" />

        </div>

        {/* Bottom scalloped trim */}
        <div className="pointer-events-none absolute left-0 right-0 top-full z-30">
          <ScallopedTrim className="h-3 w-full" />
        </div>
      </header>

      {/* ================================================================
          MAIN CONTENT
      ================================================================= */}
      <main className="relative z-20 flex-1 overflow-hidden pt-3 pb-2">

        {/* Hanging diya strings on large screens only */}
        <div className="pointer-events-none absolute left-1 top-0 z-30 hidden opacity-75 lg:block">
          <HangingDiyaString className="h-32 w-7" />
        </div>
        <div className="pointer-events-none absolute right-1 top-0 z-30 hidden opacity-75 lg:block">
          <HangingDiyaString className="h-32 w-7" />
        </div>

        <section className="relative z-20 mx-auto max-w-5xl px-2 text-center sm:px-3">

          {/* ============================================================
              TITLE
          ============================================================= */}
          <div className="mb-1.5 mt-0">
            <h1
              className="font-serif text-xl font-black uppercase leading-[1.05] tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] sm:text-3xl lg:text-4xl"
              style={{ color: "#F0C866" }}
            >
              ICCK Diwali Ball:
              <br />
              <span style={{ color: "#FFF3D0", fontStyle: "italic" }}>
                Illuminate Your Celebration!
              </span>
            </h1>

            <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-white/80 sm:text-[11px]">
              Year 2026 &middot; Diwali Theme &middot; Geometric Motifs
            </p>
          </div>

          {/* ============================================================
              EVENT CARDS — 3 columns, royal blue + burgundy
          ============================================================= */}
          <div className="mx-auto mt-0 grid w-full max-w-[420px] grid-cols-3 items-end gap-1 px-0.5 sm:max-w-4xl sm:gap-2 md:gap-3">

            {/* Card 1 — Royal Blue / Steel Blue */}
            <JharokhaArchCard
              title="ICCK DIWALI BALL"
              price="$100"
              buttonText="Buy Tickets"
              noteText="Dinner, dance & performances"
              gradientFrom="#2596be"
              gradientTo="#175069"
              illustration={
                <IndianDancerIllustration className="h-20 w-16 xs:h-24 xs:w-20 sm:h-32 sm:w-28 md:h-36 md:w-32" />
              }
              to="/register"
              search={{ preset: "ball" }}
            />

            {/* Card 2 — Crimson / Wine Red */}
            <JharokhaArchCard
              title="ICCK BUSINESS AWARDS"
              price="$125"
              buttonText="Register Now"
              noteText="Honoring business excellence"
              gradientFrom="#9B3157"
              gradientTo="#711D40"
              illustration={
                <GoldTrophyIllustration className="h-20 w-16 xs:h-22 xs:w-18 sm:h-28 sm:w-26 md:h-32 md:w-28" />
              }
              to="/awards"
            />

            {/* Card 3 — Dark Plum / Deep Burgundy */}
            <JharokhaArchCard
              ribbonText="DISCOUNTED BUNDLE"
              title="BUNDLE REGISTRATION"
              price="$190"
              strikePrice="($225)"
              badgeText="SAVE 15%"
              buttonText="GET THE BUNDLE"
              noteText="Both events at a discounted price"
              gradientFrom="#732442"
              gradientTo="#50162F"
              illustration={
                <FourIconBundleEmblem className="h-16 w-16 xs:h-18 xs:w-18 sm:h-26 sm:w-26 md:h-28 md:w-28" />
              }
              to="/register"
              search={{ preset: "bundle" }}
            />

          </div>

          {/* ============================================================
              CTA BUTTONS — antique gold, side-by-side on desktop
          ============================================================= */}
          <div className="mx-auto mt-2 flex w-full max-w-[360px] flex-col items-center justify-center gap-1.5 sm:mt-2.5 sm:max-w-none sm:flex-row sm:gap-3">

            <div className="flex w-full items-center gap-1.5 sm:w-auto">
              <FireworkSparkle className="hidden h-4 w-4 shrink-0 animate-pulse sm:block" style={{ color: "#F1C45B" }} />
              <Link
                to="/awards"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-full px-5 py-2 font-sans text-[11px] font-black uppercase tracking-[0.1em] transition hover:brightness-110 sm:w-auto sm:text-sm"
                style={{
                  background: "linear-gradient(90deg, #C8891C, #E8B840, #C8891C)",
                  color: "#111A3A",
                  border: "1px solid #A87518",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.35)",
                }}
              >
                <Ticket className="h-3.5 w-3.5" />
                VIEW ALL EVENTS
              </Link>
            </div>

            <div className="flex w-full items-center gap-1.5 sm:w-auto">
              <button
                onClick={() =>
                  toast.success(
                    "🎆 Festive firecrackers launched! We'll email you event updates."
                  )
                }
                className="inline-flex w-full items-center justify-center rounded-full px-5 py-2 font-sans text-[11px] font-black uppercase tracking-[0.1em] transition hover:brightness-110 sm:w-auto sm:text-sm"
                style={{
                  background: "linear-gradient(90deg, #C8891C, #E8B840, #C8891C)",
                  color: "#111A3A",
                  border: "1px solid #A87518",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.35)",
                }}
              >
                SIGN UP FOR UPDATES
              </button>
              <FireworkSparkle className="hidden h-4 w-4 shrink-0 animate-pulse sm:block" style={{ color: "#F1C45B" }} />
            </div>

          </div>

          {/* ============================================================
              RANGOLI — small, below buttons
          ============================================================= */}
          <div className="mt-1.5 flex items-center justify-center">
            <RangoliMandala className="h-16 w-16 opacity-85 sm:h-24 sm:w-24" />
          </div>

          {/* ============================================================
              FOOTER LINKS
          ============================================================= */}
          <nav className="mt-0.5 flex flex-wrap justify-center gap-x-3 gap-y-0 pb-2 text-[8px] font-bold uppercase tracking-wider text-white/60 sm:gap-x-5 sm:text-[10px]">
            <Link to="/nominate" className="transition-colors hover:text-[#F1C45B]">
              Submit nomination
            </Link>
            <Link to="/register" search={{ preset: undefined }} className="transition-colors hover:text-[#F1C45B]">
              Registration &amp; invoice
            </Link>
            <Link to="/admin" className="transition-colors hover:text-[#F1C45B]">
              Admin dashboard
            </Link>
          </nav>

        </section>
      </main>
    </div>
  );
}
