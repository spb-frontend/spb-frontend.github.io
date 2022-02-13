import { title } from 'process';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Person } from '../Person/Person';

const Item = styled.article`
  display: flex;
  flex-direction: column;
  padding: 38px 30px;
  transition: box-shadow 0.25s ease-in-out;
  box-shadow: 0 0 0 3px #191b2b;

  &:hover {
    box-shadow: 0 0 0 3px #7963fb;
  }

  a {
    font-size: 18px;
    line-height: 22px;
    color: #7963fb;
    text-decoration: underline;

    &:hover {
      color: #fff;
      text-decoration: none;
    }
  }
`;

const PeopleWrap = styled.div`
  margin-top: 52px;
`;

const PeopleTitle = styled.div`
  font-size: 18px;
  line-height: 22px;
  color: #fff;
  margin-bottom: 16px;
`;

const PeopleList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const Title = styled.h3`
  font-size: 24px;
  line-height: 29px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 16px;
`;

type Props = PropsWithChildren<{
  //
  meetupLink: string;
  date: string;
}>;

export const Meetup = (props: Props) => {
  return (
    <Item>
      {title && (
        <Title>
          Встреча
          <br />
          {props.date}
        </Title>
      )}
      <Link href={props.meetupLink}>
        <a>Подробнее</a>
      </Link>
      <PeopleWrap>
        <PeopleTitle>Участники:</PeopleTitle>
        <PeopleList>
          <Person memberImage="http://placekitten.com/g/100/100" memberLink="" />
          <Person memberImage="http://placekitten.com/g/150/150" memberLink="" />
          <Person memberImage="http://placekitten.com/g/200/200" memberLink="" />
          <Person memberImage="http://placekitten.com/g/200/150" memberLink="" />
          <Person memberImage="http://placekitten.com/g/50/50" memberLink="" />
          <Person memberImage="http://placekitten.com/g/75/40" memberLink="" />
          <Person memberImage="http://placekitten.com/g/40/90" memberLink="" />
        </PeopleList>
      </PeopleWrap>
    </Item>
  );
};
