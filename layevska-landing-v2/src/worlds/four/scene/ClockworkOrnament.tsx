import { motion } from "framer-motion";

/* ============================================================
   MUNDO IV · CLOCKWORK ORNAMENT
   Engranaje central + 6 satélites doradoz que se ensamblan
   ============================================================ */

const EASE = [0.45, 0.05, 0.25, 1] as const;

export function ClockworkOrnament() {
  return (
    <svg
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid meet"
      className="clockwork-ornament"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="m4Brass" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A6B891" />
          <stop offset="50%" stopColor="#7A8F6B" />
          <stop offset="100%" stopColor="#4F614A" />
        </linearGradient>
        <radialGradient id="m4GoldStar">
          <stop offset="0%" stopColor="#FFE5A0" />
          <stop offset="100%" stopColor="rgba(201,169,97,0)" />
        </radialGradient>
      </defs>

      {/* Anillos concéntricos exteriores */}
      <motion.circle
        cx="200" cy="200" r="190" fill="none" stroke="#7A8F6B" strokeWidth="0.6" opacity="0.4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 2.4, ease: EASE }}
      />
      <motion.circle
        cx="200" cy="200" r="170" fill="none" stroke="#7A8F6B" strokeWidth="0.8"
        strokeDasharray="3 5" opacity="0.6"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 2.2, delay: 0.3, ease: EASE }}
      />

      {/* Engranaje central — 12 dientes */}
      <motion.g
        initial={{ rotate: -30, opacity: 0 }}
        whileInView={{ rotate: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.8, ease: EASE }}
        style={{ transformOrigin: "200px 200px" }}
      >
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2;
          const r1 = 90;
          const r2 = 105;
          const x1 = 200 + Math.cos(a) * r1;
          const y1 = 200 + Math.sin(a) * r1;
          const x2 = 200 + Math.cos(a) * r2;
          const y2 = 200 + Math.sin(a) * r2;
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="#A88944" strokeWidth="6" strokeLinecap="square" />
          );
        })}
        <circle cx="200" cy="200" r="92" fill="#1C4058" stroke="#A88944" strokeWidth="1.2" />
        <circle cx="200" cy="200" r="70" fill="none" stroke="#A88944" strokeWidth="0.5" strokeDasharray="2 4" />
        <circle cx="200" cy="200" r="14" fill="url(#m4Brass)" stroke="#A88944" strokeWidth="1.2" />
        <circle cx="200" cy="200" r="3" fill="#FFE5A0" />
      </motion.g>

      {/* Marcadores horarios (representan los 6 días con espacios) */}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
        const r = 145;
        const x = 200 + Math.cos(a) * r;
        const y = 200 + Math.sin(a) * r;
        const isDay = i % 2 === 0;
        return (
          <motion.g key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 2.0 + i * 0.08 }}
          >
            {isDay ? (
              <>
                <circle cx={x} cy={y} r="4" fill="#C9A961" />
                <text x={x} y={y - 12}
                  textAnchor="middle" fontSize="9"
                  fontFamily="'JetBrains Mono', monospace"
                  letterSpacing="2" fill="#C9A961">
                  {`D${i / 2 + 1}`}
                </text>
              </>
            ) : (
              <circle cx={x} cy={y} r="1.5" fill="#7A8F6B" opacity="0.6" />
            )}
          </motion.g>
        );
      })}

      {/* Glow centrales pequeñas */}
      <motion.circle cx="200" cy="60" r="8" fill="url(#m4GoldStar)"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 1, delay: 3 }} />
      <motion.circle cx="200" cy="340" r="8" fill="url(#m4GoldStar)"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 1, delay: 3.2 }} />
    </svg>
  );
}
