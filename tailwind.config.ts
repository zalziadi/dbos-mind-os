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
        dbos: {
          bg: "#0A0E14",
          surface: "#111620",
          card: "#151B27",
          border: "#1E2638",
          "border-light": "#2A3548",
        },
        neural: {
          blue: "#5B8DEF",
          purple: "#8B6CEF",
          green: "#4ADE80",
          amber: "#F5A623",
          red: "#EF5B5B",
          pink: "#E879A8",
          cyan: "#5BE0EF",
          orange: "#F5A623",
          lime: "#A3E635",
          lavender: "#C4B5FD",
        },
        pipeline: {
          observe: "#5B8DEF",
          filter: "#F5A623",
          meaning: "#5BE0EF",
          response: "#4ADE80",
          wisdom: "#8B6CEF",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
        display: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
