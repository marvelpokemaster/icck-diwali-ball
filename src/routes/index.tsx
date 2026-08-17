import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/awards/site-header";
import { Hero } from "@/components/awards/hero";
import {
  About,
  Categories,
  Contact,
  Faq,
  Nomination,
  Partners,
  SiteFooter,
  Timeline,
  WhyParticipate,
} from "@/components/awards/sections";

const title = "ICCK Business Awards 2026 | India–Korea Business Excellence";
const description =
  "Nominate for the inaugural ICCK Business Awards 2026 honouring India–Korea business excellence. Ceremony Nov 27, 2026 in Seoul.";

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
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
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
      <SiteFooter />
    </div>
  );
}
