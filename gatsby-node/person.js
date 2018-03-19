const slash = require('slash');
const path = require('path');

const Person = path.resolve(process.cwd(), 'src/components/person.js');

module.exports = async ({ graphql, boundActionCreators: { createPage } }) => {
  const result = await graphql(
    `
      {
        allContentfulPerson {
          edges {
            node {
              id
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
              podcasts {
                title
                number
              }
            }
          }
        }
      }
    `
  );

  createPage({
    path: '/person',
    component: slash(Person),
    context: {
      data: result.data.allContentfulPerson.edges
    }
  });
};
