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
        red: {
          400: "#f87171",
          500: "#ef4444",
          600: "#C40024",
          900: "#450a0a",
        },
        cyan: {
          400: "#00F5FF",
          500: "#00d9e6",
        },
      },
      fontFamily: {
        display: ["'Orbitron'", "monospace"],
        mono: ["'Share Tech Mono'", "monospace"],
        body: ["'Inter'", "sans-serif"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 1s ease-in-out infinite",
        shimmer: "shimmer 4s linear infinite",
        grain: "grain 0.12s steps(1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
