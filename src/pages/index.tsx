import React from 'react';
import Head from 'next/head';
import { BlockNearestMeetup } from '../components/BlockNearestMeetup/BlockNearestMeetup';
import { getMeetupList, getLastMeetup } from '../lib/timepad';
import { Navigation } from '../components/Navigation/Navigation';
import { GetStaticProps } from 'next';
import { BlockAbout } from '../components/BlockAbout/BlockAbout';
import { Footer } from '../components/Footer/Footer';

type Props = {
  nearestEvent?: {
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
  const nearestEvent = list ? (await getLastMeetup(list)) ?? undefined : undefined;

  return {
    props: {
      nearestEvent,
    },
  };
};

export default function Home({ nearestEvent }: Props) {
  return (
    <>
      <Head>
        <title>SPB Frontend</title>
      </Head>

      <Navigation withUpcomingMeetup={!!nearestEvent} />

      {nearestEvent && (
        <BlockNearestMeetup
          isUpcomingEvent={nearestEvent.date >= new Date().getTime()}
          poster={nearestEvent.poster}
          date={nearestEvent.date}
          address={nearestEvent.location.address}
          url={nearestEvent.url}
        />
      )}

      <BlockAbout />

      <Footer />
    </>
  );
}
