import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';

type Props = {
  type: 'twitter' | 'telegram' | 'youtube' | 'github';
  href?: string;
  size?: number;
  color?: string;
  title?: string;
};

export const SocialButton = (props: Props) => {
  return (
    <a
      className={styles.link}
      href={props.href}
      style={props.color ? { color: props.color } : undefined}
      title={props.title}
    >
      <div
        className={classNames(styles.socialIcon, {
          [styles.twitter]: props.type == 'twitter',
          [styles.telegram]: props.type == 'telegram',
          [styles.youtube]: props.type == 'youtube',
          [styles.github]: props.type == 'github',
        })}
        style={
          props.size
            ? {
                width: `${props.size}px`,
                height: `${props.size}px`,
              }
            : undefined
        }
      />
    </a>
  );
};

SocialButton.defaultProps = {
  size: 24,
  color: 'currentColor',
};
