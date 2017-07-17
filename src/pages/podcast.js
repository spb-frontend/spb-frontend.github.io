import React from 'react'
import Helmet from 'react-helmet'

import styles from './../css/podcast.module.css'
import {defaultHelmetMeta} from '../layouts/index'

const getPost = ({ node }) => {
  const {title, link, date} = node.frontmatter

  return (
    <div className={styles.post}>
      <header className={styles.header}>
        <h3 className={styles.header_title}>{title}</h3>
        <date className={styles.header_date}>{date}</date>
      </header>
      <audio
        className={styles.audio}
        controls='controls'
        preload='none'
        src={link} />
      <footer
        className={styles.footer}
        dangerouslySetInnerHTML={{ __html: node.html }} />
    </div>
  )
}

const Podcast = ({data}) => {
  const blogPosts = data.allMarkdownRemark.edges
  const postList = blogPosts.map(getPost)

  return (
    <div>
      <h2 className={styles.title}>
        🍻 Drinkcast 🍻
      </h2>
      <div className={styles.posts}>{postList}</div>

      <Helmet meta={defaultHelmetMeta}>
        <title>SPB Frontend. Drinkcast</title>
        <link
          rel='alternate'
          type='application/rss+xml'
          href='/podcast.xml' />
      </Helmet>
    </div>
  )
}

export default Podcast

export const pageQuery = graphql` query MyQueryName
  {
    allMarkdownRemark(
      limit: 1000,
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: {
        fileAbsolutePath: { regex: "/podcast/" }
      }
    ) {
      edges {
        node {
          html
          frontmatter {
            link
            title
            date
          }
        }
      }
    }
  }
`
