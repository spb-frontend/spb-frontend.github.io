import styled from 'styled-components';

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 60px 20px;

  @media (min-width: 670px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1025px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const TalkBlock = styled.article`
  display: flex;
  gap: 0 40px;
  border-bottom: 1px solid rgb(38, 40, 61);
  padding-bottom: 40px;
  
  @media (min-width: 1025px) {
    border: 0;
    padding-bottom: 0;
  }
`;

export const TalkTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 12px;
`;

export const TalkContent = styled.div`
  display: flex;
  gap: 20px;
  
  & a {
    color: rgb(138, 145, 153);
  }
`;

export const Person = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
`;

export const PersonName = styled.div`
  font-size: 18px;
  margin: 6px 0 24px;
`;
