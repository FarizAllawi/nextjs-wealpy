/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media', // or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'black': '#121417',
        'white': '#ffffff',
        'gray' : {
          300: '#d0d2d3',
          800: '#37393d'
        },
        'orange': {
          600: '#d55531',
          700: '#cf5833'
        },
        'green': {
          500: "#32c385",
        }
      }
    },
  },
  plugins: [
    require('./tailwindcss/firefox-plugin')
  ],
}
