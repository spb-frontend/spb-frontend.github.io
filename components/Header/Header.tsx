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

const MenuButton = styled.div`
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
  }

  &:before {
    left: 0;
    top: calc(50% - 4px);
  }

  &:after {
    right: 0;
    top: calc(50% + 4px);
  }
`;

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <Wrapper>
      <LogoLink href="/" />
      <MenuButton
        className={classNames({
          //
        })}
      />
    </Wrapper>
  );
};
