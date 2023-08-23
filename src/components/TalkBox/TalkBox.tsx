import React from 'react';
import { Talk } from '../../types/talk';
import styles from './styles.module.css';

type Props = {
  talk: Talk;
};

export const TalkBox = (props: Props) => {
  // TODO: Render multiple persons
  const person = props.talk.persons[0];

  return (
    <article className={styles.talkBlock}>
      <div>
        <h4 className={styles.talkTitle}>{props.talk.shortTitle}</h4>

        <div className={styles.speaker}>
          <img className={styles.speakerPhoto} src={person.photo.file.url} alt={`${person.name} ${person.lastname}`} />

          <div className={styles.speakerName}>
            {person.name} {person.lastname}
            <br />
            {[person.position, person.company].filter((x) => !!x).join(', ')}
          </div>
        </div>

        {/* <div className={styles.talkContent}>
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
              </div> */}
      </div>
    </article>
  );
};
