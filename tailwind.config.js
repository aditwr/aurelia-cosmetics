/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        palleteWhite: "#FBF9FB",
        palleteBase: "#2F3235",
        palleteEarth: "#503223",
        palleteDensity: "#C2B1A5",
        palleteCream: "#EBD4C0",
        palleteTenderness: "#F5C3A5",
        palleteFreshness: "#C3D7BE",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        montserrat: "Montserrat, sans-serif",
        tangerine: "Tangerine, cursive",
      },
      backgroundImage: {
        hero: "url('/src/assets/img/hero/acsent.png')",
      },
    },
  },
  plugins: [],
};
