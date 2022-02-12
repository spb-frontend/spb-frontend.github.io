import React from 'react';
import styled from 'styled-components';
import { navigation } from '../../constants/navigation';
import { Content } from '../Content/Content';
import logo from './logo.svg';

const Wrapper = styled.div`
  padding: 65px 0 29px;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 480px) {
    padding: 93px 0 117px;
  }

  @media (min-width: 1025px) {
    padding: 114px 0 114px;
  }

  a {
    color: #8a9199;

    &:hover {
      color: #fff;
    }
  }
`;

const Block = styled.div`
  flex: 0 0 100%;
  margin-bottom: 54px;

  @media (min-width: 480px) {
    &.first {
      flex: 0 0 65%;
    }
    &.second {
      flex: 0 0 35%;
    }
  }

  @media (min-width: 1025px) {
    &.first {
      flex: 0 0 30%;
    }
    &.second {
      flex: 0 0 30%;
    }
    &.third {
      flex: 0 0 40%;
    }
  }
`;

const BlockTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const Logo = styled.div`
  width: 89px;
  height: 46px;
  background: url(${logo}) 50% no-repeat;
  background-size: contain;
`;

const CooperationInfo = styled.div`
  margin-top: 41px;
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (min-width: 480px) {
    flex-direction: column;
  }
`;

const NavLink = styled.a`
  display: block;
  margin-right: 32px;

  @media (min-width: 480px) {
    margin-right: 0;

    & + & {
      margin-top: 21px;
    }
  }
`;

const SocialsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SocBlock = styled.div`
  flex: 0 0 50%;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 32px;

  @media (min-width: 480px) {
    flex: 0 0 33%;
  }

  @media (min-width: 1025px) {
    flex: 0 0 50%;
  }
`;

const SocHeader = styled.div``;
const SocBody = styled.div``;

export const Footer = () => {
  return (
    <Content>
      <Wrapper>
        <Block className="first">
          <Logo />
          <CooperationInfo>
            По вопросам сотрудничества:
            <br />
            <a href="mailto:hi@spb-frontend.ru">hi@spb-frontend.ru</a>
          </CooperationInfo>
        </Block>

        <Block className="second">
          <BlockTitle>Навигация</BlockTitle>

          <NavWrapper>
            {navigation.map((item, i) => {
              return <NavLink href={item.url}>{item.title}</NavLink>;
            })}
          </NavWrapper>
        </Block>

        <Block className="third">
          <BlockTitle>Социальные сети</BlockTitle>

          <SocialsWrapper>
            <SocBlock>
              <SocHeader>ВКонтакте</SocHeader>
              <SocBody>
                <a href="//vk.com/spb_frontend">spb_frontend</a>
              </SocBody>
            </SocBlock>
            <SocBlock>
              <SocHeader>Твиттер</SocHeader>
              <SocBody>
                <a href="//twitter.com/spb_frontend">@spb_frontend</a>
              </SocBody>
            </SocBlock>
            <SocBlock>
              <SocHeader>Телеграм-канал</SocHeader>
              <SocBody>
                <a href="//t.me/spb_frontend">@spb_frontend</a>
              </SocBody>
            </SocBlock>
            <SocBlock>
              <SocHeader>Канал на YouTube</SocHeader>
              <SocBody>
                <a href="//youtube.com/channel/UCWjDubFXv8I1vWEb47s9_IA">SPB Frontend</a>
              </SocBody>
            </SocBlock>
            <SocBlock>
              <SocHeader>Гитхаб</SocHeader>
              <SocBody>
                <a href="//github.com/spb-frontend/">spb-frontend</a>
              </SocBody>
            </SocBlock>
          </SocialsWrapper>
        </Block>
      </Wrapper>
    </Content>
  );
};
