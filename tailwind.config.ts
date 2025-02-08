import type { Config } from "tailwindcss";
import tailwindanimation from 'tailwindcss-animated';

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
        white: '#ffffff',
        darkBlue: '#3D5778', // #27384E
        lightBlue: '#99BDEC',
        parsian: '#1B998B',
        blue: '#4281A4',
        red: '#C1666B',
        green: '#3B8986',
        pink: '#EF626C',
        yellow: '#D4B483',
        orange: '#E7895D',
        olive: '#414535',
        space: '#2D3047',
        ashGray: '#96BBBB',
        sWhite: '#E4DFDA',
      },

      fontFamily: {
        alfa: ['Alfa Slab One', 'cursive'],
        ultra: ['Ultra', 'cursive'],
        funnel: ['Funnel Display', 'cursive'],
        roboto: ['Roboto', 'serif'],
        anta: ['Anta', 'serif'],
        saira: ['Saira', 'serif'],
        jockey: ['Jockey One', 'serif'],
        noto: ['Noto Sans JP', 'serif'],
        zen: ['Zen Dots', 'serif'],
      },
    },
  },
  plugins: [tailwindanimation],
} satisfies Config;
