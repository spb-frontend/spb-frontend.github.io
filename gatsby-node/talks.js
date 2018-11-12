const slash = require('slash');
const path = require('path');
const translitRusEng = require('translit-rus-eng');
const { slugify } = require('transliteration');

const talkPageTemplate = path.resolve(process.cwd(), 'src/components/talks.js');
const postTemplate = path.resolve(
  process.cwd(),
  'src/components/talk-page/index.js',
);

module.exports = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    {
      allContentfulTalk(limit: 1000) {
        edges {
          node {
            title
            description {
              description
            }
            video
            slides
            persons {
              name
              lastname
              vk
              telegram
              twitter
              slack
              photo {
                file {
                  url
                }
              }
            }
          }
        }
      }
    }
  `);

  const finalEdges = result.data.allContentfulTalk.edges.map(edge => {
    return {
      node: Object.assign({}, edge.node, {
        path: slugify(translitRusEng(edge.node.title)),
      }),
    };
  });

  createPage({
    path: '/talks',
    component: slash(talkPageTemplate),
    context: {
      data: { talks: finalEdges },
    },
  });

  finalEdges.forEach(({ node }, id) => {
    createPage({
      path: `/talks/${slugify(translitRusEng(node.title))}`,
      component: slash(postTemplate),
      context: {
        data: node,
        id,
      },
    });
  });
};
