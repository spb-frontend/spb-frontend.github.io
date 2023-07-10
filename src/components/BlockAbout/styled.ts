import styled from 'styled-components';
import TildaIcon from './icons/bg-tilda.svg';

export const Container = styled.section`
  position: relative;
  scroll-margin-top: var(--header-height);

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    background-repeat: no-repeat;
    background-position: center 42%;
    background-image: url(${TildaIcon});
    mix-blend-mode: var(--background-image-blend-mode);
    background-size: contain; 
  }
`;

export const DetailedInfo = styled.div`
  font-size: var(--font-size-m);
`;

export const CardsWrapper = styled.div`
  display: grid;
  margin-top: 120px;
  grid-template-columns: 1fr;
  grid-gap: 80px 100px;

  @media (min-width: 670px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1025px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  font-size: 18px;
`;

export const Icon = styled.img`
  width: fit-content;
`;
