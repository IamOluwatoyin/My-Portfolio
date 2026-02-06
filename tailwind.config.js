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
  },
},

  plugins: [],
}

