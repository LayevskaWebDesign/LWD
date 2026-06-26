import { motion } from "framer-motion";

/* ============================================================
   MUNDO V · SEAL ORNAMENT
   Sello de lacre crimson + iniciales LWD
   ============================================================ */
export function SealOrnament() {
  return (
    <svg viewBox="0 0 240 240" preserveAspectRatio="xMidYMid meet"
      className="seal-ornament" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="m5Wax" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#D55A4D" />
          <stop offset="40%" stopColor="#9C3A33" />
          <stop offset="100%" stopColor="#5E1F1A" />
        </radialGradient>
        <linearGradient id="m5Gold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F2D88A" />
          <stop offset="100%" stopColor="#A88944" />
        </linearGradient>
        <filter id="m5Glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* Salpicaduras de lacre (irregulares) */}
      <motion.path
        d="M 50 180 Q 30 200, 45 215 Q 60 220, 70 205"
        fill="url(#m5Wax)" opacity="0.6"
        initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.6 }}
        style={{ transformOrigin: "55px 200px" }}
      />
      <motion.path
        d="M 200 60 Q 220 50, 215 30 Q 200 20, 185 35"
        fill="url(#m5Wax)" opacity="0.6"
        initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.7 }}
        style={{ transformOrigin: "200px 45px" }}
      />

      {/* Disco principal de lacre */}
      <motion.circle
        cx="120" cy="120" r="78"
        fill="url(#m5Wax)" filter="url(#m5Glow)"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        style={{ transformOrigin: "120px 120px" }}
      />

      {/* Highlight superior (efecto de cera caliente) */}
      <motion.ellipse
        cx="100" cy="95" rx="35" ry="22" fill="rgba(255,200,180,0.4)"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
      />

      {/* Anillo dorado interno */}
      <motion.circle
        cx="120" cy="120" r="62" fill="none" stroke="url(#m5Gold)" strokeWidth="1.2"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.8 }}
      />
      {/* Anillo punteado */}
      <motion.circle
        cx="120" cy="120" r="54" fill="none" stroke="#DDC289" strokeWidth="0.6"
        strokeDasharray="2 3" opacity="0.7"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 1.0 }}
      />

      {/* Estrella central + iniciales */}
      <motion.g
        initial={{ scale: 0, opacity: 0, rotate: -20 }}
        whileInView={{ scale: 1, opacity: 1, rotate: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.2 }}
        style={{ transformOrigin: "120px 120px" }}
      >
        <text x="120" y="135" textAnchor="middle"
          fontFamily="'Fraunces', serif" fontSize="42" fontWeight="700"
          fill="url(#m5Gold)" letterSpacing="2">
          LWD
        </text>
      </motion.g>

      {/* Texto circular alrededor */}
      <defs>
        <path id="m5Arc" d="M 50 120 A 70 70 0 0 1 190 120" fill="none" />
      </defs>
      <motion.text
        fontFamily="'JetBrains Mono', monospace" fontSize="8" letterSpacing="4"
        fill="#DDC289"
        initial={{ opacity: 0 }} whileInView={{ opacity: 0.9 }} viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <textPath href="#m5Arc" startOffset="50%" textAnchor="middle">
          PACTO · LAYEVSKA · 2026
        </textPath>
      </motion.text>
    </svg>
  );
}
