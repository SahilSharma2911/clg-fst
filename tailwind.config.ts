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
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        racing: ["Racing Sans One", "serif"],
        "lost-south": ["var(--font-lost-in-south)"],
      },
      textShadow: {
        sm: '1px 1px 2px black',
        md: '2px 2px 4px black',
        lg: '3px 3px 6px black',
      },
      textStroke: {
        sm: '1px black',
        md: '2px black',
        lg: '3px black',
      },
    },
  },
  plugins: [],
} satisfies Config;
