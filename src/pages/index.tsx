import React from 'react';
import Head from 'next/head';
import { BlockUpcomingMeetup } from '../components/BlockUpcomingMeetup/BlockUpcomingMeetup';
import { getUpcomingMeetup } from '../lib/timepad';
import { Navigation } from '../components/Navigation/Navigation';
import { GetStaticProps } from 'next';
import { BlockAbout } from '../components/BlockAbout/BlockAbout';
import { Footer } from '../components/Footer/Footer';

type Props = {
  upcomingMeetup?: {
    date: number;
    url: string;
    poster: string;
    location: {
      country: string;
      city: string;
      address: string;
    };
  };
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const upcomingMeetup = await getUpcomingMeetup();

  return {
    props: {
      upcomingMeetup,
    },
  };
};

export default function Home({ upcomingMeetup }: Props) {
  return (
    <>
      <Head>
        <title>SPB Frontend</title>
      </Head>

      <Navigation withUpcomingMeetup={!!upcomingMeetup} />

      {upcomingMeetup && (
        <BlockUpcomingMeetup
          poster={upcomingMeetup.poster}
          date={upcomingMeetup.date}
          address={upcomingMeetup.location.address}
          url={upcomingMeetup.url}
        />
      )}

      <BlockAbout />

      <Footer />
    </>
  );
}
