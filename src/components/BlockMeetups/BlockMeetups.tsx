import React from 'react';
import { BlockTitle } from '@/components/BlockTitle/BlockTitle';
import { ContentBlock } from '@/components/ContentBlock/ContentBlock';
import {
  HeadingWrapper,
  Meetup,
  MeetupButton,
  MeetupListWrapper,
  MeetupLink,
  MeetupTitle,
  Person,
  PersonWrapper,
  PersonTitle
} from './styled';
import { BlockMeetupsProps, MeetupListProps } from './types';

export const MeetupList = ({ events }: MeetupListProps) => {

  return (
    <MeetupListWrapper>
      {events.map((event, i) => (
        <Meetup key={i} $future={(new Date(event.date) >= new Date()).toString()}>
          <MeetupTitle>{event.title}</MeetupTitle>

          <MeetupLink href={'/meetups/' + event.id}>Подробнее</MeetupLink>

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
        </Meetup>
      ))}
    </MeetupListWrapper>
  );
};

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
