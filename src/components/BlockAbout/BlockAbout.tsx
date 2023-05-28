import React from 'react';
import { BlockTitle } from '../BlockTitle/BlockTitle';
import { Content } from '../Content/Content';
import { Block } from '../Block/Block';
import styles from './styles.module.css';
import classNames from 'classnames';

export const BlockAbout = () => {
  return (
    <section id="about" className={classNames('theme-light', styles.blockAbout)}>
      <Block>
        <Content>
          <BlockTitle>О нас</BlockTitle>

          <div className={styles.aboutDesc}>
            <p>
              <strong>SPB Frontend</strong> — сообщество петербургских фронтенд-разработчиков. Мы создаем теплую и
              дружественную атмосферу для обмена опытом и знаний в сфере разработки веб-интерфейсов. Наши встречи найдут
              полезными как новички, так и опытные разработчики. Мы помогаем специалистам обмениваться знаниями,
              налаживать профессиональные связи, вдохновляться и мотивироваться.
            </p>

            <p>
              С 2014-го года мы проводим митапы для фронтенд-разработчиков, которые представляют из себя бесплатную
              оффлайн-платформу для обмена знаниями и опытом для всех желающих. Следите за нашими новостями в{' '}
              <a href="https://t.me/spb_frontend">Telegram</a> и <a href="https://twitter.com/spb_frontend">Twitter</a>,
              чтобы не пропустить анонсы предстоящих событий.
            </p>
          </div>
        </Content>
      </Block>
    </section>
  );
};
