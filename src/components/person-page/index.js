import React from 'react';
import st from './style.module.css';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import marked from 'marked';
import {defaultHelmetMeta} from '../../layouts/index';
import BackButton from '../back-button';
import TelegramIcon from '-!svg-react-loader?name=Icon!../../../static/telegram.svg';
import VkIcon from '-!svg-react-loader?name=Icon!../../../static/vk.svg';
import SlackIcon from '-!svg-react-loader?name=Icon!../../../static/slack.svg';
import TwitterIcon from '-!svg-react-loader?name=Icon!../../../static/twitter.svg';

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

export default ({history, pathContext: {data}}) => {
  const {
    name,
    lastname,
    position,
    vk,
    telegram,
    twitter,
    slack,
    bio,
    company,
    podcasts,
    talks,
    photo,
    slug,
  } = data;

  const title = `${name} ${lastname}`;
  const description = bio ? bio.bio : `${name} ${lastname}`;
  const metaImage = `${photo.file.url}?w=450&h=315&q=100`;
  const twitterImage = `${photo.file.url}?w=300&h=157&q=100`;

  return (
    <div>
      <Helmet
        meta={[
          {name: 'author', content: title},

          {name: 'twitter:card', content: 'summary'},
          {name: 'twitter:description', content: description},
          {name: 'twitter:site', content: title},
          {name: 'twitter:creator', content: 'spb_frontend'},
          {name: 'twitter:title', content: title},
          {name: 'twitter:image', content: twitterImage},
          {name: 'twitter:image:width', content: '300'},
          {name: 'twitter:image:height', content: '157'},

          {property: 'og:title', content: title},
          {property: 'og:site_name', content: title},
          {property: 'og:type', content: 'website'},

          {
            property: 'og:url',
            content: `https://spb-frontend.ru/persons/${slug}`,
          },
          {property: 'og:description', content: description},
          {property: 'og:image', content: metaImage},
          {property: 'og:site_name', content: title},

          {name: 'viewport', content: 'width=device-width, maximum-scale=1'},
        ]}
      />
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
            {bio && <div dangerouslySetInnerHTML={{__html: marked(bio.bio)}} />}
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
            .map(({title, slug}, key) => {
              return (
                <div className={st.podcast_item} key={key}>
                  <Link to={`/talks/${slug}`}>{title}</Link>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};
