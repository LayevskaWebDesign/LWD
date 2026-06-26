// ============================================================
// HOOKS REUTILIZABLES
// ============================================================
import { useCallback, useEffect, useRef, useState } from "react";

// ----- prefers-reduced-motion -----
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mql.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);
  return reduced;
}

// ----- mouse position normalizada -----
export function useMousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0, nx: 0, ny: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      setPos({ x: e.clientX, y: e.clientY, nx, ny });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return pos;
}

// ----- in view (IntersectionObserver) -----
export function useInView<T extends Element>(
  options?: IntersectionObserverInit
): [React.RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, options ?? { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, [options]);
  return [ref, inView];
}

// ----- scrolled state para header -----
export function useScrolled(threshold = 40): boolean {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

// ----- tilt 3D para cards/marcos -----
export function useTilt<T extends HTMLElement>(
  maxX = 12,
  maxY = 16
): { ref: React.RefObject<T>; onMouseMove: (e: React.MouseEvent) => void; onMouseLeave: () => void } {
  const ref = useRef<T>(null);
  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(1200px) rotateX(${(-py * maxX).toFixed(2)}deg) rotateY(${(px * maxY).toFixed(2)}deg) translateZ(8px)`;
    },
    [maxX, maxY]
  );
  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (el) el.style.transform = "";
  }, []);
  return { ref, onMouseMove, onMouseLeave };
}

// ----- RATE LIMITER 30 req/min -----
const RATE_KEY = "lay_rate_v1";
const WINDOW_MS = 60_000;
const MAX_REQ = 30;

interface RateState {
  ts: number[];
}

export function useRateLimit() {
  const [blocked, setBlocked] = useState(false);
  const [remaining, setRemaining] = useState(MAX_REQ);

  const read = useCallback((): RateState => {
    try {
      const raw = localStorage.getItem(RATE_KEY);
      return raw ? (JSON.parse(raw) as RateState) : { ts: [] };
    } catch {
      return { ts: [] };
    }
  }, []);

  const write = useCallback((s: RateState) => {
    try {
      localStorage.setItem(RATE_KEY, JSON.stringify(s));
    } catch {
      /* ignore quota errors */
    }
  }, []);

  const check = useCallback((): boolean => {
    const now = Date.now();
    const s = read();
    const recent = s.ts.filter((t) => now - t < WINDOW_MS);
    const left = MAX_REQ - recent.length;
    setRemaining(Math.max(0, left));
    if (recent.length >= MAX_REQ) {
      setBlocked(true);
      // Desbloquear cuando salga el más antiguo
      const oldest = Math.min(...recent);
      const wait = Math.max(800, WINDOW_MS - (now - oldest));
      window.setTimeout(() => setBlocked(false), wait);
      return false;
    }
    return true;
  }, [read]);

  const consume = useCallback((): boolean => {
    if (!check()) return false;
    const now = Date.now();
    const s = read();
    const recent = s.ts.filter((t) => now - t < WINDOW_MS);
    recent.push(now);
    write({ ts: recent });
    setRemaining(MAX_REQ - recent.length);
    return true;
  }, [check, read, write]);

  return { blocked, remaining, check, consume, maxReq: MAX_REQ };
}

// ============================================================
// UTILIDADES DE SANITIZACIÓN — Anti XSS básico
// ============================================================
export function sanitize(input: string): string {
  return input
    .replace(/[<>]/g, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+\s*=/gi, "")
    .trim()
    .slice(0, 5000);
}

export function isValidEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export function isValidPhone(s: string): boolean {
  // Cualquier secuencia de 6+ dígitos (con separadores opcionales)
  return /\d[\d\s\-+()]{5,}/.test(s);
}

// ----- WhatsApp link generator -----
export function whatsappLink(number: string, message: string): string {
  const clean = number.replace(/\D/g, "");
  return `https://wa.me/${clean}?text=${encodeURIComponent(message)}`;
}
