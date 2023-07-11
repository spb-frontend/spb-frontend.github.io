import React from 'react';
import { Name, Portrait } from './styled';
import { PersonProps } from './types';

export const Person = ({ children, person }: PersonProps) => (
  <>
    <Portrait
      src={person.photo.file.url}
      alt={`${person.name} ${person.lastname}`}
    />
    <div>
      <Name>{person.name} {person.lastname}</Name>
      {children}
    </div>
  </>
);
