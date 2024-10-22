import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '375px',  // You can change the size as per your needs
      md: '768px',
      lg: '1200px',
    },
    container: {
      center: true
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ffffff",
        },
        secondary: "#FBC02D",
        tertiary: '#02134F',
        text: {
          DEFAULT: "#818181",
        },
      },

      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)'
      }
    },
  },
  plugins: [],
};
export default config;
