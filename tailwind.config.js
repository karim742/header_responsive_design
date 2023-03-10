/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  extend: {},
  theme: {
    fontFamily: {
      'bangla': ['Bangla', 'sans-serif']
    },
    screens: {
      '2xl': {'max': '1870px'},
  
      'xl': {'max': '1440px'},
  
      'lg': {'max': '1024px'},
  
      'md': {'max': '768px'},
  
      'sm': {'max': '425px'},
  
      'xs': {'max': '320px'},
    },
  },
  plugins: [],
}
