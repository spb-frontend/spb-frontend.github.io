import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import styles from './styles.module.css';

type Props = {
  dropTopPadding?: boolean;
};

export const ContentBlock = (props: PropsWithChildren<Props>) => (
  <div className={classNames(styles.container, { [styles.dropTopPadding]: props.dropTopPadding })}>
    {props.children}
  </div>
);
