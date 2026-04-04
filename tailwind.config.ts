import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAF7",
        foreground: "#1C1917",

        card: "#FFFFFF",
        "card-foreground": "#1C1917",

        popover: "#FFFFFF",
        "popover-foreground": "#1C1917",

        primary: "#B45309",
        "primary-foreground": "#FFFFFF",

        secondary: "#78716C",
        "secondary-foreground": "#FFFFFF",

        muted: "#F5F5F0",
        "muted-foreground": "#78716C",

        accent: "#FEF3C7",
        "accent-foreground": "#92400E",

        destructive: "#DC2626",
        "destructive-foreground": "#FFFFFF",

        border: "#E7E5E4",
        input: "#FFFFFF",
        ring: "#F59E0B",

        ink: "#292524",
        cream: "#FAFAF7",
        amber: {
          DEFAULT: "#F59E0B",
          dark: "#B45309",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "grain":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        warm: "0 1px 3px rgba(28, 25, 23, 0.06), 0 1px 2px rgba(28, 25, 23, 0.04)",
        "warm-md":
          "0 4px 6px -1px rgba(28, 25, 23, 0.07), 0 2px 4px -2px rgba(28, 25, 23, 0.05)",
        "warm-lg":
          "0 10px 15px -3px rgba(28, 25, 23, 0.08), 0 4px 6px -4px rgba(28, 25, 23, 0.04)",
        glow: "0 0 20px rgba(245, 158, 11, 0.15)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-12px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out both",
        "fade-in": "fade-in 0.5s ease-out both",
        "slide-in-left": "slide-in-left 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
