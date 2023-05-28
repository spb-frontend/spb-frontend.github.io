import React from 'react';
import { PropsWithChildren } from 'react';
import styles from './styles.module.css';

export const Block = (props: PropsWithChildren) => {
  return <div className={styles.block}>{props.children}</div>;
};
