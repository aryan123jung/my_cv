import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#05070d",
        panel: "rgba(255,255,255,0.075)",
        cyanGlow: "#65e4ff",
        violetGlow: "#9d7cff",
        greenGlow: "#79ffa8"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 48px rgba(101, 228, 255, 0.2)",
        glass: "0 24px 80px rgba(0, 0, 0, 0.32)"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.13) 1px, transparent 0)"
      },
      animation: {
        "spin-slow": "spin 16s linear infinite",
        "pulse-soft": "pulseSoft 4s ease-in-out infinite"
      },
      keyframes: {
        pulseSoft: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.03)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
