import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A1020",
        academy: "#13294B",
        campus: "#1F7A8C",
        gold: "#D6A64F",
        paper: "#F7F4ED",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(10, 16, 32, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
