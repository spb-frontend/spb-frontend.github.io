import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { SocialsList } from '../SocialsList/SocialsList';
import { navigation } from '../../constants/navigation';
import styles from './styles.module.css';

type Props = {
  withUpcomingMeetup: boolean;
};

export const Navigation = (props: Props) => {
  const router = useRouter();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const headerElementRef = useRef<HTMLElement | null>(null);

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const headerElement = headerElementRef.current;

    if (headerElement == null || !props.withUpcomingMeetup) {
      return;
    }

    const handleScroll = () => {
      const opacity = Math.min(window.scrollY || window.pageYOffset, 300) / 300;

      headerElement.style.backgroundColor = `rgb(var(--color-black) / ${opacity})`;
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headerElementRef.current, props.withUpcomingMeetup]);

  return (
    <>
      <header
        className={classNames(styles.header, {
          [styles.open]: isMenuOpen,
          [styles.transparent]: props.withUpcomingMeetup,
        })}
        ref={headerElementRef}
      >
        <Link className={styles.logoLink} href="/" onClick={handleCloseMenu} title="Главная страница" />

        <a
          href="#"
          className={classNames(styles.hamburgerButton, { [styles.active]: isMenuOpen })}
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(!isMenuOpen);
          }}
        />

        <div className={styles.menuList}>
          {navigation.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              target={item.target}
              rel={item.rel}
              className={classNames(styles.menuLink, { [styles.active]: router.asPath === item.href })}
              title={item.title}
            >
              <item.Icon size={25} />
              &nbsp;{item.title}
            </Link>
          ))}
        </div>
      </header>

      <div className={classNames(styles.mobileMenuWrapper, { [styles.open]: isMenuOpen })}>
        <div className={styles.mobileMenuList}>
          {navigation.map((item, i) => (
            <Link
              className={styles.mobileMenuLink}
              key={i}
              href={item.href}
              target={item.target}
              rel={item.rel}
              onClick={handleCloseMenu}
              title={item.title}
            >
              <item.Icon size={48} />
              &nbsp;
              {item.title}
            </Link>
          ))}
        </div>
        <div className={styles.socials}>
          <div className={styles.socialsTitle}>Подписывайтесь на нас в соцсетях:</div>
          <SocialsList />
        </div>
      </div>

      {!props.withUpcomingMeetup && <div className={styles.spacer} />}
    </>
  );
};