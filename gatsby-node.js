const path = require('path')
const slug = require('slug')
const slash = require('slash')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
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
                }
              }
            }
          }
        }
      `
      ).then(result => {
        if (result.errors) {
          reject(new Error(result.errors))
        }

        const postTemplate = path.resolve('src/components/podcast-page/index.js')

        Array.from(result.data.allMarkdownRemark.edges).forEach((edge, id) => {
          createPage({
            path: `/podcast/${slug(id + 1)}`,
            component: slash(postTemplate),
            context: {
              data: edge,
              id,
            },
          })
        })

        return
      })
    )
  })
}
