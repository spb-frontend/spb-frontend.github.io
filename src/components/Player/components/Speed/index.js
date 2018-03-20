import React, {Component} from 'react'
import cn from 'classnames'
import st from './style.module.css'

const speeds = ['1', '1.2', '1.4', '1.6', '1.8', '2']

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
      player.setState({speed: value})
    }
  }

  focus = event => {
    this.setState({focus: true})
  }

  blur = event => {
    this.setState({focus: false})
  }

  render() {
    const {className, speed} = this.props

    return (
      <div
        onFocus={this.focus}
        onBlur={this.blur}
        className={cn(st.speed, {[st.focus]: this.state.focus})}>
        <button className={cn(className, st.value)}>{speed}x</button>
        <ul
          onClick={this.handleChange}
          className={st.dropdown}>
          {speeds.map(speed => (
            <li
              key={speed}
              className={st.dropdown_item}>
              <button
                data-value={speed}
                className={st.speed_link}>
                {speed}x
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
