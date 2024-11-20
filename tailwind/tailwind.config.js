/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#003066',
        'primary-light': '#AABEE1',
        'primary-lighter': '#E4EBF6',
        'secondary': '#EBE1C9',
        'secondary-dark': '#C18C0B',
        'secondary-darker': '#754200',
        'success': '#306319',
        'danger': '#C11316'
      },
      maxWidth: {
        '2.5xl': '44rem',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif', ...defaultTheme.fontFamily.sans],
        'serif': ['Sansita', 'serif', ...defaultTheme.fontFamily.serif],
        'mono': [...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
}

