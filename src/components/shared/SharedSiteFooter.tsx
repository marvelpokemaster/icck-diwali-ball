
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
          className="h-12 xs:h-14 md:h-16 lg:h-[5.5rem] w-auto object-contain brightness-115 saturate-130"
        />



        <div className="text-xs text-amber-200/60">
          <p>&copy; 2026 ICCK. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
