/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '1024px',
      lg: '1440px',
      xl: '1920px',
    },
    colors: {
      'gray-dark': '#262626',
      'gray': '#B2B2B2',
      'gray-light': '#F0F0F0',
      'turquoise': '#30AFB8',
      'white': '#F9F9F9'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      raleway: ['Raleway'],
      montserrat: ['Montserrat']
    },
    extend: {
    }
  },
  plugins: [],
}

