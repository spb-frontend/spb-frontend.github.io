import React, {Component} from 'react'
import cn from 'classnames'
import {
  Sound,
  Play,
  Volume,
  Timer,
  Progress,
  Speed,
  Share,
  Download,
} from './components'
import st from './style.module.css'

export class Player extends Component {
  state = {
    playStatus: 'STOPPED',
    timerType: 'ELAPSED',
    position: 0,
    duration: 0,
    volume: 100,
    playbackRate: 1,
  }

  keysHandlersHash = {
    // space
    32: () => {
      this.togglePlaying()
    },

    // m or M
    77: () => {
      this.toggleMute()
    },

    // arrows
    37: () => {
      this.decreasePosition()
    },
    38: () => {
      this.increaseVolume()
    },
    39: () => {
      this.increasePosition()
    },
    40: () => {
      this.decreaseVolume()
    },
  }

  toggleTimerType = () => {
    const {timerType} = this.state
    this.setState({
      timerType: timerType === 'ELAPSED' ? 'REMAINING' : 'ELAPSED',
    })
  }

  handlePlayerKeyDown = event => {
    const handler = this.keysHandlersHash[event.keyCode]
    const isSpace = event.keyCode === 32
    const focusedTag = document.activeElement.tagName.toLocaleLowerCase()

    if (handler && (!isSpace || focusedTag !== 'button')) {
      event.preventDefault()
      handler()
    }
  }

  handlePlaying = opts => {
    this.setState(opts)
  }

  handleLoading = opts => {
    this.setState({duration: opts.duration})
  }

  toggleMute() {
    const {volume, prevVolume = 100} = this.state

    if (volume) {
      this.setState({volume: 0, prevVolume: volume})
    } else {
      this.setState({volume: prevVolume})
    }
  }

  togglePlaying() {
    let {playStatus} = this.state

    if (playStatus === 'STOPPED' || playStatus === 'PAUSED') {
      playStatus = 'PLAYING'
    } else {
      playStatus = 'PAUSED'
    }

    this.setState({playStatus})
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({position: nextProps.position})
  }

  changeVolume(value) {
    if (value > 100) {
      value = 100
    }

    if (value < 0) {
      value = 0
    }

    this.setState(({volume}) => ({
      volume: value,
      prevVolume: volume,
    }))
  }

  changePosition(position) {
    const {duration} = this.state

    if (position > duration) {
      position = duration
    }

    if (position < 0) {
      position = 0
    }

    this.setState({position})
  }

  increaseVolume() {
    const {volume} = this.state

    this.changeVolume(volume + 5)
  }

  decreaseVolume() {
    const {volume} = this.state

    this.changeVolume(volume - 5)
  }

  increasePosition() {
    const {position} = this.state

    this.changePosition(position + 5000)
  }

  decreasePosition() {
    const {position} = this.state

    this.changePosition(position - 5000)
  }

  render() {
    const {file, title} = this.props
    const {
      playStatus,
      position,
      duration,
      volume,
      playbackRate,
      timerType,
    } = this.state
    return (
      <div>
        <div
          className={st.player}
          onKeyDown={this.handlePlayerKeyDown}>
          <Progress
            player={this}
            position={position}
            duration={duration}
            className={st.progress} />
          <Timer
            position={timerType === 'ELAPSED' ? position : duration - position}
            toggleTimerType={this.toggleTimerType}
            className={st.timer} />
          <Sound
            position={position}
            volume={volume}
            playbackRate={playbackRate}
            onPlaying={this.handlePlaying}
            onLoading={this.handleLoading}
            playStatus={playStatus}
            autoLoad={true}
            url={file} />
        </div>
        <div className={st.controls}>
          <Play
            player={this}
            className={cn(st.control, {
              [st.play]: playStatus === 'STOPPED' || playStatus === 'PAUSED',
              [st.pause]: playStatus === 'PLAYING',
            })} />
          <Speed
            player={this}
            playbackRate={playbackRate}
            className={cn(st.control, st.small)} />

          <Volume
            player={this}
            volume={volume}
            className={cn(st.control, st.small)} />
          <Share
            position={position}
            classNames={[st.control, st.small]} />
          <Download
            className={cn(st.control, st.small)}
            url={file}
            title={title} />
        </div>
      </div>
    )
  }
}
