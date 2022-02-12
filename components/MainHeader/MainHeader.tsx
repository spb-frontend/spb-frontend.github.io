import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';
import { SocialsList } from '../SocialsList/SocialsList';
import bridgeLeft from './bridge-header-1m.svg';
import bridgeRight from './bridge-header-2m.svg';

const Wrapper = styled.section`
  background: url('/header.jpeg') 50% no-repeat;
  background-size: cover;
  padding-top: 100px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const HeaderContent = styled.div`
  position: relative;
  padding: 75px 20px;
  margin: 0 auto;

  @media (min-width: 480px) {
    padding: 130px 46px 106px;
  }

  @media (min-width: 1025px) {
    padding: 187px 50px 115px;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    background: 0 0 no-repeat;
    background-size: cover;
  }

  &::before {
    top: 0;
    left: 0;
    width: 146px;
    height: 210px;
    background-image: url(${bridgeLeft});
  }

  &::after {
    top: 230px;
    right: 0;
    width: 102px;
    height: 131px;
    background-image: url(${bridgeRight});
  }

  @media (min-width: 480px) {
    &::before {
      top: 56px;
      width: 250px;
      height: 360px;
    }
    &::after {
      top: 446px;
      width: 163px;
      height: 210px;
    }
  }

  @media (min-width: 1025px) {
    &::before {
      top: 202px;
    }
  }
`;

const Heading = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  position: relative;
  z-index: 2;
  text-align: center;

  @media (min-width: 480px) {
    font-size: 43px;
    line-height: 52px;
  }

  @media (min-width: 670px) {
    font-size: 64px;
    line-height: 78px;
    max-width: 1135px;
    margin: 0 auto;
  }
`;

const Description = styled.div`
  margin: 25px 0 88px;
  text-align: center;
  line-height: 17px;
  position: relative;
  z-index: 2;

  @media (min-width: 480px) {
    margin: 58px auto 108px;
    max-width: 455px;
    font-size: 18px;
    line-height: 22px;
  }

  @media (min-width: 670px) {
    margin: 63px auto 90px;
    max-width: 601px;
    font-size: 18px;
    line-height: 22px;
  }
`;

const ButtonsWrapper = styled.div`
  position: relative;
  z-index: 2;

  @media (min-width: 670px) {
    display: flex;
    justify-content: center;

    & > * + * {
      margin-left: 25px;
    }
  }
`;

const SocialsWrapper = styled.div`
  margin-top: 43px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SocialsTitle = styled.div`
  margin-bottom: 24px;
`;

type Props = PropsWithChildren<{
  //
}>;

export const MainHeader = (props: Props) => {
  return (
    <Wrapper>
      <HeaderContent>
        <Heading>Петербургское сообщество фронтенд-разработчиков</Heading>

        <Description>
          Мы проводим встречи с 2014 года — митапы, фронтенд-завтраки и в других форматах. Также мы приглашаем гостей в
          наш подкаст Drinkcast.
        </Description>

        <ButtonsWrapper>
          <Button type="primary" href="#">
            Подробнее о нас
          </Button>
          <Button type="secondary" href="#">
            Подписаться в соцсетях
          </Button>
        </ButtonsWrapper>

        <SocialsWrapper>
          <SocialsTitle>Свяжитесь с нами:</SocialsTitle>
          <SocialsList />
        </SocialsWrapper>
      </HeaderContent>
    </Wrapper>
  );
};
