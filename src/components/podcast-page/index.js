'use strict'
import React, {Component} from 'react'
import styles from './style.module.css'
import Link, {navigateTo} from 'gatsby-link'
import marked from 'marked'
import {Box, Thread} from 'react-disqussion'
import {timestampToSeconds} from '../../utils/time'

const PLAYBACK_RATES = [1.0, 1.2, 1.4, 1.6, 1.8, 2.0]

class PodcastPage extends Component {
  constructor(props) {
    super(props)
    this.handleTimeClick = this.handleTimeClick.bind(this)
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this)
    this.initialTimeHash = `#t=${this.getInitialTime()}`
  }

  handleTimeClick(e) {
    const {target} = e
    if (target.classList.contains('podcast_time')) {
      e.preventDefault()
      this.audioEl.currentTime = timestampToSeconds(target.innerText)
    }
  }

  handleSpeedClick(speed) {
    this.audioEl.playbackRate = speed
  }

  handleTimeUpdate() {
    if (!location) {
      return
    }

    const time = Math.trunc(this.audioEl.currentTime)
    navigateTo(`${location.pathname}?time=${time}`)
  }

  getInitialTime() {
    if (!location) {
      return 0
    }

    const rgexRes = location.search.match(/time=(\d+)/)
    return rgexRes ? rgexRes[1] : 0
  }

  render() {
    const {data, id} = this.props.pathContext
    const {node: {title, link, notes, formatedDate}} = data

    return (
      <div>
        <div className={styles.back_link}>
          <Link to='/podcast/'>{'<'} назад</Link>
        </div>

        <header className={styles.header}>
          <h3 className={styles.header_title}>{title}</h3>
          <date className={styles.header_date}>{formatedDate}</date>
        </header>

        <div className={styles.player}>
          <audio
            className={styles.player_audio}
            controls='controls'
            preload='metadata'
            src={link + this.initialTimeHash}
            onTimeUpdate={this.handleTimeUpdate}
            ref={el => (this.audioEl = el)} />
          <div className={styles.player_controls}>
            {PLAYBACK_RATES.map(speed => (
              <button
                key={speed}
                className={styles.player_controls_item}
                onClick={() => this.handleSpeedClick(speed)}>
                {speed}
              </button>
            ))}
          </div>
        </div>

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
