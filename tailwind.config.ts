import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        turquoise: "#1FC9C5",
        deepBlue: "#0A2A66",
        sand: "#F4E8CC",
        sun: "#FFB84D",
        coral: "#FF6B4A"
      }
    }
  },
  plugins: []
};

export default config;
