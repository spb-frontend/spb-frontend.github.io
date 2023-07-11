import React, { useMemo } from 'react';
import { formatDate } from '../../lib/date';
import { Meetup } from '../../types/meetup';
import { BlockTitle } from '../BlockTitle/BlockTitle';
import { ContentBlock } from '../ContentBlock/ContentBlock';
import {
  HeadingWrapper,
  MeetupButton,
  MeetupListWrapper,
  MeetupWrapper,
  MeetupTitle,
  Person,
  PersonWrapper,
  PersonTitle,
} from './styled';

export interface MeetupListProps {
  events: Meetup[];
}

const MeetupBlock = ({ event }: BlockMeetupProps) => {
  const { day, month, year } = useMemo(() => formatDate(event.date), [event.date]);
  return (
    <MeetupWrapper href={`meetups/${event.id}`}>
      <MeetupTitle>{event.title}</MeetupTitle>

      <time dateTime={`${year}-${month}-${day}`}>
        {day}&nbsp;{month}&nbsp;{year}
      </time>

      <PersonTitle>Участники:</PersonTitle>
      {event.talks.map((talk, index) => (
        <PersonWrapper key={index}>
          {talk.persons.map(
            (person, key) =>
              !!person?.photo && (
                <Person
                  src={person.photo.file.url}
                  alt={`${person.name} ${person.lastname}`}
                  title={`${person.name} ${person.lastname}`}
                  key={key}
                />
              )
          )}
        </PersonWrapper>
      ))}
    </MeetupWrapper>
  );
};

export interface BlockMeetupsProps {
  events: Meetup[];
}

export const MeetupList = ({ events }: MeetupListProps) => (
  <MeetupListWrapper>
    {events.map((event, i) => (
      <MeetupBlock event={event} key={i} />
    ))}
  </MeetupListWrapper>
);

export interface BlockMeetupProps {
  event: Meetup;
}

export const BlockMeetups = (props: BlockMeetupsProps) => (
  <section>
    <ContentBlock>
      <HeadingWrapper>
        <BlockTitle>Митапы</BlockTitle>
        <MeetupButton href="/meetups" variant="contained" type="primary" title="Смотреть все митапы">
          Смотреть все
        </MeetupButton>
      </HeadingWrapper>

      <MeetupList events={props.events} />
    </ContentBlock>
  </section>
);
