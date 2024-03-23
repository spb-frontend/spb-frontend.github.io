import React from 'react';
import { SocialButton } from '@/components//SocialButton/SocialButton';
import { GITHUB, TELEGRAM, TWITTER, YOUTUBE } from '@/constants/urls';
import styles from './styles.module.css';

type Props = {
  size?: number;
  color?: string;
};

export const SocialsList = (props: Props) => (
  <div className={styles['socialList-wrapper']}>
    <SocialButton
      size={props.size}
      color={props.color}
      type="telegram"
      title="Telegram"
      href={TELEGRAM}
    />
    <SocialButton
      size={props.size}
      color={props.color}
      type="twitter"
      title="Twitter"
      href={TWITTER}
    />
    <SocialButton
      size={props.size}
      color={props.color}
      type="youtube"
      title="YouTube"
      href={YOUTUBE}
    />
    <SocialButton
      size={props.size}
      color={props.color}
      type="github"
      title="GitHub"
      href={GITHUB}
    />
  </div>
);
