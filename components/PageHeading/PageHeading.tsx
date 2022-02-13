import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Content } from '../Content/Content';

const Heading = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  position: relative;
  z-index: 2;
  text-align: center;

  @media (min-width: 670px) {
    font-size: 43px;
    line-height: 52px;
  }

  @media (min-width: 1025px) {
    font-size: 64px;
    line-height: 78px;
    margin: 0 auto;
  }
`;

type Props = PropsWithChildren<{
  title: string;
}>;

export const PageHeading = (props: Props) => {
  return (
    <Content>
      <Heading>{props.title}</Heading>
    </Content>
  );
};
