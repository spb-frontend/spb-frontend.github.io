import React, { useMemo } from 'react';
import { BlockHeading } from '../../components/BlockHeading/BlockHeading';
import { Layout } from '../../components/Layout/Layout';
import { MeetupList } from '../../components/MeetupList/MeetupList';
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

  return (
    <Layout heading="Митапы" title="Митапы — SPB Frontend">
      <>
        {Object.keys(eventsByYears)
          .sort((a, b) => Number(b) - Number(a))
          .map((year) => {
            const events = eventsByYears[year];

            return (
              <div key={year}>
                <BlockHeading>{year}</BlockHeading>
                <MeetupList events={events} key={year} />
              </div>
            );
          })}
      </>
    </Layout>
  );
}
