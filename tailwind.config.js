/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0b1220',
          800: '#11182b',
          700: '#1b2438',
          600: '#334155',
          500: '#475569',
          400: '#64748b',
          300: '#94a3b8',
        },
        brand: {
          50: '#eef4ff',
          100: '#dbe6ff',
          200: '#bcd2ff',
          300: '#8eb1ff',
          400: '#5a86ff',
          500: '#3b66f5',
          600: '#2a4ee0',
          700: '#233fbf',
          800: '#213799',
          900: '#1f3378',
        },
        accent: {
          violet: '#7c5cff',
          blue: '#3b66f5',
          cyan: '#0ea5e9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -12px rgba(15,23,42,0.12)',
        card: '0 1px 3px rgba(15,23,42,0.06), 0 12px 32px -16px rgba(15,23,42,0.18)',
        pop: '0 20px 60px -20px rgba(15,23,42,0.25)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
