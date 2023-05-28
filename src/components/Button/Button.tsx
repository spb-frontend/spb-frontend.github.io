import React, { AnchorHTMLAttributes } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import styles from './styles.module.css';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  type: 'primary' | 'secondary';
  isFullWidth?: boolean;
  href?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export const Button = ({ type, isFullWidth, href, className, onClick, children, ...props }: Props) => {
  return (
    <Link
      className={classNames(className, styles.buttonLink, {
        [styles.fullWidth]: isFullWidth,
        [styles.primary]: type === 'primary',
        [styles.secondary]: type === 'secondary',
      })}
      href={href}
      onClick={onClick}
      {...props}
    >
      {children}
    </Link>
  );
};
