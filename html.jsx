/* eslint-disable no-inline-comments */
import React from 'react'
import Helmet from 'react-helmet'
import {prefixLink} from 'gatsby-helpers'

const BUILD_TIME = new Date().getTime()

module.exports = (props) => {
  const head = Helmet.rewind()

  let css

  if (process.env.NODE_ENV === 'production') {
    css = <style dangerouslySetInnerHTML={{__html: require('!raw!./public/styles.css')}} />
  }

  return <html lang='ru'>
    <head>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0' />
      {head.title.toComponent()}
      {head.meta.toComponent()}
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <link rel='manifest' href='/manifest.json' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' />
      <script
        defer={true}
        src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
      {css}
    </head>
    <body>
      <div
        className='app'
        id='react-mount'
        dangerouslySetInnerHTML={{__html: props.body}} />

      {/* Analytics (zarema.khalilova[at]gmail.com) */}
      {process.env.NODE_ENV === 'production' && <script dangerouslySetInnerHTML={{
        __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-91313840-1', 'auto');
        ga('send', 'pageview');`,
      }} />}

      {/* Yandex.Metrika counter (hi[at]spb-frontend.ru) */}
      {process.env.NODE_ENV === 'production' && <script dangerouslySetInnerHTML={{
        __html: `(function (d, w, c) {
          (w[c] = w[c] || []).push(function() {
            try {
              w.yaCounter42533689 = new Ya.Metrika({
                id:42533689,
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true,
                trackHash:true
              });
            } catch(e) { }
          });
          var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
          s.type = "text/javascript";
          s.async = true;
          s.src = "https://mc.yandex.ru/metrika/watch.js";
          if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
          } else { f(); }
        })(document, window, "yandex_metrika_callbacks");`,
      }} />}
      {process.env.NODE_ENV === 'production' && <noscript><div><img src='https://mc.yandex.ru/watch/42533689' style='position:absolute; left:-9999px;' alt='' /></div></noscript>}
    </body>
  </html>
}
