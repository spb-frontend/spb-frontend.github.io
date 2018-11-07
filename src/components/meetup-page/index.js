import React, { Component } from 'react'
import st from './style.module.css'

import PersonsList from '../persons-list'
import { Layout } from '../layout'

class MeetupPage extends Component {
  render() {
    const { data } = this.props.pageContext
    const { title, persons, talks } = data

    return (
      <Layout>
        <header className={st.header}>
          <h3 className={st.header_title}>{title}</h3>
        </header>
        {persons && (
          <PersonsList
            collection={persons}
            className={st.personsList} />
        )}
        {talks.map(({ title, slides, video }, index) => (
          <div
            key={index}
            style={{ marginBottom: 30 }}>
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
      </Layout>
    )
  }
}

export default MeetupPage
