import React, { Component } from 'react'
import Helmet from 'react-helmet'

import styles from './../css/podcast.module.css'
import {defaultHelmetMeta} from '../layouts/index'

export default class Podcast  extends Component {

  constructor(props) {
    super(props)

    const posts = props.data.allMarkdownRemark.edges
    this.postList = posts.map(this.getPost.bind(this))
  }

  getPost({ node }, index) {
    const {title, link, date} = node.frontmatter

    return (
      <div
        key={index}
        className={styles.post}>
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

  render() {
    return (
      <div>
        <h2 className={styles.title}>
          🍻 Drinkcast 🍻
        </h2>
        <div className={styles.posts}>{this.postList}</div>

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
}

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
