import React, { PropsWithChildren } from 'react';
import styles from './styles.module.css';

export const BlockTitle = (props: PropsWithChildren) => {
  return <h2 className={styles.blockTitle}>{props.children}</h2>;
};
