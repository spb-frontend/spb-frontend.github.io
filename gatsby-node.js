/* eslint-disable no-underscore-dangle */
import ExtractTextPlugin from 'extract-text-webpack-plugin'

exports.modifyWebpackConfig = function(config, env) {
  config.removeLoader('less')
  config.removeLoader('sass')
  if (env === 'develop') {
    config.removeLoader('css')
    config.loader('css', {
      test: /\.css$/,
      loaders: ['style', 'css', 'postcss'],
    })
    config.loader('mcss', {
      test: /\.mcss$/,
      loaders: ['style', 'css?modules&localIdentName=[name]_[local]__[hash:base64:5]', 'postcss'],
    })
  }
  else {
    config.removeLoader('css')
    config.loader('css', {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(['css', 'postcss']),
    })
    config.loader('mcss', {
      test: /\.mcss$/,
      loader: ExtractTextPlugin.extract(['css?modules&localIdentName=[hash:base64:8]', 'postcss']),
    })
  }

  config._config.postcss = [
    require('postcss-import'),
    require('postcss-for'),
    require('postcss-nested'),
    require('postcss-brand-colors'),
    require('postcss-color-function'),
    require('postcss-vertical-rhythm'),
    require('pleeease-filters'),
    require('postcss-svg')({paths: ['pages/images', 'pages/images/icons']}),
    require('postcss-assets')({
      basePath: './pages',
      loadPaths: ['images/'],
    }),
    require('postcss-svgo'),
    require('postcss-clearfix'),
    require('postcss-easings'),
    require('autoprefixer'),
    require('cssnano')({
      autoprefixer: false,
      discardComments: {removeAll: true},
      safe: true,
    }),
    require('postcss-browser-reporter'),
  ]

  config.merge({plugins: [new ExtractTextPlugin('styles.css')]})

  return config
}
