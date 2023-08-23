import { PersonType } from './person';

export interface Talk {
  title: string;
  shortTitle: string;
  slides?: string;
  video?: string;
  persons: PersonType[];
}
