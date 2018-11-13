let keys

try {
  keys = require('./keys.js')
} catch (err) {
  keys = {
    contentful: {
      space_id: '',
      token: '',
    },
  }
}

module.exports = {
  siteMetadata: {
    title: 'SPB Frontend',
    description: 'Питерское сообщество фронтендеров SPB Frontend',
    siteUrl: 'https://spb-frontend.ru',
    link: 'http://spb-frontend.ru/podcast/',
    podcast: {
      title: 'SPB Frontend Drinkcast',
      description: 'Подкаст питерского сообщества фронтендеров SPB Frontend',
      site_url: 'http://spb-frontend.ru/podcast/',
      image_url:
        'http://ucarecdn.com/7045a961-d664-4a33-b67d-72d11c186b58/drinkcastcover.png',
      feed_url: 'http://spb-frontend.ru/podcast.xml',
      language: 'ru',
      author: 'SPB Frontend',
      categories: ['Technology'],
      explicit: false,
      copyright: 'All rights reserved',
    },
  },
  plugins: [
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'podcast',
    //     path: `${__dirname}/podcast`,
    //   },
    // },
    // 'gatsby-transformer-remark',
    // 'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/assets/favicon.png',
        name: 'SPB Frontend',
        short_name: 'SPB Frontend',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        lang: 'ru-RU',
        orientation: 'any',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: true,
          favicons: true,
          firefox: true,
          opengraph: true,
          twitter: true,
          yandex: true,
          windows: true
        }
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || keys.contentful.space_id,
        accessToken: process.env.CONTENTFUL_TOKEN || keys.contentful.token,
      },
    },
    {
      resolve: 'plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                podcast {
                  title
                  description
                  site_url
                  image_url
                  feed_url
                  language
                  author
                  categories
                  explicit
                  copyright
                }
              }
            }
          }
        `,
        feeds: [
          {
            query: `
              {
                allContentfulDrinkcast(
                  limit: 1000,
                  sort: { order: DESC, fields: [date] },
                ) {
                  edges {
                    node {
                      notes {
                        notes
                      }
                      id
                      file
                      title
                      date
                      duration
                      explicit
                      length
                      image {
                        file {
                          url
                          fileName
                          contentType
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: '/podcast.xml',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-remove-serviceworker',
  ],
}
