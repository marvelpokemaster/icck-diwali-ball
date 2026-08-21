import { Building2, Phone, Mail } from "lucide-react";
import icckGoldLogoHorizontal from "@/assets/icck-identity/240919_ICCK_horizontal_A_ENG-gold.png";

export function SharedSiteFooter() {
  return (
    <footer className="relative z-30 border-t-2 border-amber-400/40 bg-[#060d2b] py-10 text-center text-amber-100/90 text-sm font-medium">
      <div className="mx-auto w-[92vw] max-w-[1500px] px-4 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        
        <img
          src={icckGoldLogoHorizontal}
          alt="Indian Chamber of Commerce in Korea"
          width={940}
          height={347}
          className="h-12 xs:h-14 md:h-16 lg:h-[5.5rem] w-auto object-contain brightness-115 saturate-130 drop-shadow-[0_0_15px_rgba(251,191,36,0.85)] drop-shadow-[0_2px_12px_rgba(245,158,11,0.6)]"
        />

        <div className="space-y-2 text-xs text-amber-200/90 font-medium">
          <h4 className="font-serif text-sm font-black uppercase text-[#FEF08A] tracking-wider mb-1">
            Contact Us
          </h4>

          <p className="flex items-center justify-center md:justify-start gap-2">
            <Building2 className="size-4 text-[#F59E0B] shrink-0" />
            <span>ICCK, 405(4F) IKP 7 Heolleung-ro, Seocho-gu, Seoul, Republic of Korea (06792)</span>
          </p>

          <p className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="size-3.5 text-[#F59E0B] shrink-0" /> TEL: +82-2-776-1583
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="size-3.5 text-[#F59E0B] shrink-0" />
              <a href="mailto:events@indochamkorea.org" className="hover:text-[#FEF08A] underline font-bold">
                events@indochamkorea.org
              </a>
            </span>
          </p>
        </div>

        <div className="text-xs text-amber-200/60">
          <p>&copy; 2026 ICCK. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
