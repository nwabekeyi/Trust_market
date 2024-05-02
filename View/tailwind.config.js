/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       red: '#FF1F00',
       greenDark:'#052C15',
       grey: '#4A4A4A',
       greenLight: '#0E703D',
       brown: "#733400",
       greenLighter: '#B4D7C3',
       none: 'transparent'
      },
    },
  },
  plugins: [],
}
