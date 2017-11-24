const path = require('path')
const slug = require('slug')
const slash = require('slash')
const {getHumanDate} = require('./utils/date')

const podcastPageTemplate = path.resolve(process.cwd(), 'src/components/podcast.js')
const postTemplate = path.resolve(process.cwd(), 'src/components/podcast-page/index.js')

exports.createPages = async ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators

  const result = await graphql(
    `
      {
        allContentfulDrinkcast(
          limit: 1000
          sort: {order: DESC, fields: [date]}
        ) {
          edges {
            node {
              number
              file
              title
              date
              notes {
                notes
              }
            }
          }
        }
      }
    `,
  )
  if (result.errors) {
    throw new Error(result.errors)
  }

  const finalEdges = result.data.allContentfulDrinkcast.edges.map(edge => {
    return {
      node: Object.assign({}, edge.node, {
        formatedDate: getHumanDate(edge.node.date),
      }),
    }
  })

  createPage({
    path: '/podcast',
    component: slash(podcastPageTemplate),
    context: {
      data: {episodes: finalEdges},
    },
  })

  finalEdges.forEach(({node}, id) => {
    createPage({
      path: `/podcast/${slug(node.number)}`,
      component: slash(postTemplate),
      context: {
        data: node,
        id,
      },
    })
  })
}
