require('babel-core/register')
require('babel-polyfill')

const path = require('path')
const RSS = require('rss')
const { defaultOptions, runQuery, writeFile } = require('./internals')

const publicPath = './public'

// A default function to transform query data into feed entries.
const serialize = ({ site, allMarkdownRemark }) =>
  allMarkdownRemark.edges.map(edge => {
    return Object.assign({}, edge.node.frontmatter, {
      description: edge.node.excerpt,
      url: edge.node.frontmatter.link,
      guid: edge.node.frontmatter.link,
      image: edge.node.frontmatter.image,
      custom_elements: [{ 'content:encoded': edge.node.html }],
    })
  })

exports.onPostBuild = async ({ graphql }, pluginOptions) => {
  delete pluginOptions.plugins

  /*
   * Run the site settings query to gather context, then
   * then run the corresponding feed for each query.
   */
  const { query, setup, feeds, rest } = Object.assign(
    {},
    defaultOptions,
    pluginOptions
  )
  const globals = await runQuery(graphql, query)

  /* TODO: придумать решение получше */
  globals.site.siteMetadata = globals.site.siteMetadata.podcast

  for (let f of feeds) {
    let locals = {}
    if (f.query) {
      locals = await runQuery(graphql, f.query)
    }

    const output = path.join(publicPath, f.output)
    const ctx = Object.assign({}, globals, locals)
    const feed = new RSS(setup(Object.assign({}, rest, ctx)))
    const items = f.serialize ? f.serialize(ctx) : serialize(ctx)

    /* TODO: Вынести настройки в конфиг */
    feed.custom_namespaces = {
      itunes: 'http://www.itunes.com/dtds/podcast-1.0.dtd',
    }
    feed.custom_elements = [
      { 'itunes:subtitle': feed.title },
      { 'itunes:author': 'SPB Frontend' },
      { 'itunes:summary': feed.description },
      {
        'itunes:owner': [
          { 'itunes:name': 'SPB Frontend' },
          { 'itunes:email': 'hi@spn-frontend.ru' },
        ],
      },
      {
        'itunes:image': {
          _attr: {
            href: feed.image_url,
          },
        },
      },
      {
        'itunes:category': [
          {
            _attr: {
              text: 'Professional',
            },
          },
        ],
      },
    ]

    items.forEach(i => {
      i.custom_elements = [
        { 'itunes:author': 'SPB Frontend' },
        { 'itunes:subtitle': i.title },
        {
          'itunes:image': {
            _attr: {
              href: i.image,
            },
          },
        },
        { 'itunes:duration': i.duration },
      ]

      return feed.item(i)
    })

    await writeFile(output, feed.xml())
  }

  return Promise.resolve()
}
