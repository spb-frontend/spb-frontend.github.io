import React from 'react'
import st from './style.module.css'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import marked from 'marked'
import { Layout } from '../layout'
import TelegramIcon from '-!svg-react-loader?name=Icon!../../../static/telegram.svg'
import VkIcon from '-!svg-react-loader?name=Icon!../../../static/vk.svg'
import SlackIcon from '-!svg-react-loader?name=Icon!../../../static/slack.svg'
import TwitterIcon from '-!svg-react-loader?name=Icon!../../../static/twitter.svg'

const SocialIcon = ({ user, link, children }) => {
  const icon = user ? (
    <span className={st.social_icon}>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href={link}>
        {children}
      </a>
    </span>
  ) : null
  return icon
}

const correctRussianEnding = num => {
  if (num === 1) {
    return ''
  }
  if (num > 1 && num <= 4) {
    return 'а'
  }
  if (num > 4) {
    return 'ов'
  }
  return ''
}

export default ({ pageContext: { data } }) => {
  const {
    name,
    lastname,
    vk,
    telegram,
    twitter,
    slack,
    bio,
    podcasts,
    talks,
    photo,
    slug,
  } = data

  const stats = `${
    podcasts
      ? `${podcasts.length} подкаст${correctRussianEnding(podcasts.length)}; `
      : ''
  }${
    talks ? `${talks.length} доклад${correctRussianEnding(talks.length)};` : ''
  }`

  const title = `${name} ${lastname}`
  const description = bio ? `${bio.bio} ${stats}` : stats
  const metaImage = `${photo.file.url}?w=450&h=315&q=100`
  const twitterImage = `https:${photo.file.url}?w=300&h=157&q=100`

  const url = `https://spb-frontend.ru/persons/${slug}`
  return (
    <Layout>
      <Helmet
        meta={[
          { name: 'author', content: title },

          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:site', content: '@spb_frontend' },
          { name: 'twitter:creator', content: '@spb_frontend' },
          { name: 'twitter:title', content: title },
          { name: 'twitter:url', content: url },
          { name: 'twitter:image', content: twitterImage },
          { name: 'twitter:image:src', content: twitterImage },
          { name: 'twitter:image:width', content: '300' },
          { name: 'twitter:image:height', content: '157' },

          { property: 'og:title', content: title },
          { property: 'og:site_name', content: title },
          { property: 'og:type', content: 'website' },

          {
            property: 'og:url',
            content: url,
          },
          { property: 'og:description', content: description },
          { property: 'og:image', content: metaImage },
          { property: 'og:site_name', content: title },

          { name: 'viewport', content: 'width=device-width, maximum-scale=1' },
        ]} />
      <div className={st.person}>
        <div className={st.person_info}>
          <h2>
            {name} {lastname}
          </h2>
          <div className={st.social}>
            <SocialIcon
              link={`https://vk.com/${vk}`}
              user={vk}>
              <VkIcon />
            </SocialIcon>
            <SocialIcon
              link={`https://t.me/${telegram}`}
              user={telegram}>
              <TelegramIcon />
            </SocialIcon>
            <SocialIcon
              link={`https://twitter.com/${twitter}`}
              user={twitter}>
              <TwitterIcon />
            </SocialIcon>
            {slack ? (
              <span className={st.slack_icon}>
                <SlackIcon /> <span className={st.slack_name}>{slack}</span>
              </span>
            ) : null}
            {bio && (
              <div dangerouslySetInnerHTML={{ __html: marked(bio.bio) }} />
            )}
          </div>
        </div>
        <div className={st.person_image}>
          {photo ? (
            <img src={`https:${photo.file.url}?fit=thumb&h=200&w=200`} />
          ) : (
            <img src='/Person-placeholder.jpg' />
          )}
        </div>
      </div>
      {podcasts && (
        <div>
          <h4>Подкасты:</h4>
          {podcasts
            .sort((prev, next) => {
              return parseInt(next.number) - parseInt(prev.number)
            })
            .map(({ title, number }) => {
              return (
                <div
                  className={st.podcast_item}
                  key={number}>
                  <Link to={`/podcast/${number}`}>{title}</Link>
                </div>
              )
            })}
        </div>
      )}
      {talks && (
        <div style={{ marginTop: 50 }}>
          <h4>Доклады:</h4>
          {talks
            .sort((prev, next) => {
              return next.path - prev.path
            })
            .map(({ title, slug }, key) => {
              return (
                <div
                  className={st.podcast_item}
                  key={key}>
                  <Link to={`/talks/${slug}`}>{title}</Link>
                </div>
              )
            })}
        </div>
      )}
    </Layout>
  )
}
