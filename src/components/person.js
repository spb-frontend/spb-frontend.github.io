import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import RSSIcon from '-!svg-react-loader?name=Icon!../../static/rss-symbol.svg'
import ITunesIcon from '-!svg-react-loader?name=Icon!../../static/itunes.svg'
import TelegramIcon from '-!svg-react-loader?name=Icon!../../static/telegram.svg'

import styles from './../css/person.module.css'
import { defaultHelmetMeta } from '../layouts/index'
import { getPersonId } from './../../utils/person'

const Person = ({ node: { name, lastname, photo } }) => {
  const personId = getPersonId(name, lastname)

  return (
    <div className={styles.item}>
      <div className={styles.photo}>
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
    </div>
  )
}

export default props => {
  const { pathContext: { data: person } } = props
  return (
    <div>
      <div className={styles.list}>
        {person.map(({ node }, index) => {
          return <Person
            key={index}
            node={node} />
        })}
      </div>

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
