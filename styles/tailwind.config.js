const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    "_site/**/*.html",
    "_site/*.html"
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#fdfcfb'
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
