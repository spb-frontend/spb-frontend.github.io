import React, { useMemo } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';
import { IoIosAlert } from 'react-icons/io';

const months = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'ноября',
  'декабря',
];

type Props = {
  date: number;
  isPastEvent?: boolean;
};

export const MeetupDate = (props: Props) => {
  const date = useMemo(() => new Date(props.date), [props.date]);

  const dateRender = useMemo(() => {
    return (
      <>
        {date.getDate()}&nbsp;{months[date.getMonth()]}&nbsp;{date.getFullYear()}
      </>
    );
  }, [date]);

  const timeRender = useMemo(() => {
    return (
      <>
        в&nbsp;{date.getHours().toString().padStart(2, '0')}:{date.getMinutes().toString().padStart(2, '0')}
      </>
    );
  }, [date]);

  return (
    <>
      <div className={classNames(styles.meetupDate, { [styles.pastEvent]: props.isPastEvent })}>
        {props.isPastEvent ? (
          <>
            <IoIosAlert className={styles.pastEventIcon} size={25} />
            Завершилось {dateRender}
          </>
        ) : (
          <>
            {dateRender}, {timeRender}
          </>
        )}
      </div>
    </>
  );
};
