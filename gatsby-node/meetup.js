const slash = require('slash');
const path = require('path');
const { slugify } = require('transliteration');
const { getHumanDate, getMeetupPath } = require('../utils/date');

const meetupPageTemplate = path.resolve(
  process.cwd(),
  'src/components/meetup.js',
);
const postTemplate = path.resolve(
  process.cwd(),
  'src/components/meetup-page/index.js',
);

module.exports = async ({ graphql, boundActionCreators: { createPage } }) => {
  const result = await graphql(`
    {
      allContentfulMeetup {
        edges {
          node {
            title
            id
            startDatetime
            endDatetime
            talks {
              title
              id
              createdAt
              persons {
                id
                slug
                name
                lastname
                company
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
    }
  `);

  const joinPersons = talks => {
    return talks.map(talk => {
      return talk.persons[0];
    });
  };

  const finalEdges = result.data.allContentfulMeetup.edges.map(edge => {
    return {
      node: Object.assign({}, edge.node, {
        formatedDate: getHumanDate(edge.node.startDatetime),
        path: getMeetupPath(edge.node.startDatetime),
        persons: [...joinPersons(edge.node.talks)],
      }),
    };
  });

  createPage({
    path: '/meetup',
    component: slash(meetupPageTemplate),
    context: {
      data: { meetups: finalEdges },
    },
  });

  finalEdges.forEach(({ node }, id) => {
    createPage({
      path: `/meetup/${slugify(getMeetupPath(node.startDatetime))}`,
      component: slash(postTemplate),
      context: {
        data: node,
        id,
      },
    });
  });
};
