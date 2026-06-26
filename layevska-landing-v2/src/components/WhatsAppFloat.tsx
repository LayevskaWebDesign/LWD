import { motion } from "framer-motion";
import { BRAND } from "../data";
import { whatsappLink } from "../hooks";

/* WhatsApp dorado elegante (en vez del verde estándar).
   Conserva el ícono original para que sea reconocible al instante. */
export function WhatsAppFloat() {
  const href = whatsappLink(BRAND.contact.whatsapp, BRAND.contact.whatsappMessage);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.8 }}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.95 }}
      className="group hidden md:flex fixed bottom-6 right-6 z-40 h-14 w-14 md:h-16 md:w-16 rounded-full items-center justify-center"
      style={{
        background:
          "radial-gradient(circle at 30% 30%, #F2D88A 0%, #DDC289 30%, #C9A961 60%, #A88944 90%)",
        boxShadow:
          "0 12px 32px -8px rgba(201,169,97,0.65), 0 0 0 1px rgba(255,247,212,0.45) inset, 0 2px 0 rgba(122,96,32,0.6) inset",
      }}
    >
      {/* Aro pulsante dorado externo */}
      <span
        className="absolute -inset-1 rounded-full pointer-events-none"
        style={{
          border: "1.5px solid rgba(221,194,137,0.55)",
          animation: "ping 2.4s cubic-bezier(0,0,0.2,1) infinite",
        }}
        aria-hidden="true"
      />
      <span
        className="absolute inset-0 rounded-full pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(255,247,212,0.85) 0%, transparent 70%)",
          animation: "ping 3s cubic-bezier(0,0,0.2,1) infinite",
        }}
        aria-hidden="true"
      />

      {/* Ícono oficial de WhatsApp (SVG inline para reconocibilidad) */}
      <svg
        viewBox="0 0 24 24"
        className="relative z-10 w-7 h-7 md:w-8 md:h-8"
        fill="#0E2435"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
      </svg>

      {/* Tooltip que aparece al hover en desktop */}
      <span className="absolute right-full mr-3 hidden md:block whitespace-nowrap bg-navy-deep/95 border border-gold/45 text-ivory text-xs font-mono px-3 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition pointer-events-none">
        <span className="gold-text font-semibold">Hablemos</span> · {BRAND.contact.whatsappDisplay}
      </span>
    </motion.a>
  );
}
