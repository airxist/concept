/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom_blue: {
          DEFAULT: '#2D3D88'
        }
      }
    },
  },
  plugins: [],
}