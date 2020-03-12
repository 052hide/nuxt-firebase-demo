/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    fill: (theme) => ({
      light: theme('colors.gray.600'),
      dark: theme('colors.gray.800'),
      'text-light': theme('colors.gray.100'),
      'text-dark': theme('colors.gray.900')
    }),
    extend: {
      zIndex: {}
    }
  },
  variants: {},
  plugins: []
}
