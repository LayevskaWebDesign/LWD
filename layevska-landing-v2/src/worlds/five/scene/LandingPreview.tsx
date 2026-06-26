import { motion } from "framer-motion";

/* ============================================================
   MUNDO V · LANDING PREVIEW
   ============================================================
   Mockup pequeño de una landing dentro de la card de precio.
   Variante "static" → líneas fijas
   Variante "animated" → con micro-interacciones, hover ripples,
                         partículas, transiciones
   ============================================================ */

interface Props {
  variant: "static" | "animated";
}

const NAVY = "#14233F";
const NAVY_LIGHT = "#1C4058";
const GOLD = "#C9A961";
const GOLD_BRIGHT = "#DDC289";

export function LandingPreview({ variant }: Props) {
  const isAnimated = variant === "animated";

  return (
    <div className="landing-preview">
      <svg
        viewBox="0 0 320 200"
        preserveAspectRatio="xMidYMid meet"
        className="landing-preview__svg"
      >
        <defs>
          <linearGradient id={`bg-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={NAVY} />
            <stop offset="100%" stopColor="#0E2435" />
          </linearGradient>
        </defs>

        {/* Marco navegador */}
        <rect x="6" y="6" width="308" height="188" rx="4" fill={`url(#bg-${variant})`} stroke="rgba(201,169,97,0.35)" strokeWidth="0.6" />

        {/* Barra superior browser */}
        <rect x="6" y="6" width="308" height="14" rx="4" fill="rgba(0,0,0,0.35)" />
        <circle cx="14" cy="13" r="2" fill="#9C3A33" />
        <circle cx="22" cy="13" r="2" fill="#E8A87C" />
        <circle cx="30" cy="13" r="2" fill="#7A8F6B" />
        <rect x="40" y="9" width="120" height="8" rx="2" fill="rgba(255,255,255,0.10)" />

        {/* Header con logo */}
        <text x="18" y="40" fontFamily="'Fraunces', serif" fontSize="9" fontWeight="700" fill={GOLD_BRIGHT}>
          MARCA
        </text>
        <rect x="50" y="34" width="14" height="2" fill="rgba(255,255,255,0.55)" />
        <rect x="68" y="34" width="14" height="2" fill="rgba(255,255,255,0.55)" />
        <rect x="86" y="34" width="14" height="2" fill="rgba(255,255,255,0.55)" />
        <rect x="270" y="30" width="36" height="10" rx="2" fill={GOLD} />

        {/* Línea separadora */}
        <line x1="14" y1="50" x2="306" y2="50" stroke="rgba(201,169,97,0.20)" strokeWidth="0.4" />

        {/* Hero block — texto izq + imagen der */}
        {/* Texto titular */}
        {isAnimated ? (
          <motion.g
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="18" y="68" width="140" height="6" rx="1" fill={GOLD_BRIGHT} />
          </motion.g>
        ) : (
          <rect x="18" y="68" width="140" height="6" rx="1" fill={GOLD_BRIGHT} opacity="0.7" />
        )}
        <rect x="18" y="80" width="100" height="3" rx="1" fill="rgba(255,255,255,0.55)" />
        <rect x="18" y="88" width="120" height="3" rx="1" fill="rgba(255,255,255,0.55)" />
        <rect x="18" y="96" width="80" height="3" rx="1" fill="rgba(255,255,255,0.55)" />

        {/* CTA */}
        {isAnimated ? (
          <motion.g>
            <motion.rect
              x="18" y="108" width="50" height="14" rx="2" fill={GOLD}
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "43px 115px" }}
            />
            {/* Particle effect */}
            {[0, 1, 2].map(i => (
              <motion.circle
                key={i} cx="73" cy="115" r="1"
                fill={GOLD_BRIGHT}
                animate={{ x: [0, 8 + i * 4], opacity: [1, 0], y: [0, -3 + i * 2] }}
                transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}
          </motion.g>
        ) : (
          <rect x="18" y="108" width="50" height="14" rx="2" fill={GOLD} opacity="0.85" />
        )}

        {/* Visual hero derecho */}
        {isAnimated ? (
          <motion.g>
            <motion.rect
              x="180" y="65" width="120" height="80" rx="3"
              fill={NAVY_LIGHT} stroke={GOLD_BRIGHT} strokeWidth="0.6"
              animate={{ y: [65, 62, 65] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Shimmer overlay */}
            <motion.rect
              x="180" y="65" width="30" height="80"
              fill="rgba(255,255,255,0.15)"
              animate={{ x: [180, 270, 180] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ mixBlendMode: "overlay" }}
            />
            {/* Marco dorado */}
            <rect x="184" y="69" width="112" height="72" fill="none" stroke={GOLD} strokeWidth="0.4" strokeDasharray="2 2" opacity="0.6" />
          </motion.g>
        ) : (
          <>
            <rect x="180" y="65" width="120" height="80" rx="3" fill={NAVY_LIGHT} stroke={GOLD_BRIGHT} strokeWidth="0.6" opacity="0.85" />
            <line x1="180" y1="65" x2="300" y2="145" stroke="rgba(255,255,255,0.20)" strokeWidth="0.4" />
            <line x1="300" y1="65" x2="180" y2="145" stroke="rgba(255,255,255,0.20)" strokeWidth="0.4" />
          </>
        )}

        {/* Sección inferior — 3 cards */}
        {[18, 122, 226].map((x, i) => (
          <g key={i}>
            {isAnimated ? (
              <motion.rect
                x={x} y="158" width="76" height="32" rx="2"
                fill={NAVY_LIGHT} stroke={GOLD_BRIGHT} strokeWidth="0.4"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
              />
            ) : (
              <rect x={x} y="158" width="76" height="32" rx="2" fill={NAVY_LIGHT} stroke={GOLD_BRIGHT} strokeWidth="0.4" opacity="0.75" />
            )}
            <rect x={x + 4} y="164" width="40" height="3" rx="1" fill={GOLD_BRIGHT} opacity="0.85" />
            <rect x={x + 4} y="172" width="60" height="2" rx="1" fill="rgba(255,255,255,0.55)" />
            <rect x={x + 4} y="178" width="50" height="2" rx="1" fill="rgba(255,255,255,0.55)" />
          </g>
        ))}

        {/* Partículas flotantes solo en animated */}
        {isAnimated && Array.from({ length: 5 }).map((_, i) => (
          <motion.circle
            key={`p-${i}`}
            cx={40 + i * 60} cy="100" r="0.8" fill={GOLD_BRIGHT}
            animate={{
              y: [100, 60 - i * 5, 100],
              opacity: [0, 0.8, 0]
            }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: i * 0.6 }}
          />
        ))}
      </svg>

      {/* Etiqueta de variante */}
      <div className="landing-preview__label">
        <span className="font-mono text-[8px] tracking-[0.25em] uppercase">
          {isAnimated ? "▶ Vista con animaciones" : "Vista estática"}
        </span>
      </div>
    </div>
  );
}
