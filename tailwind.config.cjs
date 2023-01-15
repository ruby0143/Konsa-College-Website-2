/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        
        'roboto': ['Roboto', 'sans-serif'],
      },
      background: ['active'],
      display: ['group-focus'],
      opacity: ['group-focus'],
      inset: ['group-focus']
    },
  },
  plugins: [ require('tailwind-scrollbar-hide')],
}
