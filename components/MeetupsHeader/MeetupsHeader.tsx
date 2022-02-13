import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { PageHeading } from '../PageHeading/PageHeading';

const Wrapper = styled.section`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-size: cover;
  background-image: url('/bg-header_mobile.jpg');
  position: relative;
  z-index: 2;
  padding-top: 118px;
  padding-bottom: 74px;
  margin: 0 auto;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('/bg-header_mobile@2x.jpg');
  }

  @media (min-width: 670px) {
    padding-top: 214px;
    padding-bottom: 118px;
    background-image: url('/bg-header_tablet.jpg');
  }

  @media (min-width: 1025px) {
    background-image: url('/bg-header_desktop.jpg');
  }

  @media (min-device-pixel-ratio: 2) and (min-width: 670px),
    (-webkit-min-device-pixel-ratio: 2) and (min-width: 670px),
    (min-resolution: 192dpi) and (min-width: 670px),
    (min-resolution: 2dppx) and (min-width: 670px) {
    background-image: url('/bg-header_tablet@2x.jpg');
  }

  @media (min-device-pixel-ratio: 2) and (min-width: 1025px),
    (-webkit-min-device-pixel-ratio: 2) and (min-width: 1025px),
    (min-resolution: 192dpi) and (min-width: 1025px),
    (min-resolution: 2dppx) and (min-width: 1025px) {
    background-image: url('/bg-header_desktop@2x.jpg');
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

type Props = PropsWithChildren<{
  //
}>;

export const MeetupsHeader = (props: Props) => {
  return (
    <Wrapper>
      <PageHeading title="Meetups" />
    </Wrapper>
  );
};
