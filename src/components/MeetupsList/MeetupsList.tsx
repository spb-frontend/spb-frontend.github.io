import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Content } from '../Content/Content';
// import { Meetup } from '../Meetup/Meetup';

const Wrapper = styled.div`
  padding-top: 51px;
  padding-bottom: 51px;
`;

const List = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media (min-width: 670px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1025px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

type Props = PropsWithChildren<{
  //
}>;

export const MeetupsList = (props: Props) => {
  return null;
  // return (
  // <Wrapper>
  //   <Content>
  //     <List>
  //       <Meetup meetupLink="https://google.com" date="17 июля 2018г." />
  //       <Meetup meetupLink="https://google.com" date="17 июля 2018г." />
  //       <Meetup meetupLink="https://google.com" date="17 июля 2018г." />
  //       <Meetup meetupLink="https://google.com" date="17 июля 2018г." />
  //       <Meetup meetupLink="https://google.com" date="17 июля 2018г." />
  //       <Meetup meetupLink="https://google.com" date="17 июля 2018г." />
  //     </List>
  //   </Content>
  // </Wrapper>
  // );
};
