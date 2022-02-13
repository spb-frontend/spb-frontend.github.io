import styled from 'styled-components';
import titleBridge from './title-bridge.svg';

export const BlockTitle = styled.h2`
  font-size: 36px;
  line-height: 44px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 50px;
  position: relative;
  padding-left: 38px;

  @media (min-width: 670px) {
    margin-bottom: 46px;
    font-size: 48px;
    line-height: 59px;
  }

  @media (min-width: 1025px) {
    margin-bottom: 67px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 6.5px;
    left: 0;
    width: 20px;
    height: 29px;
    background-image: url(${titleBridge});
    background-repeat: no-repeat;
    background-size: contain;

    @media (min-width: 670px) {
      width: 24px;
      height: 35px;
      top: 10px;
    }
  }
`;
