import React from 'react'
import Helmet from 'react-helmet'
import {Link} from 'gatsby'

import styles from './../css/meetup.module.css'
import {defaultHelmetMeta, Layout} from './layout'

const PostLink = ({title, formatedDate, date, to}) => (
  <div className={styles.post}>
    <header className={styles.header}>
      <h3 className={styles.header_title}>
        <Link
          className='title'
          to={to}>
          {title}
        </Link>
      </h3>
      <date className={styles.header_date}>{formatedDate}</date>
    </header>
  </div>
)

export default props => {
  const {
    pageContext: {
      data: {talks},
    },
  } = props
  return (
    <Layout>
      <h2 className={styles.title}>🎤 Talks 🎤</h2>

      <div className={styles.posts}>
        {talks.map(({node: {title, path}}, index) => (
          <PostLink
            key={index}
            title={title}
            to={`/talks/${path}`} />
        ))}
      </div>

      <Helmet meta={defaultHelmetMeta}>
        <title>SPB Frontend. Meetups</title>
      </Helmet>
    </Layout>
  )
}
