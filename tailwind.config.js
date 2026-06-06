/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // CORES DO DESIGN SYSTEM
        primary: {
          400: '#60a5fa',  // Links
          500: '#3b82f6',  // Azul principal
          700: '#1d4ed8',  // Botões
        },
        success: {
          500: '#22c55e',  // Verde "Available"
        },
        dark: {
          bg:   '#070b14',  // Fundo principal
          card: '#0d1526',  // Cards
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'ui-monospace', 'Cascadia Code', 'monospace'],
      },
      spacing: {  
        xs: '8px',   // --sp-1
        sm: '16px',  // --sp-2
        md: '24px',  // --sp-3
        lg: '32px',  // --sp-4
        xl: '48px',  // --sp-6
        '2xl': '64px',  // --sp-8
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-blue-lg': '0 0 40px rgba(59, 130, 246, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};