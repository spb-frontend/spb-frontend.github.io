import React from 'react'
import Helmet from 'react-helmet'
import {Link} from 'gatsby'
import RSSIcon from '-!svg-react-loader?name=Icon!../../static/rss-symbol.svg'
import ITunesIcon from '-!svg-react-loader?name=Icon!../../static/itunes.svg'
import TelegramIcon from '-!svg-react-loader?name=Icon!../../static/telegram.svg'

import styles from './../css/podcast.module.css'
import {defaultHelmetMeta, Layout} from './layout'

const PostLink = ({title, formatedDate, to}) => (
  <div className={styles.post}>
    <header className={styles.header}>
      <h3 className={styles.header_title}>
        <Link
          className='title'
          to={to}>
          {title}
        </Link>
      </h3>
      <date className={styles.header_date}>{formatedDate}</date>
    </header>
  </div>
)

export default props => {
  const {
    pageContext: {
      data: {episodes},
    },
  } = props

  return (
    <Layout>
      <h2 className={styles.title}>🍻 Drinkcast 🍻</h2>
      <div className={styles.links}>
        <a
          className={styles.linksItem}
          href='http://spb-frontend.ru/podcast.xml'
          target='_blank'
          rel='noopener noreferrer'>
          <RSSIcon className={styles.rss_icon} /> RSS
        </a>
        <a
          className={styles.linksItem}
          href='https://itunes.apple.com/us/podcast/spb-frontend-drinkcast/id1269128794'
          target='_blank'
          rel='noopener noreferrer'>
          <ITunesIcon className={styles.itunes_icon} /> iTunes
        </a>
        <a
          className={styles.linksItem}
          href='https://player.fm/series/spb-frontend-drinkcast-1519092'
          target='_blank'
          rel='noopener noreferrer'>
          PlayerFM
        </a>
        <a
          className={styles.linksItem}
          href='https://t.me/drinkcast'
          target='_blank'
          rel='noopener noreferrer'>
          <TelegramIcon className={styles.telegram_icon} /> Телеграм
        </a>
      </div>
      <div>
        {episodes.map(({node: {title, date, number, formatedDate}}) => (
          <PostLink
            key={number + title}
            title={title}
            date={date}
            formatedDate={formatedDate}
            to={`/podcast/${number}`} />
        ))}
      </div>

      <Helmet meta={defaultHelmetMeta}>
        <title>SPB Frontend. Drinkcast</title>
        <link
          rel='alternate'
          type='application/rss+xml'
          href='/podcast.xml' />
      </Helmet>
    </Layout>
  )
}
