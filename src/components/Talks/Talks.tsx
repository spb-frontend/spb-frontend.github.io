import Link from 'next/link';
import React from 'react';
import { Person } from '@/components/Person/Person';
import styles from './styles.module.css';
import { TalkProps } from './types';

export const Talks = ({ talks }: TalkProps) => (
  <section className={styles['talks-wrapper']}>
    {talks.map((talk, index) => (
      <div key={index}>
        {talk?.persons.map((person, key) => (
          <article className={styles['talks-item']} key={key}>
            <Person person={person}>
              <h4 className={styles['talks-item-heading']}>{talk.shortTitle}</h4>
              <div className={styles['talks-item-content']}>
                {talk.slides && <Link href={talk.slides} target="_blank">Слайды</Link>}
                {talk.video && <Link href={talk.video} target="_blank">Видео</Link>}
              </div>
            </Person>
          </article>
        ))}
      </div>
    ))}
  </section>
);
