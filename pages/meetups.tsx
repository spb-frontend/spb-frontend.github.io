import React, { useEffect } from 'react';
import Head from 'next/head';
import { MeetupsHeader } from '../components/MeetupsHeader/MeetupsHeader';
// import { Meetups } from '../components/Meetups/Meetups';

export default function MeetupsPage(props) {
  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <>
      <Head>
        <title>Meetups — SPB Frontend</title>
      </Head>

      <MeetupsHeader />

      {/* <Meetups /> */}
    </>
  );
}
