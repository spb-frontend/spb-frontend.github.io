import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

const Wrapper = styled.a`
  display: block;
  padding: 22px 40px 22px;
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 17px;
  margin: 14px 0;
  font-weight: bold;
  border: 3px solid #7963fb;

  &.primary {
    background: #7963fb;
  }
`;

type Props = PropsWithChildren<{
  type: 'primary' | 'secondary';
  href?: string;
  classNames?: string;
}>;

export const Button = (props: Props) => {
  return (
    <Wrapper className={classNames(props.type, props.classNames)} href={props.href}>
      {props.children}
    </Wrapper>
  );
};
