/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/component/**/*.{js,jsx,ts,tsx}", // Adjust this path based on your project structure
  ],
  theme: {
    extend: {
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'pulse': {
          '0%, 100%': { opacity: 0.5, transform: 'scale(1)' },
          '50%': { opacity: 0.2, transform: 'scale(1.05)' }
        }
      },
      animation: {
        'scroll-left': 'scroll-left 20s linear infinite',
        'pulse': 'pulse 3s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}