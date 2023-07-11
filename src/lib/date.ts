export const months = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'ноября',
  'декабря',
];

interface FormattedDateObject {
  day: number;
  month: string;
  year: number;
}

export const formatDate = (timestamp: Date): FormattedDateObject => {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return { day, month, year};
};
