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
      sm: '480px',  // You can change the size as per your needs
      md: '768px',
      lg: '1024px',
      xl: '1280px',
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
        quaternary: '#ED8FE7',
        quinary: '#F6FAFE',
        text: {
          DEFAULT: "#818181",
        },
      },

      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)'
      },

      boxShadow: {
        custom: `0px 0px 8px 0px rgba(2, 19, 79, 0.08)`,

      },

      transitionProperty: {
        'height': 'height'
      }
    },
  },
  plugins: [],
};
export default config;
