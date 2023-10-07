/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gurkha-logo': "url('./src/assets/logo.png')",
      }
    },
  },
  plugins: [],
}
