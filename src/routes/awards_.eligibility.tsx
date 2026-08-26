import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SharedSiteHeader } from "@/components/shared/SharedSiteHeader";
import { SharedSiteFooter } from "@/components/shared/SharedSiteFooter";
import { NominationModal } from "@/components/awards/NominationModal";
import {
  Award,
  ArrowLeft,
  CheckCircle2,
  TrendingUp,
  Globe,
  Network,
  ScrollText,
  Building2,
  FileText,
  ChevronRight,
  Sparkles,
  ClipboardList,
  Send,
} from "lucide-react";

const links = [
  { label: "Diwali Ball 2026", href: "/" },
  { label: "About", href: "/awards#about" },
  { label: "Nomination & Eligibility", href: "/awards/eligibility" },
  { label: "Sponsorship", href: "/awards#sponsors" },
  { label: "FAQ", href: "/awards#faq" },
  { label: "Contact Us", href: "/awards#contact" },
];

const title = "Nomination & Eligibility | ICCK Business Awards 2026";
const description =
  "Full eligibility criteria, assessment framework, judging process and integrated nomination form for the ICCK Business Awards 2026. Submit your nomination for India–Korea business excellence.";

export const Route = createFileRoute("/awards_/eligibility")({
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
  component: EligibilityPage,
});

function EligibilityPage() {
  const [isNominationModalOpen, setIsNominationModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#060D2B]">
      <SharedSiteHeader links={links} />

      <main>
        {/* ─── HERO ─── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#060D2B] via-[#091442] to-[#0a1544] py-16 md:py-24 border-b border-amber-400/20">
          {/* Decorative glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.08),transparent_60%)] pointer-events-none" />

          <div className="relative mx-auto max-w-5xl px-6">
            {/* Breadcrumb Row */}
            <div className="flex items-center justify-between mb-8">
              <Link
                to="/awards"
                className="inline-flex items-center gap-2 text-amber-400/90 hover:text-amber-300 text-xs font-black uppercase tracking-widest bg-amber-400/10 border border-amber-400/30 px-4 py-2 rounded-full transition-all hover:bg-amber-400/20 shadow-sm"
              >
                <ArrowLeft className="size-3.5" /> Back to Business Awards
              </Link>
            </div>

            <div className="text-center">
              {/* Centered Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-5 py-2 text-xs font-black uppercase tracking-widest text-[#FEF08A] mb-6 shadow-inner">
                <Award className="size-4 text-[#F59E0B]" />
                ICCK Business Awards 2026
              </div>

              {/* Title */}
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#FEF08A] to-[#F59E0B] drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)] uppercase mb-6">
                Nomination &amp; Eligibility
              </h1>

              {/* Subtitle */}
              <p className="text-amber-100/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-6 font-medium">
                Recognising outstanding achievement in trade, investment, and innovation across the India–Korea business corridor.
              </p>

              {/* Date & Venue Banner */}
              <div className="inline-flex items-center gap-2 bg-[#060D2B]/90 px-6 py-2.5 rounded-full border border-amber-400/30 shadow-inner mb-10 text-xs sm:text-sm font-bold text-amber-200">
                <span>Ceremony: <strong className="text-white">27 November 2026</strong> &middot; Fairmont Ambassador, Seoul</span>
              </div>

              {/* Submit CTA — hero */}
              <div>
                <button
                  type="button"
                  onClick={() => setIsNominationModalOpen(true)}
                  className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-b from-[#FFF7ED] via-[#FDE047] to-[#CA8A04] border-t-2 border-yellow-100 border-b-2 border-amber-800/60 px-9 py-4 font-sans text-base sm:text-lg font-black uppercase tracking-[0.14em] text-[#060c2c] shadow-[0_8px_30px_rgba(245,158,11,0.45)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(245,158,11,0.65)] active:scale-95 cursor-pointer"
                >
                  <Send className="size-5" />
                  Submit Your Nomination
                  <ChevronRight className="size-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ─── WHY NOMINATE ─── */}
        <section className="bg-gradient-to-b from-[#0a1544] to-[#091442] py-16 md:py-20 border-b border-amber-400/20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-400/8 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-amber-300 mb-4">
                <Sparkles className="size-3.5" /> Why Nominate?
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-black uppercase tracking-wide text-white">
                Benefits of Participating
              </h2>
              <p className="mt-3 text-amber-100/75 max-w-2xl mx-auto">
                By entering the Awards, your organisation gains independent, merit-based recognition from a panel of senior judges and gains visibility across Korea and India.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Globe,
                  title: "Expand Visibility",
                  desc: "Increase your visibility in both India and Korea through ICCK's networks and media reach.",
                },
                {
                  icon: TrendingUp,
                  title: "Show Success",
                  desc: "Showcase your achievements to staff, partners, investors and customers.",
                },
                {
                  icon: Award,
                  title: "Lead The Way",
                  desc: "Demonstrate leadership in your sector and in the bilateral India–Korea relationship.",
                },
                {
                  icon: Network,
                  title: "Align & Connect",
                  desc: "Join a growing network of ICCK Business Awards nominees, finalists and winners.",
                },
              ].map((b) => (
                <div
                  key={b.title}
                  className="rounded-2xl border border-amber-400/30 bg-[#060D2B]/80 p-7 text-center shadow-xl backdrop-blur-md hover:border-amber-400/60 transition-colors"
                >
                  <b.icon className="mx-auto size-10 text-amber-400" strokeWidth={1.5} />
                  <h3 className="mt-4 font-serif text-lg font-black text-white">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-amber-100/70 font-medium">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── ELIGIBILITY CRITERIA ─── */}
        <section className="bg-gradient-to-b from-[#091442] to-[#0c1854] py-16 md:py-20 border-b border-amber-400/20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-400/8 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-amber-300 mb-4">
                <ScrollText className="size-3.5" /> Who Can Nominate
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-black uppercase tracking-wide text-white">
                Eligibility Criteria
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {[
                "Legally registered in India, Korea or another jurisdiction, with activity that creates commercial, economic or institutional India–Korea linkages.",
                "Both ICCK members and non-members may submit nominations. There is no entry fee.",
                "Companies may enter more than one category; only one sector award is granted per organisation.",
                "Entries must describe achievements primarily from the last 2–5 years (approximately 2021–2026).",
                "Sponsors and partners of the event are eligible to nominate, provided any conflict of interest is managed appropriately in the judging process.",
                "Previous nominees and finalists are welcome to apply again.",
                "Applications must be submitted in English by the closing date. Late submissions cannot be accepted.",
              ].map((rule, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-xl border border-amber-400/25 bg-[#060D2B]/70 p-5 backdrop-blur-sm"
                >
                  <CheckCircle2 className="size-5 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-sm leading-relaxed text-amber-100/85 font-medium">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ─── ASSESSMENT CRITERIA & JUDGING ─── */}
        <section className="bg-gradient-to-b from-[#0a1544] to-[#091442] py-16 md:py-20 border-b border-amber-400/20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              {/* Assessment Criteria */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-400/8 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-amber-300 mb-5">
                  <Award className="size-3.5" /> How You'll Be Judged
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-black uppercase tracking-wide text-white mb-6">
                  Assessment Criteria
                </h2>
                <div className="space-y-4">
                  {[
                    { label: "Impact", desc: "Measurable difference created in trade, investment or institutional ties." },
                    { label: "Bilateral Contribution", desc: "Demonstrable strengthening of India–Korea business or economic relations." },
                    { label: "Excellence & Innovation", desc: "Distinctiveness versus industry standards and peers." },
                    { label: "Sustainability & Evidence", desc: "Long-term value, credibly documented with data and evidence." },
                  ].map((c) => (
                    <div key={c.label} className="flex gap-4 items-start rounded-xl border border-amber-400/20 bg-[#060D2B]/70 p-4 backdrop-blur-sm">
                      <div className="w-2 h-2 mt-2 rounded-full bg-amber-400 shrink-0" />
                      <div>
                        <span className="font-black text-white text-sm">{c.label}</span>
                        <span className="text-amber-100/70 text-sm"> — {c.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Judging Process */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-400/8 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-amber-300 mb-5">
                  <Building2 className="size-3.5" /> The Process
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-black uppercase tracking-wide text-white mb-6">
                  Judging Process
                </h2>
                <div className="space-y-4">
                  {[
                    { stage: "Stage 1", title: "Eligibility Screening", desc: "ICCK reviews all submissions to confirm they meet the eligibility criteria." },
                    { stage: "Stage 2", title: "Evaluation & Shortlisting", desc: "An independent judging panel evaluates submissions against the assessment criteria and selects shortlisted nominees." },
                    { stage: "Stage 3", title: "Final Selection", desc: "Judges select category winners and the overall Company of the Year. All decisions are final." },
                  ].map((s, i) => (
                    <div key={s.stage} className="flex gap-5 items-start rounded-xl border border-amber-400/20 bg-[#060D2B]/70 p-5 backdrop-blur-sm">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-amber-400/25 to-amber-600/10 border border-amber-400/30 flex items-center justify-center font-black text-[#FEF08A] text-xs">
                        {i + 1}
                      </div>
                      <div>
                        <p className="text-xs font-black text-amber-400 uppercase tracking-wide mb-0.5">{s.stage}</p>
                        <p className="font-black text-white text-sm mb-1">{s.title}</p>
                        <p className="text-xs text-amber-100/70 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SUBMIT CTA ─── */}
        <section className="bg-gradient-to-b from-[#091442] to-[#060D2B] py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <FileText className="mx-auto size-14 text-amber-400/60 mb-6" strokeWidth={1} />
            <h2 className="font-serif text-3xl md:text-4xl font-black uppercase tracking-wide text-white mb-4">
              Ready to Nominate?
            </h2>
            <p className="text-amber-100/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Open the official nomination form to complete your submission online.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setIsNominationModalOpen(true)}
                className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-b from-[#FFF7ED] via-[#FDE047] to-[#CA8A04] border-t-2 border-yellow-100 border-b-2 border-amber-800/60 px-10 py-4 font-sans text-lg font-black uppercase tracking-[0.14em] text-[#060c2c] shadow-[0_8px_30px_rgba(245,158,11,0.45)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(245,158,11,0.65)] active:scale-95 cursor-pointer"
              >
                <Send className="size-5" />
                Submit Your Nomination
                <ChevronRight className="size-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
              </button>

              <Link
                to="/awards"
                className="inline-flex items-center gap-2 rounded-xl border border-amber-400/50 bg-transparent px-7 py-4 font-black text-sm uppercase tracking-widest text-amber-300 hover:bg-amber-400/10 transition-colors"
              >
                <ArrowLeft className="size-4" /> Back to Awards
              </Link>
            </div>

            <p className="mt-8 text-xs text-amber-200/50">
              Deadline: 16 October 2026 &nbsp;·&nbsp; Shortlist announced: 2 November 2026 &nbsp;·&nbsp; Gala Ceremony: 27 November 2026
            </p>
          </div>
        </section>
      </main>

      {/* INTERACTIVE NOMINATION MODAL */}
      <NominationModal
        isOpen={isNominationModalOpen}
        onClose={() => setIsNominationModalOpen(false)}
      />

      <SharedSiteFooter />
    </div>
  );
}
