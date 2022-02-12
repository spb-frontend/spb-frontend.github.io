import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { AboutItem } from '../AboutItem/AboutItem';
import { Content } from '../Content/Content';

import titleBridge from './title-bridge.svg';
import bgTilda from './bg-tilda.svg';

const Wrapper = styled.section`
  padding-top: 65px;
  padding-bottom: 30px;

  background-repeat: no-repeat;
  background-position: center top 255px;
  background-image: url(${bgTilda});
  background-size: contain;

  @media (min-width: 670px) {
    padding-top: 122px;
    padding-bottom: 60px;
    background-position: center top 261px;
  }

  @media (min-width: 1025px) {
    padding-top: 158px;
    padding-bottom: 100px;
    background-position: center top 242px;
  }
`;

const AboutTitle = styled.h2`
  font-size: 36px;
  line-height: 44px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 50px;
  position: relative;
  padding-left: 38px;

  @media (min-width: 670px) {
    margin-bottom: 46px;
    font-size: 48px;
    line-height: 59px;
  }

  @media (min-width: 1025px) {
    margin-bottom: 67px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 6.5px;
    left: 0;
    width: 20px;
    height: 29px;
    background-image: url(${titleBridge});
    background-repeat: no-repeat;
    background-size: contain;

    @media (min-width: 670px) {
      width: 24px;
      height: 35px;
      top: 10px;
    }
  }
`;

const AboutDesc = styled.p`
  font-size: 18px;
  line-height: 22px;
  color: #fff;
  margin-bottom: 70px;

  @media (min-width: 670px) {
    margin-bottom: 72px;
    font-size: 24px;
    line-height: 29px;
  }

  @media (min-width: 1025px) {
    margin-bottom: 117px;
  }
`;

const AboutList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px;

  @media (min-width: 670px) {
    grid-gap: 75px 52px;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1025px) {
    grid-gap: 80px 100px;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

type Props = PropsWithChildren<{
  //
}>;

export const About = (props: Props) => {
  return (
    <Wrapper className=''>
      <Content>
        <AboutTitle>О нас</AboutTitle>
        <AboutDesc>
          Мы&nbsp;регулярно проводим встречи с&nbsp;2014&nbsp;года. Обычно это
          встречи с докладами по&nbsp;30&nbsp;минут, но&nbsp;бывают разные
          форматы. Встречаемся обычно в пространствах в&nbsp;центре города.
        </AboutDesc>

        <AboutList>
          <AboutItem type='mail'>
            Если хотите <b>выступить с&nbsp;докладом</b>, напишите письмо на{' '}
            <a href='mailto:hi@spb-frontend.ru' target='_blank'>
              hi@spb-frontend.ru
            </a>
            .
          </AboutItem>
          <AboutItem type='breakfast'>
            Ещё по четвергам теперь бывают фронтенд-завтраки в центре города.
          </AboutItem>
          <AboutItem type='tg'>
            Если хотите предложить вакансию, то&nbsp;это можно сделать только в
            телеграм-чате сообщества{' '}
            <a href='https://t.me/spb_frontend_chat' target='_blank'>
              SPB Frontend
            </a>
            .
          </AboutItem>
          <AboutItem type='networking'>
            Иногда мы&nbsp;проводим дринкапы: встречи в&nbsp;барах без докладов,
            просто чтобы пообщаться друг с&nbsp;другом, познакомиться,
            поговорить о&nbsp;наболевшем.
          </AboutItem>
          <AboutItem type='social'>
            Чтобы следить за&nbsp;новыми событиями сообщества, подписывайтесь
            на&nbsp;
            <a href='https://vk.com/spb_frontend' target='_blank'>
              группу ВКонтакте
            </a>
            ,{' '}
            <a href='https://twitter.com/spb_frontend' target='_blank'>
              Твиттер
            </a>{' '}
            или{' '}
            <a href='https://t.me/spb_frontend' target='_blank'>
              Телеграм канал
            </a>
            .
          </AboutItem>
          <AboutItem type='sponsor'>
            Если хотите предложить спонсорство или площадку (от 100 человек),
            пишите нам на почту{' '}
            <a href='mailto:hi@spb-frontend.ru' target='_blank'>
              hi@spb-frontend.ru
            </a>
            .
          </AboutItem>
        </AboutList>
      </Content>
    </Wrapper>
  );
};
