import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Award,
  BadgeCheck,
  BookOpen,
  Building2,
  Cpu,
  Download,
  Factory,
  Globe2,
  Handshake,
  HeartPulse,
  Leaf,
  Mail,
  Megaphone,
  Phone,
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
import icckGoldLogoHorizontal from "@/assets/icck-identity/240919_ICCK_horizontal_A_ENG_KOR-gold.svg";

/* ---------------- About the Awards ---------------- */

export function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-[#091442] via-[#0f216b] to-[#0c1854] py-16 md:py-20 border-t border-amber-400/30">
      <div className="mx-auto max-w-5xl px-4 text-center md:px-8">
        <h2 className="font-serif text-3xl font-black uppercase tracking-wide text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] md:text-4xl">
          About the Awards
        </h2>
        <h3 className="mt-6 font-display text-xl font-bold text-white tracking-wider uppercase">Vision &amp; Objectives</h3>
        <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-white md:text-base">
          The Indian Chamber of Commerce in Korea (ICCK) Business Awards recognize companies that
          have made outstanding contributions to strengthening India&ndash;Korea business relations
          and demonstrated excellence, innovation, leadership and meaningful impact across key
          sectors.
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          <div className="flex flex-col items-center bg-[#060D2B]/95 border-2 border-amber-400/50 p-7 rounded-2xl shadow-2xl backdrop-blur-md transition-transform hover:-translate-y-1">
            <Target className="size-11 text-white drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
            <h4 className="mt-4 font-display text-lg font-black tracking-wide text-white drop-shadow-sm">
              Recognizing Excellence
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-white font-medium">
              Eight sectoral categories honour measurable achievement in trade, investment,
              innovation and sustainability across the India&ndash;Korea corridor.
            </p>
          </div>
          <div className="flex flex-col items-center bg-[#060D2B]/95 border-2 border-amber-400/50 p-7 rounded-2xl shadow-2xl backdrop-blur-md transition-transform hover:-translate-y-1">
            <Users className="size-11 text-white drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
            <h4 className="mt-4 font-display text-lg font-black tracking-wide text-white drop-shadow-sm">
              Building Bilateral Ties
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-white font-medium">
              A platform that connects companies, institutions and leaders driving commercial,
              technological and people-to-people links between the two markets.
            </p>
          </div>
        </div>

        <div className="mx-auto my-12 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F59E0B] via-[#FEF08A] to-[#D97706] border-2 border-amber-300/80 px-6 py-2.5 shadow-[0_0_25px_rgba(245,158,11,0.5)]">
          <Sparkles className="size-4 text-[#060D2B]" />
          <span className="font-sans text-xs sm:text-sm font-black uppercase tracking-[0.16em] text-[#060D2B] drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
            INDO–KOREA EXCELLENCE 2026
          </span>
          <Sparkles className="size-4 text-[#060D2B]" />
        </div>

        <h3 className="font-display text-xl font-bold text-white tracking-wider uppercase">Event Program</h3>
        <div className="mx-auto mt-5 max-w-xl divide-y divide-amber-400/30 rounded-2xl border-2 border-amber-400/50 bg-[#060D2B]/95 text-left shadow-2xl backdrop-blur-md">
          {[
            ["5:30 PM – 6:00 PM", "Reception & Registration"],
            ["6:00 PM – 7:00 PM", "Awards Ceremony"],
          ].map(([time, title]) => (
            <div key={time} className="flex flex-wrap items-center justify-between gap-2 px-6 py-4">
              <span className="font-display text-sm font-black text-white">{time}</span>
              <span className="text-sm font-bold text-white">{title}</span>
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
  { date: "Nov 02", label: "Shortlist Announced", note: "Mon, 10:00 KST" },
  { date: "Nov 27", label: "Gala Awards Ceremony", note: "Fri, 18:00 KST" },
];

export function Timeline() {
  const [left, setLeft] = useState<{ d: number; h: number; m: number; s: number } | null>(null);

  useEffect(() => {
    const target = new Date("2026-11-27T18:00:00+09:00").getTime();
    const update = () => {
      const diff = Math.max(0, target - Date.now());
      setLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#0c1854] via-[#091442] to-[#0b1648] py-16 md:py-20 border-t border-amber-400/30">
      <div className="mx-auto max-w-5xl px-4 text-center md:px-8">
        <h2 className="font-serif text-3xl font-black uppercase tracking-wide text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] md:text-4xl">
          Timeline &amp; Key Dates
        </h2>

        <div className="relative mt-12">
          <div className="absolute top-1/2 hidden h-0.5 w-full -translate-y-1/2 bg-amber-400/40 md:block" />
          <ol className="relative z-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {milestones.map((m) => (
              <li
                key={m.label}
                className="flex flex-col items-center rounded-2xl border-2 border-amber-400/50 bg-[#060D2B]/95 p-6 shadow-2xl backdrop-blur-md"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] text-xs font-black text-[#060c2c] shadow-lg">
                  ★
                </span>
                <span className="mt-4 font-display text-lg font-black text-white">{m.date}</span>
                <span className="mt-1 text-sm font-bold text-white/90">
                  {m.label}
                </span>
                <span className="mt-1 text-xs text-white/70">{m.note}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mx-auto mt-14 max-w-2xl border-t border-amber-400/30 pt-8">
          <p className="font-display text-sm font-black uppercase tracking-[0.25em] text-white">
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
                {i > 0 && <span className="pb-1 text-2xl text-amber-400/40">|</span>}
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-3xl font-black text-white md:text-4xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    {value ?? "--"}
                  </span>
                  <span className="text-sm font-semibold text-amber-100/80">{unit as string}</span>
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
    <section id="why" className="bg-gradient-to-b from-[#0b1648] via-[#091442] to-[#0e1a52] py-16 md:py-20 border-t border-amber-400/30">
      <div className="mx-auto max-w-6xl px-4 text-center md:px-8">
        <h2 className="font-serif text-3xl font-black uppercase tracking-wide text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] md:text-4xl">
          Why Participate
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="flex flex-col items-center bg-[#060D2B]/95 border-2 border-amber-400/50 p-8 rounded-2xl shadow-2xl backdrop-blur-md transition-transform hover:-translate-y-1">
              <b.icon className="size-11 text-white drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-lg font-black uppercase tracking-wider text-white">{b.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-white font-medium">{b.body}</p>
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
    title: "Digital Transformation & Technology",
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
    <section id="categories" className="bg-gradient-to-b from-[#0e1a52] via-[#091442] to-[#0c1854] py-16 md:py-20 border-t border-amber-400/30">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <h2 className="font-serif text-3xl font-black uppercase tracking-wide text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] md:text-4xl text-center">
          Award Categories
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-amber-200/80">
          {[
            { icon: Globe2, label: "Bilateral" },
            { icon: Rocket, label: "Startups" },
            { icon: Leaf, label: "Sustainability" },
            { icon: HeartPulse, label: "Healthcare" },
            { icon: TrendingUp, label: "Growth" },
            { icon: Cpu, label: "Digital" },
          ].map((t) => (
            <div key={t.label} className="flex flex-col items-center gap-1">
              <t.icon className="size-5 text-white" strokeWidth={1.5} />
              <span className="text-[11px] font-bold uppercase tracking-wider text-white">{t.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <article
              key={c.title}
              className="group rounded-2xl border-2 border-amber-400/50 bg-[#060D2B]/95 p-6 text-center shadow-2xl backdrop-blur-md transition-transform hover:-translate-y-1 hover:border-amber-300"
            >
              <c.icon className="mx-auto size-11 text-white drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-base font-black leading-snug text-white">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white font-medium">{c.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <article className="w-full max-w-md rounded-2xl bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] p-8 text-center shadow-2xl border-2 border-amber-200">
            <Trophy className="mx-auto size-11 text-[#060c2c]" strokeWidth={1.5} />
            <h3 className="mt-4 font-display text-xl font-black uppercase tracking-wide text-[#060c2c]">
              Company of the Year
            </h3>
            <p className="mt-3 text-sm font-medium leading-relaxed text-[#0c1845]">
              Selected by the judges from among the category winners &mdash; the highest honour of
              the evening. No separate nomination required.
            </p>
          </article>
        </div>

        <div className="mt-8 flex justify-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] font-black uppercase tracking-wide text-[#060c2c] shadow-xl hover:brightness-110"
          >
            <Link to="/awards/eligibility">Learn More &rsaquo;</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}



/* ---------------- Partners & sponsors ---------------- */

const partners: string[] = [];

export function Partners() {

  return (
    <section id="sponsors" className="bg-gradient-to-b from-[#0a1544] via-[#091442] to-[#0d194d] py-16 md:py-20 border-t border-amber-400/30">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="rounded-2xl border-2 border-amber-400/40 bg-gradient-to-b from-[#060D2B]/95 via-[#091442]/95 to-[#060D2B]/95 backdrop-blur-md p-6 sm:p-10 shadow-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-400/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#FEF08A] mb-3">
            <Building2 className="size-4 text-[#F59E0B]" /> Sponsorship &amp; Partners
          </div>

          <h2 className="font-serif text-3xl font-black uppercase tracking-wide text-white mb-2">
            Our Corporate Sponsors &amp; Partners
          </h2>

          <p className="text-sm text-amber-100/80 mb-8 max-w-2xl">
            Thank you to our valued corporate partners making this bilateral celebration possible.
          </p>

          {/* Sponsor Tiers — Title / Platinum / Gold (names TBC by client) */}
          <div className="space-y-4 text-left">
            <div className="rounded-xl border border-amber-400/20 bg-[#091442]/60 p-4">
              <h3 className="text-xs font-black uppercase tracking-widest text-[#FEF08A] mb-2">Title Sponsors</h3>
              <p className="text-amber-200/60 text-xs italic">To be announced</p>
            </div>
            <div className="rounded-xl border border-amber-400/20 bg-[#091442]/60 p-4">
              <h3 className="text-xs font-black uppercase tracking-widest text-amber-300 mb-2">Platinum Sponsors</h3>
              <p className="text-amber-200/60 text-xs italic">To be announced</p>
            </div>
            <div className="rounded-xl border border-amber-400/20 bg-[#091442]/60 p-4">
              <h3 className="text-xs font-black uppercase tracking-widest text-amber-200 mb-2">Gold Sponsors</h3>
              <p className="text-amber-200/60 text-xs italic">To be announced</p>
            </div>
          </div>

          {/* Sponsor Enquiry CTA */}
          <div className="mt-8 pt-6 border-t border-amber-400/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
            <div>
              <h4 className="font-serif text-lg font-black text-[#FEF08A]">Interested in Sponsoring ICCK Business Awards 2026?</h4>
              <p className="text-xs text-amber-200/80">Showcase your brand to top Korean &amp; Indian business executives.</p>
            </div>
            <a
              href="mailto:events@indochamkorea.org?subject=Sponsorship%20Enquiry%20%E2%80%94%20ICCK%20Business%20Awards%202026"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] px-5 py-3 font-black text-xs uppercase tracking-wider text-[#060c2c] shadow-lg hover:brightness-110 shrink-0"
            >
              <Mail className="size-4" /> Sponsor Enquiry
            </a>
          </div>
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
    <section id="faq" className="bg-gradient-to-b from-[#0d194d] via-[#091442] to-[#0a1646] py-16 md:py-20 border-t border-amber-400/30">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <h2 className="font-serif text-3xl font-black uppercase tracking-wide text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] md:text-4xl text-center">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="overflow-hidden rounded-2xl border-2 border-amber-400/50 bg-[#060D2B]/95 px-6 py-1 shadow-xl backdrop-blur-md"
            >
              <AccordionTrigger className="text-left font-black text-white hover:no-underline text-base">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-white font-medium">
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
    <section id="contact" className="bg-gradient-to-b from-[#0a1646] via-[#091442] to-[#070e30] py-16 md:py-20 border-t border-amber-400/30">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <h2 className="font-serif text-3xl font-black uppercase tracking-wide text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] md:text-4xl text-center">
          Contact Us
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "mailto:events@indochamkorea.org?subject=Contact%20Enquiry";
            }}
          >
            <Input
              required
              placeholder="Name"
              aria-label="Name"
              className="border-2 border-amber-400/50 bg-[#060D2B]/90 text-white placeholder:text-white/50 font-medium"
            />
            <Input
              required
              type="email"
              placeholder="Email"
              aria-label="Email"
              className="border-2 border-amber-400/50 bg-[#060D2B]/90 text-white placeholder:text-white/50 font-medium"
            />
            <Textarea
              required
              rows={5}
              placeholder="Message"
              aria-label="Message"
              className="border-2 border-amber-400/50 bg-[#060D2B]/90 text-white placeholder:text-white/50 font-medium"
            />
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] font-black uppercase tracking-wide text-[#060c2c] shadow-xl hover:brightness-110"
            >
              Submit
            </Button>
          </form>

          <div className="text-center md:text-left">
            <h3 className="font-display text-xl font-bold text-white">Contact Information</h3>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-white font-medium">
              <p className="flex items-start gap-2.5 justify-center md:justify-start">
                <Building2 className="size-5 text-white shrink-0 mt-0.5" />
                <span>
                  ICCK, 405(4F) IKP 7 Heolleung-ro,
                  <br />
                  Seocho-gu, Seoul, Republic of Korea (06792)
                </span>
              </p>
              <p className="flex items-center gap-2.5 justify-center md:justify-start">
                <Phone className="size-4 text-white shrink-0" />
                <span>TEL: +82-2-776-1583</span>
              </p>
              <p className="flex items-center gap-2.5 justify-center md:justify-start">
                <Mail className="size-4 text-white shrink-0" />
                <a href="mailto:events@indochamkorea.org" className="hover:text-white underline">
                  events@indochamkorea.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


