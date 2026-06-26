import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useMousePosition, useReducedMotion } from "../../../hooks";

/* ============================================================
   MUNDO I · HILOS DE ORO TEJIÉNDOSE
   ============================================================
   Composición tipo póster editorial: flourishes ornamentales
   que se dibujan en sucesión + título central LAYEVSKA + WEB DESIGN.
   Una sola entrada cinematográfica (no loop). Parallax sutil al cursor.
   ============================================================ */

const EASE = [0.45, 0.05, 0.25, 1] as const;

export function GoldThreads() {
  const mouse = useMousePosition();
  const reduced = useReducedMotion();
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Parallax sutil: el conjunto SVG translada -8/+8 px según cursor
  useEffect(() => {
    if (reduced || !wrapperRef.current) return;
    const el = wrapperRef.current;
    el.style.transform = `translate3d(${mouse.nx * -10}px, ${mouse.ny * -8}px, 0)`;
  }, [mouse.nx, mouse.ny, reduced]);

  return (
    <div ref={wrapperRef} className="gold-threads-wrap">
      <svg
        className="gold-threads"
        viewBox="0 0 1200 560"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Degradado dorado para el texto principal */}
          <linearGradient id="ltText" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F8E4A8" />
            <stop offset="40%" stopColor="#DDC289" />
            <stop offset="70%" stopColor="#C9A961" />
            <stop offset="100%" stopColor="#A88944" />
          </linearGradient>

          {/* Glow dorado externo */}
          <filter id="ltGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Brillo más intenso para los nodos/estrellas */}
          <radialGradient id="ltStar">
            <stop offset="0%" stopColor="#FFE5A0" />
            <stop offset="50%" stopColor="#DDC289" />
            <stop offset="100%" stopColor="rgba(201,169,97,0)" />
          </radialGradient>
        </defs>

        {/* ============ FLOURISH SUPERIOR — CURVA LARGA ============ */}
        <motion.path
          d="M 220 130
             C 350 80, 500 110, 600 140
             C 700 170, 850 130, 980 130"
          fill="none"
          stroke="#C9A961"
          strokeWidth="1.2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.8, delay: 0.2, ease: EASE }}
        />
        {/* Sub-curva paralela arriba */}
        <motion.path
          d="M 260 116
             C 400 88, 550 108, 600 124
             C 700 156, 820 120, 940 120"
          fill="none"
          stroke="#C9A961"
          strokeWidth="0.6"
          strokeLinecap="round"
          opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, delay: 0.5, ease: EASE }}
        />

        {/* Estrellas/nodos extremos del flourish superior */}
        <motion.circle
          cx="220" cy="130" r="4"
          fill="url(#ltStar)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.4, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
        <motion.circle
          cx="980" cy="130" r="4"
          fill="url(#ltStar)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.4, opacity: 1 }}
          transition={{ duration: 0.5, delay: 3.0 }}
        />

        {/* Pequeños descensores verticales en cada extremo */}
        <motion.path
          d="M 220 130 L 220 200"
          stroke="#C9A961"
          strokeWidth="0.7"
          opacity="0.45"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.0, delay: 3.1 }}
        />
        <motion.path
          d="M 980 130 L 980 200"
          stroke="#C9A961"
          strokeWidth="0.7"
          opacity="0.45"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.0, delay: 3.1 }}
        />

        {/* Microetiqueta superior */}
        <motion.text
          x="600" y="195"
          textAnchor="middle"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="11"
          letterSpacing="6"
          fill="#DDC289"
          opacity="0.7"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 1.2, delay: 3.4 }}
        >
          ESTUDIO COSTARRICENSE · LANDING PAGES PREMIUM
        </motion.text>

        {/* ============ DIAMANTE ORNAMENTAL CENTRAL SUPERIOR ============ */}
        <motion.g
          initial={{ scale: 0, opacity: 0, rotate: -45 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 2.7, ease: EASE }}
          style={{ transformOrigin: "600px 230px" }}
        >
          <path
            d="M 600 220 L 612 232 L 600 244 L 588 232 Z"
            stroke="#DDC289"
            strokeWidth="1"
            fill="rgba(201,169,97,0.10)"
          />
          <circle cx="600" cy="232" r="1.5" fill="#FFE5A0" />
        </motion.g>

        {/* ============ TÍTULO PRINCIPAL LAYEVSKA ============ */}
        {/* Tracing: stroke se dibuja primero, después se llena */}
        <motion.text
          x="600" y="335"
          textAnchor="middle"
          fontFamily="'Fraunces', 'Cormorant Garamond', serif"
          fontSize="98"
          fontWeight="700"
          letterSpacing="10"
          fill="url(#ltText)"
          filter="url(#ltGlow)"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 3.6, ease: EASE }}
          style={{ textShadow: "0 6px 24px rgba(221,194,137,0.35)" }}
        >
          LAYEVSKA
        </motion.text>

        {/* ============ SUBTÍTULO WEB DESIGN ============ */}
        <motion.text
          x="600" y="380"
          textAnchor="middle"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="14"
          letterSpacing="22"
          fill="#DDC289"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 0.92, y: 0 }}
          transition={{ duration: 1.0, delay: 4.6, ease: EASE }}
        >
          WEB DESIGN
        </motion.text>

        {/* ============ FLOURISH INFERIOR (espejo del superior) ============ */}
        <motion.path
          d="M 220 430
             C 350 480, 500 450, 600 420
             C 700 390, 850 430, 980 430"
          fill="none"
          stroke="#C9A961"
          strokeWidth="1.2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.8, delay: 4.4, ease: EASE }}
        />
        <motion.path
          d="M 260 444
             C 400 472, 550 452, 600 436
             C 700 404, 820 440, 940 440"
          fill="none"
          stroke="#C9A961"
          strokeWidth="0.6"
          strokeLinecap="round"
          opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, delay: 4.7, ease: EASE }}
        />

        {/* Nodos estrellas extremos inferiores */}
        <motion.circle
          cx="220" cy="430" r="4"
          fill="url(#ltStar)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.4, opacity: 1 }}
          transition={{ duration: 0.5, delay: 4.3 }}
        />
        <motion.circle
          cx="980" cy="430" r="4"
          fill="url(#ltStar)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.4, opacity: 1 }}
          transition={{ duration: 0.5, delay: 7.0 }}
        />

        {/* Diamante ornamental central inferior */}
        <motion.g
          initial={{ scale: 0, opacity: 0, rotate: 45 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 6.5, ease: EASE }}
          style={{ transformOrigin: "600px 410px" }}
        >
          <path
            d="M 600 400 L 612 412 L 600 424 L 588 412 Z"
            stroke="#DDC289"
            strokeWidth="1"
            fill="rgba(201,169,97,0.10)"
          />
          <circle cx="600" cy="412" r="1.5" fill="#FFE5A0" />
        </motion.g>

        {/* Subtítulo italic se movió fuera del SVG al HTML (mejor layout) */}

        {/* ============ SWASH LATERAL IZQUIERDO ============ */}
        <motion.path
          d="M 140 270
             C 110 290, 100 320, 120 350
             C 140 380, 175 380, 200 365"
          fill="none"
          stroke="#C9A961"
          strokeWidth="0.9"
          strokeLinecap="round"
          opacity="0.7"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.0, delay: 4.0, ease: EASE }}
        />
        <motion.circle
          cx="140" cy="270" r="2.5"
          fill="#DDC289"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 4.0 }}
        />

        {/* ============ SWASH LATERAL DERECHO (espejo) ============ */}
        <motion.path
          d="M 1060 270
             C 1090 290, 1100 320, 1080 350
             C 1060 380, 1025 380, 1000 365"
          fill="none"
          stroke="#C9A961"
          strokeWidth="0.9"
          strokeLinecap="round"
          opacity="0.7"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.0, delay: 4.0, ease: EASE }}
        />
        <motion.circle
          cx="1060" cy="270" r="2.5"
          fill="#DDC289"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 4.0 }}
        />

        {/* ============ HALO ELÍPTICO PUNTEADO (sutilísimo) ============ */}
        <motion.ellipse
          cx="600" cy="305"
          rx="540" ry="195"
          fill="none"
          stroke="#C9A961"
          strokeWidth="0.5"
          strokeDasharray="2 8"
          opacity="0.18"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.18 }}
          transition={{ duration: 3.0, delay: 3.4, ease: EASE }}
        />

        {/* ============ ESTRELLAS FLOTANTES (constelación dispersa) ============ */}
        {[
          { cx: 305, cy: 245, r: 1.8, delay: 4.2 },
          { cx: 895, cy: 245, r: 1.8, delay: 4.5 },
          { cx: 380, cy: 360, r: 1.6, delay: 5.8 },
          { cx: 820, cy: 360, r: 1.6, delay: 5.8 },
          { cx: 230, cy: 310, r: 1.4, delay: 6.4 },
          { cx: 970, cy: 310, r: 1.4, delay: 6.4 },
          { cx: 600, cy: 90, r: 2.0, delay: 6.8 },
          { cx: 600, cy: 525, r: 2.0, delay: 7.0 },
        ].map((s, i) => (
          <motion.circle
            key={i}
            cx={s.cx} cy={s.cy} r={s.r}
            fill="url(#ltStar)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0.8] }}
            transition={{ duration: 1.0, delay: s.delay, ease: "easeOut" }}
          />
        ))}

        {/* ============ FILIGRANA · ESQUINAS ============ */}
        {/* Esquina superior izquierda */}
        <motion.path
          d="M 130 75
             C 115 75, 110 85, 110 100
             M 130 75 L 130 90"
          fill="none"
          stroke="#C9A961"
          strokeWidth="0.7"
          strokeLinecap="round"
          opacity="0.55"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: 5.4, ease: EASE }}
        />
        {/* Esquina superior derecha */}
        <motion.path
          d="M 1070 75
             C 1085 75, 1090 85, 1090 100
             M 1070 75 L 1070 90"
          fill="none"
          stroke="#C9A961"
          strokeWidth="0.7"
          strokeLinecap="round"
          opacity="0.55"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: 5.4, ease: EASE }}
        />
        {/* Esquina inferior izquierda */}
        <motion.path
          d="M 130 485
             C 115 485, 110 475, 110 460
             M 130 485 L 130 470"
          fill="none"
          stroke="#C9A961"
          strokeWidth="0.7"
          strokeLinecap="round"
          opacity="0.55"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: 7.0, ease: EASE }}
        />
        {/* Esquina inferior derecha */}
        <motion.path
          d="M 1070 485
             C 1085 485, 1090 475, 1090 460
             M 1070 485 L 1070 470"
          fill="none"
          stroke="#C9A961"
          strokeWidth="0.7"
          strokeLinecap="round"
          opacity="0.55"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: 7.0, ease: EASE }}
        />

        {/* ============ MICRO-FLOURISHES BAJO LAYEVSKA (a cada lado de WEB DESIGN) ============ */}
        <motion.path
          d="M 340 388
             C 365 388, 380 376, 395 376"
          fill="none"
          stroke="#C9A961"
          strokeWidth="0.7"
          strokeLinecap="round"
          opacity="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.9, delay: 5.0, ease: EASE }}
        />
        <motion.path
          d="M 860 388
             C 835 388, 820 376, 805 376"
          fill="none"
          stroke="#C9A961"
          strokeWidth="0.7"
          strokeLinecap="round"
          opacity="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.9, delay: 5.0, ease: EASE }}
        />
      </svg>
    </div>
  );
}
