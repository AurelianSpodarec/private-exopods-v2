/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

function withOpacity(variableName) {
  return ({ opacityValue }) => {
  if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
  }
  return `rgb(var(${variableName}))`
  }
}

module.exports = {
  content: [
      "./index.html",
      './src/**/*.{html,js,ts,jsx,tsx}'
  ],
  theme: {
      extends: {
        fontFamily: {
          'poppins': ['Poppins', ...defaultTheme.fontFamily.sans],
          'inter': ['Inter', ...defaultTheme.fontFamily.sans],
          'isconsolata': ['Inconsolata', ...defaultTheme.fontFamily.sans],
          'heading':  ['Poppins', ...defaultTheme.fontFamily.sans],
        }
      }
  },
  plugins: [],
}
