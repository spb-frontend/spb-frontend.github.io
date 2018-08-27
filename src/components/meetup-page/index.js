import React, {Component} from 'react'
import st from './style.module.css'
import BackButton from '../back-button'
import PersonsList from '../persons-list'

class MeetupPage extends Component {
  render() {
    const {data} = this.props.pathContext
    const {title, persons, talks} = data

    return (
      <div>
        <div className={st.back_link}>
          <BackButton history={this.props.history} />
        </div>

        <header className={st.header}>
          <h3 className={st.header_title}>{title}</h3>
        </header>
        {persons && (
          <PersonsList
            collection={persons}
            className={st.personsList} />
        )}
        {talks.map(({title, slides, video}, index) => (
          <div
            key={index}
            style={{marginBottom: 30}}>
            <div className={st.talkTitle}>{title} </div>
            {slides && (
              <div className={st.talkTitle}>
                <a
                  className={st.personName}
                  href={slides}>
                  Слайды
                </a>
              </div>
            )}
            {video && (
              <div className={st.talkTitle}>
                <a
                  className={st.personName}
                  href={video}>
                  Видео
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }
}

export default MeetupPage
