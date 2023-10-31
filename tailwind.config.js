/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slider: {
          '0%': {
            transform: 'translateX(0px)'
          },
          '50%': {
            transform: 'translateX(-1280px)'
          },
          '50.1%': {
            transform: 'translateX(1280px)'
          },
          '100%': {
            transform: 'translateX(0px)'
          },
        },
      },
      animation: {
        slider: 'slider 20s linear infinite'
      }
    },
  },
  plugins: [],
}