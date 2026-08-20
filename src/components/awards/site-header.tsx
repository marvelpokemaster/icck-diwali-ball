import { useState } from "react";
import { Menu, X } from "lucide-react";
import icckGoldLogo from "@/assets/icck-identity/240919_ICCK_horizontal_A_ENG_KOR-gold.svg";

const links = [
  { label: "About", href: "#about" },
  { label: "Nomination & Eligibility", href: "#nomination" },
  { label: "Sponsorship", href: "#sponsors" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact Us", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#060D2B]/80 backdrop-blur-md border-b border-amber-400/30 transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={icckGoldLogo}
            alt="Indian Chamber of Commerce in Korea"
            width={940}
            height={347}
            className="h-8 xs:h-9 sm:h-10 w-auto object-contain drop-shadow-[0_2px_8px_rgba(251,191,36,0.5)]"
          />
          <span className="sr-only">ICCK Business Awards 2026</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l, i) => (
            <span key={l.href} className="flex items-center">
              {i > 0 && <span className="mx-1.5 h-4 w-px bg-amber-400/30" aria-hidden />}
              <a
                href={l.href}
                className="px-2.5 py-2 text-sm font-bold tracking-wide text-[#FEF08A] transition-colors hover:text-amber-300 hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]"
              >
                {l.label}
              </a>
            </span>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          className="text-[#FEF08A] p-2 rounded-md hover:bg-amber-400/20 lg:hidden"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-amber-400/30 bg-[#060D2B]/95 px-4 pb-4 lg:hidden shadow-2xl backdrop-blur-xl">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-amber-400/20 py-3 text-sm font-bold text-[#FEF08A] hover:text-amber-300"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
