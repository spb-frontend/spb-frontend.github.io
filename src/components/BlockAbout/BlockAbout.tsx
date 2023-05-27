import React from 'react';
import styled from 'styled-components';
import { BlockTitle } from '../BlockTitle/BlockTitle';
import { Content } from '../Content/Content';
import bgTilda from './bg-tilda.svg';
import { Block } from '../Block/Block';

const Wrapper = styled.section`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    background-repeat: no-repeat;
    background-position: center 80%;
    background-image: url(${bgTilda});
    background-size: contain;
    filter: blur(10px);
    opacity: 0.07;
  }
`;

const AboutDesc = styled.div`
  font-size: var(--font-size-m);
`;

export const BlockAbout = () => {
  return (
    <Wrapper id="about" className="theme-light">
      <Block>
        <Content>
          <BlockTitle>О нас</BlockTitle>
          <AboutDesc>
            <p>
              <strong>SPB Frontend</strong> — сообщество петербургских фронтенд-разработчиков. Мы создаем теплую и
              дружественную атмосферу для обмена опытом и знаний в сфере разработки веб-интерфейсов. Наши встречи найдут
              полезными как новички, так и опытные разработчики. Мы помогаем специалистам обмениваться знаниями,
              налаживать профессиональные связи, вдохновляться и мотивироваться.
            </p>

            <p>
              С 2014-го года мы проводим митапы для фронтенд-разработчиков, которые представляют из себя бесплатную
              оффлайн-платформу для обмена знаниями и опытом для всех желающих. Следите за нашими новостями в{' '}
              <a href="https://t.me/spb_frontend">Telegram</a> и <a href="https://twitter.com/spb_frontend">Twitter</a>,
              чтобы не пропустить анонсы предстоящих событий.
            </p>
          </AboutDesc>
        </Content>
      </Block>
    </Wrapper>
  );
};
