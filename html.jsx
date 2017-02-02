import React from 'react'
import Helmet from 'react-helmet'
import { prefixLink } from 'gatsby-helpers'

const BUILD_TIME = new Date().getTime()

module.exports = (props) => {
  const head = Helmet.rewind()

  let css

  if (process.env.NODE_ENV === 'production') {
    css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
  }

  return <html lang="ru">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0" />
      {head.title.toComponent()}
      {head.meta.toComponent()}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" />
      <script
        defer={true}
        src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
      {css}
    </head>
    <body>
      <div
        className="app"
        id="react-mount"
        dangerouslySetInnerHTML={{ __html: props.body }} />
    </body>
  </html>
}
