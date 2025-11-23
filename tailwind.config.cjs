module.exports = {
  content: [
    './index.html',
    './**/*.{js,ts,jsx,tsx,html}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        primary: {
          50: '#fff5f5',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#BF4F51',
          600: '#a83c3c',
          700: '#8b3030',
          800: '#6e2525',
          900: '#4f1b1b'
        }
      }
    }
  },
  plugins: []
};
