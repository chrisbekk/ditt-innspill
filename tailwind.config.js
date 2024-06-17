/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        figTree: ['Figtree', 'sans-serif'],
      },
      colors: {
        custom_purple: '#E8E4FD',
        custom_orange: '#FFE5CC',
        custom_yellow: '#FFF5EB',
        custom_green: '#00762C',
        custom_black: '#29282A',
      },
    },
  },
  plugins: [],
};
