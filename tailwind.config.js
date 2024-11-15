/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors'

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-primary": colors.gray[100],
        "light-primary-content": colors.gray[800],
        "light-secondary": colors.blue[700],
        "dark-primary": colors.gray[800],
        "dark-primary-content": colors.gray[100],
        "dark-secondary": colors.purple[300]
      }
    },
  },
  plugins: [],
}

