import styled from 'styled-components';
import titleBridge from './title-bridge.svg';

export const BlockTitle = styled.h2`
  font-size: var(--font-size-l);
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: var(--spacer-l);
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: 0 0 35px;
    height: 29px;
    background: url(${titleBridge}) 0 50%;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;
