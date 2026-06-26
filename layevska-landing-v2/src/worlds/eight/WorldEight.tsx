import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, Send, MessageCircle } from "lucide-react";
import { BRAND } from "../../data";
import { isValidEmail, isValidPhone, sanitize, useRateLimit, whatsappLink } from "../../hooks";
import "./styles.css";

/* ============================================================
   MUNDO VIII · PROMESA
   Ember Sunset #D8835A · cierre cálido con eco del comienzo
   ============================================================ */
const EASE = [0.45, 0.05, 0.25, 1] as const;
type Status = "idle" | "sending" | "sent" | "error" | "rate-limited";

export function WorldEight() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", projectType: "Landing page profesional", message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const rate = useRateLimit();

  const set = <K extends keyof typeof form>(k: K, v: string) => setForm({ ...form, [k]: v });

  const validate = () => {
    const e: Record<string, string> = {};
    if (form.name.trim().length < 2) e.name = "Necesito tu nombre";
    if (!isValidEmail(form.email)) e.email = "Email inválido";
    if (!isValidPhone(form.phone)) e.phone = "Teléfono inválido";
    if (form.message.trim().length < 10) e.message = "Contame un poco más";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    if (!rate.consume()) { setStatus("rate-limited"); return; }
    setStatus("sending");
    const subject = `Cotización Layevska · ${sanitize(form.name)}`;
    const body = [
      `Nombre: ${sanitize(form.name)}`,
      `Empresa: ${sanitize(form.company)}`,
      `Email: ${sanitize(form.email)}`,
      `Teléfono: ${sanitize(form.phone)}`,
      `Tipo de proyecto: ${sanitize(form.projectType)}`,
      ``,
      `Mensaje:`,
      sanitize(form.message),
    ].join("\n");
    const mailto = `mailto:${BRAND.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setTimeout(() => setStatus("sent"), 800);
  };

  return (
    <section
      id="contacto"
      aria-label="Contacto — Layevska Web Design"
      className="world-eight relative py-32 md:py-44 overflow-hidden"
    >
      <div className="world-eight__bg" aria-hidden="true" />
      <div className="world-eight__horizon" aria-hidden="true" />
      <div className="world-eight__rays" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute top-8 left-8 z-10 pointer-events-none"
      >
        <div className="font-display text-[11px] tracking-[0.45em] leading-none sunset-label">VIII</div>
        <div className="font-serif italic text-[10px] tracking-[0.18em] mt-1.5 leading-none ivory-soft">
          hasta acá llegamos · arranquemos
        </div>
      </motion.div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase sunset-label inline-flex items-center gap-3 sunset-rule justify-center">
            Tu landing empieza acá
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-ivory mt-4">
            Contanos tu <em className="sunset-italic font-serif">historia</em>. <br className="hidden md:inline" />
            La traducimos en pantalla.
          </h2>
          <p className="mt-6 font-serif italic text-lg text-ivory/75 leading-relaxed">
            Respondemos en menos de 24 horas hábiles. Sin guion. Sin presión. Sin venta robótica.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Formulario */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
            className="lg:col-span-7 world-eight__form"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Tu nombre" error={errors.name}>
                <input type="text" value={form.name} onChange={(e) => set("name", e.target.value)}
                  placeholder="Ej: Bryan Barrantes" />
              </Field>
              <Field label="Empresa (opcional)" error={errors.company}>
                <input type="text" value={form.company} onChange={(e) => set("company", e.target.value)}
                  placeholder="Tu marca" />
              </Field>
              <Field label="Email" error={errors.email}>
                <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)}
                  placeholder="tu@correo.com" />
              </Field>
              <Field label="Teléfono / WhatsApp" error={errors.phone}>
                <input type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)}
                  placeholder="+506 8888-8888" />
              </Field>
            </div>

            <Field label="Tipo de proyecto" error={errors.projectType}>
              <select value={form.projectType} onChange={(e) => set("projectType", e.target.value)}>
                <option>Landing page profesional</option>
                <option>Landing con animaciones cinematográficas</option>
                <option>Solo cotización inicial</option>
                <option>No estoy seguro, necesito asesoría</option>
              </select>
            </Field>

            <Field label="Contanos tu idea (hasta 1000 palabras)" error={errors.message}>
              <textarea value={form.message} onChange={(e) => set("message", e.target.value)}
                rows={6} placeholder="¿Qué hace tu negocio? ¿A quién querés llegar? ¿Qué resultado buscás?" />
              <div className="mt-1.5 text-right font-mono text-[10px] text-ivory/45">
                {form.message.trim().split(/\s+/).filter(Boolean).length} / 1000 palabras
              </div>
            </Field>

            {status === "rate-limited" && (
              <div className="world-eight__alert">
                <AlertTriangle size={16} /> Demasiados envíos seguidos. Esperá 1 minuto y reintentá.
              </div>
            )}
            {status === "sent" && (
              <div className="world-eight__success">
                <CheckCircle2 size={16} /> Abrimos tu cliente de email con la cotización pre-cargada.
                Verificá que el destinatario sea <strong>{BRAND.contact.email}</strong> y enviá.
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <button type="submit" disabled={rate.blocked}
                className="btn btn-primary inline-flex items-center gap-2">
                <Send size={16} /> Enviar cotización
              </button>
              <a href={whatsappLink(BRAND.contact.whatsapp, BRAND.contact.whatsappMessage)}
                target="_blank" rel="noopener noreferrer"
                className="btn btn-outline inline-flex items-center gap-2">
                <MessageCircle size={16} /> O escribir por WhatsApp
              </a>
            </div>
            <p className="mt-4 font-mono text-[10px] text-ivory/45 tracking-wide">
              {rate.remaining} envíos restantes esta ventana
            </p>
          </motion.form>

          {/* Aside — eco del comienzo */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: EASE }}
            className="lg:col-span-5 world-eight__aside"
          >
            <div className="world-eight__signature">
              <span className="font-mono text-[10px] tracking-[0.35em] uppercase sunset-label">
                Firmado por
              </span>
              <p className="font-display text-2xl text-ivory mt-3 leading-tight">
                <span className="sunset-italic">Miah Layevska</span><br />
                & <span className="sunset-italic">Bryan Barrantes</span>
              </p>
              <p className="font-serif italic text-sm text-ivory/65 mt-2">
                Fundadores · San José, Costa Rica
              </p>
            </div>

            <div className="mt-10 space-y-4 text-sm">
              <a href={`mailto:${BRAND.contact.email}`} className="block text-ivory/80 hover:text-sunset-bright transition">
                ✦ {BRAND.contact.email}
              </a>
              <a href={whatsappLink(BRAND.contact.whatsapp, BRAND.contact.whatsappMessage)}
                target="_blank" rel="noopener noreferrer"
                className="block text-ivory/80 hover:text-sunset-bright transition">
                ✦ {BRAND.contact.whatsappDisplay}
              </a>
              <p className="text-ivory/55 text-xs mt-4 leading-relaxed">
                Lun–Vie · 8:00 a 18:00 CST<br />
                Respondemos en menos de 24 horas hábiles.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-sunset/20">
              <p className="font-serif italic text-sm text-ivory/60 leading-relaxed">
                "Si llegaste hasta acá, es porque algo te resonó. Eso es suficiente para empezar."
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="world-eight__field block">
      <span className="font-serif italic text-base text-ivory mb-2 block">{label}</span>
      {children}
      {error && <span className="block mt-1 font-mono text-[10px] text-sunset-bright">{error}</span>}
    </label>
  );
}
