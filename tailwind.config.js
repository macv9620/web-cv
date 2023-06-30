/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        '7xl': 'rgba(0, 0, 0, 0.99) 0px 10px 70px 4px'
      }
    }
  },
  plugins: []
}
