import React from 'react';
import Link from 'next/link';
import { navigation } from '../../constants/navigation';
import { Content } from '../Content/Content';
import { Block } from '../Block/Block';
import styles from './styles.module.css';
import classNames from 'classnames';

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <Block>
        <Content>
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
                    href: 'https://t.me/spb_frontend',
                    title: 'Канал в Telegram',
                  },
                  {
                    href: 'https://t.me/spb_frontend_chat',
                    title: 'Чат в Telegram',
                  },
                  {
                    href: 'https://twitter.com/spb_frontend',
                    title: 'Twitter',
                  },
                  {
                    href: 'https://youtube.com/@spb_frontend',
                    title: 'YouTube',
                  },
                  {
                    href: 'https://github.com/spb-frontend/',
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
        </Content>
      </Block>
    </div>
  );
};
