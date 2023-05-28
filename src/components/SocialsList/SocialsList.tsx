import React from 'react';
import { SocialButton } from '../SocialButton/SocialButton';
import styles from './styles.module.css';

type Props = {
  size?: number;
  color?: string;
};

export const SocialsList = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <SocialButton
        size={props.size}
        color={props.color}
        type="telegram"
        title="Telegram"
        href="https://t.me/spb_frontend"
      />
      <SocialButton
        size={props.size}
        color={props.color}
        type="twitter"
        title="Twitter"
        href="https://twitter.com/spb_frontend"
      />
      <SocialButton
        size={props.size}
        color={props.color}
        type="youtube"
        title="YouTube"
        href="https://www.youtube.com/channel/UCWjDubFXv8I1vWEb47s9_IA"
      />
      <SocialButton
        size={props.size}
        color={props.color}
        type="github"
        title="GitHub"
        href="https://github.com/spb-frontend"
      />
    </div>
  );
};
