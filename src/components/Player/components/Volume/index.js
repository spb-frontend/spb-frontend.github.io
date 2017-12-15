import React, {Component} from 'react'
import cn from 'classnames'
import st from './style.module.css'
import VolumeOn from './volume-on-icon'
import VolumeOff from './volume-off-icon'

export class Volume extends Component {
  state = {
    prevVolume: 100
  }

  switch = () => {
    const {player, volume} = this.props
    if (volume === 0) {
      player.setState({volume: this.state.prevVolume})
    }
    else {
      player.setState({volume: 0})
      this.setState({prevVolume: volume})
    }
  }

  change = (event) => {
    const {player} = this.props
    const {target: {value}} = event

    player.setState({volume: value})
  }

  getIcon = () => {
    const {volume} = this.props

    if (volume >= 1) {
      return <VolumeOn />
    }
    else {
      return <VolumeOff />
    }
  }

  render() {
    const {volume} = this.props

    return <div className={st.volume}>
      <button
        className={cn(st.button, this.props.className)}
        onClick={this.switch}>
        {this.getIcon()}
      </button>

      <input
        onChange={this.change}
        className={st.range}
        min='0'
        max='100'
        step='1'
        value={volume}
        type='range' />
    </div>
  }
}
