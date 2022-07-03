/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "airbnb-pink": "#FD5B61",
      },
      animation: {
        "bounce-slow": "bounce 3s infinite ",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
