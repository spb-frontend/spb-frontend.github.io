import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import vk from './icons/vk.svg';
import twitter from './icons/twitter.svg';
import telegram from './icons/telegram.svg';
import youtube from './icons/youtube.svg';
import github from './icons/github.svg';

const Link = styled.a`
  text-decoration: none;
  display: inline-block;
`;

const SocialIcon = styled.div`
  background-color: currentColor;
  mask: no-repeat center;
  mask-size: contain;

  &.vk {
    mask-image: url(${vk});
  }
  &.twitter {
    mask-image: url(${twitter});
  }
  &.telegram {
    mask-image: url(${telegram});
  }
  &.youtube {
    mask-image: url(${youtube});
  }
  &.github {
    mask-image: url(${github});
  }
`;

type Props = {
  type: 'vk' | 'twitter' | 'telegram' | 'youtube' | 'github';
  href?: string;
  size?: number;
  color?: string;
};

export const SocialButton = (props: Props) => {
  return (
    <Link
      href={props.href}
      style={{
        ...(props.color
          ? {
              color: props.color,
            }
          : undefined),
      }}
    >
      <SocialIcon
        className={classNames(props.type)}
        style={{
          ...(props.size
            ? {
                width: `${props.size}px`,
                height: `${props.size}px`,
              }
            : undefined),
        }}
      />
    </Link>
  );
};

SocialButton.defaultProps = {
  size: 24,
  color: 'currentColor',
};
