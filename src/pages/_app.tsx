import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import './../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
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
        <meta property="og:description" content="SPB Frontend — сообщество петербургских фронтенд-разработчиков" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og.png" />

        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
