import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Paleta principal del cliente
        salmon: {
          DEFAULT: "#F1CBBF",   // Salmon Tint
          light: "#F5C3C0",     // Salmon Pink claro
          deep: "#D8B0AB",      // Borlotti Bean
        },
        teal: {
          light: "#A0BDC1",
          DEFAULT: "#3D7886",
          deep: "#2A5763",
        },
        navy: {
          light: "#2A5775",
          DEFAULT: "#1C4058",
          deep: "#0E2435",
          black: "#070F1A",
        },
        gold: {
          light: "#F2D88A",
          DEFAULT: "#C9A961",
          bright: "#DDC289",
          dark: "#A88944",
          deep: "#7A6020",
        },
        ivory: {
          DEFAULT: "#FAF7F2",
          light: "#FFFCF6",
          warm: "#F1E9DD",
        },
      },
      fontFamily: {
        display: ["'Fraunces'", "'Cormorant Garamond'", "Georgia", "serif"],
        serif: ["'Fraunces'", "'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "gold-metal":
          "linear-gradient(180deg, #F8E4A8 0%, #F2D88A 22%, #DDC289 42%, #C9A961 60%, #A88944 80%, #7A6020 100%)",
        "gold-shine":
          "linear-gradient(105deg, transparent 30%, rgba(255,247,212,.85) 50%, transparent 70%)",
        "navy-grad":
          "linear-gradient(160deg, #0E2435 0%, #1C4058 50%, #2A5775 100%)",
        "salmon-grad":
          "linear-gradient(160deg, #F1CBBF 0%, #D8B0AB 100%)",
        "noise":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.78 0 0 0 0 0.66 0 0 0 0 0.38 0 0 0 0.2 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        gold: "0 10px 40px -10px rgba(201,169,97,0.45)",
        "gold-glow": "0 0 32px rgba(221,194,137,0.55)",
        "frame-3d":
          "0 30px 60px -25px rgba(0,0,0,0.65), 0 12px 24px -8px rgba(201,169,97,0.20), inset 0 0 0 1px rgba(201,169,97,0.35)",
        cinematic:
          "0 50px 100px -30px rgba(7,15,26,0.85), 0 24px 48px -16px rgba(14,36,53,0.55)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(.2,.8,.2,1) both",
        "fade-in": "fadeIn 0.8s ease both",
        sparkle: "sparkle 1.6s ease-in-out infinite",
        shimmer: "shimmer 3.5s linear infinite",
        float: "float 6s ease-in-out infinite",
        "draw-stroke": "drawStroke 2.4s cubic-bezier(.2,.8,.2,1) forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
        sparkle: {
          "0%,100%": { opacity: "0.2", transform: "scale(0.8) rotate(0deg)" },
          "50%": { opacity: "1", transform: "scale(1.4) rotate(180deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        drawStroke: {
          to: { strokeDashoffset: "0" },
        },
      },
      letterSpacing: {
        wider2: "0.18em",
        widest2: "0.35em",
      },
    },
  },
  plugins: [],
} satisfies Config;
