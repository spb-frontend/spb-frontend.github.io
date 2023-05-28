import React from 'react';
import { PropsWithChildren } from 'react';
import styles from './styles.module.css';

export const Content = (props: PropsWithChildren) => {
  return <div className={styles.content}>{props.children}</div>;
};
