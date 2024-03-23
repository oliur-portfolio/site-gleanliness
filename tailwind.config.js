/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#3c47c7",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.3rem",
        sm: "2rem",
        lg: "4rem",
        xl: "3rem",
      },
    },
  },
  plugins: [],
};
