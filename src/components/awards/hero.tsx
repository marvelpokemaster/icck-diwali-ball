import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-india-korea.jpg";
import goldOnlyEmblem from "@/assets/icck-official-emblem-gold-only.png";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-navy-deep">
      <img
        src={heroBg}
        alt="Seoul skyline with the South Korean flag and the Taj Mahal with the Indian flag"
        width={1920}
        height={912}
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.19_0.055_262/0.72)_0%,oklch(0.19_0.055_262/0.92)_70%)]" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 py-16 text-center md:py-24">
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
            className="w-48 xs:w-56 sm:w-64 md:w-72 h-auto object-contain animate-rise drop-shadow-[0_4px_25px_rgba(245,158,11,0.5)]"
          />
        </div>

        <h1 className="mt-6 font-display text-3xl font-bold uppercase leading-tight tracking-wide text-gradient-gold md:text-5xl">
          Celebrating India&ndash;Korea Business Excellence
        </h1>
        <p className="mt-4 text-base text-primary-foreground/85 md:text-lg">
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
