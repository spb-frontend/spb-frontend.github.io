const slash = require('slash');
const path = require('path');

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

  createPage({
    path: '/persons',
    component: slash(persons),
    context: {
      data: result.data.allContentfulPerson.edges,
    },
  });

  result.data.allContentfulPerson.edges.forEach(({node}, id) => {
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
