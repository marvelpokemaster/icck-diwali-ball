import { createFileRoute } from "@tanstack/react-router";
import { SharedSiteHeader } from "@/components/shared/SharedSiteHeader";
import { SharedSiteFooter } from "@/components/shared/SharedSiteFooter";
import { Hero } from "@/components/awards/hero";
import {
  About,
  Categories,
  Contact,
  Faq,
  Nomination,
  Partners,
  Timeline,
  WhyParticipate,
} from "@/components/awards/sections";

const links = [
  { label: "About", href: "#about" },
  { label: "Nomination & Eligibility", href: "#nomination" },
  { label: "Sponsorship", href: "#sponsors" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact Us", href: "#contact" },
];

const title = "ICCK Business Awards 2026 | India–Korea Business Excellence";
const description =
  "Nominate for the inaugural ICCK Business Awards 2026 honouring India–Korea business excellence. Ceremony Nov 27, 2026 in Seoul.";

export const Route = createFileRoute("/awards")({
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
  component: AwardsPage,
});

function AwardsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SharedSiteHeader links={links} />
      <main>
        <Hero />
        <About />
        <Timeline />
        <WhyParticipate />
        <Categories />
        <Nomination />
        <Partners />
        <Faq />
        <Contact />
      </main>
      <SharedSiteFooter />
    </div>
  );
}
