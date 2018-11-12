import React from 'react'
import st from './style.module.css'
import TelegramIcon from '-!svg-react-loader?name=Icon!../../../static/telegram.svg'
import VkIcon from '-!svg-react-loader?name=Icon!../../../static/vk.svg'
import SlackIcon from '-!svg-react-loader?name=Icon!../../../static/slack.svg'
import TwitterIcon from '-!svg-react-loader?name=Icon!../../../static/twitter.svg'
import { Layout } from '../layout'

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

export default ({
  pageContext: {
    data: { title, description: description_, persons, slides, video },
  },
}) => {
  const { description } = description_ || {}
  const [{ photo, name, lastname, vk, telegram, twitter, slack }] =
    persons || []
  return (
    <Layout>
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

      <div style={{ marginTop: 10 }}>{title}</div>
      <div style={{ marginTop: 10 }}>{description}</div>

      <div style={{ marginTop: 20 }}>
        {slides && (
          <div className={st.talkTitle}>
            <a
              className={st.personName}
              href={slides}>
              Слайды
            </a>
          </div>
        )}
        {video && (
          <div className={st.talkTitle}>
            <a
              className={st.personName}
              href={video}>
              Видео
            </a>
          </div>
        )}
      </div>
    </Layout>
  )
}
