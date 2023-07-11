import Head from 'next/head';
import React, { useMemo } from 'react';
import { BlockTitle } from '../../components/BlockTitle/BlockTitle';
import { ContentBlock } from '../../components/ContentBlock/ContentBlock';
import { Footer } from '../../components/Footer/Footer';
import { MeetupList } from '../../components/MeetupList/MeetupList';
import { Navigation } from '../../components/Navigation/Navigation';
import { getContentEntries } from '../../lib/contentful';
import { Meetup } from '../../types/meetup';

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
  const eventsByYears = useMemo(
    () =>
      events.reduce((acc, item) => {
        const year = new Date(item.date).getFullYear();

        return { ...acc, [year]: [...(acc[year] ?? []), item] };
      }, {}),
    [events]
  );

  console.log(eventsByYears);

  return (
    <>
      <Head>
        <title>Митапы — SPB Frontend</title>
      </Head>

      <Navigation />

      <article>
        <ContentBlock>
          {Object.keys(eventsByYears)
            .sort((a, b) => Number(b) - Number(a))
            .map((year) => {
              const events = eventsByYears[year];

              return (
                <>
                  <BlockTitle>{year}</BlockTitle>
                  <MeetupList events={events} key={year} />
                </>
              );
            })}
        </ContentBlock>
      </article>

      <Footer />
    </>
  );
}
