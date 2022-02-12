import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

import mail from './icons/mail.svg';
import breakfast from './icons/breakfast.svg';
import tg from './icons/tg.svg';
import networking from './icons/networking.svg';
import social from './icons/social.svg';
import sponsor from './icons/sponsor.svg';

const Item = styled.div`
  padding-top: 65px;
  background-position: top left;
  background-repeat: no-repeat;
  font-size: 14px;
  line-height: 17px;
  color: #fff;

  @media (min-width: 670px) {
    padding-top: 85px;
    font-size: 18px;
    line-height: 22px;
  }

  @media (min-width: 1025px) {
    padding-top: 90px;
  }

  &.mail {
    background-image: url(${mail});
    background-size: 39px 31px;

    @media (min-width: 670px) {
      background-size: 50px 39px;
    }
  }
  &.breakfast {
    background-image: url(${breakfast});
    background-size: 42px 40px;

    @media (min-width: 670px) {
      background-size: 46px 44px;
    }
  }
  &.tg {
    background-image: url(${tg});
    background-size: 40px 40px;

    @media (min-width: 670px) {
      background-size: 44px 44px;
    }
  }
  &.networking {
    background-image: url(${networking});
    background-size: 42px 42px;

    @media (min-width: 670px) {
      background-size: 50px 50px;
    }
  }
  &.social {
    background-image: url(${social});
    background-size: 38px 42px;

    @media (min-width: 670px) {
      background-size: 43px 47px;
    }
  }
  &.sponsor {
    background-image: url(${sponsor});
    background-size: 40px 31px;

    @media (min-width: 670px) {
      background-size: 49px 40px;
    }
  }

  a {
    color: #7963fb;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;

type Props = {
  type: 'mail' | 'breakfast' | 'tg' | 'networking' | 'social' | 'sponsor';
  children?: any;
};

export const AboutItem = (props: Props) => {
  return <Item className={classNames(props.type)}>{props.children}</Item>;
};
