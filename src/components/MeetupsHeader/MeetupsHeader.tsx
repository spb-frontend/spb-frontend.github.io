import React, { PropsWithChildren, useMemo } from 'react';
import { formatDate } from '@/lib/date';
import styles from './styles.module.css';

type Props = PropsWithChildren<{
  title: string;
  date?: Date;
}>;

export const MeetupsHeader = ({ title, date }: Props) => {
  const dateRender = useMemo(() => {
    if (!date) {
      return null;
    }
    const { day, month, year } = formatDate(date);

    return (
      <time className={styles['meetupsHeader-date']} dateTime={`${year}-${month}-${day}`}>
        {day}&nbsp;{month}&nbsp;{year}
      </time>
    );
  }, [date]);

  return (
    <section className={styles['meetupsHeader-wrapper']}>
      <div className={styles['meetupsHeader-content']}>
        {!!date && dateRender}
        <h1 className={styles['meetupsHeader-heading']}>{ title }</h1>
      </div>
    </section>
  );
};
