import React, { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  decay: number;
  color: string;
  radius: number;
  gravity: number;
  friction: number;
}

interface Rocket {
  x: number;
  y: number;
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
  progress: number;
  speed: number;
  color: string;
  isArc: boolean;
}

interface TrailSpark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  decay: number;
  size: number;
  color: string;
}

interface TextBurst {
  x: number;
  y: number;
  text: string;
  scale: number;
  alpha: number;
  decay: number;
}

export function FirecrackerCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rocketsRef = useRef<Rocket[]>([]);
  const trailSparksRef = useRef<TrailSpark[]>([]);
  const textBurstsRef = useRef<TextBurst[]>([]);

  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  const colors = [
    "#FEF08A", // Champagne Gold
    "#F59E0B", // Marigold Amber
    "#E5C158", // Metallic Gold
    "#BE123C", // Festive Crimson
    "#EC4899", // Bright Rose Pink
    "#10B981", // Festive Emerald
    "#38BDF8", // Vibrant Sky Blue
    "#FFFFFF", // Pure White Sparkle
  ];

  const createBurst = (x: number, y: number, count = 110, showText = true) => {
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
      const speed = Math.random() * 11 + 3;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        decay: Math.random() * 0.014 + 0.008,
        color: colors[Math.floor(Math.random() * colors.length)],
        radius: Math.random() * 4 + 2,
        gravity: 0.1,
        friction: 0.96,
      });
    }

    if (showText) {
      textBurstsRef.current.push({
        x,
        y,
        text: "HAPPY DIWALI 🪔✨",
        scale: 0.6,
        alpha: 1,
        decay: 0.012,
      });
    }
  };

  useEffect(() => {
    document.body.classList.add("festive-cursor-active");

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      for (let i = 0; i < 2; i++) {
        trailSparksRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * 6,
          y: e.clientY + 12 + (Math.random() - 0.5) * 6,
          vx: (Math.random() - 0.5) * 1.5,
          vy: Math.random() * 2 + 1,
          alpha: 1,
          decay: Math.random() * 0.04 + 0.03,
          size: Math.random() * 2.5 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      createBurst(e.clientX, e.clientY, 50, false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    // Animation Render Loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Render & Update Exhaust Trail Sparks
      for (let i = trailSparksRef.current.length - 1; i >= 0; i--) {
        const s = trailSparksRef.current[i];
        s.x += s.vx;
        s.y += s.vy;
        s.alpha -= s.decay;

        if (s.alpha <= 0) {
          trailSparksRef.current.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = s.alpha;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = s.color;
        ctx.fill();
        ctx.restore();
      }

      // 2. Render & Update Arc Launch Rockets
      for (let i = rocketsRef.current.length - 1; i >= 0; i--) {
        const r = rocketsRef.current[i];
        r.progress += r.speed;

        const currentX = r.startX + (r.targetX - r.startX) * r.progress;
        const arcPeakY = Math.min(r.startY, r.targetY) - 90;
        const currentY =
          (1 - r.progress) * (1 - r.progress) * r.startY +
          2 * (1 - r.progress) * r.progress * arcPeakY +
          r.progress * r.progress * r.targetY;

        r.x = currentX;
        r.y = currentY;

        for (let k = 0; k < 4; k++) {
          trailSparksRef.current.push({
            x: currentX + (Math.random() - 0.5) * 8,
            y: currentY + (Math.random() - 0.5) * 8,
            vx: (Math.random() - 0.5) * 2.5,
            vy: (Math.random() - 0.5) * 2.5,
            alpha: 1,
            decay: Math.random() * 0.05 + 0.03,
            size: Math.random() * 3.5 + 1.5,
            color: colors[Math.floor(Math.random() * colors.length)],
          });
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(currentX, currentY, 5, 0, Math.PI * 2);
        ctx.fillStyle = "#FEF08A";
        ctx.shadowBlur = 20;
        ctx.shadowColor = "#F59E0B";
        ctx.fill();
        ctx.restore();

        if (r.progress >= 1) {
          createBurst(r.targetX, r.targetY, 120, true);
          rocketsRef.current.splice(i, 1);
        }
      }

      // 3. Render & Update Explosion Particles
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        p.vx *= p.friction;
        p.vy *= p.friction;
        p.vy += p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.restore();
      }

      // 4. Render & Update "HAPPY DIWALI" Center Text Explosion
      for (let i = textBurstsRef.current.length - 1; i >= 0; i--) {
        const t = textBurstsRef.current[i];
        t.scale += 0.015;
        t.alpha -= t.decay;

        if (t.alpha <= 0) {
          textBurstsRef.current.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, t.alpha);
        ctx.translate(t.x, t.y);
        ctx.scale(t.scale, t.scale);

        ctx.font = "900 36px serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.shadowBlur = 25;
        ctx.shadowColor = "#F59E0B";
        ctx.fillStyle = "#FEF08A";
        ctx.fillText(t.text, 0, 0);

        ctx.strokeStyle = "#92400E";
        ctx.lineWidth = 2;
        ctx.strokeText(t.text, 0, 0);

        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      document.body.classList.remove("festive-cursor-active");
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-40 h-full w-full"
      />

      {/* Floating Rocket Firecracker Mouse Cursor */}
      {mousePos && (
        <div
          className="pointer-events-none fixed z-50 transition-transform duration-75 ease-out"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            transform: "translate(-50%, -50%) rotate(-45deg)",
          }}
        >
          <svg className="w-8 h-8 drop-shadow-[0_0_12px_rgba(245,158,11,0.9)]" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2 L27 15 L13 15 Z" fill="#EF4444" stroke="#FEF08A" strokeWidth="1" />
            <rect x="13" y="15" width="14" height="18" fill="#F59E0B" stroke="#FEF08A" strokeWidth="1" />
            <rect x="13" y="20" width="14" height="3" fill="#BE123C" />
            <rect x="13" y="26" width="14" height="3" fill="#FEF08A" />
            <path d="M13 25 L6 33 L13 33 Z" fill="#BE123C" />
            <path d="M27 25 L34 33 L27 33 Z" fill="#BE123C" />
            <path d="M16 33 L20 40 L24 33 Z" fill="#FEF08A" className="animate-pulse" />
          </svg>
        </div>
      )}
    </>
  );
}
