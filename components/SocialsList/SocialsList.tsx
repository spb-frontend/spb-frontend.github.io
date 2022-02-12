import React from 'react';
import styled from 'styled-components';
import { SocialButton } from '../SocialButton/SocialButton';

const Wrapper = styled.div`
  & > * + * {
    margin-left: 25px;
  }
`;

export const SocialsList = () => {
  return (
    <Wrapper>
      <SocialButton type="vk" href="//vk.com/spb_frontend" />
      <SocialButton type="twitter" href="//twitter.com/spb_frontend" />
      <SocialButton type="telegram" href="//t.me/spb_frontend" />
      <SocialButton type="youtube" href="//www.youtube.com/channel/UCWjDubFXv8I1vWEb47s9_IA" />
      <SocialButton type="github" href="//github.com/spb-frontend" />
    </Wrapper>
  );
};
