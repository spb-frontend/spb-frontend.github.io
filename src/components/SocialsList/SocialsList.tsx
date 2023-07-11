import React from 'react';
import { GITHUB, TELEGRAM, TWITTER, YOUTUBE } from '../../constants/urls';
import { SocialButton } from '../SocialButton/SocialButton';
import styles from './styles.module.css';

type Props = {
  size?: number;
  color?: string;
};

export const SocialsList = (props: Props) => (
  <div className={styles.wrapper}>
    <SocialButton size={props.size} color={props.color} type="telegram" title="Telegram" href={TELEGRAM} />
    <SocialButton size={props.size} color={props.color} type="twitter" title="Twitter" href={TWITTER} />
    <SocialButton size={props.size} color={props.color} type="youtube" title="YouTube" href={YOUTUBE} />
    <SocialButton size={props.size} color={props.color} type="github" title="GitHub" href={GITHUB} />
  </div>
);
