/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["TT Commons Regular", "sans-serif"],
      },
      colors: {
        primary: "#000000",
        secondary: "#606060",
        accent: "#FF4081",
        background: "#F3F4F6",
        sidebar: "#f5f5f5",
        footer: "#F50057",
        boldText: "#212121",
        mutedText: "#757575",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
      },
      fontWeight: {
        medium: "500",
        normal: "400",
      },
    },
  },
  plugins: [],
};
