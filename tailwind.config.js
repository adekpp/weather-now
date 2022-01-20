module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {      
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Permanent Marker'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
