import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import icckGoldLogoHorizontal from "@/assets/icck-identity/240919_ICCK_horizontal_A_ENG-gold.png";

export interface NavLink {
  label: string;
  href: string;
}

interface SharedSiteHeaderProps {
  links?: NavLink[];
}

export function SharedSiteHeader({ links = [] }: SharedSiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const hasLinks = links.length > 0;

  return (
    <header className="sticky top-0 w-full bg-[#060D2B]/75 backdrop-blur-md py-1 shadow-2xl z-50 border-b border-amber-400/20">
      <div className="flex w-full items-center justify-between px-4 sm:px-8 lg:px-12 h-14 sm:h-16 md:h-20 lg:h-24">
        
        {/* Left-aligned Gold ICCK Logo */}
        <a href="#top" className="flex items-center gap-3">
          <img
            src={icckGoldLogoHorizontal}
            alt="ICCK Official Gold Logo"
            width={940}
            height={347}
            className="h-9 xs:h-11 sm:h-14 md:h-16 lg:h-[5.5rem] w-auto object-contain shrink-0 brightness-115 saturate-130"
          />
          <span className="sr-only">ICCK Business Awards 2026</span>
        </a>

        {/* Desktop Navigation */}
        {hasLinks && (
          <nav className="hidden items-center gap-1 lg:flex z-10">
            {links.map((l, i) => (
              <span key={l.href} className="flex items-center">
                {l.href === "/" ? (
                  <a
                    href="/"
                    className="mr-3 px-3.5 py-1.5 text-xs font-black uppercase tracking-wider text-amber-300 border border-amber-400/40 rounded-full bg-amber-400/10 hover:bg-amber-400/20 transition-all flex items-center gap-1.5 shadow-sm"
                  >
                    <span>&larr;</span> {l.label}
                  </a>
                ) : (
                  <>
                    {i > 0 && links[i - 1]?.href !== "/" && (
                      <span className="mx-1.5 h-4 w-px bg-amber-400/30" aria-hidden />
                    )}
                    <a
                      href={l.href}
                      className="px-2.5 py-2 text-sm font-bold tracking-wide text-[#FEF08A] transition-colors hover:text-amber-300 hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]"
                    >
                      {l.label}
                    </a>
                  </>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Mobile Hamburger Button */}
        {hasLinks && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            className="relative z-10 text-[#FEF08A] p-2 rounded-md hover:bg-amber-400/20 lg:hidden"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        )}
      </div>

      {/* Mobile Navigation Dropdown */}
      {hasLinks && open && (
        <nav className="absolute top-full left-0 right-0 border-t border-amber-400/30 bg-[#060D2B]/95 px-4 pb-4 lg:hidden shadow-2xl backdrop-blur-xl z-20">
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

      {/* Trailing Glass Transition */}
      <div className="absolute top-full left-0 right-0 h-12 sm:h-16 pointer-events-none bg-gradient-to-b from-[#060D2B]/75 to-transparent backdrop-blur-md [mask-image:linear-gradient(to_bottom,black,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] z-0" />
    </header>
  );
}
