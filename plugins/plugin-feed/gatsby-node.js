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
      custom_elements: [{ 'content:encoded': edge.node.html }],
    })
  })

exports.onPostBuild = async ({ graphql }, pluginOptions) => {
  delete pluginOptions.plugins

  /*
   * Run the site settings query to gather context, then
   * then run the corresponding feed for each query.
   */
  const { query, setup, feeds, rest } = Object.assign({}, defaultOptions, pluginOptions)
  const globals = await runQuery(graphql, query)

  for (let f of feeds) {
    let locals = {}
    if (f.query) {
      locals = await runQuery(graphql, f.query)
    }

    const output = path.join(publicPath, f.output)
    const ctx = Object.assign({}, globals, locals)
    const feed = new RSS(setup(Object.assign({}, rest, ctx)))
    const items = f.serialize ? f.serialize(ctx) : serialize(ctx)

    items.forEach(i => feed.item(i))

    await writeFile(output, feed.xml())
  }

  return Promise.resolve()
}
