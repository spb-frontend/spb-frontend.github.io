import { Talk } from './talk';

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
