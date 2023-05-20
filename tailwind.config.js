/** @type {import('tailwindcss').Config} */

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
      extends: {}
  },
  plugins: [],
}
