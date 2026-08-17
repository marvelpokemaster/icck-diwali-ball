import { useState } from "react";
import { Menu, X } from "lucide-react";
import icckLogo from "@/assets/icck-logo.png";

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
    <header className="sticky top-0 z-50 bg-navy-deep/95 backdrop-blur supports-[backdrop-filter]:bg-navy-deep/80 border-b border-gold/25">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={icckLogo}
            alt="Indian Chamber of Commerce in Korea"
            width={940}
            height={347}
            className="h-8 w-auto brightness-0 invert opacity-95"
          />
          <span className="sr-only">ICCK Business Awards 2026</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l, i) => (
            <span key={l.href} className="flex items-center">
              {i > 0 && <span className="mx-1 h-4 w-px bg-gold/30" aria-hidden />}
              <a
                href={l.href}
                className="px-2 py-2 text-sm font-medium tracking-wide text-primary-foreground/85 transition-colors hover:text-gold"
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
          className="text-primary-foreground lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-gold/20 bg-navy-deep px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-gold/10 py-3 text-sm text-primary-foreground/85 hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
