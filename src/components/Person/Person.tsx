import { title } from 'process';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import Link from 'next/link';

const PersonLink = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: block;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 0 0 3px #7963fb;
    }
  }
`;

type Props = PropsWithChildren<{
  memberLink: string;
  memberImage: string;
}>;

export const Person = (props: Props) => {
  return (
    <PersonLink>
      <Link href={props.memberLink}>
        <a style={{ backgroundImage: `url(${props.memberImage})` }}></a>
      </Link>
    </PersonLink>
  );
};
