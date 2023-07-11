import React from 'react';
import { SocialButton } from '../SocialButton/SocialButton';
import { GITHUB, TELEGRAM, TWITTER, YOUTUBE } from '../../constants/urls';
import { Wrapper } from './styled';

type Props = {
  size?: number;
  color?: string;
};

export const SocialsList = (props: Props) => (
  <Wrapper>
    <SocialButton size={props.size} color={props.color} type="telegram" title="Telegram" href={TELEGRAM} />
    <SocialButton size={props.size} color={props.color} type="twitter" title="Twitter" href={TWITTER} />
    <SocialButton size={props.size} color={props.color} type="youtube" title="YouTube" href={YOUTUBE} />
    <SocialButton size={props.size} color={props.color} type="github" title="GitHub" href={GITHUB} />
  </Wrapper>
);
