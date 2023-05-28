import React from 'react';
import { Button } from '../Button/Button';
import { Content } from '../Content/Content';
import { Block } from '../Block/Block';
import styles from './styles.module.css';
import { MeetupDate } from '../MeetupDate/MeetupDate';

type Props = {
  isUpcomingEvent: boolean;
  poster: string;
  date: number;
  address: string;
  url: string;
};

export const BlockNearestMeetup = (props: Props) => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.poster}>
          <img
            className={styles.posterImage}
            src={`${props.poster}/-/resize/720/`}
            srcSet={`${props.poster}/-/resize/460/`}
            alt="Meetup poster"
          />
        </div>

        <Block>
          <Content>
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
                  Неформальная&nbsp;встреча веб&#8209;разработчиков в&nbsp;Санкт&#8209;Петербурге
                </h2>

                <div className={styles.meetupAddress}>
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
                </div>

                <div className={styles.buttonsWrapper}>
                  {props.isUpcomingEvent && (
                    <Button
                      type="primary"
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
          </Content>
        </Block>
      </section>
    </>
  );
};
