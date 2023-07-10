import React, { PropsWithChildren, useMemo } from 'react';
import { months } from '@/components/MeetupDate/MeetupDate';
import { Content, Wrapper, Heading, EventDate } from './styled';

type Props = PropsWithChildren<{
  title: string;
  date?: Date;
}>;

export const MeetupsHeader = ({ title, date }: Props) => {
  const dateRender = useMemo(() => {
    if (!date) {
      return '';
    }
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = date.getDate();

    return (
      <EventDate dateTime={`${year}-${month}-${day}`}>
        {day}&nbsp;{month}&nbsp;{year}
      </EventDate>
    );
  }, [date]);

  return (
    <Wrapper>
      <Content>
        {!!date && dateRender}
        <Heading>{ title }</Heading>
      </Content>
    </Wrapper>
  );
};
