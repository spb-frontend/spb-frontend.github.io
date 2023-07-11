import React, { PropsWithChildren } from 'react';
import { PersonType } from '../../types/person';
import styles from './styles.module.css';

export type PersonProps = PropsWithChildren<{
  person: PersonType;
}>;

export const Person = ({ children, person }: PersonProps) => (
  <>
    <img className={styles.portrait} src={person.photo.file.url} alt={`${person.name} ${person.lastname}`} />
    <div>
      <div className={styles.name}>
        {person.name} {person.lastname}
      </div>
      {children}
    </div>
  </>
);
