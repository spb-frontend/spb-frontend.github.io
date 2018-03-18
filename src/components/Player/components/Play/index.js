import React, {Component} from 'react'
import PlayIcon from './play-icon'
import PauseIcon from './pause-icon'

export class Play extends Component {
  switch = () => {
    const {player} = this.props
    const {state: {playStatus}} = player

    if (playStatus === 'STOPPED' || playStatus === 'PAUSED') {
      player.setState({playStatus: 'PLAYING'})
    }
    else {
      player.setState({playStatus: 'PAUSED'})
    }
  }

  getIcon = () => {
    const {player: {state: {playStatus}}} = this.props

    if (playStatus === 'STOPPED' || playStatus === 'PAUSED') {
      return <PlayIcon />
    }
    else {
      return <PauseIcon />
    }
  }

  render() {
    return <button
      className={this.props.className}
      onClick={this.switch}>
      {this.getIcon()}
    </button>
  }
}
