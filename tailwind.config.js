/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'sm': '640px',
  
      'md': '768px',
  
      'lg': '1024px',
  
      'xl': '1200px',
  
      '2xl': '1600px',
    },
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat']
      }
    }
  },
  plugins: []
}
