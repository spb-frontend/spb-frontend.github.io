import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { BlockTitle } from '../BlockTitle/BlockTitle';
import { Button } from '../Button/Button';
import { Content } from '../Content/Content';
import bridge from './bridge.svg';

const Wrapper = styled.section`
  padding: 30px 0;
  position: relative;
  overflow: hidden;

  @media (min-width: 480px) {
    padding: 60px 0;
  }

  @media (min-width: 1025px) {
    padding: 100px 0;
  }
`;

const DrinkcastList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (min-width: 1025px) {
    justify-content: space-between;
  }
`;

const DrinkcastLinkItem = styled.a`
  flex: 0 0 100%;
  height: 300px;
  background: 50% no-repeat;
  background-size: cover;
  margin-bottom: 20px;

  @media (min-width: 1025px) {
    flex: 0 0 calc(33% - 14px);
    height: 416px;
  }
`;

const DrinkcastItemShadow = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%), url(.jpg);
  position: relative;
`;

const DrinkcastItemContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0 23px 30px;
`;

const DrinkcastItemTitle = styled.h3`
  font-weight: bold;
  font-size: var(--font-size-m);
  color: #fff;
`;

const DrinkcastItemDate = styled.div`
  margin-top: 18px;
  color: #fff;
`;

const DrinkcastItemNumber = styled.div`
  font-size: var(--font-size-s);
  margin-bottom: 8px;
`;

const Brige = styled.div`
  width: 250px;
  height: 360px;
  position: absolute;
  right: calc(50% - 740px);
  top: 277px;
  background: url('${bridge}') 50% no-repeat;
  background-size: contain;
  z-index: 1;
  pointer-events: none;
  display: none;

  @media (min-width: 1025px) {
    display: block;
  }
`;

const TopButtonWrapper = styled.div`
  position: absolute;
  top: -14px;
  display: none;

  @media (min-width: 670px) {
    display: block;
    right: 58px;
  }

  @media (min-width: 1025px) {
    display: block;
    right: 50px;
  }
`;

const BottomButtonWrapper = styled.div`
  @media (min-width: 670px) {
    display: none;
  }
`;

type Props = {
  drinkcastList: {
    title: string;
    date: string;
    image: string;
    number: number;
  }[];
};

export const BlockDrinkcast = (props: Props) => {
  return (
    <Wrapper>
      <Content>
        <BlockTitle>Дринкаст</BlockTitle>

        <TopButtonWrapper>
          <Link href="/drinkcast">
            <Button href="/drinkcast" type="primary">
              Cмотреть все
            </Button>
          </Link>
        </TopButtonWrapper>

        <Brige />

        <DrinkcastList>
          {props.drinkcastList.map((item, i) => (
            <Link key={i} href={`/drinkcast/${item.number}`}>
              <DrinkcastLinkItem href={`/drinkcast/${item.number}`} style={{ backgroundImage: `url('${item.image}')` }}>
                <DrinkcastItemShadow>
                  <DrinkcastItemContent>
                    {/* <DrinkcastItemNumber>#{item.number}</DrinkcastItemNumber> */}
                    <DrinkcastItemTitle>{item.title}</DrinkcastItemTitle>
                    <DrinkcastItemDate>
                      {new Date(item.date).toLocaleDateString('ru-RU', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </DrinkcastItemDate>
                  </DrinkcastItemContent>
                </DrinkcastItemShadow>
              </DrinkcastLinkItem>
            </Link>
          ))}
        </DrinkcastList>

        <BottomButtonWrapper>
          <Button href="/drinkcast" type="primary" isFullWidth>
            Cмотреть все
          </Button>
        </BottomButtonWrapper>
      </Content>
    </Wrapper>
  );
};
