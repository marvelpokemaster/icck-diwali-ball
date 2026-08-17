import { useEffect, useState } from "react";
import {
  Award,
  BadgeCheck,
  BookOpen,
  Building2,
  Cpu,
  Factory,
  Globe2,
  Handshake,
  HeartPulse,
  Leaf,
  Megaphone,
  Rocket,
  ScrollText,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import icckLogo from "@/assets/icck-logo.png";

/* ---------------- About the Awards ---------------- */

export function About() {
  return (
    <section id="about" className="bg-gradient-navy py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center md:px-8">
        <h2 className="section-title text-gradient-gold">About the Awards</h2>
        <h3 className="mt-6 font-display text-xl font-semibold text-gold">Vision &amp; Objectives</h3>
        <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-primary-foreground/80 md:text-base">
          The Indian Chamber of Commerce in Korea (ICCK) Business Awards recognize companies that
          have made outstanding contributions to strengthening India&ndash;Korea business relations
          and demonstrated excellence, innovation, leadership and meaningful impact across key
          sectors.
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          <div className="flex flex-col items-center">
            <Target className="size-9 text-gold" />
            <h4 className="mt-4 font-display text-base font-semibold text-gold-light">
              Recognizing Excellence
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">
              Eight sectoral categories honour measurable achievement in trade, investment,
              innovation and sustainability across the India&ndash;Korea corridor.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Users className="size-9 text-gold" />
            <h4 className="mt-4 font-display text-base font-semibold text-gold-light">
              Building Bilateral Ties
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">
              A platform that connects companies, institutions and leaders driving commercial,
              technological and people-to-people links between the two markets.
            </p>
          </div>
        </div>

        <div className="mx-auto my-12 size-1.5 rounded-full bg-gold" />

        <h3 className="font-display text-xl font-semibold text-gold">Event Program</h3>
        <div className="mx-auto mt-5 max-w-xl divide-y divide-gold/20 rounded-lg border border-gold/25 bg-navy-deep/40 text-left">
          {[
            ["5:30 PM – 6:00 PM", "Reception & Registration"],
            ["6:00 PM – 7:00 PM", "Awards Ceremony"],
          ].map(([time, title]) => (
            <div key={time} className="flex flex-wrap items-center justify-between gap-2 px-5 py-4">
              <span className="font-display text-sm font-semibold text-gold">{time}</span>
              <span className="text-sm text-primary-foreground/80">{title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Timeline + countdown ---------------- */

const milestones = [
  { date: "Aug 15", label: "Nominations Open", note: "Sat, 12:00 KST" },
  { date: "Oct 16", label: "Nominations Close", note: "Fri, 23:59 KST" },
  { date: "Nov 2", label: "Finalists Announced", note: "Mon, 15:00 KST" },
  { date: "Nov 27", label: "Awards Ceremony", note: "Fri, 17:30 KST" },
];

function useCountdown(target: string) {
  const [left, setLeft] = useState<{ d: number; h: number; m: number; s: number } | null>(null);

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, new Date(target).getTime() - Date.now());
      setLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return left;
}

export function Timeline() {
  const left = useCountdown("2026-11-27T17:30:00+09:00");

  return (
    <section id="timeline" className="bg-navy-deep py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 text-center md:px-8">
        <h2 className="section-title text-gradient-gold">Timeline</h2>

        <div className="relative mt-12">
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-gold/35 md:block" />
          <ol className="grid gap-8 md:grid-cols-4">
            {milestones.map((m) => (
              <li key={m.date} className="relative flex flex-col items-center">
                <span className="relative z-10 flex size-10 items-center justify-center rounded-full bg-gradient-gold shadow-gold">
                  <Trophy className="size-5 text-gold-foreground" />
                </span>
                <span className="mt-4 font-display text-lg font-bold text-gold">{m.date}</span>
                <span className="mt-1 text-sm font-medium text-primary-foreground/85">
                  {m.label}
                </span>
                <span className="mt-1 text-xs text-primary-foreground/55">{m.note}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mx-auto mt-14 max-w-2xl border-t border-gold/25 pt-8">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-gold">
            Countdown Timer
          </p>
          <div className="mt-4 flex flex-wrap items-end justify-center gap-x-4 gap-y-2">
            {[
              ["days", left?.d],
              ["hrs", left?.h],
              ["min", left?.m],
              ["sec", left?.s],
            ].map(([unit, value], i) => (
              <div key={unit as string} className="flex items-end gap-4">
                {i > 0 && <span className="pb-1 text-2xl text-gold/40">|</span>}
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-3xl font-bold text-gold-light md:text-4xl">
                    {value ?? "--"}
                  </span>
                  <span className="text-sm text-primary-foreground/70">{unit as string}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why participate ---------------- */

const benefits = [
  {
    icon: Megaphone,
    title: "Publicity",
    body: "Nationwide and bilateral media exposure before and after the ceremony.",
  },
  {
    icon: Handshake,
    title: "Networking",
    body: "Meet leaders, investors and policymakers shaping India–Korea business.",
  },
  {
    icon: BadgeCheck,
    title: "Recognition",
    body: "Third-party validation of your achievements from an independent panel.",
  },
];

export function WhyParticipate() {
  return (
    <section id="why" className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 text-center md:px-8">
        <h2 className="section-title text-primary">Why Participate</h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="flex flex-col items-center">
              <b.icon className="size-9 text-primary" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-base font-semibold text-primary">{b.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Award categories ---------------- */

const categories = [
  {
    icon: Handshake,
    title: "India–Korea Partnership of the Year",
    body: "Recognizing outstanding bilateral collaboration between Indian and Korean entities across any sector.",
  },
  {
    icon: TrendingUp,
    title: "Trade & Investment Excellence",
    body: "Outstanding achievements in bilateral trade, FDI, or market expansion.",
  },
  {
    icon: Rocket,
    title: "Startup & Deep Tech Innovation",
    body: "Early-stage or growth-stage companies driving innovation in the India–Korea corridor.",
  },
  {
    icon: Leaf,
    title: "Sustainability, ESG & Battery Technology",
    body: "Measurable progress in ESG practices and excellence in EV battery manufacturing, energy storage and recycling.",
  },
  {
    icon: Cpu,
    title: "Software, AI & Digital Transformation",
    body: "Companies leveraging technology to transform business across the two markets.",
  },
  {
    icon: Factory,
    title: "Semiconductor & Advanced Manufacturing",
    body: "Excellence in cross-border manufacturing, sourcing, or supply chain integration.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare, Pharma & Biotechnology",
    body: "Contributions to healthcare, pharma, biotech, or medical devices linking India and Korea.",
  },
  {
    icon: BookOpen,
    title: "Education, EdTech & Cultural Exchange",
    body: "Meaningful contribution to people-to-people links, education, or cultural exchange.",
  },
];

export function Categories() {
  return (
    <section id="categories" className="bg-secondary py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <h2 className="section-title text-center text-primary">Award Categories</h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-muted-foreground">
          {[
            { icon: Globe2, label: "Bilateral" },
            { icon: Rocket, label: "Startups" },
            { icon: Leaf, label: "Sustainability" },
            { icon: HeartPulse, label: "Healthcare" },
            { icon: TrendingUp, label: "Growth" },
            { icon: Cpu, label: "Digital" },
          ].map((t) => (
            <div key={t.label} className="flex flex-col items-center gap-1">
              <t.icon className="size-5" strokeWidth={1.5} />
              <span className="text-[11px] uppercase tracking-wide">{t.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <article
              key={c.title}
              className="group rounded-lg border-2 border-gold/60 bg-card p-6 text-center shadow-elegant transition-transform hover:-translate-y-1"
            >
              <c.icon className="mx-auto size-9 text-primary" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-base font-bold leading-snug text-primary">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <article className="w-full max-w-md rounded-lg bg-gradient-gold p-8 text-center shadow-gold">
            <Trophy className="mx-auto size-10 text-gold-foreground" strokeWidth={1.5} />
            <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-wide text-gold-foreground">
              Company of the Year
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gold-foreground/85">
              Selected by the judges from among the category winners &mdash; the highest honour of
              the evening. No separate nomination required.
            </p>
          </article>
        </div>

        <div className="mt-8 flex justify-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-gold font-semibold uppercase tracking-wide text-gold-foreground shadow-gold hover:opacity-90"
          >
            <a href="#nomination">Learn More &rsaquo;</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Nomination & eligibility ---------------- */

export function Nomination() {
  return (
    <section id="nomination" className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <h2 className="section-title text-center text-primary">Nomination &amp; Eligibility</h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-6">
            <ScrollText className="size-8 text-primary" strokeWidth={1.5} />
            <h3 className="mt-4 font-display text-base font-bold text-primary">Eligibility</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
              <li>
                Legally registered in India, Korea or another jurisdiction, with activity that
                creates commercial, economic or institutional India&ndash;Korea linkages.
              </li>
              <li>Both ICCK members and non-members may submit nominations.</li>
              <li>Companies may enter more than one category; only one sector award is granted.</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <Award className="size-8 text-primary" strokeWidth={1.5} />
            <h3 className="mt-4 font-display text-base font-bold text-primary">
              Assessment Criteria
            </h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
              <li>
                <strong className="text-foreground">Impact</strong> &mdash; measurable difference
                created.
              </li>
              <li>
                <strong className="text-foreground">Bilateral contribution</strong> &mdash;
                strengthening India&ndash;Korea ties.
              </li>
              <li>
                <strong className="text-foreground">Excellence &amp; Innovation</strong> &mdash;
                distinctiveness versus industry standards.
              </li>
              <li>
                <strong className="text-foreground">Sustainability &amp; Evidence</strong> &mdash;
                long-term value, credibly documented.
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <Building2 className="size-8 text-primary" strokeWidth={1.5} />
            <h3 className="mt-4 font-display text-base font-bold text-primary">Judging Process</h3>
            <ol className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
              <li>
                <strong className="text-foreground">Stage 1</strong> &mdash; eligibility screening by
                ICCK.
              </li>
              <li>
                <strong className="text-foreground">Stage 2</strong> &mdash; evaluation and
                shortlisting by the judging panel.
              </li>
              <li>
                <strong className="text-foreground">Stage 3</strong> &mdash; final selection of
                category winners and Company of the Year.
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="bg-primary font-semibold uppercase tracking-wide text-primary-foreground"
          >
            Start Nomination
          </Button>
          <Button asChild size="lg" variant="outline" className="uppercase tracking-wide">
            <a href="#faq">Read the FAQ</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Partners & sponsors ---------------- */

const partners = [
  "Embassy of India, Seoul",
  "KOTRA",
  "Invest India",
  "Korea Chamber of Commerce",
  "FICCI",
  "Korea Trade Association",
  "Indo-Korean Business Council",
  "Talamanda",
];

export function Partners() {
  return (
    <section id="sponsors" className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <h2 className="section-title text-center text-primary">Our Partners &amp; Sponsors</h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {partners.map((p) => (
            <div
              key={p}
              className="flex h-24 items-center justify-center rounded-md border border-border bg-card px-4 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground shadow-sm"
            >
              {p}
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { tier: "Title", note: "Headline naming rights, keynote slot and full media package." },
            { tier: "Platinum", note: "Premium branding, on-stage recognition and VIP seating." },
            { tier: "Gold", note: "Category branding, event listing and reserved seating." },
          ].map((s) => (
            <div
              key={s.tier}
              className="rounded-lg border-2 border-gold/60 bg-card p-6 text-center shadow-elegant"
            >
              <Sparkles className="mx-auto size-7 text-gold-dark" strokeWidth={1.5} />
              <h3 className="mt-3 font-display text-lg font-bold uppercase tracking-wide text-primary">
                {s.tier}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-gold font-semibold uppercase tracking-wide text-gold-foreground shadow-gold hover:opacity-90"
          >
            <a href="#contact">Sponsor Enquiry</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

const faqs = [
  {
    q: "Who is eligible to nominate?",
    a: "Employees or representatives of the company, business partners, clients, investors and other stakeholders, as well as industry associations and institutions. ICCK may also invite companies for consideration.",
  },
  {
    q: "What are the assessment criteria?",
    a: "Impact, bilateral contribution, excellence, innovation, sustainability and the strength of supporting evidence, assessed by the judging panel against the published criteria.",
  },
  {
    q: "What is the judging process?",
    a: "Three stages: eligibility screening by ICCK, evaluation and shortlisting by the panel, and final selection of category winners, from which Company of the Year is chosen.",
  },
  {
    q: "Can a company enter multiple categories?",
    a: "Yes, provided it meets the eligibility requirements of each. A company may receive only one sector award; the panel decides the most appropriate category.",
  },
  {
    q: "Is confidential information protected?",
    a: "Confidential business information may be submitted where necessary. It is used solely for evaluation and is never publicly disclosed without the nominee's consent.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-gradient-navy py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <h2 className="section-title text-center text-gradient-gold">Frequently Asked Questions</h2>

        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="overflow-hidden rounded-md border-none bg-gradient-gold px-4"
            >
              <AccordionTrigger className="text-left font-semibold text-gold-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-gold-foreground/85">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */

export function Contact() {
  return (
    <section id="contact" className="bg-navy-deep py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <h2 className="section-title text-center text-gradient-gold">Contact Us</h2>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Input
              required
              placeholder="Name"
              aria-label="Name"
              className="border-gold/40 bg-navy/60 text-primary-foreground placeholder:text-primary-foreground/50"
            />
            <Input
              required
              type="email"
              placeholder="Email"
              aria-label="Email"
              className="border-gold/40 bg-navy/60 text-primary-foreground placeholder:text-primary-foreground/50"
            />
            <Textarea
              required
              rows={5}
              placeholder="Message"
              aria-label="Message"
              className="border-gold/40 bg-navy/60 text-primary-foreground placeholder:text-primary-foreground/50"
            />
            <Button
              type="submit"
              className="w-full bg-gradient-gold font-semibold uppercase tracking-wide text-gold-foreground shadow-gold hover:opacity-90"
            >
              Submit
            </Button>
          </form>

          <div className="text-center md:text-left">
            <h3 className="font-display text-lg font-bold text-gold">Address</h3>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
              Indian Chamber of Commerce in Korea
              <br />
              Gangnam-gu, Seoul, Republic of Korea
              <br />
              info@icck.or.kr
            </p>

            <a
              href="https://maps.google.com/?q=Gangnam-gu+Seoul"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex flex-col items-center gap-2 text-gold"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-gradient-gold shadow-gold">
                <Globe2 className="size-6 text-gold-foreground" />
              </span>
              <span className="font-display text-sm font-semibold tracking-widest">MAP</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/20 bg-navy py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center md:flex-row md:justify-between md:px-8 md:text-left">
        <img
          src={icckLogo}
          alt="Indian Chamber of Commerce in Korea"
          width={940}
          height={347}
          loading="lazy"
          className="h-9 w-auto brightness-0 invert opacity-90"
        />
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-wide text-primary-foreground/70">
          <a href="#about" className="hover:text-gold">
            Privacy Policy
          </a>
          <a href="#nomination" className="hover:text-gold">
            Nomination Guide Download
          </a>
          <a href="#contact" className="hover:text-gold">
            Contact
          </a>
        </nav>
        <p className="text-xs text-primary-foreground/50">
          &copy; 2026 ICCK Business Awards. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
