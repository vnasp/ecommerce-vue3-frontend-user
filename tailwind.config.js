/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        'xs': '13px',
      },
      colors: {
        'verde-custom': '#96AE00',
        'gris-custom': '#F2F2F6',
      }
    },
  },
  plugins: [],
}