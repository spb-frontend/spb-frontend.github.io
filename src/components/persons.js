import React from 'react';
import Helmet from 'react-helmet';

import PersonsList from '../components/persons-list';
import { defaultHelmetMeta, Layout } from './layout';

import styles from './../css/person.module.css';

function getLastPodcast(array) {
  const newArray = array.map(podcast => podcast.number);
  const last = Math.max.apply(null, newArray);

  return last;
}

function sortPersons(array) {
  const newArray = [...array].sort((prev, next) => {
    const prevNodePodcastsNumber = !prev.node.podcasts
      ? 0
      : prev.node.podcasts.length;

    const nextNodePodcastsNumber = !next.node.podcasts
      ? 0
      : next.node.podcasts.length;

    const prevNodeTalksNumber = !prev.node.talks ? 0 : prev.node.talks.length;

    const nextNodeTalksNumber = !next.node.talks ? 0 : next.node.talks.length;

    if (
      prevNodePodcastsNumber + prevNodeTalksNumber !==
      nextNodePodcastsNumber + nextNodeTalksNumber
    ) {
      return (
        nextNodePodcastsNumber +
        nextNodeTalksNumber -
        (prevNodePodcastsNumber + prevNodeTalksNumber)
      );
    } else {
      const nextLastPodcast = next.node.podcasts
        ? getLastPodcast(next.node.podcasts)
        : 0;
      const prevLastPodcast = prev.node.podcasts
        ? getLastPodcast(prev.node.podcasts)
        : 0;

      return nextLastPodcast - prevLastPodcast;
    }
  });

  return newArray;
}

export default props => {
  const { pageContext: { data: person } } = props;
  const sortedPersons = sortPersons(person).map(edge => edge.node);

  return (
    <Layout>
      <div className={styles.list}>
        <PersonsList collection={sortedPersons} />
      </div>

      <Helmet meta={defaultHelmetMeta}>
        <title>SPB Frontend. Persons</title>
      </Helmet>
    </Layout>
  );
};
