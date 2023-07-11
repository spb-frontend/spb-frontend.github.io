import { GetStaticPaths } from 'next';
import Head from 'next/head';
import React from 'react';
import { Meetup } from '../../../types/meetup';
import { ContentBlock } from '../../../components/ContentBlock/ContentBlock';
import { Footer } from '../../../components/Footer/Footer';
import { MeetupsHeader } from '../../../components/MeetupsHeader/MeetupsHeader';
import { Navigation } from '../../../components/Navigation/Navigation';
import { Talks } from '../../../components/Talks/Talks';
import { getContentEntry, getContentEntries } from '../../../lib/contentful';

interface Props {
  event: Meetup;
}

type StaticProps = Promise<{
  props: Props;
}>;

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: JSON.parse(await getContentEntries('meetup')).map(({ id }) => ({ params: { id } })),
  fallback: false,
});

export const getStaticProps: ({ params }) => StaticProps = async ({ params }) => ({
  props: {
    event: JSON.parse(await getContentEntry(params.id)),
  },
});

export default function MeetupPage({ event }: Props) {
  const title = `SPB Frontend | ${event.title}`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Navigation withUpcomingMeetup={true} />

      <article>
        <MeetupsHeader title={event.title} date={new Date(event.date)} />

        <ContentBlock>
          <Talks talks={event.talks} />
        </ContentBlock>
      </article>

      <Footer />
    </>
  );
}
