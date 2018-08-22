import React from 'react';
import st from './style.module.css';
import Link from 'gatsby-link';
import BackButton from '../back-button';
import TelegramIcon from '-!svg-react-loader?name=Icon!../../../static/telegram.svg';
import VkIcon from '-!svg-react-loader?name=Icon!../../../static/vk.svg';
import SlackIcon from '-!svg-react-loader?name=Icon!../../../static/slack.svg';
import TwitterIcon from '-!svg-react-loader?name=Icon!../../../static/twitter.svg';
const translitRusEng = require('translit-rus-eng');
const {slugify} = require('transliteration');

const SocialIcon = ({user, link, children}) => {
  const icon = user ? (
    <span className={st.social_icon}>
      <a target="_blank" href={link}>
        {children}
      </a>
    </span>
  ) : null;
  return icon;
};

export default ({
  history,
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
      talks,
      photo,
    },
  },
}) => {
  return (
    <div>
      <div className={st.back_link}>
        <BackButton history={history} />
      </div>
      <div className={st.person}>
        <div className={st.person_info}>
          <h2>
            {name} {lastname}
            <br />
            {position && (
              <small className={st.person_position}>{position}</small>
            )}
          </h2>
          <div className={st.company}>{company}</div>
          <div className={st.social}>
            <SocialIcon link={`https://vk.com/${vk}`} user={vk}>
              <VkIcon />
            </SocialIcon>
            <SocialIcon link={`https://t.me/${telegram}`} user={telegram}>
              <TelegramIcon />
            </SocialIcon>
            <SocialIcon link={`https://twitter.com/${twitter}`} user={twitter}>
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
            <img src="/Person-placeholder.jpg" />
          )}
        </div>
      </div>
      {podcasts && (
        <div>
          <h4>Подкасты:</h4>
          {podcasts
            .sort((prev, next) => {
              return parseInt(next.number) - parseInt(prev.number);
            })
            .map(({title, number}) => {
              return (
                <div className={st.podcast_item} key={number}>
                  <Link to={`/podcast/${number}`}>{title}</Link>
                </div>
              );
            })}
        </div>
      )}
      {talks && (
        <div style={{marginTop: 50}}>
          <h4>Доклады:</h4>
          {talks
            .sort((prev, next) => {
              return next.path - prev.path;
            })
            .map(({title, ptitleth}, key) => {
              return (
                <div className={st.podcast_item} key={key}>
                  <Link to={`/talks/${slugify(translitRusEng(title))}`}>
                    {title}
                  </Link>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};
