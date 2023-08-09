import React, { PropsWithChildren } from 'react';
import styles from './styles.module.css';

type Props = PropsWithChildren<{
  poster?: string;
}>;

export const MeetupPoster = ({ poster }: Props) => {
  return <img src={poster} className={styles.poster} />;
};
