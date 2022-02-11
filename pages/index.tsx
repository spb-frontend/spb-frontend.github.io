import React, { useEffect } from 'react';
import Head from 'next/head';
import { getEntryList } from '../lib/api';
import { DRINKCAST, MEETUP } from '../constants/contentType';
import { Header } from '../components/Header/Header';
import { MainHeader } from '../components/MainHeader/MainHeader';

export async function getServerSideProps(context) {
  const drinkcastList = await getEntryList({ contentType: DRINKCAST, limit: 3 });
  const meetupList = await getEntryList({ contentType: MEETUP, limit: 6 });

  return {
    props: {
      drinkcastList,
      meetupList,
    },
  };
}

export default function Home(props) {
  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <>
      <Head>
        <title>Hello world</title>
      </Head>

      <Header />
      <MainHeader />
    </>
  );
}
