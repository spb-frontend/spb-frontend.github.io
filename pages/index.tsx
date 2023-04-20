import React, { useEffect } from 'react';
import Head from 'next/head';
import { getMainDrinkcastList } from '../lib/api';
import { DRINKCAST, MEETUP } from '../constants/contentType';
import { MainHeader } from '../components/MainHeader/MainHeader';
import { BlockAbout } from '../components/BlockAbout/BlockAbout';
import { BlockDrinkcast } from '../components/BlockDrinkcast/BlockDrinkcast';

type Props = {
  drinkcastList: {
    title: string;
    date: string;
    image: string;
    number: number;
  }[];
};

export async function getServerSideProps(context): Promise<{ props: Props }> {
  const drinkcastList = await getMainDrinkcastList();
  // const meetupList = await getEntryList({ contentType: MEETUP, limit: 6 });

  return {
    props: {
      drinkcastList,
      // meetupList,
    },
  };
}

export default function Home(props: Props) {
  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <>
      <Head>
        <title>Hello world</title>
      </Head>

      <MainHeader />

      <BlockAbout />
      <BlockDrinkcast drinkcastList={props.drinkcastList} />
    </>
  );
}
