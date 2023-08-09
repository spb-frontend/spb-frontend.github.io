import React, { PropsWithChildren, useMemo } from 'react';
import { formatDate } from '../../lib/date';
import styles from './styles.module.css';

type Props = PropsWithChildren<{
  title: string;
  date?: Date;
  address?: string;
}>;

export const MeetupsHeader = (props: Props) => {
  const dateRender = useMemo(() => {
    if (!props.date) {
      return null;
    }
    const { day, monthName: month, year } = formatDate(props.date);

    return (
      <time className={styles.eventDate} dateTime={`${year}-${month}-${day}`}>
        {day}&nbsp;{month}&nbsp;{year}
      </time>
    );
  }, [props.date]);

  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        {!!props.date && dateRender}

        <h1 className={styles.heading}>{props.title}</h1>

        {!!props.address && <div className={styles.address}>{props.address}</div>}
      </div>
    </section>
  );
};
