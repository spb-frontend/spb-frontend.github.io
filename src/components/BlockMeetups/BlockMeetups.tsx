import Link from 'next/link';
import React, { useMemo } from 'react';
import { BlockTitle } from '@/components/BlockTitle/BlockTitle';
import { Button } from '@/components/Button/Button';
import { ContentBlock } from '@/components/ContentBlock/ContentBlock';
import { formatDate } from '@/lib/date';
import styles from './styles.module.css';
import { BlockMeetupsProps, MeetupListProps, BlockMeetupProps } from './types';

const MeetupBlock = ({ event }: BlockMeetupProps) => {
  const { day, month, year } = useMemo(() => formatDate(event.date), [event.date]);
  return (
    <Link className={styles['blockMeetups-item']} href={`meetups/${event.id}`}>
      <h3 className={styles['blockMeetups-itemTitle']}>{event.title}</h3>

      <time dateTime={`${year}-${month}-${day}`}>
        {day}&nbsp;{month}&nbsp;{year}
      </time>

      <div className={styles['blockMeetups-itemPersonTitle']}>Участники:</div>
      {event.talks.map((talk, index) => (
        <div className={styles['blockMeetups-itemPersonWrapper']} key={index}>
          {talk.persons.map((person, key) => (
            !!person?.photo && <img
              className={styles['blockMeetups-itemPersonPortrait']}
              src={person.photo.file.url}
              alt={`${person.name} ${person.lastname}`}
              title={`${person.name} ${person.lastname}`}
              key={key}
            />
          ))}
        </div>
      ))}
    </Link>
  );
};
export const MeetupList = ({ events }: MeetupListProps) => (
  <div className={styles['blockMeetups-list']}>
    {events.map((event, i) => (
      <MeetupBlock event={event} key={i} />
    ))}
  </div>
);

export const BlockMeetups = (props: BlockMeetupsProps) => (
  <section>
    <ContentBlock>
      <div className={styles['blockMeetups-headingWrapper']}>
        <BlockTitle>Митапы</BlockTitle>
        <Button
          className={styles['blockMeetups-button']}
          href="/meetups"
          variant="contained"
          type="primary"
          title="Смотреть все митапы">
            Смотреть все
        </Button>
      </div>

      <MeetupList events={props.events} />
    </ContentBlock>
  </section>
);
