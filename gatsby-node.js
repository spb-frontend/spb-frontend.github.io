/* eslint-disable no-underscore-dangle */
import webpackLodashPlugin from 'lodash-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

exports.modifyWebpackConfig = function(config, env) {
  if (env === 'build-javascript') {
    config.plugin('Lodash', webpackLodashPlugin, null)
  }

  config.removeLoader('less')
  config.removeLoader('lessModules')
  config.removeLoader('sass')
  config.removeLoader('sassModules')

  if (env === 'develop') {
    config.removeLoader('css')
    config.removeLoader('cssModules')
    config.loader('cssModules', {
      test: /\.module.css$/,
      loaders: ['style', 'css?modules&localIdentName=[name]_[local]__[hash:base64:8]', 'postcss'],
    })
    config.loader('css', {
      test: /\.css$/,
      exclude: /\.module\.css$/,
      loaders: ['style', 'css', 'postcss'],
    })
  }
  else {
    config.removeLoader('css')
    config.removeLoader('cssModules')
    config.loader('cssModules', {
      test: /\.module.css$/,
      loader: ExtractTextPlugin.extract(['css?modules&localIdentName=[hash:base64:8]', 'postcss']),
    })
    config.loader('css', {
      test: /\.css$/,
      exclude: /\.module\.css$/,
      loader: ExtractTextPlugin.extract(['css', 'postcss']),
    })
  }

  config.plugin('extract-css', ExtractTextPlugin, ['styles.css', { allChunks: true }])

  return config
}
