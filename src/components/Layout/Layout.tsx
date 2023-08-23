import Head from 'next/head';
import React, { PropsWithChildren, ReactNode } from 'react';
import { ContentBlock } from '../ContentBlock/ContentBlock';
import { Footer } from '../Footer/Footer';
import { Heading } from '../Heading/Heading';
import { Navigation } from '../Navigation/Navigation';

export const Layout = (props: PropsWithChildren<{ heading?: string | ReactNode; title: string; withTopSpace?: boolean }>) => (
  <>
    <Head>
      <title>{props.title}</title>
    </Head>

    <Navigation withUpcomingMeetup={props.withTopSpace} />

    <article>
      <ContentBlock>
        {!!props.heading && (
          typeof props.heading === 'string'
            ? <Heading>{props.heading}</Heading>
            : props.heading
        )}

        {props.children}
      </ContentBlock>
    </article>

    <Footer />
  </>
);
