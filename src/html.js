import React from 'react'

export default class HTML extends React.Component {
  render() {
    let analytics
    if (process.env.NODE_ENV === 'production') {
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
          {this.props.headComponents}
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
