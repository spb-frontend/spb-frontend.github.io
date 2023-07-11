import { Person } from '../Person/types';

export interface Talk {
  title: string;
  shortTitle: string;
  slides?: string;
  video?: string;
  persons: Person[];
}

export interface TalkProps {
  talks: Talk[];
}
