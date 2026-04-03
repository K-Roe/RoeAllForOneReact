/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "sans-serif",
        ],
        display: ['"Outfit"', '"Plus Jakarta Sans"', "sans-serif"],
      },
      colors: {
        ink: {
          DEFAULT: "#050810",
          soft: "#0c1222",
          card: "#121a2e",
        },
        mist: "#94a3b8",
        frost: "#e2e8f0",
        brand: {
          sky: "#38bdf8",
          skyDim: "#0ea5e9",
          coral: "#fb7185",
          amber: "#fbbf24",
          violet: "#a78bfa",
          mint: "#2dd4bf",
        },
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(56, 189, 248, 0.45)",
        "glow-warm": "0 0 80px -20px rgba(251, 191, 36, 0.4)",
        panel: "0 24px 80px -24px rgba(0, 0, 0, 0.65)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)",
      },
      animation: {
        "gradient-shift": "gradient-shift 14s ease infinite",
        "fade-up": "fade-up 0.7s ease-out forwards",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
