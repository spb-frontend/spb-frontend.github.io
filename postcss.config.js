module.exports = {
  map: true,
  plugins: [
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
  ],
}
