const path = require('path')
const rootPath = path.resolve(__dirname, '../')
const ForkCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = async ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.scss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [
              require('tailwindcss'),
              require('autoprefixer')
            ]
          }
        },
        'sass-loader',
        {
          loader: 'sass-resources-loader',
          options: {
            resources: [
              './assets/scss/global.scss',
            ],
            include: rootPath
          }
        }
      ]
    },
    {
      test: /\.ts$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
            transpileOnly: true
          }
        }
      ]
    }
  )
  config.resolve.extensions.push('.ts')
  config.plugins.push(new ForkCheckerWebpackPlugin())
  config.resolve.alias['@'] = rootPath
  config.resolve.alias['~'] = rootPath
  config.resolve.alias['assets'] = path.resolve(__dirname, '../assets/')

  return config
}
