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
    <header className="sticky top-0 z-50 bg-[#FFFDF0] border-b-2 border-amber-400 shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={icckLogo}
            alt="Indian Chamber of Commerce in Korea"
            width={940}
            height={347}
            className="h-8 xs:h-9 sm:h-10 w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
          />
          <span className="sr-only">ICCK Business Awards 2026</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l, i) => (
            <span key={l.href} className="flex items-center">
              {i > 0 && <span className="mx-1.5 h-4 w-px bg-amber-400/50" aria-hidden />}
              <a
                href={l.href}
                className="px-2.5 py-2 text-sm font-black tracking-wide text-[#0F172A] transition-colors hover:text-[#D97706]"
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
          className="text-[#0F172A] p-2 rounded-md hover:bg-amber-100/60 lg:hidden"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-amber-400/40 bg-[#FFFDF0] px-4 pb-4 lg:hidden shadow-lg">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-amber-300/30 py-3 text-sm font-bold text-[#0F172A] hover:text-[#D97706]"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
