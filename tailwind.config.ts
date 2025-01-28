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
        darkBlue: '#3D5778', // #27384E
        lightBlue: '#99BDEC',
        parsian: '#1B998B',
        blue: '#73D2DE',
        teal: '#218380',
        pink: '#EF626C',
        yellow: '#FFBC42',
        orange: '#E7895D',
        purple: '#8F2D56',
        green: '#618985',
        olive: '#414535',
        red: '#BF3D48',
        space: '#2D3047',
        ashGray: '#96BBBB',
        dutchWhite: '#F6E8EA',
      },

      fontFamily: {
        alfa: ['Alfa Slab One', 'cursive'],
        ultra: ['Ultra', 'cursive'],
        funnel: ['Funnel Display', 'cursive'],
        roboto: ['Roboto', 'serif'],
        anta: ['Anta', 'serif'],
        saira: ['Saira', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
