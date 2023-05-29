import React, { useLayoutEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import './../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  useLayoutEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined' || !document.body) {
      return;
    }

    const handleDarkmodeChange = (event?: MediaQueryListEvent) => {
      const isDarkMode = event == null ? window.matchMedia('(prefers-color-scheme: dark)').matches : event.matches;

      document.body.classList.toggle('theme-dark', isDarkMode);
      document.body.classList.toggle('theme-light', !isDarkMode);
    };

    handleDarkmodeChange();

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleDarkmodeChange);

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleDarkmodeChange);
    };
  }, []);

  return (
    <>
      <Head>
        {/* Seo */}
        <meta name="language" content="Russian" />
        <meta name="title" content="SPB Frontend" />
        <meta name="description" content="Cообщество петербургских фронтенд-разработчиков" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        {/* Open graph */}
        <meta property="og:title" content="SPB Frontend" />
        <meta property="og:site_name" content="SPB Frontend" />
        <meta property="og:url" content="https://spb-frontend.ru" />
        <meta property="og:description" content="SPB Frontend. Сообщество петербургских фронтенд-разработчиков" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="ru_RU" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SPB Frontend" />
        <meta name="twitter:description" content="Сообщество петербургских фронтенд-разработчиков" />
        <meta name="twitter:url" content="https://spb-frontend.ru" />
        <meta name="twitter:image" content="/og.jpg" />

        {/* Fonts preload */}
        <link rel="preload" href="/fonts/Formular-BoldItalic.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/Formular-Bold.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/Formular-Light.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/Formular-LightItalic.woff2" as="font" type="font/woff2" crossOrigin="" />

        {/* Favicon */}

        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png?v=1" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png?v=1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png?v=1" />
        <link rel="manifest" href="/favicon/site.webmanifest?v=1" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg?v=1" color="#7363f7" />
        <link rel="shortcut icon" href="/favicon/favicon.ico?v=1" />
        <meta name="msapplication-TileColor" content="#7363f7" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
