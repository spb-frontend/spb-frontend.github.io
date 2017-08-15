'use strict'
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
      image_url: 'http://spb-frontend.ru/podcast_cover1400.png',
      feed_url: 'http://spb-frontend.ru/podcast.xml',
      language: 'ru',
      author: 'SPB Frontend',
      categories: ['Technology'],
      explicit: false,
      copyright: 'All rights reserved',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'podcast',
        path: `${__dirname}/podcast`,
      },
    },
    'gatsby-transformer-remark',
    // 'gatsby-transformer-json',
    // {
    //   resolve: 'gatsby-source-contentful',
    //   options: {
    //     spaceId: '0euqbzml1bys',
    //     accessToken: '6033b8b1a8c46b1c2ee894eed2be414c382d4c93c6517d695a5ad46fe040cd4e',
    //   },
    // },
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
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: {
                    fileAbsolutePath: { regex: "/podcast/" }
                  }
                ) {
                  edges {
                    node {
                      html
                      frontmatter {
                        link
                        file
                        title
                        date
                        image
                        duration
                        explicit
                        length
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
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'SPB Frontend official site',
        short_name: 'Akurganow',
        start_url: '/',
        background_color: '#fff',
        display: 'minimal-ui',
        icons: [
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
  ],
}
