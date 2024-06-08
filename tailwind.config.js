/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{vue,js,ts,jsx,tsx}"
];
export const theme = {
  extend: {
    fontSize: {
      'xs': '13px',
    },
    colors: {
      'verde-custom': '#96AE00',
      'gris-custom': '#F2F2F6',
    }
  },
};
export const plugins = [];