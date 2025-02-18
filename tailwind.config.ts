import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlack: "#1E1E1E",
        darkBlack: "#111111",
        accepted: "#004503",
        rejected: "#521515"
      },
      fontFamily: {
        code: "Menlo, Monaco, Consolas",
        custom: '"Plus Jakarta Sans", serif',
      }
    },
  },
  plugins: [],
} satisfies Config;
