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
        'seymour-one': ['"Seymour One"', 'sans-serif'],
      },
      boxShadow: {
        'custom-light': '#F5BACA 0px 22px 40px 4px;',
        'custom-medium': ' #BAD4F5 0px 22px 40px 4px;',
        'custom-strong': ' #BAF5CF 0px 22px 40px 4px;',
        'custom-semistrong': ' #F1A8A8 0px 22px 40px 4px;',
        'custom-lightgreen': ' ##AAF2DC 0px 22px 40px 4px;',
        'custom-violet': ' #B6AAF2 0px 22px 40px 4px;',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
}
