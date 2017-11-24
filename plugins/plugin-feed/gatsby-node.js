'use strict';
require('babel-core/register')
require('babel-polyfill')

const path = require('path')
const RSS = require('rss')
const marked = require('marked')
const { defaultOptions, runQuery, writeFile } = require('./internals')

const publicPath = './public'

// A default function to transform query data into feed entries.
const serialize = ({ site, allContentfulDrinkcast }) =>
  allContentfulDrinkcast.edges.map(edge => {
    const html = marked(edge.node.notes.notes)

    return Object.assign({}, edge.node, {
      title: edge.node.title,
      description: edge.node.description ? edge.node.description : '',
      url: edge.node.file,
      guid: edge.node.id,
      custom_elements: [
        {'content:encoded': html},
        {'itunes:summary': html},
        {'itunes:explicit': edge.node.explicit ? 'yes' : 'no'},
        {'itunes:author': 'SPB Frontend'},
        {'itunes:subtitle': edge.node.description ? edge.node.description : ''},
        {'itunes:duration': edge.node.duration},
        {'itunes:image': {
          _attr: {
            href: edge.node.image.file.url
          }
        }},
        {enclosure: {
          _attr: {
            type: 'audio/mpeg',
            url: edge.node.file,
            length: edge.node.length,
          }
        }}
      ],
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
  // console.log(globals)
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
      itunes: 'http://www.itunes.com/dtds/podcast-1.0.dtd'
    }
    feed.custom_elements = [
      {'itunes:explicit': 'no'},
      {'itunes:subtitle': feed.title},
      {'itunes:author': 'SPB Frontend'},
      {'itunes:owner': [
        {'itunes:name': 'SPB Frontend'},
        {'itunes:email': 'hi@spn-frontend.ru'}
      ]},
      {'itunes:image': {
        _attr: {
          href: feed.image_url
        }
      }},
      {'itunes:category': [
        {_attr: {
          text: 'Technology'
        }},
      ]},
    ]
    items.forEach(i => feed.item(i))

    // console.log(feed)

    await writeFile(output, feed.xml())
  }

  return Promise.resolve()
}
