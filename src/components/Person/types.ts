import { PropsWithChildren } from 'react';

export interface Person {
  name: string;
  lastname: string;
  photo: {
    file: {
      url: string;
    }
  }
}

export type PersonProps = PropsWithChildren<{
  person: Person
}>
