import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { BlockAboutItem } from '../BlockAboutItem/BlockAboutItem';
import { BlockTitle } from '../BlockTitle/BlockTitle';
import { Content } from '../Content/Content';

import bgTilda from './bg-tilda.svg';

const Wrapper = styled.section`
  padding-top: 65px;
  padding-bottom: 30px;

  background-repeat: no-repeat;
  background-position: center top 255px;
  background-image: url(${bgTilda});
  background-size: contain;

  @media (min-width: 480px) {
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

const AboutDesc = styled.p`
  font-size: 18px;
  line-height: 22px;
  color: #fff;
  margin-bottom: 70px;

  @media (min-width: 480px) {
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

  @media (min-width: 480px) {
    grid-gap: 75px 52px;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1025px) {
    grid-gap: 80px 100px;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const BlockAbout = () => {
  return (
    <Wrapper id="about">
      <Content>
        <BlockTitle>О нас</BlockTitle>
        <AboutDesc>
          SPB Frontend — сообщество петербургских фронтенд-разработчиков. Мы&nbsp;регулярно проводим встречи
          с&nbsp;2014&nbsp;года. Обычно это встречи с докладами по&nbsp;30&nbsp;минут, но&nbsp;бывают разные форматы
        </AboutDesc>

        <AboutList>
          <BlockAboutItem type="mail">
            Если хотите <b>выступить с&nbsp;докладом</b>, напишите письмо на{' '}
            <a href="mailto:hi@spb-frontend.ru" target="_blank" className="nowrap">
              hi@spb-frontend.ru
            </a>
          </BlockAboutItem>
          <BlockAboutItem type="breakfast">
            Ещё по четвергам теперь бывают фронтенд-завтраки в центре города
          </BlockAboutItem>
          <BlockAboutItem type="tg">
            Также, у нас есть Телеграм-чат, где мы общаемся и задаём вопросы:{' '}
            <a href="https://t.me/spb_frontend_chat" target="_blank" className="nowrap">
              SPB Frontend
            </a>
          </BlockAboutItem>
          <BlockAboutItem type="networking">
            Иногда мы&nbsp;проводим дринкапы: встречи в&nbsp;барах без докладов, просто чтобы пообщаться друг
            с&nbsp;другом, познакомиться, поговорить о&nbsp;наболевшем
          </BlockAboutItem>
          <BlockAboutItem type="social">
            Чтобы следить за&nbsp;новыми событиями сообщества, подписывайтесь на&nbsp;
            <a href="https://vk.com/spb_frontend" target="_blank" className="nowrap">
              группу ВКонтакте
            </a>
            ,{' '}
            <a href="https://twitter.com/spb_frontend" target="_blank" className="nowrap">
              Твиттер
            </a>{' '}
            или{' '}
            <a href="https://t.me/spb_frontend" target="_blank" className="nowrap">
              Телеграм канал
            </a>
          </BlockAboutItem>
          <BlockAboutItem type="sponsor">
            Если хотите предложить спонсорство или площадку (от 100 человек), пишите нам на почту{' '}
            <a href="mailto:hi@spb-frontend.ru" target="_blank" className="nowrap">
              hi@spb-frontend.ru
            </a>
          </BlockAboutItem>
        </AboutList>
      </Content>
    </Wrapper>
  );
};
