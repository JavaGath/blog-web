/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      md: { max: '1125px' },
    },
    extend: {
      colors: {
        'logo-color': '#1E1E1C',
        'button-color': '#DA5408',
      },
      width: {
        '1/20': '5%',
        '19/20': '95%',
      },
    },
  },
  plugins: [],
}
