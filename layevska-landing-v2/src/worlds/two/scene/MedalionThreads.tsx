import { motion } from "framer-motion";

/* ============================================================
   MUNDO II · MEDALLÓN ORNAMENTADO
   ============================================================
   Versión cinematográfica: anillo rotatorio infinito + laureles
   trazados a mano + monograma L+W intertejido + gemas pulsantes
   + textura de relieve. Habla de oficio, herencia, intimidad.
   ============================================================ */

const EASE = [0.45, 0.05, 0.25, 1] as const;

export function MedalionThreads() {
  return (
    <svg
      viewBox="0 0 560 560"
      preserveAspectRatio="xMidYMid meet"
      className="medalion-threads"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="m2Core" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#FFE5A0" />
          <stop offset="30%" stopColor="#DDC289" />
          <stop offset="70%" stopColor="#A88944" />
          <stop offset="100%" stopColor="#5A4218" />
        </radialGradient>
        <radialGradient id="m2Ember" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#FFCAA8" />
          <stop offset="40%" stopColor="#E8A87C" />
          <stop offset="100%" stopColor="rgba(232,168,124,0)" />
        </radialGradient>
        <linearGradient id="m2Mono" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE5A0" />
          <stop offset="50%" stopColor="#DDC289" />
          <stop offset="100%" stopColor="#7A6020" />
        </linearGradient>
        <filter id="m2Glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" />
        </filter>
      </defs>

      {/* ===== Halo radial cálido externo ===== */}
      <motion.circle
        cx="280" cy="280" r="265"
        fill="url(#m2Ember)" opacity="0.35"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.35 }} viewport={{ once: true }}
        transition={{ duration: 2.4 }}
      />

      {/* ===== Anillo exterior rotatorio infinito ===== */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "280px 280px" }}
      >
        <circle cx="280" cy="280" r="262" fill="none" stroke="#C9A961" strokeWidth="0.8" />
        {/* 24 micro-marcas en el anillo rotatorio */}
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i / 24) * Math.PI * 2;
          const x1 = 280 + Math.cos(a) * 258;
          const y1 = 280 + Math.sin(a) * 258;
          const x2 = 280 + Math.cos(a) * 266;
          const y2 = 280 + Math.sin(a) * 266;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#DDC289" strokeWidth={i % 6 === 0 ? "1.4" : "0.5"} opacity={i % 6 === 0 ? 0.95 : 0.55} />;
        })}
      </motion.g>

      {/* ===== Anillo intermedio punteado ===== */}
      <motion.circle
        cx="280" cy="280" r="220" fill="none" stroke="#E8A87C"
        strokeWidth="0.7" strokeDasharray="2 5" opacity="0.7"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 2.4, delay: 0.6, ease: EASE }}
      />

      {/* ===== Laureles izquierdo y derecho (orgánicos, dibujados) ===== */}
      {/* IZQUIERDO */}
      <motion.g
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 2.6, delay: 1.0, ease: EASE }}
      >
        {/* Rama curva principal */}
        <motion.path
          d="M 100 280 C 80 230, 95 175, 145 140 C 175 118, 200 110, 215 110"
          fill="none" stroke="#DDC289" strokeWidth="1.4" strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ duration: 1.8, delay: 1.0, ease: EASE }}
        />
        {/* Hojas izquierda */}
        {[
          { cx: 105, cy: 260, rx: 10, ry: 6, rot: 35 },
          { cx: 92, cy: 230, rx: 11, ry: 7, rot: 50 },
          { cx: 90, cy: 200, rx: 12, ry: 7, rot: 70 },
          { cx: 100, cy: 175, rx: 12, ry: 7, rot: 95 },
          { cx: 120, cy: 152, rx: 11, ry: 7, rot: 120 },
          { cx: 148, cy: 135, rx: 11, ry: 6, rot: 145 },
          { cx: 178, cy: 122, rx: 10, ry: 6, rot: 160 },
        ].map((p, i) => (
          <motion.ellipse
            key={i} cx={p.cx} cy={p.cy} rx={p.rx} ry={p.ry}
            transform={`rotate(${p.rot} ${p.cx} ${p.cy})`}
            fill="rgba(232,168,124,0.18)" stroke="#DDC289" strokeWidth="0.7"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 1.2 + i * 0.08 }}
            style={{ transformOrigin: `${p.cx}px ${p.cy}px` }}
          />
        ))}
      </motion.g>

      {/* DERECHO (espejo) */}
      <motion.g>
        <motion.path
          d="M 460 280 C 480 230, 465 175, 415 140 C 385 118, 360 110, 345 110"
          fill="none" stroke="#DDC289" strokeWidth="1.4" strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ duration: 1.8, delay: 1.0, ease: EASE }}
        />
        {[
          { cx: 455, cy: 260, rx: 10, ry: 6, rot: -35 },
          { cx: 468, cy: 230, rx: 11, ry: 7, rot: -50 },
          { cx: 470, cy: 200, rx: 12, ry: 7, rot: -70 },
          { cx: 460, cy: 175, rx: 12, ry: 7, rot: -95 },
          { cx: 440, cy: 152, rx: 11, ry: 7, rot: -120 },
          { cx: 412, cy: 135, rx: 11, ry: 6, rot: -145 },
          { cx: 382, cy: 122, rx: 10, ry: 6, rot: -160 },
        ].map((p, i) => (
          <motion.ellipse
            key={i} cx={p.cx} cy={p.cy} rx={p.rx} ry={p.ry}
            transform={`rotate(${p.rot} ${p.cx} ${p.cy})`}
            fill="rgba(232,168,124,0.18)" stroke="#DDC289" strokeWidth="0.7"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 1.2 + i * 0.08 }}
            style={{ transformOrigin: `${p.cx}px ${p.cy}px` }}
          />
        ))}
      </motion.g>

      {/* ===== Anillo interno fino ===== */}
      <motion.circle
        cx="280" cy="280" r="160" fill="none" stroke="#C9A961" strokeWidth="0.5" opacity="0.75"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 1.6, delay: 1.6 }}
      />

      {/* ===== 8 gemas pulsantes orbitando ===== */}
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
        const r = 195;
        const x = 280 + Math.cos(a) * r;
        const y = 280 + Math.sin(a) * r;
        return (
          <motion.g key={i}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 2.0 + i * 0.08 }}
            style={{ transformOrigin: `${x}px ${y}px` }}
          >
            {/* Glow */}
            <motion.circle
              cx={x} cy={y} r="14" fill="url(#m2Ember)"
              animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.2, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.25 }}
            />
            {/* Gema central */}
            <circle cx={x} cy={y} r="3.5" fill="#FFE5A0" stroke="#DDC289" strokeWidth="0.6" />
          </motion.g>
        );
      })}

      {/* ===== Corona ornamental superior ===== */}
      <motion.g
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 2.4 }}
      >
        <path d="M 235 130 L 245 105 L 252 122 L 265 92 L 272 120 L 280 90 L 288 120 L 295 92 L 308 122 L 315 105 L 325 130"
          fill="none" stroke="#DDC289" strokeWidth="1" strokeLinejoin="round" />
        <circle cx="280" cy="86" r="2.5" fill="#FFE5A0" />
      </motion.g>

      {/* ===== Núcleo central con monograma L+W intertejido ===== */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 1.0, delay: 2.6, ease: [0.34, 1.56, 0.64, 1] }}
        style={{ transformOrigin: "280px 280px" }}
      >
        {/* Disco de fondo del núcleo */}
        <circle cx="280" cy="280" r="115" fill="rgba(14,36,53,0.55)" stroke="#DDC289" strokeWidth="1" />
        <circle cx="280" cy="280" r="108" fill="none" stroke="#C9A961" strokeWidth="0.4" strokeDasharray="1 3" opacity="0.5" />

        {/* L grande */}
        <text x="232" y="335" fontFamily="'Fraunces', serif" fontSize="140" fontWeight="700"
          fill="url(#m2Mono)" filter="url(#m2Glow)">L</text>
        {/* W intertejida (más pequeña, desplazada) */}
        <text x="298" y="360" fontFamily="'Fraunces', serif" fontSize="68" fontWeight="700"
          fill="url(#m2Mono)" opacity="0.85">W</text>
      </motion.g>

      {/* ===== Núcleo de luz central pulsante ===== */}
      <motion.circle
        cx="280" cy="280" r="3" fill="#FFE5A0"
        animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.4, 0.8] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        filter="url(#m2Glow)"
      />

      {/* ===== Texto curvado: EST · MMXXVI · SAN JOSÉ ===== */}
      <defs>
        <path id="m2ArcTop" d="M 100 280 A 180 180 0 0 1 460 280" fill="none" />
        <path id="m2ArcBot" d="M 100 280 A 180 180 0 0 0 460 280" fill="none" />
      </defs>
      <motion.text
        fontFamily="'JetBrains Mono', monospace" fontSize="11" letterSpacing="9"
        fill="#DDC289"
        initial={{ opacity: 0 }} whileInView={{ opacity: 0.85 }} viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 3.0 }}
      >
        <textPath href="#m2ArcTop" startOffset="50%" textAnchor="middle">
          EST · ANNO MMXXVI
        </textPath>
      </motion.text>
      <motion.text
        fontFamily="'JetBrains Mono', monospace" fontSize="11" letterSpacing="9"
        fill="#DDC289"
        initial={{ opacity: 0 }} whileInView={{ opacity: 0.85 }} viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 3.2 }}
      >
        <textPath href="#m2ArcBot" startOffset="50%" textAnchor="middle">
          SAN JOSÉ · COSTA RICA
        </textPath>
      </motion.text>

      {/* ===== Ribbon decorativo inferior ===== */}
      <motion.g
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 1, delay: 3.6 }}
      >
        <path d="M 230 478 L 280 466 L 330 478 L 320 488 L 280 478 L 240 488 Z"
          fill="rgba(232,168,124,0.25)" stroke="#DDC289" strokeWidth="0.7" />
        <text x="280" y="486" textAnchor="middle"
          fontFamily="'Fraunces', serif" fontSize="9" letterSpacing="3" fill="#DDC289">
          ARS · OFFICIUM · CURA
        </text>
      </motion.g>
    </svg>
  );
}
