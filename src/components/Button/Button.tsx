import classNames from 'classnames';
import Link from 'next/link';
import React, { AnchorHTMLAttributes } from 'react';
import styles from './styles.module.css';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  type: 'primary' | 'secondary';
  variant: 'contained' | 'outlined';
  title: string;
  isFullWidth?: boolean;
  href?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export const Button = ({ type, variant, isFullWidth, href, className, onClick, children, ...props }: Props) => {
  return (
    <Link
      className={classNames(className, styles.buttonLink, {
        [styles.fullWidth]: isFullWidth,
        [styles.contained]: variant === 'contained',
        [styles.outlined]: variant === 'outlined',
        [styles.primary]: type === 'primary',
        [styles.secondary]: type === 'secondary',
      })}
      href={href}
      onClick={onClick}
      title={props.title}
      role="button"
      {...props}
    >
      {children}
    </Link>
  );
};
