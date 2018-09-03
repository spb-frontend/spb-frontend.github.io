const slash = require('slash');
const path = require('path');

const translitRusEng = require('translit-rus-eng');
const {slugify} = require('transliteration');
const persons = path.resolve(process.cwd(), 'src/components/persons.js');
const personTemplate = path.resolve(
  process.cwd(),
  'src/components/person-page/index.js',
);

module.exports = async ({graphql, boundActionCreators: {createPage}}) => {
  const result = await graphql(
    `
      {
        allContentfulPerson {
          edges {
            node {
              id
              slug
              name
              lastname
              position
              vk
              shrug
              bio {
                bio
              }
              telegram
              twitter
              slack
              photo {
                file {
                  url
                }
              }
              company
              talks {
                title
              }
              podcasts {
                title
                number
              }
            }
          }
        }
      }
    `,
  );

  const finalEdges = result.data.allContentfulPerson.edges.map(edge => {
    if (edge.node.talks) {
      return {
        node: Object.assign({}, edge.node, {
          talks: edge.node.talks.map(talk => {
            return Object.assign({}, talk, {
              slug: slugify(translitRusEng(talk.title)),
            });
          }),
        }),
      };
    }
    return edge;
  });

  createPage({
    path: '/persons',
    component: slash(persons),
    context: {
      data: finalEdges,
    },
  });

  finalEdges.forEach(({node}, id) => {
    createPage({
      path: `/persons/${node.slug}`,
      component: slash(personTemplate),
      context: {
        data: node,
        id,
      },
    });
  });
};
