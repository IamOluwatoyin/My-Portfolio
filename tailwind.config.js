/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}", 
  ],
 theme: {
  extend: {
    fontFamily: {
      heading: ['Roboto', 'sans-serif'],
      body: ['Montserrat', 'sans-serif'],
    },
    keyframes: {
        'spin-scale': {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.2)' },
        },
      },
      animation: {
        'spin-scale': 'spin-scale 2s linear infinite',
      },
    },
  },
  
  plugins: [],
}

