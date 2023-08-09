import React from 'react';
import { Meetup } from '../../types/meetup';
import { BlockHeading } from '../BlockHeading/BlockHeading';
import { Button } from '../Button/Button';
import { ContentBlock } from '../ContentBlock/ContentBlock';
import { MeetupList } from '../MeetupList/MeetupList';
import styles from './styles.module.css';

export interface BlockMeetupsProps {
  events: Meetup[];
}
export const BlockMeetups = (props: BlockMeetupsProps) => (
  <section>
    <ContentBlock dropTopPadding>
      <div className={styles.headingWrapper}>
        <BlockHeading>Митапы</BlockHeading>
        <Button href="/meetups" variant="contained" type="primary" title="Смотреть все митапы">
          Смотреть все
        </Button>
      </div>

      <MeetupList events={props.events} />
    </ContentBlock>
  </section>
);
