import React, { useMemo } from 'react';
import { BlockTitle } from '@/components/BlockTitle/BlockTitle';
import { ContentBlock } from '@/components/ContentBlock/ContentBlock';
import { formatDate } from '@/lib/date';
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
import { BlockMeetupsProps, MeetupListProps, BlockMeetupProps } from './types';

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
          {talk.persons.map((person, key) => (
            !!person?.photo && <Person
              src={person.photo.file.url}
              alt={`${person.name} ${person.lastname}`}
              title={`${person.name} ${person.lastname}`}
              key={key}
            />
          ))}
        </PersonWrapper>
      ))}
    </MeetupWrapper>
  );
};
export const MeetupList = ({ events }: MeetupListProps) => (
  <MeetupListWrapper>
    {events.map((event, i) => (
      <MeetupBlock event={event} key={i} />
    ))}
  </MeetupListWrapper>
);

export const BlockMeetups = (props: BlockMeetupsProps) => (
  <section>
    <ContentBlock>
      <HeadingWrapper>
        <BlockTitle>Митапы</BlockTitle>
        <MeetupButton
          href="/meetups"
          variant="contained"
          type="primary"
          title="Смотреть все митапы">
            Смотреть все
        </MeetupButton>
      </HeadingWrapper>

      <MeetupList events={props.events} />
    </ContentBlock>
  </section>
);
