/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundColor: {
        primary: "#2F35E6",
        secondary: "#FF6347",
        tertiary: "#FF4500",
      },
    },
  },
  plugins: [],
};
