import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';

import styles from './../css/meetup.module.css';
import { defaultHelmetMeta, Layout } from './layout';

const PostLink = ({ title, date, to }) => (
  <div className={styles.post}>
    <header className={styles.header}>
      <h3 className={styles.header_title}>
        <Link
          className='title'
          to={to}>
          {title}
        </Link>
      </h3>
    </header>
  </div>
);

export default props => {
  const { pageContext: { data: { meetups } } } = props;
  return (
    <Layout>
      <h2 className={styles.title}>🎤 Meetup 🎤</h2>

      <div className={styles.posts}>
        {meetups.map(({ node: { title, date, path, formatedDate } }, index) => (
          <PostLink
            key={index}
            title={title}
            date={date}
            formatedDate={formatedDate}
            to={`/meetups/${path}`} />
        ))}
      </div>

      <Helmet meta={defaultHelmetMeta}>
        <title>SPB Frontend. Meetups</title>
      </Helmet>
    </Layout>
  );
};
