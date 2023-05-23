import React, { PropsWithChildren, useMemo } from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';
import bridgeRight from './bridge-header-1m.svg';
import bridgeLeft from './bridge-header-2m.svg';
import wave from './wave.svg';
import { Content } from '../Content/Content';
import { Block } from '../Block/Block';

const Section = styled.section`
  transform-style: inherit;
  position: relative;
  padding-top: 81px;
  color: rgb(var(--color-white));
`;

const Poster = styled.div<{ poster: string }>`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    background: url('${(data) => data.poster + '/-/resize/1980/'}') 50% no-repeat;
    background-size: cover;
    height: calc(100% + 20px);
    width: calc(100% + 20px);
    top: -10px;
    left: -10px;
    filter: blur(3px);
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: rgb(var(--color-black) / 0.8);
    background-image: linear-gradient(45deg, rgba(var(--color-blue) / 0.2) 0%, rgba(var(--color-folly) / 0.2) 100%);
  }
`;

const MeetupInfoWrapper = styled.div`
  position: relative;
  transform-style: inherit;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  justify-content: auto;

  @media (min-width: 480px) {
  }

  @media (min-width: 670px) {
  }

  @media (min-width: 1025px) {
    flex-direction: row;
    justify-content: space-between;
  }

  a {
    color: rgb(var(--color-white));
  }
`;

const MeetupInfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  flex: 0 0 auto;

  @media (min-width: 1025px) {
    flex: 0 0 calc(65% - var(--spacer-l));
    align-items: start;
  }
`;

const MeetupInfoHeading = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 1025px) {
    flex: 0 0 calc(35% - var(--spacer-l));
    margin-bottom: 0;
    flex-direction: column;
  }
`;

const Heading = styled.h1`
  width: 100%;
  text-transform: uppercase;
  font-size: 5em;
  position: relative;
  z-index: 2;
  font-weight: 600;
  color: rgb(var(--color-white));
  text-align: center;
  line-height: 0.7em;

  @media (min-width: 1025px) {
  }

  &::first-line {
    font-size: 0.44em;
  }
`;

const Wave = styled.div`
  width: calc(100px * 1.2);
  height: calc(21px * 1.2);
  background: url(${wave}) no-repeat;
  background-size: contain;
  margin: var(--spacer-l) auto;

  @media (min-width: 1025px) {
    margin-bottom: 0;
    display: block;
  }
`;

const SubHeading = styled.h2`
  /* margin-top: 3em; */
  font-size: var(--font-size-l);
  margin-bottom: var(--spacer-m);
  line-height: 1.2em;
  text-align: center;

  @media (min-width: 1025px) {
    text-align: left;
  }
`;

const ButtonsWrapper = styled.div`
  margin-top: var(--spacer-xxl);
  position: relative;
  z-index: 2;
  width: 100%;

  & > *:first-child {
    margin-bottom: var(--spacer-s);
  }

  @media (min-width: 670px) {
    width: auto;
    display: flex;
    justify-content: center;

    & > *:first-child {
      margin-bottom: 0;
      margin-right: var(--spacer-m);
    }
  }
`;

const MeetupDate = styled.div`
  padding: 0 20px;
  height: 40px;
  border-radius: 25px;
  font-size: var(--font-size-s);
  background-color: rgb(var(--color-folly));
  margin-bottom: var(--spacer-m);
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
`;

const MeetupAddress = styled.div`
  text-align: center;
`;

type Props = {
  poster: string;
  date: number;
  address: string;
  url: string;
};

export const UpcomingMeetupInfo = (props: Props) => {
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
      <Section>
        <Poster poster={props.poster} />
        {/* <Bridges /> */}

        <Block>
          <Content>
            <MeetupInfoWrapper>
              <MeetupInfoHeading>
                <Heading>
                  SPB&nbsp;Frontend
                  <br />
                  Митап
                </Heading>
                <Wave />
              </MeetupInfoHeading>

              <MeetupInfoDetails>
                <MeetupDate>{dateRender}</MeetupDate>

                <SubHeading>Неформальная&nbsp;встреча веб&#8209;разработчиков в&nbsp;Санкт&#8209;Петербурге</SubHeading>

                <MeetupAddress>
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
                </MeetupAddress>

                {/* <Description></Description> */}

                <ButtonsWrapper>
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
                </ButtonsWrapper>
              </MeetupInfoDetails>
            </MeetupInfoWrapper>
          </Content>
        </Block>
      </Section>
    </>
  );
};
