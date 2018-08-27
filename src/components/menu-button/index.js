import React, {Component} from 'react'
import cn from 'classnames'
import style from './style.module.css'

export default class MenuButton extends Component {
  render() {
    return (
      <button
        className={cn(
          this.props.className ? style.isOpen : null,
          style.menuButton,
        )}
        onClick={() => this.props.toggleMenu()}>
        <span />
        <span />
        <span />
      </button>
    )
  }
}
