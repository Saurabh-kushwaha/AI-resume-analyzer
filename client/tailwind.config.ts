// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F1A",
        card: "#111827",
        primary: "#6C63FF",
        accent: "#00D4FF",
        success: "#00FF94",
        danger: "#FF4D6D",
      },
    },
  },
  plugins: [],
};

export default config;