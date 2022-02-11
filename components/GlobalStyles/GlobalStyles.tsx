import { createGlobalStyle } from 'styled-components';

const reset = `
  /* stylelint-disable */
  /* http://meyerweb.com/eric/tools/css/reset/
    v4.0 | 20180602
    License: none (public domain)
  */
 html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

const fonts = `
  @font-face {
    font-family: 'Formular';
    src: url('/fonts/Formular-BoldItalic.woff2') format('woff2'),
        url('/fonts/Formular-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Formular';
    src: url('/fonts/Formular-MediumItalic.woff2') format('woff2'),
        url('/fonts/Formular-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Formular';
    src: url('/fonts/Formular-Bold.woff2') format('woff2'),
        url('/fonts/Formular-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Formular';
    src: url('/fonts/Formular-Black.woff2') format('woff2'),
        url('/fonts/Formular-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Formular';
    src: url('/fonts/Formular-BlackItalic.woff2') format('woff2'),
        url('/fonts/Formular-BlackItalic.woff') format('woff');
    font-weight: 900;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Formular';
    src: url('/fonts/Formular-Light.woff2') format('woff2'),
        url('/fonts/Formular-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Formular';
    src: url('/fonts/Formular-LightItalic.woff2') format('woff2'),
        url('/fonts/Formular-LightItalic.woff') format('woff');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Formular';
    src: url('/fonts/Formular.woff2') format('woff2'),
        url('/fonts/Formular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Formular';
    src: url('/fonts/Formular-Italic.woff2') format('woff2'),
        url('/fonts/Formular-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Formular';
    src: url('/fonts/Formular-Medium.woff2') format('woff2'),
        url('/fonts/Formular-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${reset}
  ${fonts}

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #0D131A;
    color: #fff;
    font-size: 14px;
    font-family: 'Formular', sans-serif;
  }
`;
