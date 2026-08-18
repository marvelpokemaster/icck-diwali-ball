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
    <section id="about" className="bg-gradient-to-b from-[#091442] via-[#0f216b] to-[#0c1854] py-16 md:py-20 border-t border-amber-400/30">
      <div className="mx-auto max-w-5xl px-4 text-center md:px-8">
        <h2 className="font-serif text-3xl font-black uppercase tracking-wide text-[#FEF08A] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] md:text-4xl">
          About the Awards
        </h2>
        <h3 className="mt-6 font-display text-xl font-bold text-[#F59E0B] tracking-wider uppercase">Vision &amp; Objectives</h3>
        <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-amber-100/90 md:text-base">
          The Indian Chamber of Commerce in Korea (ICCK) Business Awards recognize companies that
          have made outstanding contributions to strengthening India&ndash;Korea business relations
          and demonstrated excellence, innovation, leadership and meaningful impact across key
          sectors.
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          <div className="flex flex-col items-center bg-[#FEF3C7] border-2 border-amber-500 p-6 rounded-xl shadow-xl transition-transform hover:-translate-y-1">
            <Target className="size-10 text-[#D97706] drop-shadow-sm" />
            <h4 className="mt-4 font-display text-lg font-black text-[#0F172A]">
              Recognizing Excellence
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-[#1E293B] font-medium">
              Eight sectoral categories honour measurable achievement in trade, investment,
              innovation and sustainability across the India&ndash;Korea corridor.
            </p>
          </div>
          <div className="flex flex-col items-center bg-[#FEF3C7] border-2 border-amber-500 p-6 rounded-xl shadow-xl transition-transform hover:-translate-y-1">
            <Users className="size-10 text-[#D97706] drop-shadow-sm" />
            <h4 className="mt-4 font-display text-lg font-black text-[#0F172A]">
              Building Bilateral Ties
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-[#1E293B] font-medium">
              A platform that connects companies, institutions and leaders driving commercial,
              technological and people-to-people links between the two markets.
            </p>
          </div>
        </div>

        <div className="mx-auto my-12 size-2 rounded-full bg-[#F59E0B] drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]" />

        <h3 className="font-display text-xl font-bold text-[#F59E0B] tracking-wider uppercase">Event Program</h3>
        <div className="mx-auto mt-5 max-w-xl divide-y divide-amber-300 rounded-xl border-2 border-amber-500 bg-[#FEF3C7] text-left shadow-xl">
          {[
            ["5:30 PM – 6:00 PM", "Reception & Registration"],
            ["6:00 PM – 7:00 PM", "Awards Ceremony"],
          ].map(([time, title]) => (
            <div key={time} className="flex flex-wrap items-center justify-between gap-2 px-6 py-4">
              <span className="font-display text-sm font-black text-[#D97706]">{time}</span>
              <span className="text-sm font-bold text-[#0F172A]">{title}</span>
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
    <section id="timeline" className="bg-gradient-to-b from-[#0c1854] via-[#091442] to-[#0b1648] py-16 md:py-20 border-t border-amber-400/30">
      <div className="mx-auto max-w-6xl px-4 text-center md:px-8">
        <h2 className="font-serif text-3xl font-black uppercase tracking-wide text-[#FEF08A] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] md:text-4xl">
          Timeline
        </h2>

        <div className="relative mt-12">
          <div className="absolute left-0 right-0 top-5 hidden h-0.5 bg-amber-400/40 md:block" />
          <ol className="grid gap-8 md:grid-cols-4">
            {milestones.map((m) => (
              <li key={m.date} className="relative flex flex-col items-center">
                <span className="relative z-10 flex size-10 items-center justify-center rounded-full bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] shadow-[0_0_12px_rgba(245,158,11,0.6)]">
                  <Trophy className="size-5 text-[#060c2c]" />
                </span>
                <span className="mt-4 font-display text-lg font-black text-[#FEF08A]">{m.date}</span>
                <span className="mt-1 text-sm font-bold text-white/90">
                  {m.label}
                </span>
                <span className="mt-1 text-xs text-amber-200/70">{m.note}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mx-auto mt-14 max-w-2xl border-t border-amber-400/30 pt-8">
          <p className="font-display text-sm font-black uppercase tracking-[0.25em] text-[#F59E0B]">
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
                  <span className="font-display text-3xl font-black text-[#FEF08A] md:text-4xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
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
        <h2 className="font-serif text-3xl font-black uppercase tracking-wide text-[#FEF08A] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] md:text-4xl">
          Why Participate
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="flex flex-col items-center bg-[#FEF3C7] border-2 border-amber-500 p-8 rounded-xl shadow-xl transition-transform hover:-translate-y-1">
              <b.icon className="size-10 text-[#D97706]" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-lg font-black uppercase tracking-wider text-[#0F172A]">{b.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#1E293B] font-medium">{b.body}</p>
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
    <section id="categories" className="bg-gradient-to-b from-[#0e1a52] via-[#091442] to-[#0c1854] py-16 md:py-20 border-t border-amber-400/30">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <h2 className="font-serif text-3xl font-black uppercase tracking-wide text-[#FEF08A] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] md:text-4xl text-center">
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
              <t.icon className="size-5 text-[#F59E0B]" strokeWidth={1.5} />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#FEF08A]">{t.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <article
              key={c.title}
              className="group rounded-xl border-2 border-amber-500 bg-[#FEF3C7] p-6 text-center shadow-xl transition-transform hover:-translate-y-1 hover:border-amber-600"
            >
              <c.icon className="mx-auto size-10 text-[#D97706]" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-base font-bold leading-snug text-[#0F172A]">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#1E293B] font-medium">{c.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <article className="w-full max-w-md rounded-xl bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] p-8 text-center shadow-2xl border-2 border-amber-200">
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
    <section id="nomination" className="bg-gradient-to-b from-[#0c1854] via-[#091442] to-[#0a1544] py-16 md:py-20 border-t border-amber-400/30">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <h2 className="font-serif text-3xl font-black uppercase tracking-wide text-[#FEF08A] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] md:text-4xl text-center">
          Nomination &amp; Eligibility
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="rounded-xl border-2 border-amber-500 bg-[#FEF3C7] p-6 shadow-xl">
            <ScrollText className="size-9 text-[#D97706]" strokeWidth={1.5} />
            <h3 className="mt-4 font-display text-lg font-black text-[#0F172A]">Eligibility</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#1E293B] font-medium">
              <li>
                Legally registered in India, Korea or another jurisdiction, with activity that
                creates commercial, economic or institutional India&ndash;Korea linkages.
              </li>
              <li>Both ICCK members and non-members may submit nominations.</li>
              <li>Companies may enter more than one category; only one sector award is granted.</li>
            </ul>
          </div>

          <div className="rounded-xl border-2 border-amber-500 bg-[#FEF3C7] p-6 shadow-xl">
            <Award className="size-9 text-[#D97706]" strokeWidth={1.5} />
            <h3 className="mt-4 font-display text-lg font-black text-[#0F172A]">
              Assessment Criteria
            </h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#1E293B] font-medium">
              <li>
                <strong className="text-[#0F172A]">Impact</strong> &mdash; measurable difference
                created.
              </li>
              <li>
                <strong className="text-[#0F172A]">Bilateral contribution</strong> &mdash;
                strengthening India&ndash;Korea ties.
              </li>
              <li>
                <strong className="text-[#0F172A]">Excellence &amp; Innovation</strong> &mdash;
                distinctiveness versus industry standards.
              </li>
              <li>
                <strong className="text-[#0F172A]">Sustainability &amp; Evidence</strong> &mdash;
                long-term value, credibly documented.
              </li>
            </ul>
          </div>

          <div className="rounded-xl border-2 border-amber-500 bg-[#FEF3C7] p-6 shadow-xl">
            <Building2 className="size-9 text-[#D97706]" strokeWidth={1.5} />
            <h3 className="mt-4 font-display text-lg font-black text-[#0F172A]">Judging Process</h3>
            <ol className="mt-3 space-y-2 text-sm leading-relaxed text-[#1E293B] font-medium">
              <li>
                <strong className="text-[#0F172A]">Stage 1</strong> &mdash; eligibility screening by
                ICCK.
              </li>
              <li>
                <strong className="text-[#0F172A]">Stage 2</strong> &mdash; evaluation and
                shortlisting by the judging panel.
              </li>
              <li>
                <strong className="text-[#0F172A]">Stage 3</strong> &mdash; final selection of
                category winners and Company of the Year.
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] font-black uppercase tracking-wide text-[#060c2c] shadow-xl hover:brightness-110"
          >
            Start Nomination
          </Button>
          <Button asChild size="lg" variant="outline" className="border-amber-400/70 bg-transparent font-bold uppercase tracking-wide text-[#FEF08A] hover:bg-amber-400/10">
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
    <section id="sponsors" className="bg-gradient-to-b from-[#0a1544] via-[#091442] to-[#0d194d] py-16 md:py-20 border-t border-amber-400/30">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <h2 className="font-serif text-3xl font-black uppercase tracking-wide text-[#FEF08A] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] md:text-4xl text-center">
          Our Partners &amp; Sponsors
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {partners.map((p) => (
            <div
              key={p}
              className="flex h-24 items-center justify-center rounded-xl border-2 border-amber-500 bg-[#FEF3C7] px-4 text-center text-xs font-black uppercase tracking-wide text-[#0F172A] shadow-md"
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
              className="rounded-xl border-2 border-amber-500 bg-[#FEF3C7] p-6 text-center shadow-xl"
            >
              <Sparkles className="mx-auto size-8 text-[#D97706]" strokeWidth={1.5} />
              <h3 className="mt-3 font-display text-lg font-black uppercase tracking-wide text-[#0F172A]">
                {s.tier}
              </h3>
              <p className="mt-2 text-sm text-[#1E293B] font-medium">{s.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] font-black uppercase tracking-wide text-[#060c2c] shadow-xl hover:brightness-110"
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
    <section id="faq" className="bg-gradient-to-b from-[#0d194d] via-[#091442] to-[#0a1646] py-16 md:py-20 border-t border-amber-400/30">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <h2 className="font-serif text-3xl font-black uppercase tracking-wide text-[#FEF08A] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] md:text-4xl text-center">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="overflow-hidden rounded-xl border-2 border-amber-500 bg-[#FEF3C7] px-5 py-1 shadow-lg"
            >
              <AccordionTrigger className="text-left font-black text-[#0F172A] hover:no-underline text-base">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-[#1E293B] font-medium">
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
        <h2 className="font-serif text-3xl font-black uppercase tracking-wide text-[#FEF08A] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] md:text-4xl text-center">
          Contact Us
        </h2>

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
              className="border-2 border-amber-500 bg-[#FEF3C7] text-[#0F172A] placeholder:text-slate-600 font-medium"
            />
            <Input
              required
              type="email"
              placeholder="Email"
              aria-label="Email"
              className="border-2 border-amber-500 bg-[#FEF3C7] text-[#0F172A] placeholder:text-slate-600 font-medium"
            />
            <Textarea
              required
              rows={5}
              placeholder="Message"
              aria-label="Message"
              className="border-2 border-amber-500 bg-[#FEF3C7] text-[#0F172A] placeholder:text-slate-600 font-medium"
            />
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] font-black uppercase tracking-wide text-[#060c2c] shadow-xl hover:brightness-110"
            >
              Submit
            </Button>
          </form>

          <div className="text-center md:text-left">
            <h3 className="font-display text-xl font-bold text-[#F59E0B]">Address</h3>
            <p className="mt-2 text-sm leading-relaxed text-amber-100/90">
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
              className="mt-6 inline-flex flex-col items-center gap-2 text-[#FEF08A]"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] shadow-lg">
                <Globe2 className="size-6 text-[#060c2c]" />
              </span>
              <span className="font-display text-sm font-black tracking-widest">MAP</span>
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
    <footer className="border-t-2 border-amber-400/40 bg-[#060d2b] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center md:flex-row md:justify-between md:px-8 md:text-left">
        <div className="bg-[#FFFDF0] border border-amber-400/60 rounded-lg px-3 py-1.5 shadow-sm inline-flex items-center justify-center">
          <img
            src={icckLogo}
            alt="Indian Chamber of Commerce in Korea"
            width={940}
            height={347}
            loading="lazy"
            className="h-8 w-auto object-contain"
          />
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-wide text-amber-100/80">
          <a href="#about" className="hover:text-[#FEF08A]">
            Privacy Policy
          </a>
          <a href="#nomination" className="hover:text-[#FEF08A]">
            Nomination Guide Download
          </a>
          <a href="#contact" className="hover:text-[#FEF08A]">
            Contact
          </a>
        </nav>
        <p className="text-xs font-medium text-amber-100/60">
          &copy; 2026 ICCK Business Awards. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
