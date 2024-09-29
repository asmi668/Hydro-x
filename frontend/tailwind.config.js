/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navblue': '#b3c6cc',
        'grey':'#333333',
        'darkgreen':'#065f46',
        'tealblue':'#0d9488'
      },
    }
  },
  plugins: [],
}

