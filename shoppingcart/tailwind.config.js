module.exports = {
  content: ["./src/**/*.{html,js}"],
  dark: 'class',
  theme: {
    extend: {
      screens: {
        "other" : {'min':'340px', 'max': '1255px'},
        "max-sm": {'max': '639px'},
      },
    },
  },
  plugins: [],
}