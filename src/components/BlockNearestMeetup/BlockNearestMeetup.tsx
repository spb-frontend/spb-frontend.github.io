import classNames from 'classnames';
import React from 'react';
import { Button } from '@/components/Button/Button';
import { ContentBlock } from '@/components/ContentBlock/ContentBlock';
import { MeetupDate } from '@/components/MeetupDate/MeetupDate';
import styles from './styles.module.css';

type Props = {
  isUpcomingEvent: boolean;
  title: string;
  poster: string;
  date: Date;
  address: string;
  url: string;
};

export const BlockNearestMeetup = (props: Props) => {
  return (
    <>
      <section className={classNames(styles.section, 'theme-dark')}>
        <div className={styles.poster}>
          <img
            className={styles.posterImage}
            src={props.poster}
            alt="Meetup poster"
          />
        </div>

        <ContentBlock>
          <div className={styles.meetupInfoWrapper}>
            <div className={styles.meetupInfoHeading}>
              <h1 className={styles.heading}>
                  SPB&nbsp;Frontend
                <br />
                  Митап
              </h1>
              <div className={styles.wave} />
            </div>

            <div className={styles.meetupInfoDetails}>
              <MeetupDate date={props.date} isPastEvent={!props.isUpcomingEvent} />

              <h2 className={styles.subHeading}>
                  Неформальная&nbsp;встреча <wbr />
                  веб&#8209;разработчиков <wbr />
                  в&nbsp;Санкт&#8209;Петербурге
              </h2>

              <address className={styles.meetupAddress}>
                <a
                  href={`http://maps.yandex.ru/?text=${props.address}`}
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                >
                  {props.address
                    .split(', ')
                    .map((item) => item.replace(/\s/g, ' '))
                    .join(', ')}
                </a>{' '}
              </address>

              <div className={styles.buttonsWrapper}>
                {props.isUpcomingEvent && (
                  <Button
                    type="secondary"
                    variant="contained"
                    href={props.url + '#register'}
                    isFullWidth
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                    title="Бесплатная регистрация"
                  >
                      Бесплатная регистрация
                  </Button>
                )}

                <Button
                  type="secondary"
                  variant="outlined"
                  href={props.url}
                  isFullWidth
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  title="Подробнее"
                >
                    Подробнее
                </Button>
              </div>
            </div>
          </div>
        </ContentBlock>
      </section>
    </>
  );
};
