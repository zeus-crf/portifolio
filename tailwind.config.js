/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#0ea5e9',
          600: '#0284c7',
          900: '#082f49',
        },
        secondary: {
          500: '#8b5cf6',
        },
        accent: '#ec4899',
        dark: {
          50: '#f8fafc',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
        mono: ['monospace'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};