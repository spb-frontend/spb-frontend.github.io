import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import { ContentBlock } from '../ContentBlock/ContentBlock';
import { navigation } from '../../constants/navigation';
import { GITHUB, TELEGRAM, TELEGRAM_CHAT, TWITTER, YOUTUBE } from '../../constants/urls';
import styles from './styles.module.css';

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <ContentBlock>
        <div className={styles.flexWrapper}>
          <div className={classNames(styles.footerBlock, styles.first)}>
            <div className={styles.logo} />
            {/* <CooperationInfo>
                По вопросам сотрудничества:
              <br />
              <a href="mailto:hi@spb-frontend.ru">hi@spb-frontend.ru</a>
              </CooperationInfo> */}
          </div>

          <div className={classNames(styles.footerBlock, styles.second)}>
            <div className={styles.blockTitle}>Навигация</div>

            <nav className={styles.navWrapper}>
              {navigation.map((item, i) => (
                <Link className={styles.navLink} key={i} href={item.href} title={item.title}>
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          <div className={classNames(styles.footerBlock, styles.third)}>
            <div className={styles.blockTitle}>Социальные сети</div>

            <div className={styles.navWrapper}>
              {[
                {
                  href: TELEGRAM,
                  title: 'Канал в Telegram',
                },
                {
                  href: TELEGRAM_CHAT,
                  title: 'Чат в Telegram',
                },
                {
                  href: TWITTER,
                  title: 'Twitter',
                },
                {
                  href: YOUTUBE,
                  title: 'YouTube',
                },
                {
                  href: GITHUB,
                  title: 'GitHub',
                },
              ].map((item, i) => (
                <Link className={styles.navLink} key={i} href={item.href} title={item.title}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.copyrightLine}>&copy; SPB Frontend, 2014—{new Date().getFullYear()}</div>
      </ContentBlock>
    </footer>
  );
};
