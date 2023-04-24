/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'sans': ['Quicksand']
    },
    extend: {
      colors: {
        'purple': '#9352b3',
      },
    },
  },
  plugins: [],
}

