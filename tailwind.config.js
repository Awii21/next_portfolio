/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      padding: {
        '15': '3.75rem', // 1rem = 4px by default, so 3.75rem = 15 * 0.25rem
      },
    },
  },
  plugins: [],
}

