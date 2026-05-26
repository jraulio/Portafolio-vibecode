/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,css}"
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#050209',
        darkCard: 'rgba(14, 8, 25, 0.7)',
        darkBorder: 'rgba(139, 92, 246, 0.08)',
        brandPurple: '#8b5cf6',
        brandPurpleLight: '#c084fc',
        brandLavender: '#e9d5ff',
        brandFuchsia: '#d946ef',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
