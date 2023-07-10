import styled from 'styled-components';

export const Wrapper = styled.section`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url('/images/meetups/bg-header_mobile.jpg');
  position: relative;
  z-index: 2;
  height: 236px;
  margin: 0 auto;
  display: flex;
  align-content: center;
  align-items: center;

  @media (min-device-pixel-ratio: 2),
  (-webkit-min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
    background-image: url('/images/meetups/bg-header_mobile@2x.jpg');
  }

  @media (min-width: 480px) {
    height: 236px;
  }
  @media (min-width: 670px) {
    height: 410px;
    background-image: url('/images/meetups/bg-header_tablet.jpg');
  }

  @media (min-width: 1025px) {
    height: 410px;
    background-image: url('/images/meetups/bg-header_desktop.jpg');
  }

  @media (min-device-pixel-ratio: 2) and (min-width: 670px),
  (-webkit-min-device-pixel-ratio: 2) and (min-width: 670px),
  (min-resolution: 192dpi) and (min-width: 670px),
  (min-resolution: 2dppx) and (min-width: 670px) {
    background-image: url('/images/meetups/bg-header_tablet@2x.jpg');
  }

  @media (min-device-pixel-ratio: 2) and (min-width: 1025px),
  (-webkit-min-device-pixel-ratio: 2) and (min-width: 1025px),
  (min-resolution: 192dpi) and (min-width: 1025px),
  (min-resolution: 2dppx) and (min-width: 1025px) {
    background-image: url('/images/meetups/bg-header_desktop@2x.jpg');
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const Content = styled.div`
  position: relative;
  padding: 100px 20px 0;
  text-align: center;
  margin: 0 auto;

  @media (min-width: 480px) {
    padding: 100px 58px 0;
  }

  @media (min-width: 1025px) {
    padding: 100px 50px 0;
    max-width: 1327px;
  }
`;

export const Heading = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  position: relative;
  z-index: 2;

  @media (min-width: 670px) {
    font-size: 64px;
    line-height: 52px;
  }

  @media (min-width: 1025px) {
    font-size: 64px;
    line-height: 78px;
    margin: 0 auto;
  }
`;

export const EventDate = styled.time`
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
`;
