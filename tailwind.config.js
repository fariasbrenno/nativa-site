/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest:     'hsl(var(--forest) / <alpha-value>)',
        brass:      'hsl(var(--brass) / <alpha-value>)',
        parchment:  'hsl(var(--parchment) / <alpha-value>)',
        sage:       'hsl(var(--sage) / <alpha-value>)',
        charcoal:   'hsl(var(--charcoal) / <alpha-value>)',
        terracotta: 'hsl(var(--terracotta) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body:    ['"Jost"', 'sans-serif'],
      },
      maxWidth: {
        main: '1800px',
      },
    },
  },
  plugins: [],
}
