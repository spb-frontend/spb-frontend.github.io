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
  monthName: string;
  year: number;
  time: string;
}

export const formatDate = (timestamp: Date): FormattedDateObject => {
  const date = new Date(timestamp);
  const day = date.getDate();
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();

  const time = date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0');

  return { day, monthName, year, time };
};
