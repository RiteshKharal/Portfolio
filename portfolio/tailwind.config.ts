import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['"Josefin Sans"', 'sans-serif'],
        righteous: ['"Righteous"', 'cursive'],
        smooch: ['"Smooch Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
  
};

export default config;
