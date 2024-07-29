/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customYellow: '#e3b341',
      },
      keyframes: {
        'scale-up-color-change': {
          '0%, 100%': { transform: 'scale(1)', color: 'currentColor' },
          '50%': { transform: 'scale(1.2)', color: '#f59e0b' }, // Tailwind yellow-500
        },
      },
      animation: {
        'scale-up-color-change': 'scale-up-color-change 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}

