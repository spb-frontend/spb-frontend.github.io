import Link from 'next/link';
import React from 'react';
import { BlockTitle } from '@/components//BlockTitle/BlockTitle';
import { ContentBlock } from '@/components/ContentBlock/ContentBlock';
import { EMAIL, TELEGRAM, TELEGRAM_CHAT, TWITTER } from '@/constants/urls';
import breakfastIcon from './icons/breakfast.svg';
import drinkupIcon from './icons/drinkup.svg';
import mailIcon from './icons/mail.svg';
import partnerIcon from './icons/partner.svg';
import shareIcon from './icons/share.svg';
import tgIcon from './icons/tg.svg';
import { Card, CardsWrapper, Container, DetailedInfo, Icon } from './styled';

export const BlockAbout = () => (
  <Container id="about">
    <ContentBlock>
      <BlockTitle>О нас</BlockTitle>

      <DetailedInfo>
        <p>
            Привет! Мы — <strong>SPB Frontend</strong>, сообщество{' '}
          <dfn
            title={
              'Фронтенд (англ. frontend) — интерфейс сайтов и веб-приложений в контексте веб-разработки. ' +
                'В общем случае фронтенд это клиентская часть программного обеспечения в модели «клиент — сервер». '
            }
          >
              фронтенд-разработчиков
          </dfn>{' '}
            в Санкт-Петербурге. Мы объединяем специалистов, чтобы говорить о фронтенде, веб-разработке и об IT в
            целом. Мы помогаем новичкам и профессионалам обмениваться опытом, узнавать новое, устанавливать связи в
            профессиональной среде и получать вдохновение для своих достижений.
        </p>

        <p>
            С 2014-го года мы проводим{' '}
          <dfn
            title={
              'Митап (англ. meet up — встречаться) — неформальная встреча людей и сообществ со схожими ' +
                'интересами, хобби и профессиями для обсуждения общих вопросов и обмена навыками и опытом'
            }
          >
              митапы
          </dfn>
            , где специалисты разного уровня рассказывают о своём опыте. Мы открыты для всех желающих, следите за
            нашими новостями в <a href={TELEGRAM}>Telegram</a> и{' '}
          <a href={TWITTER}>Twitter</a>, чтобы не пропустить анонсы предстоящих событий.
        </p>
      </DetailedInfo>

      <CardsWrapper>
        <Card>
          <Icon src={mailIcon} alt="Email icon" />
          <span>Если хотите <strong>выступить с докладом</strong>, напишите письмо на <Link href={`mailto:${EMAIL}`}>{EMAIL}</Link>.</span>
        </Card>

        <Card>
          <Icon src={breakfastIcon} alt="Breakfast icon" />
          <span>Еще по четвергам теперь бывают фронтенд-завтраки в центре города.</span>
        </Card>

        <Card>
          <Icon src={tgIcon} alt="Telegram icon" />
          <span>Также, у нас есть Телеграм-чат, где мы общаемся и задаём вопросы: <Link href={TELEGRAM_CHAT} target="_blank">SPB&nbsp;Frontend</Link>.</span>
        </Card>

        <Card>
          <Icon src={drinkupIcon} alt="Drinkup icon" />
          <span>Иногда мы проводим дринкапы: встречи в барах без докладов, просто чтобы пообщаться друг с другом, познакомиться, поговорить о наболевшем.</span>
        </Card>

        <Card>
          <Icon src={shareIcon} alt="Share icon" />
          <span>Чтобы следить за новыми событиями сообщества, подписывайтесь на <Link href={TELEGRAM} target="_blank">Телеграм канал</Link> или <Link href={TWITTER} target="_blank">Твиттер</Link>.</span>
        </Card>

        <Card>
          <Icon src={partnerIcon} alt="Partner icon" />
          <span>Если хотите предложить спонсорство или площадку (от 100 человек), пишите нам на почту <Link href={`mailto:${EMAIL}`}>{EMAIL}</Link>.</span>
        </Card>
      </CardsWrapper>
    </ContentBlock>
  </Container>
);
