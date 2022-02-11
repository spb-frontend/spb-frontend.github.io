import React, { useState } from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import logo from './logo.svg';

const Wrapper = styled.header`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  padding: 30px 20px;
  display: flex;
  justify-content: space-between;
  z-index: 100;

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
    width: 180px;
    height: 60px;
  }
`;

const MenuButton = styled.a`
  width: 43px;
  height: 43px;
  position: relative;

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

const MenuList = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Socials = styled.div`
  grid-area: 2 / 1 / 3 / 2;
`;

const MenuItem = styled.a`
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
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Wrapper>
        <LogoLink href="/" />
        <MenuButton
          href="#"
          className={classNames({ active: isMenuOpen })}
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(!isMenuOpen);
          }}
        />
      </Wrapper>

      <MobileMenuWrapper className={classNames({ open: isMenuOpen })}>
        <MenuList>
          {menuItems.map((item) => (
            <MenuItem href={item.url}>{item.title}</MenuItem>
          ))}
        </MenuList>
        <Socials></Socials>
      </MobileMenuWrapper>
    </>
  );
};
