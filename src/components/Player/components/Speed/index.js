import React, {Component} from 'react'
import cn from 'classnames'
import st from './style.module.css'

const rates = ['1', '1.2', '1.4', '1.6', '1.8', '2']

export class Speed extends Component {
  state = {
    focus: false,
  }

  handleChange = event => {
    const {player} = this.props
    const {target} = event
    const {dataset} = target

    if (target.classList.contains(st.speed_link)) {
      const {value} = dataset
      player.setState({playbackRate: parseFloat(value)})
    }
  }

  focus = () => {
    this.setState({focus: true})
  }

  blur = () => {
    this.setState({focus: false})
  }

  render() {
    const {className, playbackRate} = this.props

    return (
      <div
        onFocus={this.focus}
        onBlur={this.blur}
        className={cn(st.speed, {[st.focus]: this.state.focus})}>
        <button className={cn(className, st.value)}>{playbackRate}x</button>
        <ul
          onClick={this.handleChange}
          className={st.dropdown}>
          {rates.map(playbackRate => (
            <li
              key={playbackRate}
              className={st.dropdown_item}>
              <button
                data-value={playbackRate}
                className={st.speed_link}>
                {playbackRate}x
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
