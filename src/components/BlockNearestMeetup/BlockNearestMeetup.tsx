import classNames from 'classnames';
import React from 'react';
import { Button } from '../Button/Button';
import { ContentBlock } from '../ContentBlock/ContentBlock';
import { MeetupDate } from '../MeetupDate/MeetupDate';
import { NearestMeetupProps } from '../Person/nearestEvent';
import styles from './styles.module.css';

export const BlockNearestMeetup = (props: NearestMeetupProps) => (
  <section className={classNames(styles.section, 'theme-dark')}>
    <div className={styles.poster}>
      <img className={styles.posterImage} src={props.poster.file.url} alt={props.title} />
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
            <a href={`http://maps.yandex.ru/?text=${props.address}`} target="_blank" rel="noreferrer noopener nofollow">
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
              target="_blank"
              rel="noreferrer noopener nofollow"
              title="Подробнее"
              isFullWidth
            >
              Подробнее
            </Button>
          </div>
        </div>
      </div>
    </ContentBlock>
  </section>
);
