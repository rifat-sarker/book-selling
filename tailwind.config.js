/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        DMSerif : ["DM Serif Display", "serif"],
        Raleway : ["Raleway", "sans-serif"]
      },
    },
  },
  plugins: [],
};
