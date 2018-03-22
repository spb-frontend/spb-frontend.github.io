import React from 'react'
import st from './style.module.css'
import Link, {navigateTo} from 'gatsby-link'
import TelegramIcon from '-!svg-react-loader?name=Icon!../../../static/telegram.svg'
import VkIcon from '-!svg-react-loader?name=Icon!../../../static/vk.svg'
import SlackIcon from '-!svg-react-loader?name=Icon!../../../static/slack.svg'
import TwitterIcon from '-!svg-react-loader?name=Icon!../../../static/twitter.svg'

const SocialIcon = ({user, link, children}) => {
  const icon = user ? (
    <span className={st.social_icon}>
      <a
        target='_blank'
        href={link}>
        {children}
      </a>
    </span>
  ) : null
  return icon
}

export default ({
  pathContext: {
    data: {
      name,
      lastname,
      position,
      vk,
      telegram,
      twitter,
      slack,
      company,
      podcasts,
      photo,
    },
  },
}) => {
  return (
    <div>
      <div className={st.back_link}>
        <Link to='/person/'>{'<'} назад</Link>
      </div>
      <div className={st.person}>
        <div className={st.person_info}>
          <h2>
            {name} {lastname}
          </h2>
          <div className={st.company}>{company}</div>
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
              link={twitter}
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
      <div>
        <h4>Подкасты:</h4>
        {podcasts.map(({title, number}, index) => {
          return (
            <div
              className={st.podcast_item}
              key={index}>
              <Link
                to={`/podcast/${number}`}>
                {title}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
