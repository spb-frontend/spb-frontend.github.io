'use strict'
import React, {Component} from 'react'
import {Link} from 'gatsby'
import cn from 'classnames'
import MenuButton from '../menu-button'

import style from './style.module.css'
import Icon from '-!svg-react-loader?name=Icon!./spbf-logo-white.svg'

class SiteHeader extends Component {
  closeMenu = () => {
    this.setState({
      isOpen: false,
    })
  }
  toggleMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  state = {
    isOpen: false,
  }

  render() {
    const {isOpen} = this.state
    return (
      <div className={style.header}>
        <div className={style.wrapper}>
          <Link
            className={style.logo}
            onClick={() => this.closeMenu()}
            to='/'>
            <Icon className={style.icon} />
          </Link>
          <Link
            className={cn(isOpen ? style.isOpen : null, style.menuItem)}
            activeClassName={style.active}
            onClick={() => this.closeMenu()}
            to='/podcast'>
            Дринкаст
          </Link>
          <Link
            className={cn(isOpen ? style.isOpen : null, style.menuItem)}
            activeClassName={style.active}
            onClick={() => this.closeMenu()}
            to='/meetups'>
            Митапы
          </Link>
          <Link
            className={cn(
              isOpen ? style.isOpen : null,
              style.menuItem,
              style.menuItemLast,
            )}
            activeClassName={style.active}
            onClick={() => this.closeMenu()}
            to='/persons'>
            Люди
          </Link>
          <MenuButton
            toggleMenu={this.toggleMenu}
            className={isOpen} />
        </div>
      </div>
    )
  }
}

export {SiteHeader}
