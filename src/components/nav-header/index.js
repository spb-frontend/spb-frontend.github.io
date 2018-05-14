'use strict'
import React, {Component} from 'react'
import Link from 'gatsby-link'

import style from './style.module.css'
import Icon from '-!svg-react-loader?name=Icon!./spbf-logo-white.svg'

class SiteHeader extends Component {
  render() {
    return (
      <div className={style.header}>
        <div className={style.wrapper}>
          <Link className={style.logo} to="/">
            <Icon className={style.icon} />
          </Link>
          <Link
            className={style.menuItem}
            activeClassName={style.active}
            to="/podcast"
          >
            Drinkcast
          </Link>
        </div>
      </div>
    )
  }
}

export {SiteHeader}
