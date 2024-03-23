import React, { PropsWithChildren } from 'react';
import styles from './styles.module.css';

export const ContentBlock = (props: PropsWithChildren) => (
  <div className={styles['contentBlock-container']}>
    {props.children}
  </div>
);
