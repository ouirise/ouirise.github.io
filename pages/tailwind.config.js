/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#0f0f1a',
        moon: '#1a1a2e',
        fog: '#d4c5b0',
        mist: '#a8a090',
        gold: '#ffd700',
        orange: '#ff5500',
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}