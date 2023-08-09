import classNames from 'classnames';
import React, { useMemo } from 'react';
import { IoIosAlert } from 'react-icons/io';
import { MdDateRange } from 'react-icons/md';
import { formatDate } from '../../lib/date';
import styles from './styles.module.css';

type Props = {
  date: Date;
  isPastEvent?: boolean;
};

export const MeetupDate = (props: Props) => {
  const date = useMemo(() => new Date(props.date), [props.date]);

  const dateRender = useMemo(() => {
    const { day, monthName: month, year } = formatDate(date);

    return (
      <>
        <time dateTime={`${year}-${month}-${day}`}>
          {day}&nbsp;{month}&nbsp;{year}
        </time>
      </>
    );
  }, [date]);

  const timeRender = useMemo(() => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return (
      <>
        <time dateTime={`${hours}:${minutes}`}>
          в&nbsp;{hours}:{minutes}
        </time>
      </>
    );
  }, [date]);

  return (
    <>
      <div className={classNames(styles.meetupDate, { [styles.pastEvent]: props.isPastEvent })}>
        {props.isPastEvent ? (
          <>
            <IoIosAlert className={styles.pastEventIcon} size={25} />
            Завершилось&nbsp;
            {dateRender}
          </>
        ) : (
          <>
            <MdDateRange className={styles.upcomingEventIcon} size={23} />
            {dateRender},&nbsp;{timeRender}
          </>
        )}
      </div>
    </>
  );
};
