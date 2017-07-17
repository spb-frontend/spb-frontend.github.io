import React from 'react'

import { SubscriptionForm } from '../components/subscription-form'

import '../css/typography.css'
import '../css/index.css'

const Template = (props) =>
  <div className='page'>
    <header className='page--header'>
      <h1 className='page--heading'>SPB Frontend</h1>
    </header>

    <div className='page--container'>
      <aside className='page--aside'>
        <a
          className='no-border'
          href='/'>

          <picture className='logo page--logo'>
            <source
              type='image/webp'
              srcSet='
              https://ucarecdn.com/bcedcf3c-77c7-4693-8888-7e5645185882/-/preview/-/resize/200x/-/format/webp/spb_frontend_logo.webp 1x,
              https://ucarecdn.com/bcedcf3c-77c7-4693-8888-7e5645185882/-/preview/-/resize/400x/-/format/webp/-/quality/lightest/spb_frontend_logo@2x.webp 2x' />
            <img
              src='https://ucarecdn.com/bcedcf3c-77c7-4693-8888-7e5645185882/-/preview/-/resize/200x/spb_frontend_logo.png'
              srcSet='https://ucarecdn.com/bcedcf3c-77c7-4693-8888-7e5645185882/-/preview/-/resize/400x/-/quality/lightest/spb_frontend_logo@2x.png 2x'
              alt='SPB Frontend. Frontend artisans' />
          </picture>
        </a>

        <dl className='contacts'>
          <dt className='contacts--term'>ВКонтакте</dt>
          <dd className='contacts--desc'>
            <a href='https://vk.com/spb_frontend'>spb_frontend</a>
          </dd>
          <dt className='contacts--term'>Твитер</dt>
          <dd className='contacts--desc'>
            <a href='https://twitter.com/spb_frontend'>@spb_frontend</a>
          </dd>
          <dt className='contacts--term'>Канал в Телеграме</dt>
          <dd className='contacts--desc'>
            <a href='https://t.me/spb_frontend'>@spb_frontend</a>
          </dd>
          <dt className='contacts--term'>Канал на ютубе</dt>
          <dd className='contacts--desc'>
            <a href='https://www.youtube.com/channel/UCWjDubFXv8I1vWEb47s9_IA'>
              SPB Frontend
            </a>
          </dd>
          <dt className='contacts--term'>Слак-чат</dt>
          <dd className='contacts--desc'>
            <a href='https://spb-frontend.slack.com/'>spb-frontend.slack.com</a>
          </dd>
          <dt className='contacts--term'>Регистрация в Слак</dt>
          <dd className='contacts--desc'>
            <a href='http://slack.spb-frontend.ru/'>slack.spb-frontend.ru</a>
          </dd>
          <dt className='contacts--term'>Гитхаб</dt>
          <dd className='contacts--desc'>
            <a href='https://github.com/spb-frontend'>spb-frontend</a>
          </dd>
          <dt className='contacts--term'>Почта</dt>
          <dd className='contacts--desc'>
            <a href='mailto:hi@spb-frontend.ru'>hi@spb-frontend.ru</a>
          </dd>
        </dl>

        <SubscriptionForm />
      </aside>

      <main className='page--content'>{props.children()}</main>
    </div>

    <footer className='page--footer'>
      <div>
        <a href='https://github.com/spb-frontend/spb-frontend.ru'>
          Сайт на гитхабе
        </a>
      </div>
    </footer>
  </div>

export default Template

export const defaultHelmetMeta = [
  {
    name: 'theme-color',
    content: '#ffffff',
  },
  {
    property: 'og:title',
    content: 'SPB Frontend',
  },
  {
    property: 'og:description',
    content: 'Петербургское сообщество фронтенд-разработчиков',
  },
  {
    property: 'og:image',
    content:
      'https://ucarecdn.com/bcedcf3c-77c7-4693-8888-7e5645185882/-/preview/-/resize/1200x/-/crop/1200x630/0,300/spb_frontend_social.png',
  },
  {
    property: 'og:url',
    content: 'http://spb-frontend.ru/',
  },
  {
    name: 'twitter:card',
    content: 'summary_large_image',
  },
  {
    name: 'twitter:site',
    content: '@spb_frontend',
  },
  {
    name: 'twitter:image:alt',
    content: 'SPB Frontend. Frontend artisans',
  },
  {
    name: 'description',
    content: 'Петербургское сообщество фронтенд-разработчиков',
  },
  {
    name: 'keywords',
    content: 'frontend, spb-frontend',
  },
]
