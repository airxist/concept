/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'footer-gradient': 'linear-gradient(97.12deg, #29428D 67.22%, #D33C92 122.89%)'
      }),
      colors: {
        custom_blue: {
          DEFAULT: "#2D3D88"
        },
        custom_ash: "#F0F0F0",
        custom_pink: "#D33C92"
      },
      fontFamily: {
        ob: ['os_bold'],
        oeb: ['os_exbold'],
        osb: ['os_semibold'],
        om: ['os_med'],
        or: ['os_reg'],
        sb: ['s_bold'],
        seb: ['s_exbold'],
        ssb: ['s_semibold'],
        sm: ['s_med'],
        sr: ['s_reg'],
      }
    }
  },
  plugins: []
};
