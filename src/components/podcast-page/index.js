import React, {Component} from 'react'
import st from './style.module.css'
import Link, {navigateTo} from 'gatsby-link'
import marked from 'marked'
import {Box, Thread} from 'react-disqussion'
import {Player} from '../Player'
import {timestampToSeconds} from '../../utils/time'
import throttle from 'lodash.throttle'

const PLAYBACK_RATES = [1.0, 1.2, 1.4, 1.6, 1.8, 2.0]

class PodcastPage extends Component {
  state = {
    time: 0
  }

  componentDidMount() {
    this.getInitialTime()
  }

  handleTimeClick = (event) => {
    const {target} = event
    if (target.classList.contains('podcast_time')) {
      event.preventDefault()
      this.setState({time: timestampToSeconds(target.innerText) * 1000})
    }
  }

  getInitialTime() {
    const rgexRes = location.search.match(/time=(\d+)/)

    this.setState({time: rgexRes ? parseInt(rgexRes[1]) * 1000 : 0})
  }

  render() {
    const {data} = this.props.pathContext
    const {title, number, file, notes, formatedDate} = data

    return (
      <div>
        <div className={st.back_link}>
          <Link to='/podcast/'>{'<'} назад</Link>
        </div>

        <header className={st.header}>
          <h3 className={st.header_title}>{title}</h3>
          <date className={st.header_date}>{formatedDate}</date>
        </header>

        <Player
          position={this.state.time}
          file={file} />

        {/*<div className={st.player}>
          <audio
            className={st.player_audio}
            controls='controls'
            preload='metadata'
            src={file + this.initialTimeHash}
            onTimeUpdate={throttle(this.handleTimeUpdate, 1000)}
            />
          <div className={st.player_controls}>
            {PLAYBACK_RATES.map(speed => (
              <button
                key={speed}
                className={st.player_controls_item}
                onClick={() => this.handleSpeedClick(speed)}>
                {speed}
              </button>
            ))}
          </div>
        </div>*/}

        <footer
          onClick={this.handleTimeClick}
          className={st.footer}
          dangerouslySetInnerHTML={{__html: marked(notes.notes)}} />

        <Box shortname='http-spb-frontend-ru'>
          <Thread
            url={`http://spb-frontend.ru/podcast/${number}`}
            title={title}
            identifier={`podcast-${number}`} />
        </Box>
      </div>
    )
  }
}

export default PodcastPage
