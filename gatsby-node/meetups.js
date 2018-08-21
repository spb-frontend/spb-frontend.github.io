const slash = require('slash');
const path = require('path');
const {slugify} = require('transliteration');
const {getHumanDate} = require('../utils/date');
const {getMeetupPath} = require('../utils/paths');

const meetupPageTemplate = path.resolve(
  process.cwd(),
  'src/components/meetups.js',
);
const postTemplate = path.resolve(
  process.cwd(),
  'src/components/meetup-page/index.js',
);

module.exports = async ({graphql, boundActionCreators: {createPage}}) => {
  const result = await graphql(`
    {
      allContentfulMeetup(limit: 1000, sort: {order: DESC, fields: [date]}) {
        edges {
          node {
            title
            date
            id
            talks {
              title
              id
              video
              slides
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

  const joinPersons = talks =>
    talks.map(talk => talk.persons && talk.persons[0]).filter(x => !!x);

  const formatTalks = talks =>
    talks.map(talk =>
      Object.assign({}, talk, {
        person: talk.persons && talk.persons[0],
      }),
    );

  const finalEdges = result.data.allContentfulMeetup.edges.map(edge => {
    return {
      node: Object.assign({}, edge.node, {
        formatedDate: getHumanDate(edge.node.date),
        path: getMeetupPath(edge.node.date),
        persons: joinPersons(edge.node.talks),
        talks: formatTalks(edge.node.talks),
      }),
    };
  });

  createPage({
    path: '/meetups',
    component: slash(meetupPageTemplate),
    context: {
      data: {meetups: finalEdges},
    },
  });

  finalEdges.forEach(({node}, id) => {
    createPage({
      path: `/meetups/${slugify(getMeetupPath(node.date))}`,
      component: slash(postTemplate),
      context: {
        data: node,
        id,
      },
    });
  });
};
