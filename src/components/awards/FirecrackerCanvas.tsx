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
  targetY: number;
  vy: number;
  color: string;
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

export function FirecrackerCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rocketsRef = useRef<Rocket[]>([]);
  const trailSparksRef = useRef<TrailSpark[]>([]);

  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  const colors = [
    "#FEF08A", // Champagne Gold
    "#F59E0B", // Marigold Amber
    "#E5C158", // Metallic Gold
    "#BE123C", // Festive Crimson
    "#EC4899", // Bright Rose Pink
    "#10B981", // Festive Emerald
    "#FFFFFF", // Pure White Sparkle
  ];

  const createBurst = (x: number, y: number, count = 45) => {
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = Math.random() * 7 + 2;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        decay: Math.random() * 0.018 + 0.012,
        color: colors[Math.floor(Math.random() * colors.length)],
        radius: Math.random() * 2.8 + 1.5,
        gravity: 0.12,
        friction: 0.96,
      });
    }
  };

  const launchRocket = (x?: number) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const targetX = x ?? Math.random() * (canvas.width * 0.8) + canvas.width * 0.1;
    const targetY = Math.random() * (canvas.height * 0.4) + canvas.height * 0.1;
    rocketsRef.current.push({
      x: targetX,
      y: canvas.height,
      targetY,
      vy: -(Math.random() * 4 + 8),
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  };

  useEffect(() => {
    // Add festive-cursor-active class to body ONLY while this component is mounted
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

    // Track mouse position & emit rocket trail embers
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      for (let i = 0; i < 3; i++) {
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

    // Click handler for burst explosion
    const handleClick = (e: MouseEvent) => {
      createBurst(e.clientX, e.clientY, 60);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    // Initial celebratory bursts
    setTimeout(() => {
      launchRocket(window.innerWidth * 0.3);
      launchRocket(window.innerWidth * 0.7);
    }, 400);

    // Periodic ambient background fireworks
    const interval = setInterval(() => {
      if (Math.random() > 0.4) {
        launchRocket();
      }
    }, 4500);

    // Animation Render Loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Render & Update Mouse Rocket Exhaust Sparks
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

      // 2. Render & Update Background Rockets
      for (let i = rocketsRef.current.length - 1; i >= 0; i--) {
        const r = rocketsRef.current[i];
        r.y += r.vy;

        ctx.beginPath();
        ctx.arc(r.x, r.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = r.color;
        ctx.fill();

        if (r.y <= r.targetY) {
          createBurst(r.x, r.y, 50);
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
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      // Remove festive-cursor-active class when leaving page so other pages regain normal cursor
      document.body.classList.remove("festive-cursor-active");
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      clearInterval(interval);
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
