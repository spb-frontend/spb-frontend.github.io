import { Talk } from '../Talks/types';

export interface Meetup {
  id: string;
  date: Date;
  title: string;
  talks: Talk[];
  poster?: {
    file: {
      url: string;
    };
  };
  url?: string;
  address?: string;
}

export interface BlockMeetupProps {
  event: Meetup;
}

export interface BlockMeetupsProps {
  events: Meetup[];
}

export interface MeetupListProps {
  events: Meetup[];
}
