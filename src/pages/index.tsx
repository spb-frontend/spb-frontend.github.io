import React from 'react';
import { BlockAbout } from '../components/BlockAbout/BlockAbout';
import { BlockMeetups } from '../components/BlockMeetups/BlockMeetups';
import { BlockNearestMeetup } from '../components/BlockNearestMeetup/BlockNearestMeetup';
import { Layout } from '../components/Layout/Layout';
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
    <Layout title="SPB Frontend" withTopSpace={!!nearestEvent}>
      <>
        {nearestEvent && (
          <BlockNearestMeetup isUpcomingEvent={new Date(eventList[0].date) >= new Date()} {...nearestEvent} />
        )}

        <BlockAbout />

        {!!eventList.length && <BlockMeetups events={eventList} />}
      </>
    </Layout>
  );
}
