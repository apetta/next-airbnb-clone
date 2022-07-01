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
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
