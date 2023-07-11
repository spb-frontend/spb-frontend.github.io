import React, { PropsWithChildren, useMemo } from 'react';
import { formatDate } from '../../lib/date';
import { Content, Wrapper, Heading, EventDate } from './styled';

type Props = PropsWithChildren<{
  title: string;
  date?: Date;
}>;

export const MeetupsHeader = ({ title, date }: Props) => {
  const dateRender = useMemo(() => {
    if (!date) {
      return null;
    }
    const { day, month, year } = formatDate(date);

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
        <Heading>{title}</Heading>
      </Content>
    </Wrapper>
  );
};
