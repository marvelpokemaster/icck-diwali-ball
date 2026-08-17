import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Trophy, PartyPopper, Ticket } from "lucide-react";
import { toast } from "sonner";
import icckLogo from "@/assets/icck-logo.png";

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
    <div className="min-h-screen bg-festive-deep">
      {/* Gold ribbon header */}
      <header className="bg-gradient-marigold px-4 py-3">
        <div className="mx-auto flex max-w-5xl items-center justify-center">
          <div className="flex items-center gap-3 rounded-md border border-gold-light/70 bg-festive-deep px-5 py-2 shadow-elegant">
            <img
              src={icckLogo}
              alt="Indian Chamber of Commerce in Korea"
              width={940}
              height={347}
              className="h-7 w-auto brightness-0 invert"
            />
            <div className="text-left">
              <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-gold-light md:text-lg">
                ICCK Diwali Celebrations
              </p>
              <p className="text-[10px] tracking-wide text-gold/80 md:text-xs">
                Year 2026 &middot; Diwali Theme &middot; Geometric Motifs
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-rangoli opacity-60" aria-hidden />

        <section className="relative mx-auto max-w-6xl px-4 py-14 text-center md:py-20">
          <h1 className="font-display text-3xl font-bold leading-tight text-gradient-gold md:text-5xl">
            ICCK Diwali Ball:
            <br />
            Illuminate Your Celebration!
          </h1>
          <p className="mt-4 text-sm tracking-wide text-gold-light/85 md:text-base">
            Year 2026 &middot; Diwali Theme &middot; Geometric Motifs
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3 md:items-end">
            <OfferCard
              tone="indigo"
              icon={<PartyPopper className="h-9 w-9" />}
              name="ICCK Diwali Ball"
              price="$100"
              cta="Buy Tickets"
              note="Dinner, dance & performances"
              to="/register"
              search={{ preset: "ball" as const }}
            />

            <div className="relative">
              <OfferCard
                tone="magenta"
                icon={<Trophy className="h-9 w-9" />}
                name="ICCK Business Awards"
                price="$125"
                cta="Register Now"
                note="Honoring business excellence"
                to="/awards"
              />
            </div>

            <div className="relative">
              <span className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-gradient-gold px-4 py-1 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-gold-foreground shadow-gold">
                Discounted Bundle
              </span>
              <OfferCard
                tone="pink"
                icon={<Sparkles className="h-9 w-9" />}
                name="Bundle Registration"
                price="$190"
                strike="$225"
                badge="Save 15%"
                cta="Get the Bundle"
                note="Both events at a discounted price"
                to="/register"
                search={{ preset: "bundle" as const }}
              />
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/awards"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-gold px-8 py-3 font-display text-sm font-bold uppercase tracking-[0.16em] text-gold-foreground shadow-gold transition hover:opacity-90 sm:w-auto"
            >
              <Ticket className="h-4 w-4" /> View All Events
            </Link>
            <button
              onClick={() => toast.success("You're on the list! We'll email you festive updates.")}
              className="inline-flex w-full items-center justify-center rounded-md border border-gold/70 px-8 py-3 font-display text-sm font-bold uppercase tracking-[0.16em] text-gold transition hover:bg-gold/10 sm:w-auto"
            >
              Sign up for updates
            </button>
          </div>

          <nav className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gold-light/70">
            <Link to="/nominate" className="hover:text-gold">
              Submit a nomination
            </Link>
            <Link to="/register" search={{ preset: undefined }} className="hover:text-gold">
              Registration & invoice
            </Link>
            <Link to="/admin" className="hover:text-gold">
              Admin dashboard
            </Link>
          </nav>
        </section>
      </main>
    </div>
  );
}

const tones = {
  indigo: "from-festive-indigo to-festive-deep border-gold/40",
  magenta: "from-festive-magenta to-festive-rose border-gold/50",
  pink: "from-festive-rose to-festive-magenta border-gold/60",
} as const;

function OfferCard({
  tone,
  icon,
  name,
  price,
  strike,
  badge,
  cta,
  note,
  to,
  search,
}: {
  tone: keyof typeof tones;
  icon: React.ReactNode;
  name: string;
  price: string;
  strike?: string;
  badge?: string;
  cta: string;
  note: string;
  to: "/awards" | "/register";
  search?: { preset: "ball" | "bundle" };
}) {
  return (
    <article
      className={`flex h-full flex-col items-center gap-3 rounded-t-[3rem] rounded-b-xl border bg-gradient-to-b ${tones[tone]} px-6 pb-7 pt-10 text-center shadow-elegant`}
    >
      <span className="text-gold-light">{icon}</span>
      <h2 className="font-display text-base font-bold uppercase tracking-[0.12em] text-primary-foreground">
        {name}
      </h2>
      <p className="flex flex-wrap items-baseline justify-center gap-2">
        <span className="font-display text-3xl font-bold text-gold-light">{price}</span>
        {strike && <span className="text-sm line-through text-primary-foreground/60">{strike}</span>}
      </p>
      {badge && (
        <span className="rounded-full bg-gold/20 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-gold-light">
          {badge}
        </span>
      )}
      {search ? (
        <Link
          to={to}
          search={search}
          className="mt-1 inline-flex items-center justify-center rounded-md bg-gradient-gold px-6 py-2 text-sm font-semibold text-gold-foreground shadow-gold transition hover:opacity-90"
        >
          {cta}
        </Link>
      ) : (
        <Link
          to={to}
          className="mt-1 inline-flex items-center justify-center rounded-md bg-gradient-gold px-6 py-2 text-sm font-semibold text-gold-foreground shadow-gold transition hover:opacity-90"
        >
          {cta}
        </Link>
      )}
      <p className="text-xs text-primary-foreground/80">{note}</p>
    </article>
  );
}
