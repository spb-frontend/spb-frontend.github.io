import React, { useMemo } from 'react';
import { Button } from '../Button/Button';
import { Content } from '../Content/Content';
import { Block } from '../Block/Block';
import styles from './styles.module.css';

type Props = {
  poster: string;
  date: number;
  address: string;
  url: string;
};

export const BlockUpcomingMeetup = (props: Props) => {
  const dateRender = useMemo(() => {
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

    const date = new Date(props.date);

    return (
      <>
        {date.getDate()}&nbsp;{months[date.getMonth()]}&nbsp;{date.getFullYear()}, в&nbsp;
        {date.getHours().toString().padStart(2, '0')}:{date.getMinutes().toString().padStart(2, '0')}
      </>
    );
  }, [props.date]);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.poster}>
          <div
            className={styles.posterImage}
            style={{
              backgroundImage: `url('${props.poster}/-/resize/1980/')`,
            }}
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
                <div className={styles.meetupDate}>{dateRender}</div>

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
                  <Button
                    type="primary"
                    href={props.url + '#register'}
                    isFullWidth
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    Бесплатная регистрация
                  </Button>

                  <Button
                    type="secondary"
                    href={props.url}
                    isFullWidth
                    target="_blank"
                    rel="noreferrer noopener nofollow"
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
