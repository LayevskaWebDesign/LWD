import { useEffect, useRef } from "react";
import { useReducedMotion } from "../hooks";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
  alpha: number;
}

const PALETTE = ["#C9A961", "#DDC289", "#F1CBBF", "#A0BDC1", "#FAF7F2"];

export function ParticlesBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, nx: 0, ny: 0 });
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reduced) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const isMobile = window.matchMedia("(max-width: 780px)").matches;
    const COUNT = isMobile ? 40 : 90;
    const particles: Particle[] = [];

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function init() {
      particles.length = 0;
      for (let i = 0; i < COUNT; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: 0.6 + Math.random() * 2.2,
          color: PALETTE[Math.floor(Math.random() * PALETTE.length)] ?? "#C9A961",
          alpha: 0.25 + Math.random() * 0.55,
        });
      }
    }

    function step() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Parallax suave hacia el cursor
      const offX = mouseRef.current.nx * 24;
      const offY = mouseRef.current.ny * 24;

      // Líneas entre partículas cercanas
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!p) continue;
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          if (!q) continue;
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 130 * 130) {
            const op = (1 - d2 / (130 * 130)) * 0.25;
            ctx.strokeStyle = `rgba(201,169,97,${op})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x + offX * 0.4, p.y + offY * 0.4);
            ctx.lineTo(q.x + offX * 0.4, q.y + offY * 0.4);
            ctx.stroke();
          }
        }
      }

      // Partículas
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        ctx.beginPath();
        ctx.fillStyle = `${p.color}${Math.round(p.alpha * 255).toString(16).padStart(2, "0")}`;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.arc(p.x + offX, p.y + offY, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(step);
    }

    function onMouse(e: MouseEvent) {
      if (!canvas) return;
      const r = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - r.left;
      mouseRef.current.y = e.clientY - r.top;
      mouseRef.current.nx = mouseRef.current.x / r.width - 0.5;
      mouseRef.current.ny = mouseRef.current.y / r.height - 0.5;
    }

    resize();
    init();
    step();
    window.addEventListener("resize", () => {
      resize();
      init();
    });
    window.addEventListener("mousemove", onMouse);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
    };
  }, [reduced]);

  if (reduced) return null;
  return <canvas ref={canvasRef} id="particles-canvas" aria-hidden="true" />;
}
