import { FaMeetup } from 'react-icons/fa';
import { GiPublicSpeaker } from 'react-icons/gi';
import { SPEAKER_FORM } from '@/constants/urls';

export const navigation = [
  {
    href: '/meetups',
    title: 'Митапы',
    target: '',
    rel: '',
    withIcon: false,
    Icon: FaMeetup
  },
  {
    href: '/people',
    title: 'Люди',
    target: '',
    rel: '',
    withIcon: false,
    Icon: FaMeetup
  },
  {
    href: SPEAKER_FORM,
    title: 'Стать спикером',
    target: '_blank',
    rel: 'noreferrer noopener nofollow',
    withIcon: true,
    Icon: GiPublicSpeaker,
  },
];
