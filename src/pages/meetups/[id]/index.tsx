import { GetStaticPaths } from 'next';
import Head from 'next/head';
import React from 'react';
import { BlockHeading } from '../../../components/BlockHeading/BlockHeading';
import { ContentBlock } from '../../../components/ContentBlock/ContentBlock';
import { Footer } from '../../../components/Footer/Footer';
import { MeetupPoster } from '../../../components/MeetupPoster/MeetupPoster';
import { MeetupsHeader } from '../../../components/MeetupsHeader/MeetupsHeader';
import { Navigation } from '../../../components/Navigation/Navigation';
import { Talks } from '../../../components/Talks/Talks';
import { getContentEntry, getContentEntries } from '../../../lib/contentful';
import { Meetup } from '../../../types/meetup';

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
  const title = `${event.title} — SPB Frontend`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Navigation />

      <article>
        <ContentBlock>
          <MeetupsHeader title={event.title} date={new Date(event.date)} address={event.address} />

          {event.poster && <MeetupPoster poster={event.poster.file.url} />}

          <BlockHeading>Спикеры</BlockHeading>
          <Talks talks={event.talks} />
        </ContentBlock>
      </article>

      <Footer />
    </>
  );
}
