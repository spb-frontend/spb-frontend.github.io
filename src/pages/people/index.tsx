import Head from 'next/head';
import React from 'react';
import { ContentBlock } from '@/components/ContentBlock/ContentBlock';
import { Footer } from '@/components/Footer/Footer';
import { MeetupsHeader } from '@/components/MeetupsHeader/MeetupsHeader';
import { Navigation } from '@/components/Navigation/Navigation';
import { Person } from '@/components/Person/types';
import { getContentEntries } from '@/lib/contentful';

interface Props {
  people?: Person[];
}

type StaticProps = Promise<{
  props: Props
}>

export const getStaticProps: () => StaticProps = async () => ({
  props: {
    people: JSON.parse(await getContentEntries('person', '-fields.lastname')),
  },
});

export default function Meetups({ people }: Props) {

  return (
    <>
      <Head>
        <title>SPB Frontend | Люди</title>
      </Head>

      <Navigation withUpcomingMeetup={true} />

      <article>
        <MeetupsHeader title="Люди" />

        <ContentBlock>
          {people.map(item => (
            item.name
          ))}
        </ContentBlock>
      </article>

      <Footer />
    </>
  );
}
