import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0e2f5c",
          deep: "#0a2347",
          text: "#123a68",
        },
        teal: {
          DEFAULT: "#22b8ab",
          light: "#32c7ba",
        },
        skyblue: {
          DEFAULT: "#1c7dc0",
        },
        pagebg: "#f3f6fa",
        cardborder: "#dce7ec",
        mint: {
          DEFAULT: "#eefaf8",
          border: "#bee8e4",
        },
      },
      fontFamily: {
        sans: [
          "Arial",
          "Helvetica Neue",
          "Helvetica",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 2px 10px rgba(14, 47, 92, 0.06)",
      },
      borderRadius: {
        card: "20px",
      },
    },
  },
  plugins: [],
};
export default config;
