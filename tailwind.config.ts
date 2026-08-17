import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#2E1A5C",
          dark: "#1B1440",
          light: "#3D2470",
        },
        gold: {
          DEFAULT: "#C9A227",
          light: "#D9B94F",
        },
        offwhite: "#F7F6FA",
        ink: "#1A1330",
        slate: "#5B5470",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        signature: ["var(--font-signature)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
