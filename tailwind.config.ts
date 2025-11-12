import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          black: "#121212",
          gold: "#CBAE70",
          gray: "#A8A8A8",
          smoke: "#F7F7F7",
          graphite: "#333333",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          xl: "2rem",
        },
        screens: {
          "2xl": "1320px",
        },
      },
      maxWidth: {
        "8xl": "88rem",
      },
      boxShadow: {
        subtle: "0px 30px 60px rgba(0, 0, 0, 0.24)",
        inset: "inset 0 1px 0 rgba(255, 255, 255, 0.05)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        "pop-in": {
          "0%": { opacity: "0", transform: "translate(-50%, -48%) scale(0.96)" },
          "100%": {
            opacity: "1",
            transform: "translate(-50%, -50%) scale(1)",
          },
        },
        "pop-out": {
          "0%": {
            opacity: "1",
            transform: "translate(-50%, -50%) scale(1)",
          },
          "100%": {
            opacity: "0",
            transform: "translate(-50%, -48%) scale(0.96)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.3s ease-out forwards",
        "fade-out": "fade-out 0.2s ease-in forwards",
        "pop-in": "pop-in 0.3s ease-out forwards",
        "pop-out": "pop-out 0.2s ease-in forwards",
      },
    },
  },
  plugins: [typography],
};
export default config;
