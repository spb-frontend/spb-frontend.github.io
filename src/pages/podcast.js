import React from 'react'

import '../css/podcast.css'

const getPost = ({ node }) => {
  const {title, link, date} = node.frontmatter

  return (
    <div className='posts_item'>
      <header>
        <h3>{title}</h3>
        <date>{date}</date>
      </header>
      <audio
        controls='controls'
        preload='none'
        src={link} />
      <footer
        dangerouslySetInnerHTML={{ __html: node.html }} />
    </div>
  )
}

const Podcast = ({data}) => {
  const blogPosts = data.allMarkdownRemark.edges
  const postList = blogPosts.map(getPost)

  return (
    <div className='podcast'>
      <h2>
        🍻 Drinkcast 🍻
      </h2>
      <div className='posts'>{postList}</div>
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
