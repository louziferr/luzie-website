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
        darkBlue: '#27384E',
        lightBlue: '#99BDEC'
      },

      fontFamily: {
        alfa: ['Alfa Slab One', 'cursive'],
        ultra: ['Ultra', 'cursive'],
        funnel: ['Funnel Display', 'cursive']
      },
    },
  },
  plugins: [],
} satisfies Config;
