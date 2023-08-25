import React, { PropsWithChildren } from 'react';
import styles from './styles.module.css';

export const Heading = (props: PropsWithChildren) => (
  <h1 className={styles.heading}>
    {props.children}
  </h1>
);
