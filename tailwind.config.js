/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue, js, ts, jsx, tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Wallpoet', 'sans-serif'],
        mono: ["Bai Jamjuree"]
      }
    },
  },
  plugins: [],
}

