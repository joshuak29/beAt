/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue, js, ts, jsx, tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'brand-platinum': '#DADCE2',
        'brand-silver': '#A6A6A6',
        'brand-black': '#363636',
        'brand-blue': '#5267D3',
      }
    },
  },
  plugins: [],
}

