import { useState, useEffect } from "react";
import icckGoldLogoHorizontal from "@/assets/icck-identity/240919_ICCK_horizontal_A_ENG-gold.png";
import diwaliFlyerBg from "@/assets/Background_hero.png";
import { Sparkles } from "lucide-react";

export function InitialLoader() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    // We only want to run this once when the app mounts
    let isCancelled = false;

    async function loadAssets() {
      const promises: Promise<unknown>[] = [];

      // 1. Wait for fonts if supported
      if ("fonts" in document) {
        promises.push(document.fonts.ready);
      }

      // 2. Preload critical images
      const imagesToPreload = [icckGoldLogoHorizontal, diwaliFlyerBg];
      imagesToPreload.forEach((src) => {
        promises.push(
          new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve; // Resolve even on error so we don't hang
          })
        );
      });

      // 3. Minimum display time to ensure a premium feel and avoid flash
      promises.push(new Promise((resolve) => setTimeout(resolve, 800)));

      await Promise.all(promises);

      if (!isCancelled) {
        // Start fade out animation
        setFading(true);
        setTimeout(() => {
          if (!isCancelled) {
            setLoading(false);
            setTimeout(() => setMounted(false), 100); // Unmount after fade finishes
          }
        }, 800); // Match CSS transition duration
      }
    }

    loadAssets();

    return () => {
      isCancelled = true;
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#060D2B] transition-opacity duration-[800ms] ease-in-out ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1e2e74]/30 via-[#060D2B]/50 to-transparent opacity-60" />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* ICCK Logo */}
        <img
          src={icckGoldLogoHorizontal}
          alt="ICCK Logo"
          className="h-16 xs:h-20 sm:h-24 w-auto object-contain brightness-115 saturate-130 drop-shadow-[0_0_15px_rgba(251,191,36,0.6)] animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]"
        />

        <div className="mt-8 flex flex-col items-center">
          {/* Elegant Typography */}
          <h1 className="font-serif text-2xl xs:text-3xl sm:text-4xl font-black uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#FEF08A] to-[#F59E0B] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            DIWALI BALL 2026
          </h1>

          {/* Subtle gold ornament / divider */}
          <div className="my-6 flex items-center justify-center gap-3 w-full max-w-[200px] opacity-80">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
            <Sparkles className="size-4 text-amber-300 animate-[spin_6s_linear_infinite] drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
          </div>

          <p className="font-display text-sm xs:text-base font-bold tracking-[0.3em] text-amber-200/80 uppercase animate-pulse">
            Entering Experience
          </p>
        </div>
      </div>
    </div>
  );
}
