import React from 'react'
import {Link} from 'react-router'
import {prefixLink} from 'gatsby-helpers'
import Helmet from 'react-helmet'
import {config} from 'config'

const Index = () =>
  <div>
    <p>
      SPB Frontend — петербургское сообщество фронтенд-разработчиков.
      Мы регулярно проводим встречи с 2014 года.
      Обычно это встречи с докладами по 30 минут, но бывают разные форматы.
      Встречаемся обычно в пространствах в центре города.
    </p>

    <p>
      Если хотите <strong>выступить с докладом</strong>, подавайте заявку через <a href='https://goo.gl/nKg4YT'>форму</a>.
    </p>

    <p>
      Иногда мы проводим дринкапы: встречи в барах без докладов,
      просто чтобы пообщаться друг с другом, познакомиться,
      поговорить о наболевшем.
    </p>

    <p>
      Еще по четвергам теперь бывают фронтенд-завтраки в центре города.
    </p>

    <p>
      Чтобы следить за новыми событиями сообщества,
      подписывайтесь на <a href='https://vk.com/spb_frontend'>группу ВКонтакте</a>,
      <a href='https://twitter.com/spb_frontend'>Твиттер</a> или <a href='https://t.me/spb_frontend'>Телеграм канал</a>.
    </p>

    <p>
      Еще у нас есть <a href='https://spb-frontend.slack.com/'>Слак-чат</a> для свободного общения на фронт-темы.
      Вопросы приветствуются.
      Получить инвайт в чат можно <a href='http://slack.spb-frontend.ru/'>на специальной странице</a>.
    </p>

    <p>
      Если хотите предложить вакансию, то это можно сделать только
      в канале <a href='https://spb-frontend.slack.com/messages/jobs-list/'>#jobs-list</a> нашего Слак-чата.
    </p>

    <p>
      Если хотите предложить спонсорство или площадку (от 100 человек),
      пишите нам на почту <a href='mailto:hi@spb-frontend.ru'>hi@spb-frontend.ru</a>.
    </p>

    <Helmet
      meta={[
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
          content: 'https://ucarecdn.com/bcedcf3c-77c7-4693-8888-7e5645185882/-/preview/-/resize/1200x/-/crop/1200x630/0,300/spb_frontend_social.png',
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
      ]} />
  </div>

export default Index
