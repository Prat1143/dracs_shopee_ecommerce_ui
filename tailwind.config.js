const { theme } = require('./src/styles/theme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: theme,
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        'flip-down': {
          '0%': { transform: 'rotateX(0deg)' },
          '50%': { transform: 'rotateX(90deg)' },
          '100%': { transform: 'rotateX(0deg)' }
        }
      },
      animation: {
        'flip-down': 'flip-down 0.5s ease-in-out'
      }
    },
  },
  plugins: [],
}