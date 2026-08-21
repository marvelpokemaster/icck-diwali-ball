import { Button } from "@/components/ui/button";

import goldOnlyEmblem from "@/assets/icck-official-emblem-gold-only.png";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#091442] min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)] flex items-center justify-center">

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-12 md:py-16 text-center">
        <span className="mb-6 rounded-b-md bg-gradient-gold px-5 py-1 font-display text-sm font-bold tracking-[0.2em] text-gold-foreground">
          2026
        </span>

        {/* Pure 100% Gold-Only Transparent Official ICCK Circular Emblem */}
        <div className="relative my-3 flex flex-col items-center">
          <img
            src={goldOnlyEmblem}
            alt="Official Indian Chamber of Commerce in Korea Gold Emblem"
            width={1024}
            height={1024}
            className="w-48 xs:w-56 sm:w-64 md:w-72 h-auto object-contain animate-rise brightness-110 saturate-125 drop-shadow-[0_4px_35px_rgba(251,191,36,0.85)] drop-shadow-[0_0_15px_rgba(245,158,11,0.6)]"
          />
        </div>

        <h1 className="mt-6 font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-tight tracking-[0.06em] text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#FEF08A] to-[#F59E0B] drop-shadow-[0_4px_14px_rgba(0,0,0,0.95)]">
          Celebrating India&ndash;Korea<br className="hidden sm:inline" /> Business Excellence
        </h1>
        <p className="mt-4 text-base text-white md:text-lg">
          ICCK Business Awards 2026 &middot; Honoring Bilateral Collaboration
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-gradient-gold font-semibold uppercase tracking-wide text-gold-foreground shadow-gold hover:opacity-90"
          >
            <a href="#nomination">Nominate Now</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-gold/70 bg-transparent font-semibold uppercase tracking-wide text-gold hover:bg-gold/10 hover:text-gold"
          >
            <a href="#about">Learn More</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
