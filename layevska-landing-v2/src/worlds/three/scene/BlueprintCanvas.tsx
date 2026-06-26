import { motion } from "framer-motion";

/* ============================================================
   MUNDO III · BLUEPRINT CANVAS
   ============================================================
   Mesa de dibujante. Una landing siendo construida ante
   nuestros ojos en líneas técnicas finísimas. Cada elemento
   se dibuja con su propia cadencia conforme entra a viewport.
   ============================================================ */

const EASE = [0.45, 0.05, 0.25, 1] as const;
const NAVY = "#14233F";
const NAVY_INK = "#1C4058";
const GOLD = "#A88944";

export function BlueprintCanvas() {
  return (
    <svg
      viewBox="0 0 720 560"
      preserveAspectRatio="xMidYMid meet"
      className="blueprint-canvas"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Grid isométrico micro */}
        <pattern id="m3Grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="0.5" fill={NAVY_INK} opacity="0.18" />
        </pattern>

        {/* Cross-hair en esquinas */}
        <symbol id="m3Cross" viewBox="0 0 20 20">
          <line x1="0" y1="10" x2="20" y2="10" stroke={NAVY_INK} strokeWidth="0.5" />
          <line x1="10" y1="0" x2="10" y2="20" stroke={NAVY_INK} strokeWidth="0.5" />
          <circle cx="10" cy="10" r="2" fill="none" stroke={NAVY_INK} strokeWidth="0.5" />
        </symbol>
      </defs>

      {/* ===== Marco del blueprint ===== */}
      <rect x="0" y="0" width="720" height="560" fill="url(#m3Grid)" />
      <motion.rect
        x="20" y="20" width="680" height="520"
        fill="none"
        stroke={NAVY_INK}
        strokeWidth="0.8"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 2.0, delay: 0.2, ease: EASE }}
      />
      <motion.rect
        x="32" y="32" width="656" height="496"
        fill="none"
        stroke={NAVY_INK}
        strokeWidth="0.4"
        opacity="0.5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, delay: 0.5, ease: EASE }}
      />

      {/* Cross-hair en las 4 esquinas */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <use href="#m3Cross" x="14" y="14" width="20" height="20" />
        <use href="#m3Cross" x="686" y="14" width="20" height="20" />
        <use href="#m3Cross" x="14" y="526" width="20" height="20" />
        <use href="#m3Cross" x="686" y="526" width="20" height="20" />
      </motion.g>

      {/* ===== Letterhead técnico ===== */}
      <motion.text
        x="50" y="62"
        fontFamily="'JetBrains Mono', monospace"
        fontSize="8"
        letterSpacing="3"
        fill={NAVY}
        opacity="0.7"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        LAYEVSKA STUDIO · BLUEPRINT 01/04 · LANDING.MASTER · MMXXVI
      </motion.text>
      <motion.line
        x1="50" y1="74" x2="670" y2="74"
        stroke={NAVY_INK}
        strokeWidth="0.4"
        opacity="0.4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.8 }}
      />

      {/* ============ ETAPA 01 · PALETA (4 swatches) ============ */}
      <motion.g
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <text x="50" y="110" fontFamily="'JetBrains Mono', monospace" fontSize="9" letterSpacing="2" fill={GOLD}>
          01 · PALETA
        </text>
        <rect x="50" y="120" width="28" height="28" fill="#14233F" stroke={NAVY} strokeWidth="0.4" />
        <rect x="82" y="120" width="28" height="28" fill="#C9A961" stroke={NAVY} strokeWidth="0.4" />
        <rect x="114" y="120" width="28" height="28" fill="#E8A87C" stroke={NAVY} strokeWidth="0.4" />
        <rect x="146" y="120" width="28" height="28" fill="#FAF7F2" stroke={NAVY} strokeWidth="0.4" />
        <text x="50" y="165" fontFamily="'JetBrains Mono', monospace" fontSize="6" letterSpacing="1" fill={NAVY_INK} opacity="0.5">
          NAVY · GOLD · EMBER · IVORY
        </text>
      </motion.g>

      {/* Cota / dimensión ====== */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.55 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <line x1="50" y1="180" x2="174" y2="180" stroke={NAVY_INK} strokeWidth="0.4" strokeDasharray="2 3" />
        <text x="112" y="190" fontFamily="'JetBrains Mono', monospace" fontSize="7" textAnchor="middle" fill={NAVY_INK}>
          4 colores · base sistema
        </text>
      </motion.g>

      {/* ============ ETAPA 02 · WIREFRAME ============ */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 2.0 }}
      >
        <text x="240" y="110" fontFamily="'JetBrains Mono', monospace" fontSize="9" letterSpacing="2" fill={GOLD}>
          02 · WIREFRAME
        </text>
        {/* Marco del wireframe */}
        <rect x="240" y="120" width="220" height="180" fill="none" stroke={NAVY} strokeWidth="0.6" />
        {/* Header */}
        <line x1="240" y1="138" x2="460" y2="138" stroke={NAVY} strokeWidth="0.4" />
        <rect x="248" y="126" width="18" height="8" fill={NAVY} opacity="0.7" />
        <line x1="320" y1="130" x2="345" y2="130" stroke={NAVY} strokeWidth="0.3" />
        <line x1="355" y1="130" x2="380" y2="130" stroke={NAVY} strokeWidth="0.3" />
        <line x1="390" y1="130" x2="415" y2="130" stroke={NAVY} strokeWidth="0.3" />
        {/* Hero */}
        <rect x="252" y="150" width="120" height="6" fill={NAVY} opacity="0.7" />
        <rect x="252" y="162" width="100" height="3" fill={NAVY} opacity="0.4" />
        <rect x="252" y="168" width="80" height="3" fill={NAVY} opacity="0.4" />
        <rect x="252" y="186" width="40" height="12" fill={GOLD} opacity="0.85" />
        {/* Visual derecho */}
        <rect x="380" y="150" width="72" height="60" fill="none" stroke={NAVY} strokeWidth="0.4" strokeDasharray="2 2" />
        <line x1="380" y1="150" x2="452" y2="210" stroke={NAVY} strokeWidth="0.3" />
        <line x1="452" y1="150" x2="380" y2="210" stroke={NAVY} strokeWidth="0.3" />
        {/* Cards inferiores */}
        <rect x="252" y="225" width="60" height="60" fill="none" stroke={NAVY} strokeWidth="0.4" />
        <rect x="318" y="225" width="60" height="60" fill="none" stroke={NAVY} strokeWidth="0.4" />
        <rect x="384" y="225" width="68" height="60" fill="none" stroke={NAVY} strokeWidth="0.4" />
      </motion.g>

      {/* Cota wireframe */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.55 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 2.6 }}
      >
        <line x1="240" y1="312" x2="460" y2="312" stroke={NAVY_INK} strokeWidth="0.4" strokeDasharray="2 3" />
        <text x="350" y="322" fontFamily="'JetBrains Mono', monospace" fontSize="7" textAnchor="middle" fill={NAVY_INK}>
          16:9 · responsive base
        </text>
      </motion.g>

      {/* ============ ETAPA 03 · DISEÑO ============ */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 2.6 }}
      >
        <text x="498" y="110" fontFamily="'JetBrains Mono', monospace" fontSize="9" letterSpacing="2" fill={GOLD}>
          03 · UI
        </text>
        {/* Tipo specimen */}
        <text x="498" y="140" fontFamily="'Fraunces', serif" fontSize="28" fontWeight="700" fill={NAVY}>
          Aa
        </text>
        <text x="540" y="140" fontFamily="'JetBrains Mono', monospace" fontSize="7" fill={NAVY_INK} opacity="0.7">
          CINZEL · 700
        </text>
        <text x="498" y="170" fontFamily="'Cormorant Garamond', serif" fontStyle="italic" fontSize="18" fill={NAVY}>
          Aa
        </text>
        <text x="540" y="170" fontFamily="'JetBrains Mono', monospace" fontSize="7" fill={NAVY_INK} opacity="0.7">
          CORMORANT
        </text>
        <text x="498" y="200" fontFamily="'Inter', sans-serif" fontSize="14" fill={NAVY}>
          Aa
        </text>
        <text x="540" y="200" fontFamily="'JetBrains Mono', monospace" fontSize="7" fill={NAVY_INK} opacity="0.7">
          INTER
        </text>

        {/* Micro botón muestra */}
        <rect x="498" y="225" width="80" height="20" fill={GOLD} />
        <text x="538" y="238" fontFamily="'Inter', sans-serif" fontSize="8" letterSpacing="3" textAnchor="middle" fill="#0E2435">
          COTIZAR
        </text>

        {/* Específicaciones */}
        <text x="498" y="265" fontFamily="'JetBrains Mono', monospace" fontSize="7" fill={NAVY_INK} opacity="0.6">
          tracking · 0.18em
        </text>
        <text x="498" y="278" fontFamily="'JetBrains Mono', monospace" fontSize="7" fill={NAVY_INK} opacity="0.6">
          radius · 2px
        </text>
        <text x="498" y="291" fontFamily="'JetBrains Mono', monospace" fontSize="7" fill={NAVY_INK} opacity="0.6">
          padding · 16 · 24
        </text>
      </motion.g>

      {/* ============ ETAPA 04 · PUBLICACIÓN (sello tipo lacre) ============ */}
      <motion.g
        initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
        whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, delay: 3.4, ease: EASE }}
        style={{ transformOrigin: "150px 410px" }}
      >
        <circle cx="150" cy="410" r="60" fill="none" stroke={GOLD} strokeWidth="1.2" />
        <circle cx="150" cy="410" r="52" fill="none" stroke={GOLD} strokeWidth="0.5" strokeDasharray="2 3" />
        <text x="150" y="395" textAnchor="middle" fontFamily="'JetBrains Mono', monospace" fontSize="7" letterSpacing="2" fill={GOLD}>
          PUBLICADO
        </text>
        <text x="150" y="412" textAnchor="middle" fontFamily="'Fraunces', serif" fontSize="20" fontWeight="700" fill={GOLD}>
          AWS
        </text>
        <text x="150" y="428" textAnchor="middle" fontFamily="'JetBrains Mono', monospace" fontSize="7" letterSpacing="2" fill={GOLD}>
          DÍA 7
        </text>
      </motion.g>

      {/* ============ ETAPA 04b · URL bar de browser ============ */}
      <motion.g
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 3.6 }}
      >
        <rect x="240" y="365" width="440" height="24" fill="none" stroke={NAVY} strokeWidth="0.6" rx="4" />
        <circle cx="252" cy="377" r="3" fill="#9C3A33" />
        <circle cx="262" cy="377" r="3" fill="#E8A87C" />
        <circle cx="272" cy="377" r="3" fill="#7A8F6B" />
        <line x1="285" y1="377" x2="295" y2="377" stroke={NAVY_INK} strokeWidth="0.5" />
        <rect x="305" y="370" width="365" height="14" fill="none" stroke={NAVY_INK} strokeWidth="0.4" rx="2" />
        <text x="315" y="380" fontFamily="'JetBrains Mono', monospace" fontSize="8" fill={NAVY_INK}>
          https://tunegocio.com  ✓ SSL
        </text>
      </motion.g>

      {/* Línea de tiempo inferior */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 4.0 }}
      >
        <line x1="50" y1="495" x2="670" y2="495" stroke={NAVY_INK} strokeWidth="0.5" />
        {[
          { x: 50, label: "DÍA 1" },
          { x: 207, label: "DÍA 2" },
          { x: 360, label: "DÍA 4" },
          { x: 517, label: "DÍA 6" },
          { x: 670, label: "DÍA 7" },
        ].map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy="495" r="3" fill={GOLD} />
            <text x={p.x} y="512" fontFamily="'JetBrains Mono', monospace" fontSize="7" letterSpacing="1.5" textAnchor="middle" fill={NAVY_INK} opacity="0.7">
              {p.label}
            </text>
          </g>
        ))}
      </motion.g>
    </svg>
  );
}
