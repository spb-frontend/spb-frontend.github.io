import Head from 'next/head';
import React from 'react';
import { BlockAbout } from '../components/BlockAbout/BlockAbout';
import { BlockMeetups } from '../components/BlockMeetups/BlockMeetups';
import { BlockNearestMeetup } from '../components/BlockNearestMeetup/BlockNearestMeetup';
import { Footer } from '../components/Footer/Footer';
import { Navigation } from '../components/Navigation/Navigation';
import { getContentEntries } from '../lib/contentful';
import { Meetup } from '../types/meetup';

type Props = {
  nearestEvent?: Meetup;
  eventList: Meetup[];
};

export const getStaticProps: () => Promise<{ props: Props }> = async () => {
  const eventList: Meetup[] = JSON.parse(await getContentEntries('meetup', 6)) ?? [];
  const nearestEvent = eventList.length && new Date(eventList[0].date) >= new Date() ? eventList[0] : null;

  return {
    props: {
      eventList,
      nearestEvent,
    },
  };
};

export default function Home({ nearestEvent, eventList }: Props) {
  return (
    <>
      <Head>
        <title>SPB Frontend</title>
      </Head>

      <Navigation withUpcomingMeetup={!!nearestEvent} />

      {nearestEvent && (
        <BlockNearestMeetup isUpcomingEvent={new Date(eventList[0].date) >= new Date()} {...nearestEvent} />
      )}

      <BlockAbout />

      {!!eventList.length && <BlockMeetups events={eventList} />}

      <Footer />
    </>
  );
}
