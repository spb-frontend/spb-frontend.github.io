import React, {Component} from 'react'

export default class BackButton extends Component {
  goBack = event => {
    event.preventDefault()
    this.props.history.goBack()
  }

  render() {
    return (
      <a href="#" onClick={this.goBack}>
        {'<'} назад
      </a>
    )
  }
}
