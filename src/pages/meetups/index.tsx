import Head from 'next/head';
import React from 'react';
import { MeetupList } from '../../components/BlockMeetups/BlockMeetups';
import { Meetup } from '../../types/meetup';
import { ContentBlock } from '../../components/ContentBlock/ContentBlock';
import { Footer } from '../../components/Footer/Footer';
import { MeetupsHeader } from '../../components/MeetupsHeader/MeetupsHeader';
import { Navigation } from '../../components/Navigation/Navigation';
import { getContentEntries } from '../../lib/contentful';

interface Props {
  events?: Meetup[];
}

type StaticProps = Promise<{
  props: Props;
}>;

export const getStaticProps: () => StaticProps = async () => ({
  props: {
    events: JSON.parse(await getContentEntries('meetup')),
  },
});

export default function Meetups({ events }: Props) {
  return (
    <>
      <Head>
        <title>SPB Frontend | Meetups</title>
      </Head>

      <Navigation withUpcomingMeetup={true} />

      <article>
        <MeetupsHeader title="Meetups" />

        <ContentBlock>
          <MeetupList events={events} />
        </ContentBlock>
      </article>

      <Footer />
    </>
  );
}
