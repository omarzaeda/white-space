/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        omar: "#000",
      },

      fontFamily: {
        Inter: "Inter, sans-serif",
      },

      screens: {
        md: "768px",
        lg: "1152px",
        xl: "1400px",
        "2xl": "1921px",
      },
    },
  },
  plugins: [],
};
