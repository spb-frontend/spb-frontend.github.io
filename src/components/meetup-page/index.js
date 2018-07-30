import React, { Component } from 'react';
import st from './style.module.css';
import BackButton from '../back-button';
import PersonsList from '../persons-list';

class MeetupPage extends Component {
  render() {
    const { data } = this.props.pathContext;
    const { title, formatedDate, persons, talks } = data;
    return (
      <div>
        <div className={st.back_link}>
          <BackButton history={this.props.history} />
        </div>

        <header className={st.header}>
          <h3 className={st.header_title}>{title}</h3>
          <date className={st.header_date}>{formatedDate}</date>
        </header>
        {persons && (
          <PersonsList
            collection={persons}
            className={st.personsList} />
        )}
        {talks.map(({ title }, index) => (
          <div key={index}>
            <div>
              <h4 className={st.talkTitle}>
                {title}{' '}
                <span className={st.personName}>
                  ({talks[index].persons[0].name}{' '}
                  {talks[index].persons[0].lastname})
                </span>
              </h4>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default MeetupPage;
