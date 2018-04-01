import React from 'react'
import Link from 'gatsby-link'

import st from './styles.module.css'

export default props => {
  return (
    <ul className={st.list}>
      {props.collection.map(({ node: { name, lastname, photo, personId } }) => (
        <li
          key={`${personId}`}
          className={st.item}>
          <div className={st.photo}>
            <Link to={`/person/${personId}`}>
              {photo ? (
                <img src={`https:${photo.file.url}?fit=thumb&h=100&w=100`} />
              ) : (
                <img src='/Person-placeholder.jpg' />
              )}
            </Link>
          </div>

          <Link to={`/person/${personId}`}>
            {name} {lastname}
          </Link>
        </li>
      ))}
    </ul>
  )
}
