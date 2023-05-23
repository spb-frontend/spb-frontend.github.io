import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';
import logoLight from './logo-light.svg';
// import logoDark from './logo-dark.svg';
import { SocialsList } from '../SocialsList/SocialsList';
import { navigation } from '../../constants/navigation';

const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 0 20px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  border-bottom: 1px solid rgb(var(--color-white) / 0.1);
  background-color: rgb(var(--color-black));
  backdrop-filter: blur(5px);
  color: rgb(var(--color-white));

  &.transparent {
    background-color: transparent;
  }

  &.open {
    position: fixed;
  }

  @media (min-width: 480px) {
    padding: 0 58px;
  }
`;

const LogoLink = styled(Link)`
  display: block;
  width: 80px;
  height: 36px;
  background: url(${logoLight}) 0 50% no-repeat;
  background-size: contain;

  @media (min-width: 480px) {
    width: 100px;
    height: 40px;
  }
`;

const HamburgerButton = styled.a`
  width: 43px;
  height: 43px;
  position: relative;

  @media (min-width: 1025px) {
    display: none;
  }

  &:before,
  &:after {
    content: '';
    background: rgb(var(--color-white));
    height: 3px;
    width: 33px;
    position: absolute;
    transition: 0.15s ease-out;
    transition-property: transform;
  }

  &:before {
    left: calc(50% - 33px / 2);
    top: 50%;
    transform: translateY(-4px);
  }

  &:after {
    left: calc(50% - 33px / 2);
    top: 50%;
    transform: translateY(4px);
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
  background: rgb(var(--color-black) / 0.7);
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
  color: rgb(var(--color-white));

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

const MobileMenuLink = styled(Link)`
  --link-color: rgb(var(--color-white));
  font-weight: bold;
  font-size: var(--font-size-l);
  height: 44px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:active,
  &:focus {
    color: rgb(var(--color-blue));
  }

  & + & {
    margin-top: 50px;
  }
`;

const MenuList = styled.div`
  justify-content: center;
  flex-direction: row;
  display: none;
  height: 100%;

  @media (min-width: 1025px) {
    display: flex;
  }
`;

const MenuLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 25px 0;
  font-size: var(--font-size-s);
  text-align: right;
  color: rgb(var(--color-white) / 0.6);
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
    color: rgb(var(--color-white));

    &::before {
      background-color: rgb(var(--color-blue));
    }
  }
`;

const SocialsTitle = styled.div`
  margin-bottom: 24px;
`;

const Spacer = styled.div`
  height: 80px;
`;

type Props = {
  withUpcomingMeetup: boolean;
};

export const Navigation = (props: Props) => {
  const router = useRouter();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const headerElementRef = useRef<HTMLElement | null>(null);

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const headerElement = headerElementRef.current;

    if (headerElement == null || !props.withUpcomingMeetup) {
      return;
    }

    const handleScroll = () => {
      const opacity = Math.min(window.scrollY || window.pageYOffset, 300) / 300;

      headerElement.style.backgroundColor = `rgb(var(--color-black) / ${opacity})`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headerElementRef.current, props.withUpcomingMeetup]);

  return (
    <>
      <Header
        className={classNames({ open: isMenuOpen, transparent: props.withUpcomingMeetup })}
        ref={headerElementRef}
      >
        <LogoLink href="/" onClick={handleCloseMenu} />

        <HamburgerButton
          href="#"
          className={classNames({ active: isMenuOpen })}
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(!isMenuOpen);
          }}
        />

        <MenuList>
          {navigation.map((item, i) => (
            <MenuLink
              key={i}
              href={item.href}
              target={item.target}
              rel={item.rel}
              className={classNames({ active: router.asPath === item.href })}
            >
              <item.Icon size={25} />
              &nbsp;{item.title}
            </MenuLink>
          ))}
        </MenuList>
      </Header>

      <MobileMenuWrapper className={classNames({ open: isMenuOpen })}>
        <MobileMenuList>
          {navigation.map((item, i) => (
            <MobileMenuLink key={i} href={item.href} target={item.target} rel={item.rel} onClick={handleCloseMenu}>
              <item.Icon size={48} />
              &nbsp;
              {item.title}
            </MobileMenuLink>
          ))}
        </MobileMenuList>
        <Socials>
          <SocialsTitle>Подписывайтесь на нас в соцсетях:</SocialsTitle>
          <SocialsList />
        </Socials>
      </MobileMenuWrapper>

      {!props.withUpcomingMeetup && <Spacer />}
    </>
  );
};
