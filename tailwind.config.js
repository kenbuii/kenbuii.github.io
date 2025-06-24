import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        tan: '#F5E6D3',
        sage: '#8B9A46',
        'sage-dark': '#6B7534'
      },
      fontFamily: {
        'serif': ['Libre Baskerville', 'serif'],
      }
    },
  },
  plugins: [
    typography,
  ],
} 