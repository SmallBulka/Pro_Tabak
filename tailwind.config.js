/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    screens: {

      sm: "640px",
      md: "768px",
      lg: "940px",
      xl: "1200px",
    },
    extend: {
      fontFamily: {
        rubik: ["Rubik Mono One", "monospace"],
        rboto: ["Roboto", "sans-serif"],
        montserra: ["Montserrat", "sans-serif"],
        almontserra: ["Montserrat Alternates", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        lighgra: "#D4C17F",
        placeholder: "#BEBEBE",
        heroGradient: "rgba(45, 52, 60, 0.38)",
      },
      backgroundImage: {
        hero: "url('/img/Gag.png')",
        ovo: "url('/img/ovo.webp')",
      },
    },
  },
  plugins: [],
  
};
