import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

const Wrapper = styled.a`
  color: #fff;
  display: block;
  padding: 22px 40px 22px;
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 17px;
  margin: 14px 0;
  font-weight: bold;
  border: 3px solid #7963fb;
  text-decoration: none;

  &.primary {
    background: #7963fb;
  }
`;

type Props = PropsWithChildren<{
  type: 'primary' | 'secondary';
  href?: string;
  classNames?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}>;

export const Button = (props: Props) => {
  return (
    <Wrapper className={classNames(props.type, props.classNames)} href={props.href} onClick={props.onClick}>
      {props.children}
    </Wrapper>
  );
};
