import { Talk } from '@/components/Talks/types';

export interface Meetup {
  id: string;
  date: Date;
  title: string;
  talks: Talk[];
  poster?: string;
  url?: string;
  address?: string;
}

export type BlockMeetupsProps = {
  events: Meetup[];
}

export interface MeetupListProps {
  events: Meetup[];
}
