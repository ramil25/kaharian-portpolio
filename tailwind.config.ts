import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          bg: "rgb(var(--brand-bg) / <alpha-value>)",
          surface: "rgb(var(--brand-surface) / <alpha-value>)",
          accent: "rgb(var(--brand-accent) / <alpha-value>)",
          accentSoft: "rgb(var(--brand-accent-soft) / <alpha-value>)",
          muted: "rgb(var(--brand-muted) / <alpha-value>)",
        },
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(155deg, rgb(139 92 246 / 0.35) 0%, rgb(79 70 229 / 0.45) 45%, rgb(109 40 217 / 0.35) 100%)",
        "header-shine":
          "linear-gradient(90deg, rgb(49 46 129 / 0.85) 0%, rgb(67 56 202 / 0.75) 50%, rgb(49 46 129 / 0.85) 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgb(129 140 248 / 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
