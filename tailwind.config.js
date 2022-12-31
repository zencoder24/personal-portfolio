/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        garnet: "#782f40",
        gold: "#ceb888",
        blackAlt: "#2c2a29",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
