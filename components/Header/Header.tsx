import React, { useState } from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import logo from './logo.svg';
import { SocialsList } from '../SocialsList/SocialsList';

const Wrapper = styled.header`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  padding: 30px 20px;
  display: flex;
  justify-content: space-between;
  z-index: 100;

  &.open {
    position: fixed;
  }

  @media (min-width: 480px) {
    padding: 40px 58px;
  }
`;

const LogoLink = styled.a`
  display: block;
  width: 66px;
  height: 35px;
  background: url(${logo}) 50% no-repeat;
  background-size: contain;

  @media (min-width: 480px) {
    width: 120px;
    height: 64px;
  }

  @media (min-width: 1025px) {
    width: 118px;
    height: 60px;
  }
`;

const MenuButton = styled.a`
  width: 43px;
  height: 43px;
  position: relative;

  @media (min-width: 1025px) {
    display: none;
  }

  &:before,
  &:after {
    content: '';
    background: #fff;
    height: 3px;
    width: 33px;
    position: absolute;
    transition: 0.15s ease-out;
    transition-property: transform;
  }

  &:before {
    left: calc(50% - 33px / 2);
    top: 50%;
    transform: translate(5px, -4px);
  }

  &:after {
    left: calc(50% - 33px / 2);
    top: 50%;
    transform: translate(-5px, 4px);
  }

  &.active {
    padding-left: 10px;

    &:before {
      transform: rotate(-45deg) translate(0, 0);
    }
    &:after {
      transform: rotate(45deg) translate(0, 0);
    }
  }
`;

const MobileMenuWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: rgba(13, 19, 26, 0.7);
  backdrop-filter: blur(30px);
  padding-top: 100px;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-rows: 1fr min-content;
  gap: 0px 0px;
  justify-items: stretch;
  visibility: hidden;
  opacity: 0;
  transition: 0.15s ease-out;
  transition-property: opacity, visibility;

  &.open {
    opacity: 1;
    visibility: visible;
  }
`;

const MobileMenuList = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Socials = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  padding-bottom: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MobileMenuItem = styled.a`
  display: block;
  color: #fff;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;

  &:active,
  &:focus {
    color: #7963fb;
  }

  & + & {
    margin-top: 50px;
  }
`;

const MenuList = styled.div`
  justify-content: center;
  flex-direction: row;
  display: none;

  @media (min-width: 1025px) {
    display: flex;
  }
`;

const MenuItem = styled.a`
  display: block;
  margin-top: -40px;
  padding: 59px 27px 0;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  text-align: right;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  position: relative;

  &::before {
    content: '';
    width: calc(100% - 27px * 2);
    height: 5px;
    position: absolute;
    top: 0;
    left: 27px;
  }

  &:hover,
  &.active {
    color: #fff;

    &::before {
      background-color: #7963fb;
    }
  }
`;

const SocialsTitle = styled.div`
  margin-bottom: 24px;
`;

const menuItems = [
  {
    url: '/drinkcast',
    title: 'Дринкаст',
  },
  {
    url: '/meetups',
    title: 'Митапы',
  },
  {
    url: '/breakfast',
    title: 'Завтраки',
  },
  {
    url: '/people',
    title: 'Люди',
  },
];

export const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Wrapper className={classNames({ open: isMenuOpen })}>
        <LogoLink href="/" />

        <MenuButton
          href="#"
          className={classNames({ active: isMenuOpen })}
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(!isMenuOpen);
          }}
        />

        <MenuList>
          {menuItems.map((item, i) => (
            <MenuItem key={i} href={item.url} className={classNames({ active: router.asPath === item.url })}>
              {item.title}
            </MenuItem>
          ))}
        </MenuList>
      </Wrapper>

      <MobileMenuWrapper className={classNames({ open: isMenuOpen })}>
        <MobileMenuList>
          {menuItems.map((item, i) => (
            <MobileMenuItem key={i} href={item.url}>
              {item.title}
            </MobileMenuItem>
          ))}
        </MobileMenuList>
        <Socials>
          <SocialsTitle>Свяжитесь с нами:</SocialsTitle>
          <SocialsList />
        </Socials>
      </MobileMenuWrapper>
    </>
  );
};
