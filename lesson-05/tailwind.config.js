module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing:{
        'auto': 'auto'
      },
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'darkPink': '#ea4c892f'
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
