import React from 'react';
import Head from 'next/head';
import { BlockNearestMeetup } from '../components/BlockNearestMeetup/BlockNearestMeetup';
import { getMeetupList, getLastMeetup } from '../lib/timepad';
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
  const list = await getMeetupList();
  const upcomingMeetup = await getLastMeetup(list);

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
        <BlockNearestMeetup
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
