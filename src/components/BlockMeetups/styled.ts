import Link from 'next/link';
import styled from 'styled-components';
import { Button } from '@/components//Button/Button';

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacer-l);
`;
export const MeetupButton = styled(Button).withConfig({
  shouldForwardProp: (prop) => 'message' !== prop,
})`
  margin-bottom: var(--spacer-l);
`;

export const MeetupListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  
  @media (min-width: 670px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1025px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const MeetupWrapper = styled(Link)`
  padding: 40px;
  text-decoration: none;
  color: var(--text-color);
  border: 3px solid rgb(25, 27, 43);
  
  &:hover {
    border-color: rgb(var(--color-blue));
  }
`;

export const MeetupTitle = styled.h3`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 18px;
`;

export const PersonTitle = styled.div`
  margin: 32px 0 6px;
`;

export const PersonWrapper = styled.div`
  display: inline-block;
  margin: 12px 12px 0 0;
`;

export const Person = styled.img`
  width: 37px;
  height: 37px;
  border-radius: 50%;
  object-fit: cover;
`;
