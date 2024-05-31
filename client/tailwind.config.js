/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto-serif': ['"Noto Serif"', 'serif'],
        'playfair-display': ['"Playfair Display"', 'serif'],
        'sevillana': ['Sevillana'],
        'julee': ['Julee'],
      },
    },
  },
  plugins: [],
}
