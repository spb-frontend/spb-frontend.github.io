'use strict'
import React from 'react'
import PropTypes from 'prop-types'

const BUILD_TIME = new Date().getTime()

export default class HTML extends React.Component {
  static propTypes = {
    body: PropTypes.string,
  }

  render() {
    let css
    let analytics
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          dangerouslySetInnerHTML={{
            __html: require('!raw!../public/styles.css'),
          }} />
      )
      analytics = (
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-102437066-1', 'auto');
            ga('send', 'pageview');`,
          }} />
      )
    }

    return (
      <html lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta
            httpEquiv='X-UA-Compatible'
            content='IE=edge' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0' />
          <meta
            name='theme-color'
            content='#000000' />
          {this.props.headComponents}
          {css}
        </head>
        <body>
          <div
            id='___gatsby'
            className='app'
            dangerouslySetInnerHTML={{__html: this.props.body}} />
          {this.props.postBodyComponents}
          {analytics}
        </body>
      </html>
    )
  }
}
