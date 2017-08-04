module.exports = {
  siteMetadata: {
    title: 'SPB Frontend',
    description: 'Питерское сообщество фронтендеров SPB Frontend',
    siteUrl: 'https://spb-frontend.ru',
    link: 'http://spb-frontend.ru/podcast/',
    podcast: {
      title: 'SPB Frontend Drinkcast',
      description: 'Подкаст питерского сообщества фронтендеров SPB Frontend',
      siteUrl: 'http://spb-frontend.ru/podcast/',
      image_url: 'http://spb-frontend.ru/podcast_cover2x.png',
      feed_url: 'http://spb-frontend.ru/podcast.xml',
      language: 'ru',
      author: 'SPB Frontend',
      categories: ['Professional'],
      explicit: false
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'podcast',
        path: `${__dirname}/podcast`
      }
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-json',
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
                  siteUrl
                  image_url
                  feed_url
                  language
                  author
                  categories
                  explicit
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
                        title
                        date
                        image
                        duration
                        explicit
                        length
                        file
                      }
                    }
                  }
                }
              }
            `,
            output: '/podcast.xml'
          }
        ]
      }
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
            type: 'image/png'
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    'gatsby-plugin-react-helmet'
  ]
}
