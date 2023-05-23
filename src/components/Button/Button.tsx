import React, { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

const Link = styled.a`
  color: #fff;
  display: inline-block;
  padding: 18px 30px;
  text-align: center;
  text-transform: uppercase;
  font-size: var(--font-size-s);
  font-weight: bold;
  border: 3px solid rgb(var(--color-white));
  text-decoration: none;
  transition: 0.15s ease-out;
  transition-property: background-color, border-color;

  &:hover {
    background: rgb(var(--color-white) / 0.1);
  }

  &.primary {
    border-color: transparent;
    background: rgb(var(--color-white));
    color: rgb(var(--color-black));

    &:hover {
      background: rgb(var(--color-white) / 0.8);
    }
  }

  &.fullWidth {
    display: block;
  }
`;

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  type: 'primary' | 'secondary';
  isFullWidth?: boolean;
  href?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export const Button = ({ type, isFullWidth, href, className, onClick, children, ...props }: Props) => {
  return (
    <Link className={classNames(type, className, { fullWidth: isFullWidth })} href={href} onClick={onClick} {...props}>
      {children}
    </Link>
  );
};
