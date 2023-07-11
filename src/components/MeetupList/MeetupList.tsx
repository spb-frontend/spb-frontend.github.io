import classNames from 'classnames';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { formatDate } from '../../lib/date';
import { Meetup } from '../../types/meetup';
import styles from './styles.module.css';

export interface BlockMeetupProps {
  event: Meetup;
}

const MeetupBlock = ({ event }: BlockMeetupProps) => {
  const { day, month, year } = useMemo(() => formatDate(event.date), [event.date]);

  const isUpcomingMeetup = new Date(event.date).getTime() > Date.now();

  return (
    <div
      className={classNames(styles.meetupWrapper, {
        [styles.upcoming]: isUpcomingMeetup,
        'theme-dark': isUpcomingMeetup,
      })}
    >
      <h3 className={styles.meetupTitle}>
        <Link className={styles.meetupLink} href={`meetups/${event.id}`}>
          {event.title}
        </Link>
      </h3>
      <time
        dateTime={`${year}-${month}-${day}`}
        className={classNames(styles.date, { [styles.upcomingDate]: isUpcomingMeetup })}
      >
        {day}&nbsp;{month}&nbsp;{year}
      </time>
      {isUpcomingMeetup && ' — предстоящий'}
      <div className={styles.speakersTitle}>Спикеры:</div>
      {event.talks.map((talk, index) => (
        <div className={styles.personWrapper} key={index}>
          {talk.persons.map(
            (person, key) =>
              !!person?.photo && (
                <img
                  className={styles.person}
                  src={person.photo.file.url}
                  alt={`${person.name} ${person.lastname}`}
                  title={`${person.name} ${person.lastname}`}
                  key={key}
                />
              )
          )}
        </div>
      ))}
    </div>
  );
};

export interface MeetupListProps {
  events: Meetup[];
}

export const MeetupList = ({ events }: MeetupListProps) => (
  <div className={styles.meetupListWrapper}>
    {events.map((event, i) => (
      <MeetupBlock event={event} key={i} />
    ))}
  </div>
);
