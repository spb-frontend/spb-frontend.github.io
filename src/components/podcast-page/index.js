'use strict'
import React, {Component} from 'react'
import styles from './style.module.css'
import Link from 'gatsby-link'
import marked from 'marked'
import {Box, Thread} from 'react-disqussion'
import {timestampToSeconds} from '../../utils/time'

class PodcastPage extends Component {
  constructor(props) {
    super(props)
    this.handleTimeClick = this.handleTimeClick.bind(this)
  }
  handleTimeClick(e) {
    const {target} = e
    if (target.classList.contains('podcast_time')) {
      e.preventDefault()
      this.audioEl.currentTime = timestampToSeconds(target.innerText)
    }
  }
  render() {
    const {data, id} = this.props.pathContext
    const {node: {title, date, link, notes}} = data

    return (
      <div>
        <div className={styles.back_link}>
          <Link to='/podcast/'>
            {'<'} назад
          </Link>
        </div>

        <header className={styles.header}>
          <h3 className={styles.header_title}>
            {title}
          </h3>
          <date className={styles.header_date}>
            {date}
          </date>
        </header>

        <audio
          className={styles.audio}
          controls='controls'
          preload='metadata'
          src={link}
          ref={el => (this.audioEl = el)} />

        <footer
          onClick={this.handleTimeClick}
          className={styles.footer}
          dangerouslySetInnerHTML={{__html: marked(notes.notes)}} />

        <Box shortname='http-spb-frontend-ru'>
          <Thread
            url={`http://spb-frontend.ru/podcast/${id + 1}`}
            title={title}
            identifier={`podcast-${id + 1}`} />
        </Box>
      </div>
    )
  }
}

export default PodcastPage
