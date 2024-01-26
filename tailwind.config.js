/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,tsx}"],
  corePlugins: { preflight: false },
  theme: {
    fontFamily:{
      'display':['"Russo One"', 'sans-serif'],
      'sans':['"Inter"', 'sans-serif'],
      'mono':['"Roboto Mono','monospace']
    },
    extend: {
      colors: {
        primary: "#1db954",
      },
    },
  },
  plugins: [],
};
