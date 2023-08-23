import React from 'react';
import { Talk } from '../../types/talk';
import { TalkBox } from '../TalkBox/TalkBox';
import styles from './styles.module.css';

export interface TalkProps {
  talks: Talk[];
}

export const Talks = ({ talks }: TalkProps) => (
  <section className={styles.wrapper}>
    {talks.map((talk, index) => (
      <TalkBox key={index} talk={talk} />
    ))}
  </section>
);
