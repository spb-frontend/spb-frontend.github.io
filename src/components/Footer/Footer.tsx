import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { navigation } from '../../constants/navigation';
import { Content } from '../Content/Content';
import logo from './logo.svg';
import { Block } from '../Block/Block';

const Wrapper = styled.div`
  border-top: 1px solid rgb(var(--color-black) / 0.1);
`;

const FlexWrapper = styled.div`
  font-size: var(--font-size-s);
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacer-l) 0;
`;

const FooterBlock = styled.div`
  flex: 0 0 100%;

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
  font-size: var(--font-size-s);
  text-transform: uppercase;
  margin-bottom: var(--spacer-s);
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

const NavLink = styled(Link)`
  display: block;
  line-height: 1.7em;

  &::after {
    display: inline-block;
    content: '';
    width: 10px;
  }

  @media (min-width: 480px) {
    line-height: inherit;
    & + & {
      margin-top: var(--spacer-s);
    }
  }
`;

const CopyrightLine = styled.div`
  margin-top: var(--spacer-xxl);
  color: rgb(var(--color-black) / 0.5);
`;

export const Footer = () => {
  return (
    <Wrapper className="theme-light">
      <Block>
        <Content>
          <FlexWrapper>
            <FooterBlock className="first">
              <Logo />
              {/* <CooperationInfo>
                По вопросам сотрудничества:
              <br />
              <a href="mailto:hi@spb-frontend.ru">hi@spb-frontend.ru</a>
              </CooperationInfo> */}
            </FooterBlock>

            <FooterBlock className="second">
              <BlockTitle>Навигация</BlockTitle>

              <NavWrapper>
                {navigation.map((item, i) => (
                  <NavLink key={i} href={item.href}>
                    {item.title}
                  </NavLink>
                ))}
              </NavWrapper>
            </FooterBlock>

            <FooterBlock className="third">
              <BlockTitle>Социальные сети</BlockTitle>

              <NavWrapper>
                {[
                  {
                    href: 'https://t.me/spb_frontend',
                    title: 'Канал в Telegram',
                  },
                  {
                    href: 'https://t.me/spb_frontend_chat',
                    title: 'Чат в Telegram',
                  },
                  {
                    href: 'https://twitter.com/spb_frontend',
                    title: 'Twitter',
                  },
                  {
                    href: 'https://youtube.com/@spb_frontend',
                    title: 'YouTube',
                  },
                  {
                    href: 'https://github.com/spb-frontend/',
                    title: 'GitHub',
                  },
                ].map((item, i) => (
                  <NavLink key={i} href={item.href}>
                    {item.title}
                  </NavLink>
                ))}
              </NavWrapper>
            </FooterBlock>
          </FlexWrapper>

          <CopyrightLine>&copy; SPB Frontend, 2014—{new Date().getFullYear()}</CopyrightLine>
        </Content>
      </Block>
    </Wrapper>
  );
};
