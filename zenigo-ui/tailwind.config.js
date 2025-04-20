/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      animation: {
        'meteor-effect': 'meteor 5s linear infinite',
      },
      keyframes: {
        meteor: {
          '0%': {transform: 'rotate(215deg) translateX(0)', opacity: 1},
          '70%': {opacity: 1},
          '100%': {transform: 'rotate(215deg) translateX(-500px)', opacity: 0},
        },
      },
    },
    colors: {
      /* LIGHT THEME */
      'light-primary': '#f1f4f8',
      'light-yellow': '#ffc107',
      'light-secondary': '#64737a',
      'light-text-primary': '#000000',
      'light-blue': '#007bff',
      'light-error': '#dc3545',
      'light-success': '#28a745',
      'light-white': '#FFFFFF',
      'light-black': '#000000',
      'light-navbar-color': '#FFFFFF',
      /* DARK THEME */
      'dark-primary': '#001631',
      'dark-yellow': '#ffc107',
      'dark-secondary': '#596570',
      'dark-text-primary': '#FFFFFF',
      'dark-blue': '#007bff',
      'dark-error': '#dc3545',
      'dark-success': '#28a745',
      'dark-white': '#FFFFFF',
      'dark-black': '#000000',
      'dark-navbar-color': '#001631',
    }
  },
  darkMode: 'class',
  plugins: [require('tailwindcss-primeui'), require('@tailwindcss/forms')],
  corePlugins: { preflight: true },
}
