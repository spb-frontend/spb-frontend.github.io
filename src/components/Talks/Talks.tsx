import Link from 'next/link';
import React from 'react';
import { Talk } from '../../types/talk';
import { Person } from '../Person/Person';
import { Wrapper, TalkContent, TalkTitle, TalkBlock } from './styled';

export interface TalkProps {
  talks: Talk[];
}

export const Talks = ({ talks }: TalkProps) => (
  <Wrapper>
    {talks.map((talk, index) => (
      <div key={index}>
        {talk?.persons.map((person, key) => (
          <TalkBlock key={key}>
            <Person person={person}>
              <TalkTitle>{talk.shortTitle}</TalkTitle>
              <TalkContent>
                {talk.slides && (
                  <Link href={talk.slides} target="_blank">
                    Слайды
                  </Link>
                )}
                {talk.video && (
                  <Link href={talk.video} target="_blank">
                    Видео
                  </Link>
                )}
              </TalkContent>
            </Person>
          </TalkBlock>
        ))}
      </div>
    ))}
  </Wrapper>
);
