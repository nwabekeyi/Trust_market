/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        buttonActive: '#733400',
       red: '#FF1F00',
       greenDark:'#052C15',
       grey: '#4A4A4A',
       greenLight: '#0E703D',
       brown: "#733400",
       greenLighter: '#B4D7C3',
       none: 'transparent',
       greyLight: '#F1F1F1'
      },
    },
  },
  plugins: [],

});
