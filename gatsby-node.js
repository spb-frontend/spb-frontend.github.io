/* eslint-disable no-underscore-dangle */
import webpackLodashPlugin from 'lodash-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

exports.modifyWebpackConfig = function(config, env) {
  if (env === 'build-javascript') {
    config.plugin('Lodash', webpackLodashPlugin, null)
  }

  config.removeLoader('less')
  config.removeLoader('sass')

  if (env === 'develop') {
    config.removeLoader('css')
    config.loader('css', {
      test: /\.css$/,
      loaders: ['style', 'css', 'postcss'],
    })
    config.loader('module.css', {
      test: /\.module.css$/,
      loaders: ['style', 'css?modules&localIdentName=[name]_[local]__[hash:base64:5]', 'postcss'],
    })
  }
  else {
    config.removeLoader('css')
    config.loader('css', {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(['css', 'postcss']),
    })
    config.loader('module.css', {
      test: /\.module.css$/,
      loader: ExtractTextPlugin.extract(['css?modules&localIdentName=[hash:base64:8]', 'postcss']),
    })
  }

  config.merge({plugins: [new ExtractTextPlugin('styles.css')]})

  return config
}
