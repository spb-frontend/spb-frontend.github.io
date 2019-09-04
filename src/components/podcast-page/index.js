import React, {Component} from 'react'
import st from './style.module.css'
import marked from 'marked'
import {Player} from '../Player'
import PersonsList from '../persons-list'
import {Layout} from '../layout'
import {timestampToSeconds} from '../../../utils'

class PodcastPage extends Component {
  handleTimeClick = event => {
    const {target} = event
    if (target.classList.contains('podcast_time')) {
      event.preventDefault()
      this.setState({time: timestampToSeconds(target.innerText) * 1000})
    }
  }

  state = {
    time: 0,
  }

  componentDidMount() {
    this.getInitialTime()
  }

  getInitialTime() {
    const rgexRes = location.search.match(/time=(\d+)/)

    this.setState({time: rgexRes ? parseInt(rgexRes[1]) * 1000 : 0})
  }

  render() {
    const {data} = this.props.pageContext
    const {title, file, notes, formatedDate, persons} = data
    return (
      <Layout>
        <header className={st.header}>
          <h3 className={st.header_title}>{title}</h3>
          <date className={st.header_date}>{formatedDate}</date>
        </header>

        <Player
          position={this.state.time}
          file={file}
          title={title} />

        {persons && (
          <PersonsList
            collection={persons}
            className={st.personsList} />
        )}

        <footer
          onClick={this.handleTimeClick}
          className={st.footer}
          dangerouslySetInnerHTML={{__html: marked(notes.notes)}} />
      </Layout>
    )
  }
}

export default PodcastPage
