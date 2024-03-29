import React from 'react';
import { BlockTitle } from '@/components//BlockTitle/BlockTitle';
import { ContentBlock } from '@/components/ContentBlock/ContentBlock';
import { TELEGRAM, TWITTER } from '@/constants/urls';
import styles from './styles.module.css';

export const BlockAbout = () => (
  <section id="about" className={styles['blockAbout-container']}>
    <ContentBlock>
      <BlockTitle>О нас</BlockTitle>

      <div className={styles['blockAbout-detailedInfo']}>
        <p>
            Привет! Мы — <strong>SPB Frontend</strong>, сообщество{' '}
          <dfn
            title={
              'Фронтенд (англ. frontend) — интерфейс сайтов и веб-приложений в контексте веб-разработки. ' +
                'В общем случае фронтенд это клиентская часть программного обеспечения в модели «клиент — сервер». '
            }
          >
              фронтенд-разработчиков
          </dfn>{' '}
            в Санкт-Петербурге. Мы объединяем специалистов, чтобы говорить о фронтенде, веб-разработке и об IT в
            целом. Мы помогаем новичкам и профессионалам обмениваться опытом, узнавать новое, устанавливать связи в
            профессиональной среде и получать вдохновение для своих достижений.
        </p>

        <p>
            С 2014-го года мы проводим{' '}
          <dfn
            title={
              'Митап (англ. meet up — встречаться) — неформальная встреча людей и сообществ со схожими ' +
                'интересами, хобби и профессиями для обсуждения общих вопросов и обмена навыками и опытом'
            }
          >
              митапы
          </dfn>
            , где специалисты разного уровня рассказывают о своём опыте. Мы открыты для всех желающих, следите за
            нашими новостями в <a href={TELEGRAM}>Telegram</a> и{' '}
          <a href={TWITTER}>Twitter</a>, чтобы не пропустить анонсы предстоящих событий.
        </p>
      </div>
    </ContentBlock>
  </section>
);
