import React from 'react';
import styles from './styles.module.css';
import { PersonProps } from './types';

export const Person = ({ children, person }: PersonProps) => (
  <>
    <img
      className={styles['person-portrait']}
      src={person.photo.file.url}
      alt={`${person.name} ${person.lastname}`}
      loading="lazy"
    />
    <div>
      <div className={styles['person-name']}>{person.name} {person.lastname}</div>
      {children}
    </div>
  </>
);
