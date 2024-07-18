/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom_blue: {
          DEFAULT: "#2D3D88"
        },
        custom_ash: "#F0F0F0",
        custom_pink: "#D33C92"
      }
    }
  },
  plugins: []
};
