/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    colors: {
      'primary': '#00A700',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#FFFFFF',
    },
    extend: {
      backgroundImage: {
        'home' : "url('/src/Component/Asset/landingPage/satu.jpg')",
        'page' : "url('/src/Component/Asset/landingPage/2.jpg')",
        'estate' : "url('/src/Component/Asset/coffee.jpg')",
        // 'tour' : "url('/src/Images/pinkBeach.jpg')"
      }
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}
