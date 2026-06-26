import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, CheckCircle2, MessageCircle, Send } from "lucide-react";
import { BRAND } from "../data";
import { isValidEmail, isValidPhone, sanitize, useRateLimit, whatsappLink } from "../hooks";

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

const PROJECT_TYPES = [
  "Landing page profesional",
  "Landing con animaciones",
  "Solo cotización inicial",
  "No estoy seguro, necesito asesoría",
];

const INITIAL: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  projectType: PROJECT_TYPES[0] ?? "",
  message: "",
};

export function Contacto() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const rate = useRateLimit();

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) next.name = "Necesitamos tu nombre.";
    if (!isValidEmail(form.email)) next.email = "Email inválido.";
    if (!isValidPhone(form.phone)) next.phone = "Teléfono inválido.";
    if (form.message.trim().length < 10) next.message = "Contanos un poco más (mínimo 10 caracteres).";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;
    if (!rate.consume()) {
      setStatus("error");
      return;
    }

    // Sanitización antes de armar el mailto
    const safe = {
      name: sanitize(form.name),
      company: sanitize(form.company),
      email: sanitize(form.email),
      phone: sanitize(form.phone),
      projectType: sanitize(form.projectType),
      message: sanitize(form.message),
    };

    const subject = `Cotización landing — ${safe.name}${safe.company ? " (" + safe.company + ")" : ""}`;
    const body = [
      `Nombre: ${safe.name}`,
      `Empresa: ${safe.company || "—"}`,
      `Email: ${safe.email}`,
      `Teléfono: ${safe.phone}`,
      `Tipo de proyecto: ${safe.projectType}`,
      ``,
      `Mensaje:`,
      safe.message,
    ].join("\n");

    // Abrimos email del cliente con datos pre-cargados (sin servidor)
    const mailto = `mailto:${BRAND.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setStatus("sent");
  }

  return (
    <section
      id="contacto"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 20% 80%, rgba(61,120,134,0.20) 0%, transparent 55%)," +
          "linear-gradient(180deg, #0E2435 0%, #1C4058 100%)",
      }}
    >
      <div className="container mx-auto px-5 md:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="chapter-label justify-center mb-6">VIII. Contacto</span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-ivory text-shadow-dark">
            Cotizá tu <em className="gold-text italic font-serif">landing premium</em>.
          </h2>
          <p className="mt-6 font-serif italic text-lg text-ivory/75 leading-relaxed">
            Respondemos en menos de 24 horas hábiles. Sin compromiso.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-10">
          {/* Sidebar contacto directo */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href={whatsappLink(BRAND.contact.whatsapp, BRAND.contact.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-sm border border-gold/25 bg-navy-deep/55 hover:border-gold/55 hover:-translate-y-1 transition-all group"
            >
              <div className="flex items-center gap-3 mb-2">
                <MessageCircle size={20} className="text-gold-bright" />
                <span className="font-mono text-[10px] uppercase tracking-widest2 text-gold-bright">
                  WhatsApp directo
                </span>
              </div>
              <div className="font-serif text-xl text-ivory group-hover:text-gold-bright transition-colors">
                {BRAND.contact.whatsappDisplay}
              </div>
              <p className="mt-2 text-xs text-ivory/55">
                La forma más rápida. Te respondemos en minutos en horario hábil.
              </p>
            </a>

            <a
              href={`mailto:${BRAND.contact.email}`}
              className="block p-5 rounded-sm border border-gold/25 bg-navy-deep/55 hover:border-gold/55 hover:-translate-y-1 transition-all group"
            >
              <div className="flex items-center gap-3 mb-2">
                <Send size={20} className="text-gold-bright" />
                <span className="font-mono text-[10px] uppercase tracking-widest2 text-gold-bright">
                  Email
                </span>
              </div>
              <div className="font-serif text-base text-ivory break-all group-hover:text-gold-bright transition-colors">
                {BRAND.contact.email}
              </div>
            </a>

            <div className="p-5 rounded-sm border border-gold/15 bg-navy-deep/40">
              <span className="font-mono text-[10px] uppercase tracking-widest2 text-gold-bright">
                Horario
              </span>
              <p className="mt-1 font-serif text-base text-ivory/85">
                Lunes a viernes · 8:00 a 18:00 (CST)
              </p>
              <p className="mt-1 text-xs text-ivory/55">
                Estudio basado en {BRAND.contact.location}.
              </p>
            </div>

            {/* Indicador rate limit */}
            {!rate.blocked && rate.remaining < 5 && (
              <div className="text-xs text-gold-bright/80 font-mono tracking-wide bg-gold/5 border border-gold/20 rounded-sm p-3">
                Te quedan {rate.remaining} envíos por minuto.
              </div>
            )}
          </div>

          {/* Formulario */}
          <motion.form
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 p-6 md:p-8 rounded-sm border border-gold/25 bg-navy-deep/65 backdrop-blur-sm"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field
                label="Tu nombre"
                name="name"
                value={form.name}
                onChange={(v) => update("name", v)}
                error={errors.name}
                placeholder="Ej: Andrea Vargas"
              />
              <Field
                label="Empresa (opcional)"
                name="company"
                value={form.company}
                onChange={(v) => update("company", v)}
                placeholder="Ej: Clínica Norte"
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={(v) => update("email", v)}
                error={errors.email}
                placeholder="tu@correo.com"
              />
              <Field
                label="Teléfono / WhatsApp"
                name="phone"
                value={form.phone}
                onChange={(v) => update("phone", v)}
                error={errors.phone}
                placeholder="+506 8888-8888"
              />
            </div>

            <div className="mt-5">
              <label className="block font-mono text-[10px] uppercase tracking-widest2 text-gold-bright mb-2">
                Tipo de proyecto
              </label>
              <select
                value={form.projectType}
                onChange={(e) => update("projectType", e.target.value)}
                className="w-full bg-navy-deep/80 border border-gold/30 rounded-sm py-3 px-4 text-ivory text-sm focus:border-gold focus:outline-none transition-colors"
              >
                {PROJECT_TYPES.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5">
              <label className="block font-mono text-[10px] uppercase tracking-widest2 text-gold-bright mb-2">
                Contanos tu idea
              </label>
              <textarea
                value={form.message}
                onChange={(e) => update("message", e.target.value.slice(0, 1500))}
                placeholder="Qué hace tu negocio, a quién querés llegar, qué te gustaría lograr con la landing..."
                rows={5}
                className={`w-full bg-navy-deep/80 border rounded-sm py-3 px-4 text-ivory text-sm placeholder-ivory/30 focus:outline-none transition-colors resize-none ${
                  errors.message ? "border-salmon-light" : "border-gold/30 focus:border-gold"
                }`}
              />
              <div className="mt-1 flex justify-between text-[10px] text-ivory/40 font-mono">
                <span>{errors.message ?? "Mínimo 10 caracteres."}</span>
                <span>{form.message.length}/1500</span>
              </div>
            </div>

            {/* Rate limit blocker */}
            <AnimatePresence>
              {rate.blocked && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-5 flex items-start gap-3 p-4 rounded-sm border border-salmon-light/40 bg-salmon-light/10 text-salmon-light"
                >
                  <AlertTriangle size={18} className="shrink-0 mt-0.5" />
                  <div className="text-xs leading-relaxed">
                    <strong>Demasiados envíos en poco tiempo.</strong> Por seguridad,
                    limitamos a {rate.maxReq} envíos por minuto. Esperá unos segundos antes
                    de reintentar.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={rate.blocked}
              className="btn btn-primary w-full justify-center mt-6 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              <Send size={16} />
              Enviar cotización
            </button>

            <AnimatePresence>
              {status === "sent" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-start gap-3 p-4 rounded-sm border border-gold/40 bg-gold/10 text-gold-bright"
                >
                  <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
                  <div className="text-xs leading-relaxed">
                    Abrimos tu cliente de email con la cotización pre-cargada. Verificá que
                    el destinatario sea <strong>{BRAND.contact.email}</strong> y enviá.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <p className="mt-5 text-[11px] text-ivory/40 leading-relaxed font-serif italic">
              Tus datos viajan sanitizados (anti-XSS) y nunca se almacenan en nuestro servidor:
              el envío se abre directamente desde tu cliente de email. Política de rate limit:
              máximo {rate.maxReq} envíos por minuto por dispositivo.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
}

function Field({ label, name, type = "text", value, onChange, error, placeholder }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-mono text-[10px] uppercase tracking-widest2 text-gold-bright mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full bg-navy-deep/80 border rounded-sm py-3 px-4 text-ivory text-sm placeholder-ivory/30 focus:outline-none transition-colors ${
          error ? "border-salmon-light" : "border-gold/30 focus:border-gold"
        }`}
        autoComplete="off"
      />
      {error && (
        <div className="mt-1 text-[10px] text-salmon-light font-mono">{error}</div>
      )}
    </div>
  );
}
