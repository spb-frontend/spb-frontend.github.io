import { createGlobalStyle, css } from 'styled-components';
import { reset } from './reset';
import { fonts } from './fonts';

const variables = css`
  --color-black: 13 19 26;
  --color-blue: 121 99 251;
  --color-folly: 255 51 102;
  --color-white: 255 255 255;
  --color-cream: 242 247 242;

  --link-color: var(--color-white);

  .theme-light {
    --link-color: var(--color-black);
  }

  --font-size-s: 14px;
  --font-size-m: 20px;
  --font-size-l: 24px;
  --font-size-xl: 32px;

  @media (min-width: 670px) {
    --font-size-s: 16px;
    --font-size-m: 24px;
    --font-size-l: 36px;
    --font-size-xl: 64px;
  }

  @media (min-width: 1025px) {
  }

  --spacer-s: 15px;
  --spacer-m: 20px;
  --spacer-l: 30px;
  --spacer-ll: 40px;
  --spacer-lxl: 50px;
`;

const common = css`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    overscroll-behavior: none;
  }

  body {
    margin: 0;
    padding: 0;
    background: rgb(var(--color-white));
    color: rgb(var(--color-black));
    font-size: var(--font-size-s);
    font-family: 'Formular', sans-serif;
    font-weight: 300;
    height: 100%;
  }

  #__next {
  }

  a {
    --stroke-opacity: 0.3;
    --stroke-width: 2px;
    --stroke-color: rgb(var(--link-color) / var(--stroke-opacity));
    color: var(--link-color);
    -webkit-text-decoration-color: var(--stroke-color);
    text-decoration-color: var(--stroke-color);
    -webkit-text-decoration-line: underline;
    text-decoration-line: underline;
    -webkit-text-decoration-skip: ink;
    text-decoration-skip-ink: auto;
    text-decoration-thickness: min(1px, var(--stroke-width, 0.05em));
    text-underline-offset: var(--stroke-offset, 0.2em);
    text-underline-position: auto;
    transition: 0.15s ease;
    transition-property: color, -webkit-text-decoration-color;
    transition-property: color, text-decoration-color;
    transition-property: color, text-decoration-color, -webkit-text-decoration-color;

    &:hover {
      --stroke-opacity: 0.7;
    }
  }

  p {
    margin: 1.2em 0;
  }

  b,
  strong {
    font-weight: 500;
  }

  .nowrap {
    white-space: nowrap;
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${reset}
  ${fonts}

  :root {
    ${variables}
  }

  ${common}
` as any;
